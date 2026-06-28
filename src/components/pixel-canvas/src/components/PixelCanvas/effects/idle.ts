import { IDLE } from "../constants";
import type { EffectContext, PixelEffect } from "./base";
import type { PixelBuffer } from "../renderer/buffer";

export class IdleEffect implements PixelEffect {
  readonly name = "idle" as const;
  readonly priority = 0;
  enabled = true;

  update(buffer: PixelBuffer, { time }: EffectContext) {
    const t = time * 0.001;

    const {
      count,
      x,
      y,
      coverage,
      opacity,
      scale,
      radius,
    } = buffer;

    const baseRadius = Math.min(buffer.grid.cellSize * 0.28, 4);

    for (let i = 0; i < count; i++) {
      const c = coverage[i];

      const nx = x[i] * 0.010;
      const ny = y[i] * 0.010;

      const waveA = Math.sin(nx + t * 0.22);
      const waveB = Math.cos(ny - t * 0.17);
      const waveC = Math.sin((nx + ny) * 0.55 + t * 0.12);

      const motion = (
        waveA * 0.45 +
        waveB * 0.35 +
        waveC * 0.20
      );

      // Background always alive
      const strength = 0.35 + c * 0.65;

      opacity[i] += IDLE.baseOpacity + motion * IDLE.amplitude * strength;
      scale[i] += motion * 0.010 * strength;
      radius[i] = baseRadius + motion * 0.18 * strength;
    }
  }
}