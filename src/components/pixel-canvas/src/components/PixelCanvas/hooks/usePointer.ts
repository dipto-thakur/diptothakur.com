"use client";

import { useCallback, useRef } from "react";
import type { PointerEvent } from "react";
import type { PointerState } from "../types";

const OFFSCREEN = -9999;

export function usePointer() {
  const pointer = useRef<PointerState>({
    x: OFFSCREEN,
    y: OFFSCREEN,
    vx: 0,
    vy: 0,
    inside: false,
  });

  const last = useRef({
    x: OFFSCREEN,
    y: OFFSCREEN,
    time: 0,
  });

  const update = useCallback((e: PointerEvent<HTMLElement>, entering = false) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = performance.now();

    const p = pointer.current;
    const l = last.current;

    if (entering || l.time === 0) {
      p.vx = 0;
      p.vy = 0;
    } else {
      const dt = Math.max(now - l.time, 1);
      p.vx = (x - l.x) / dt * 16.667;
      p.vy = (y - l.y) / dt * 16.667;
    }

    p.x = x;
    p.y = y;
    p.inside = true;

    l.x = x;
    l.y = y;
    l.time = now;
  }, []);

  const onPointerMove = useCallback((e: PointerEvent<HTMLElement>) => update(e), [update]);
  const onPointerEnter = useCallback((e: PointerEvent<HTMLElement>) => update(e, true), [update]);

  const onPointerLeave = useCallback(() => {
    pointer.current.x = OFFSCREEN;
    pointer.current.y = OFFSCREEN;
    pointer.current.vx = 0;
    pointer.current.vy = 0;
    pointer.current.inside = false;

    last.current.time = 0;
  }, []);

  return {
    pointer,
    bind: {
      onPointerMove,
      onPointerEnter,
      onPointerLeave,
    },
  };
}