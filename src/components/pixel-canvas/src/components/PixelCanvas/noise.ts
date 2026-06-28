const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const fade = (t: number) =>
  t * t * t * (t * (t * 6 - 15) + 10);

const hash = (x: number, y: number) => {
  let h = (x * 374761393 + y * 668265263) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 0xffffffff;
};

export function valueNoise(x: number, y: number) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);

  const xf = x - xi;
  const yf = y - yi;

  const u = fade(xf);
  const v = fade(yf);

  const n00 = hash(xi, yi);
  const n10 = hash(xi + 1, yi);
  const n01 = hash(xi, yi + 1);
  const n11 = hash(xi + 1, yi + 1);

  return lerp(
    lerp(n00, n10, u),
    lerp(n01, n11, u),
    v,
  );
}

export const animatedNoise = (x: number, y: number, time: number) =>
  valueNoise(
    x * 0.02 + time * 0.00008,
    y * 0.02 + time * 0.00006,
  );

export const pixelSeed = (index: number) => hash(index, 97);