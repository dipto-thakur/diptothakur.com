import { roundedRect } from "../utils";
import type { PixelBuffer } from "./buffer";

export class PixelRenderer {
  constructor(private ctx: CanvasRenderingContext2D) {}

  setContext(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  render(buffer: PixelBuffer) {
    const { ctx } = this;
    const { cellSize } = buffer.grid;
    const { count, x, y, coverage, opacity, scale, lift, radius } = buffer;

    this.clear();

    ctx.fillStyle = "#fff";

    for (let i = 0; i < count; i++) {
      const cov = coverage[i];
      if (cov <= 0.001) continue;

      const alpha = Math.min(opacity[i] * cov, 1);
      if (alpha <= 0.003) continue;

      const size = Math.max(cellSize * scale[i], 0.5);
      const px = x[i] + (cellSize - size) * 0.5;
      const py = y[i] + (cellSize - size) * 0.5 - lift[i];

      ctx.globalAlpha = alpha;

      roundedRect(
        ctx,
        px,
        py,
        size,
        size,
        Math.min(radius[i], size * 0.5),
      );

      ctx.fill();
    }

    ctx.globalAlpha = 1;
  }
}