export interface GridConfig {
  width: number;
  height: number;
  dpr: number;

  cols: number;
  rows: number;

  cellSize: number;
  gap: number;
  step: number;

  gridWidth: number;
  gridHeight: number;

  offsetX: number;
  offsetY: number;
}

export interface TextSamplerOptions {
  text: string;

  fontFamily: string;
  fontWeight: number;

  letterSpacing: number;
  lineHeight: number;

  paddingX: number;
  paddingY: number;

  supersample: number;
}

export interface SampleResult {
  coverage: Float32Array;
  cols: number;
  rows: number;
}

export interface PointerState {
  x: number;
  y: number;

  vx: number;
  vy: number;

  inside: boolean;
}

export interface PixelCanvasProps {
  text?: string;

  height?: number | string;

  className?: string;

  gap?: number;
  radius?: number;

  theme?: {
    background?: string;
    pixel?: string;
    active?: string;
    shimmer?: string;
    border?: string;
  };
}