"use client";

import { useEffect, useRef } from "react";

export interface FrameContext {
  time: number;
  delta: number;
  elapsed: number;
}

interface AnimationLoopOptions {
  enabled?: boolean;
  maxDelta?: number;
}

export function useAnimationLoop(
  callback: (ctx: FrameContext) => void,
  { enabled = true, maxDelta = 32 }: AnimationLoopOptions = {},
) {
  const callbackRef = useRef(callback);
  const frameRef = useRef<number | null>(null);

  callbackRef.current = callback;

  useEffect(() => {
    if (!enabled) return;

    let start = 0;
    let previous = 0;

    const loop = (time: number) => {
      if (start === 0) {
        start = time;
        previous = time;
      }

      callbackRef.current({
        time,
        delta: Math.min(time - previous, maxDelta),
        elapsed: time - start,
      });

      previous = time;
      frameRef.current = requestAnimationFrame(loop);
    };

    frameRef.current = requestAnimationFrame(loop);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [enabled, maxDelta]);
}