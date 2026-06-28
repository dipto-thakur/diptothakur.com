import { RIPPLE } from "../constants";
import { smoothstep } from "../animation";
import type { PixelBuffer } from "../renderer/buffer";
import type { EffectContext, PixelEffect } from "./base";

export class RippleEffect implements PixelEffect {
  readonly name = "ripple" as const;
  readonly priority = 20;
  enabled = true;

  update(buffer: PixelBuffer, { pointer }: EffectContext) {
    if (!pointer.inside) return;

    const {
      count,
      x,
      y,
      coverage,
      opacity,
      scale,
      lift,
      grid,
    } = buffer;

    const half = grid.cellSize * 0.5;

    const radius =
      RIPPLE.radius +
      Math.hypot(pointer.vx, pointer.vy) *
      RIPPLE.velocityMultiplier;

    for (let i = 0; i < count; i++) {
      const dx = x[i] + half - pointer.x;
      const dy = y[i] + half - pointer.y;

      const dist = Math.hypot(dx, dy);
      if (dist >= radius) continue;

      const influence = smoothstep(1 - dist / radius);

      // Entire surface reacts, text reacts more.
      const strength = 0.35 + coverage[i] * 0.65;

      opacity[i] = Math.max(
        opacity[i],
        influence * RIPPLE.opacity * strength,
      );

      scale[i] = Math.max(
        scale[i],
        1 + influence * RIPPLE.scale * strength,
      );

      lift[i] = Math.max(
        lift[i],
        influence * RIPPLE.lift * strength,
      );
    }
  }
}