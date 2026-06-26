import { cn } from '@/lib/utils';

interface SeparatorProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

export function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
}: SeparatorProps) {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      role={decorative ? 'separator' : undefined}
      aria-hidden={decorative}
      className={cn(
        'relative shrink-0 overflow-hidden',
        isHorizontal ? 'h-px w-full' : 'h-full w-px',
        className
      )}
    >
      <div
        className={cn(
          `
          absolute
          inset-0
          `,
          isHorizontal
            ? `
              bg-gradient-to-r
              from-transparent
              via-zinc-200/90
              to-transparent

              dark:via-zinc-800/90
            `
            : `
              bg-gradient-to-b
              from-transparent
              via-zinc-200/90
              to-transparent

              dark:via-zinc-800/90
            `
        )}
      />

      {/* subtle center highlight */}
      <div
        aria-hidden="true"
        className={cn(
          `
          absolute
          opacity-60
          `,
          isHorizontal
            ? `
              inset-x-1/4
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white/60
              to-transparent

              dark:via-white/5
            `
            : `
              inset-y-1/4
              left-0
              w-px
              bg-gradient-to-b
              from-transparent
              via-white/60
              to-transparent

              dark:via-white/5
            `
        )}
      />
    </div>
  );
}