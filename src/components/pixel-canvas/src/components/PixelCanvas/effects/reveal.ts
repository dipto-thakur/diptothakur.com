import { REVEAL } from "../constants";
import { clamp01, easeInCubic, easeOutCubic } from "../animation";
import type { PixelBuffer } from "../renderer/buffer";
import type { EffectContext, PixelEffect } from "./base";

type Phase = "idle" | "reveal" | "hold" | "dissolve";

export class RevealEffect implements PixelEffect {
  readonly name = "reveal" as const;
  readonly priority = 30;
  enabled = true;

  private phase: Phase = "idle";
  private phaseStart = 0;
  private delayCache = new Float32Array(0);

  reset() {
    this.phase = "idle";
    this.phaseStart = 0;
  }

  update(buffer: PixelBuffer, { time, pointer }: EffectContext) {
    if (this.phase === "idle" && pointer.inside) {
      this.phase = "reveal";
      this.phaseStart = time;
      this.computeDelays(buffer, pointer.x, pointer.y);
    }

    if (this.phase === "hold" && !pointer.inside) {
      this.phase = "dissolve";
      this.phaseStart = time;
    }

    switch (this.phase) {
      case "reveal":
        this.reveal(buffer, time);
        break;

      case "hold":
        this.hold(buffer, time);
        break;

      case "dissolve":
        this.dissolve(buffer, time);
        break;
    }
  }

  private computeDelays(buffer: PixelBuffer, px: number, py: number) {
    const { count, x, y, grid } = buffer;

    if (this.delayCache.length !== count) {
      this.delayCache = new Float32Array(count);
    }

    const half = grid.cellSize * 0.5;
    const maxDist = Math.hypot(grid.gridWidth, grid.gridHeight);

    for (let i = 0; i < count; i++) {
      const dx = x[i] + half - px;
      const dy = y[i] + half - py;

      this.delayCache[i] =
        Math.pow(Math.hypot(dx, dy) / maxDist, 0.9) *
        REVEAL.stagger;
    }
  }

  private reveal(buffer: PixelBuffer, time: number) {
    const elapsed = time - this.phaseStart;

    const {
      count,
      coverage,
      opacity,
      scale,
      lift,
    } = buffer;

    for (let i = 0; i < count; i++) {
      const c = coverage[i];
      if (c <= 0.01) continue;

      const t = clamp01(
        (elapsed - this.delayCache[i]) /
        REVEAL.duration,
      );

      const e = easeOutCubic(t);

      opacity[i] = Math.max(opacity[i], e * REVEAL.opacity * c);
      scale[i] = Math.max(scale[i], 1 + e * REVEAL.scale);
      lift[i] = Math.max(lift[i], e * REVEAL.lift);
    }

    if (elapsed >= REVEAL.duration + REVEAL.stagger) {
      this.phase = "hold";
      this.phaseStart = time;
    }
  }

  private hold(buffer: PixelBuffer, time: number) {
    const {
      count,
      coverage,
      opacity,
      scale,
      lift,
    } = buffer;

    for (let i = 0; i < count; i++) {
      const c = coverage[i];
      if (c <= 0.01) continue;

      const breathe = Math.sin(time * 0.0012 + i * 0.04) * 0.01;

      opacity[i] = Math.max(opacity[i], (0.96 + breathe) * c);
      scale[i] = Math.max(scale[i], 1.02 + breathe * 0.15);
      lift[i] = Math.max(lift[i], 1.4);
    }

    if (time - this.phaseStart >= REVEAL.hold) {
      this.phase = "dissolve";
      this.phaseStart = time;
    }
  }

  private dissolve(buffer: PixelBuffer, time: number) {
    const fade = 1 - easeInCubic(
      clamp01((time - this.phaseStart) / REVEAL.dissolve),
    );

    const {
      count,
      coverage,
      opacity,
      scale,
      lift,
    } = buffer;

    for (let i = 0; i < count; i++) {
      const c = coverage[i];
      if (c <= 0.01) continue;

      opacity[i] = Math.max(opacity[i], fade * c);
      scale[i] = Math.max(scale[i], 1 + fade * 0.03);
      lift[i] = Math.max(lift[i], fade);
    }

    if (fade <= 0.001) {
      this.phase = "idle";
    }
  }
}