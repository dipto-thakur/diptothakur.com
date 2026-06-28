export const GRID = {
  MOBILE: 6,
  TABLET: 8,
  DESKTOP: 10,

  GAP: 2,

  MIN_COLS: 20,
  MAX_COLS: 160,

  MIN_ROWS: 8,
  MAX_ROWS: 48,
} as const;

//export const IDLE = {
  //baseOpacity: 0.045,
  //amplitude: 0.08,
//} as const;
export const IDLE = {
  baseOpacity: 0.028,
  amplitude: 0.035,
} as const;

/* export const SHIMMER = {
  speed: 0.018,
  width: 90,
  angle: 0.35,

  opacity: 0.12,
  scale: 0.06,
} as const; */

export const SHIMMER = {
  speed: 0.010,     // slower
  width: 150,       // broader band
  angle: 0.38,

  opacity: 0.045,   // very subtle
  scale: 0.012,
} as const;

/* export const RIPPLE = {
  radius: 110,
  velocityMultiplier: 60,

  opacity: 0.55,
  scale: 0.12,
  lift: 2.5,
} as const; */

export const RIPPLE = {
  radius: 120,
  velocityMultiplier: 45,

  opacity: 0.12,
  scale: 0.05,
  lift: 1.8,
} as const;

/* export const REVEAL = {
  duration: 850,
  hold: 1200,
  dissolve: 550,
  stagger: 220,

  opacity: 1,
  scale: 0.18,
  lift: 3,
} as const;*/

export const REVEAL = {
  duration: 700,
  stagger: 180,
  hold: 1000,
  dissolve: 650,

  opacity: 1,
  scale: 0.08,
  lift: 1.6,
} as const;

export const SAMPLER = {
  SUPERSAMPLE: 3,

  ALPHA_THRESHOLD: 0.08,

  SAFE_PADDING_X: 0.1,
  SAFE_PADDING_Y: 0.18,
} as const;

export const COLORS = {
  BACKGROUND: "#090909",
  PIXEL: "#ffffff",
} as const;