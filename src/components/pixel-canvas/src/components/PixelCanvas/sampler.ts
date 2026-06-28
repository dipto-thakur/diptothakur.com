import { SAMPLER } from "./constants";
import type { GridConfig, SampleResult, TextSamplerOptions } from "./types";

export async function buildCoverageMap(
  grid: GridConfig,
  options: TextSamplerOptions,
): Promise<SampleResult> {
  const coverage = new Float32Array(grid.cols * grid.rows);

  if (typeof document === "undefined") {
    return { coverage, cols: grid.cols, rows: grid.rows };
  }

  if ("fonts" in document) {
    await document.fonts.ready;
  }

  const ss = Math.max(1, Math.round(options.supersample));

  const canvasW = Math.ceil(grid.gridWidth * ss);
  const canvasH = Math.ceil(grid.gridHeight * ss);

  const canvas = document.createElement("canvas");
  canvas.width = canvasW;
  canvas.height = canvasH;

  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  if (!ctx) {
    throw new Error("PixelCanvas: failed to create sampler context.");
  }

  ctx.scale(ss, ss);
  ctx.clearRect(0, 0, grid.gridWidth, grid.gridHeight);

  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const lines = options.text.trim().split("\n");

  const availableWidth = grid.gridWidth * (1 - options.paddingX * 2);
  const availableHeight = grid.gridHeight * (1 - options.paddingY * 2);

  let low = 6;
  let high = Math.floor(availableHeight);
  let fontSize = low;

  while (low <= high) {
    const mid = (low + high) >> 1;

    ctx.font = `${options.fontWeight} ${mid}px ${options.fontFamily}`;

    const widest = Math.max(...lines.map(line => ctx.measureText(line).width));

    const metrics = ctx.measureText(lines[0]);
    const lineHeight =
      metrics.actualBoundingBoxAscent +
      metrics.actualBoundingBoxDescent +
      options.lineHeight;

    const totalHeight =
      lineHeight * lines.length - options.lineHeight;

    if (widest <= availableWidth && totalHeight <= availableHeight) {
      fontSize = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  ctx.font = `${options.fontWeight} ${fontSize}px ${options.fontFamily}`;

  const metrics = ctx.measureText(lines[0]);

  const lineHeight =
    metrics.actualBoundingBoxAscent +
    metrics.actualBoundingBoxDescent +
    options.lineHeight;

  const totalHeight =
    lineHeight * lines.length - options.lineHeight;

  let y =
    (grid.gridHeight - totalHeight) * 0.5 +
    metrics.actualBoundingBoxAscent;

  for (const line of lines) {
    ctx.fillText(line, grid.gridWidth * 0.5, y);
    y += lineHeight;
  }

  const pixels = ctx.getImageData(0, 0, canvasW, canvasH).data;
  const cellPixels = Math.max(1, Math.floor(grid.cellSize * ss));

  for (let row = 0; row < grid.rows; row++) {
    for (let col = 0; col < grid.cols; col++) {
      const startX = Math.floor(col * grid.step * ss);
      const startY = Math.floor(row * grid.step * ss);

      let alpha = 0;
      let samples = 0;

      for (let py = 0; py < cellPixels && startY + py < canvasH; py++) {
        const yy = startY + py;

        for (let px = 0; px < cellPixels && startX + px < canvasW; px++) {
          alpha += pixels[((yy * canvasW + startX + px) << 2) + 3];
          samples++;
        }
      }

      const value = samples ? alpha / (samples * 255) : 0;

      coverage[row * grid.cols + col] =
        value >= SAMPLER.ALPHA_THRESHOLD ? value : 0;
    }
  }

  return {
    coverage,
    cols: grid.cols,
    rows: grid.rows,
  };
}

export const DEFAULT_SAMPLER_OPTIONS: TextSamplerOptions = {
  text: "DIPTO THAKUR",

  fontFamily: 'ui-sans-serif,"Geist","Inter","SF Pro Display","SF Pro Text",system-ui,sans-serif',
  fontWeight: 600,

  letterSpacing: 0,
  lineHeight: 8,

  paddingX: SAMPLER.SAFE_PADDING_X,
  paddingY: SAMPLER.SAFE_PADDING_Y,

  supersample: SAMPLER.SUPERSAMPLE,
};