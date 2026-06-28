/* Easing */

export const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;
export const easeInCubic = (t: number) => t ** 3;

export const easeOutExpo = (t: number) =>
  t >= 1 ? 1 : 1 - 2 ** (-10 * t);

export const easeInExpo = (t: number) =>
  t <= 0 ? 0 : 2 ** (10 * t - 10);

export const smoothstep = (t: number) => {
  t = clamp01(t);
  return t * t * (3 - 2 * t);
};

export const smootherstep = (t: number) => {
  t = clamp01(t);
  return t * t * t * (t * (t * 6 - 15) + 10);
};

/* Math */

export const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);

export const clamp = (v: number, min = 0, max = 1) =>
  Math.min(Math.max(v, min), max);

export const lerp = (a: number, b: number, t: number) =>
  a + (b - a) * t;

export const gaussian = (x: number, sigma: number) =>
  Math.exp(-(x * x) / (2 * sigma * sigma));

export const pulse = (time: number, speed = 1) =>
  0.5 + 0.5 * Math.sin(time * speed);

export const damp = (
  current: number,
  target: number,
  lambda: number,
  delta: number,
) => lerp(current, target, 1 - Math.exp(-lambda * delta));