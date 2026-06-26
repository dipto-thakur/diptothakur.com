import { siteConfig } from '@/config/site';

interface ImageTransformOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
  fit?: 'cover' | 'contain';
}

const PLACEHOLDER_BASE = 'https://placehold.co';

/**
 * Generates an optimized ImageKit URL.
 * Falls back to placeholders when no image is provided.
 */
export function getImageUrl(
  path?: string,
  options: ImageTransformOptions = {}
): string {
  if (!path) {
    return getPlaceholder(options);
  }

  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const {
    width,
    height,
    quality = 80,
    format = 'webp',
    fit,
  } = options;

  const transforms: string[] = [
    `q-${quality}`,
    `f-${format}`,
  ];

  if (width) transforms.push(`w-${width}`);
  if (height) transforms.push(`h-${height}`);
  if (fit) transforms.push(`c-${fit}`);

  const base = siteConfig.imagekit.urlEndpoint.replace(/\/$/, '');

  return `${base}/tr:${transforms.join(',')}/${path.replace(/^\//, '')}`;
}

function getPlaceholder(
  {
    width = 800,
    height = 450,
  }: ImageTransformOptions = {}
): string {
  return `${PLACEHOLDER_BASE}/${width}x${height}/1a1a1a/444444?text=Image`;
}

/**
 * Avatar helper.
 */
export function getAvatarUrl(
  path?: string,
  size = 80
): string {
  if (!path) {
    return `${PLACEHOLDER_BASE}/${size}x${size}/1a1a1a/666666?text=?`;
  }

  return getImageUrl(path, {
    width: size,
    height: size,
    quality: 80,
    format: 'webp',
    fit: 'cover',
  });
}

/**
 * Cover/banner helper.
 */
export function getCoverUrl(
  path?: string,
  width = 1200,
  height = 320
): string {
  return getImageUrl(path, {
    width,
    height,
    quality: 85,
    format: 'webp',
    fit: 'cover',
  });
}