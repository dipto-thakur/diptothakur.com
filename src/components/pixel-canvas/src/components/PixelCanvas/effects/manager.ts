import type { PixelBuffer } from "../renderer/buffer";
import type { EffectContext, EffectName, PixelEffect } from "./base";

export class EffectManager {
  private readonly effects: PixelEffect[] = [];

  add(effect: PixelEffect): void {
    const i = this.effects.findIndex(e => e.name === effect.name);

    if (i >= 0) {
      this.effects[i] = effect;
    } else {
      this.effects.push(effect);
    }

    this.effects.sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
  }

  remove(name: EffectName): void {
    const i = this.effects.findIndex(e => e.name === name);
    if (i >= 0) this.effects.splice(i, 1);
  }

  get(name: EffectName): PixelEffect | undefined {
    return this.effects.find(e => e.name === name);
  }

  clear(): void {
    this.effects.length = 0;
  }

  reset(): void {
    for (const effect of this.effects) effect.reset?.();
  }

  update(buffer: PixelBuffer, context: EffectContext): void {
    buffer.reset();

    for (const effect of this.effects) {
      if (!effect.enabled) continue;
      effect.update(buffer, context);
    }
  }
}