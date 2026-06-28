export { clamp, clamp01, gaussian, lerp } from "./animation";

export const distanceSquared = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return dx * dx + dy * dy;
};

export const distance = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
) => Math.hypot(x2 - x1, y2 - y1);

export const pixelIndex = (
  row: number,
  col: number,
  cols: number,
) => row * cols + col;

export function roundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  const radius = Math.min(r, w * 0.5, h * 0.5);

  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

export const deviceScale = () =>
  typeof window === "undefined"
    ? 1
    : Math.max(window.devicePixelRatio || 1, 1);