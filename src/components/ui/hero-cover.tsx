//import { PixelCanvas } from '@/components/PixelCanvas';
//import { PixelCanvas } from '@/components/pixel-canvas';
import { PixelCanvas } from "@/components/pixel-canvas/src/components/PixelCanvas";
import { siteConfig } from '@/config/site';

export function HeroCover() {
  return (
    <div className="relative overflow-hidden rounded-3xl">

      <PixelCanvas
        text={siteConfig.name.toUpperCase()}
        height={208}   /* 52 * 4 = 208px ≈ h-52 */
        className="sm:!h-[240px]"  /* h-60 override */
      />

      {/* Bottom fade — light and dark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent dark:from-zinc-950/90 dark:via-zinc-950/10 dark:to-transparent"
      />

    </div>
  );
}