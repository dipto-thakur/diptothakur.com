import { SHIMMER } from "../constants";
import { gaussian } from "../animation";
import type { PixelBuffer } from "../renderer/buffer";
import type { EffectContext, PixelEffect } from "./base";

export class ShimmerEffect implements PixelEffect {
  readonly name = "shimmer" as const;
  readonly priority = 10;
  enabled = true;

  update(buffer: PixelBuffer, { time }: EffectContext) {
    const {
      count,
      x,
      y,
      coverage,
      opacity,
      scale,
      grid,
    } = buffer;

    const sweep =
      (time * SHIMMER.speed) %
      (grid.gridWidth + grid.gridHeight * SHIMMER.angle) -
      grid.gridHeight;

    for (let i = 0; i < count; i++) {
      const projection = x[i] + y[i] * SHIMMER.angle;
      const glow = gaussian(projection - sweep, SHIMMER.width);

      if (glow < 0.0001) continue;

      // Background shimmer + stronger text shimmer
      const strength = 0.25 + coverage[i] * 0.75;

      opacity[i] = Math.max(
        opacity[i],
        glow * SHIMMER.opacity * strength,
      );

      scale[i] = Math.max(
        scale[i],
        1 + glow * SHIMMER.scale * strength,
      );
    }
  }
}