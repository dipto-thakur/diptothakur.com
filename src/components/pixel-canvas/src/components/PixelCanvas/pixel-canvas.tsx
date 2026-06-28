"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

import { createGrid, resizeCanvas } from "./grid";
import { buildCoverageMap, DEFAULT_SAMPLER_OPTIONS } from "./sampler";
import { PixelBuffer } from "./renderer/buffer";
import { PixelRenderer } from "./renderer/renderer";

import { EffectManager } from "./effects/manager";
import { IdleEffect } from "./effects/idle";
import { ShimmerEffect } from "./effects/shimmer";
import { RippleEffect } from "./effects/ripple";
import { RevealEffect } from "./effects/reveal";

import { usePointer } from "./hooks/usePointer";
import { useResize } from "./hooks/useResize";
import { useAnimationLoop } from "./hooks/useAnimationLoop";

import { deviceScale } from "./utils";
import type { FrameContext } from "./hooks/useAnimationLoop";
import type { PixelCanvasProps } from "./types";

export function PixelCanvas({
  text = "DIPTO THAKUR",
  height = 220,
  className,
}: PixelCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const rendererRef = useRef<PixelRenderer | null>(null);
  const bufferRef = useRef<PixelBuffer | null>(null);
  const managerRef = useRef<EffectManager | null>(null);

  const readyRef = useRef(false);
  const buildId = useRef(0);

  const { ref: wrapperRef, size } = useResize<HTMLDivElement>();
  const { pointer, bind } = usePointer();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !size.width || !size.height) return;

    const build = ++buildId.current;
    readyRef.current = false;

    const grid = createGrid(size.width, size.height, deviceScale());
    const ctx = resizeCanvas(canvas, grid);

    if (!ctx) return;

    (async () => {
      const { coverage } = await buildCoverageMap(grid, {
        ...DEFAULT_SAMPLER_OPTIONS,
        text,
      });

      if (build !== buildId.current) return;

      const buffer = new PixelBuffer(grid, coverage);
      const renderer = new PixelRenderer(ctx);
      const manager = new EffectManager();

      manager.add(new IdleEffect());
      manager.add(new ShimmerEffect());
      manager.add(new RippleEffect());
      manager.add(new RevealEffect());

      bufferRef.current = buffer;
      rendererRef.current = renderer;
      managerRef.current = manager;

      readyRef.current = true;
    })();

    return () => {
      buildId.current++;
      readyRef.current = false;
    };
  }, [size.width, size.height, text]);

  const frame = useCallback(({ time, delta }: FrameContext) => {
    if (!readyRef.current) return;

    const buffer = bufferRef.current;
    const renderer = rendererRef.current;
    const manager = managerRef.current;

    if (!buffer || !renderer || !manager) return;

    manager.update(buffer, {
      time,
      delta,
      pointer: pointer.current,
    });

    renderer.render(buffer);
  }, [pointer]);

  useAnimationLoop(frame);

  return (
    <div
      ref={wrapperRef}
      {...bind}
      aria-hidden
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-[#090909] select-none touch-none",
        className,
      )}
      style={{ height: typeof height === "number" ? `${height}px` : height }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 size-full"
      />
    </div>
  );
}