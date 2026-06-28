import type { GridConfig } from "../types";

export class PixelBuffer {
  readonly count: number;

  readonly x: Float32Array;
  readonly y: Float32Array;
  readonly coverage: Float32Array;
  readonly opacity: Float32Array;
  readonly scale: Float32Array;
  readonly lift: Float32Array;
  readonly radius: Float32Array;

  constructor(
    readonly grid: GridConfig,
    coverage: Float32Array,
  ) {
    this.count = grid.cols * grid.rows;
    this.coverage = coverage;

    this.x = new Float32Array(this.count);
    this.y = new Float32Array(this.count);

    this.opacity = new Float32Array(this.count);
    this.scale = new Float32Array(this.count);
    this.lift = new Float32Array(this.count);
    this.radius = new Float32Array(this.count);

    this.buildLayout();
    this.reset();
  }

  private buildLayout() {
    const { cols, rows, step, cellSize, offsetX, offsetY } = this.grid;
    const radius = Math.min(cellSize * 0.28, 3);

    let i = 0;

    for (let row = 0; row < rows; row++) {
      const y = offsetY + row * step;

      for (let col = 0; col < cols; col++) {
        this.x[i] = offsetX + col * step;
        this.y[i] = y;
        this.radius[i] = radius;
        i++;
      }
    }
  }

  reset() {
    this.opacity.fill(0);
    this.scale.fill(1);
    this.lift.fill(0);
  }
}