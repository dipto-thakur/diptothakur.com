import type { PointerState } from "../types";
import type { PixelBuffer } from "../renderer/buffer";

export type EffectName =
  | "idle"
  | "shimmer"
  | "ripple"
  | "reveal";

export interface EffectContext {
  readonly time: number;
  readonly delta: number;
  readonly pointer: PointerState;
}

export interface PixelEffect {
  /** Stable identifier */
  readonly name: EffectName;

  /** Whether this effect participates in the update loop */
  enabled: boolean;

  /** Optional execution priority (lower runs first) */
  readonly priority?: number;

  /** Mutates pixel state in-place */
  update(
    buffer: Readonly<PixelBuffer>,
    context: EffectContext
  ): void;

  /** Clears internal effect state */
  reset?(): void;
}