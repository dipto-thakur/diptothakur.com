import { GRID } from "./constants";
import type { GridConfig } from "./types";
import { deviceScale } from "./utils";

const clampInt = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, Math.floor(value)));

export function getCellSize(width: number) {
  if (width < 480) return GRID.MOBILE;
  if (width < 768) return GRID.TABLET;
  return GRID.DESKTOP;
}

export function createGrid(
  width: number,
  height: number,
  dpr = deviceScale(),
  gap = GRID.GAP,
): GridConfig {
  const cellSize = getCellSize(width);
  const step = cellSize + gap;

  const cols = clampInt((width + gap) / step, GRID.MIN_COLS, GRID.MAX_COLS);
  const rows = clampInt((height + gap) / step, GRID.MIN_ROWS, GRID.MAX_ROWS);

  const gridWidth = cols * step - gap;
  const gridHeight = rows * step - gap;

  return {
    width,
    height,

    dpr,

    cellSize,
    gap,
    step,

    cols,
    rows,

    gridWidth,
    gridHeight,

    offsetX: Math.round((width - gridWidth) * 0.5),
    offsetY: Math.round((height - gridHeight) * 0.5),
  };
}

export function resizeCanvas(
  canvas: HTMLCanvasElement,
  grid: GridConfig,
): CanvasRenderingContext2D | null {
  canvas.style.width = `${grid.width}px`;
  canvas.style.height = `${grid.height}px`;

  const width = Math.round(grid.width * grid.dpr);
  const height = Math.round(grid.height * grid.dpr);

  if (canvas.width !== width) canvas.width = width;
  if (canvas.height !== height) canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  ctx.setTransform(grid.dpr, 0, 0, grid.dpr, 0, 0);
  ctx.imageSmoothingEnabled = false;

  return ctx;
}