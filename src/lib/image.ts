import { siteConfig } from '@/config/site';

export interface ImageTransformOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
}

const DEFAULT_IMAGE = 'default-image.jpg';

export function getImageUrl(
  path?: string,
  options: ImageTransformOptions = {}
): string {
  const {
    width,
    height,
    quality = 80,
    format = 'webp',
  } = options;

  const imagePath = path || DEFAULT_IMAGE;

  if (/^https?:\/\//i.test(imagePath)) {
    return imagePath;
  }

  const transforms: string[] = [
    `q-${quality}`,
    `f-${format}`,
  ];

  if (width) transforms.push(`w-${width}`);
  if (height) transforms.push(`h-${height}`);

  const base = siteConfig.imagekit.urlEndpoint.replace(/\/$/, '');

  return `${base}/tr:${transforms.join(',')}/${imagePath.replace(
    /^\//,
    ''
  )}`;
}

export function getAvatarUrl(
  path?: string,
  size = 80
): string {
  return getImageUrl(path, {
    width: size,
    height: size,
    quality: 80,
    format: 'webp',
  });
}

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
  });
}