import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        `
        relative
        overflow-hidden
        rounded-xl

        bg-zinc-100
        dark:bg-zinc-900

        before:absolute
        before:inset-0
        before:-translate-x-full
        before:animate-[skeleton-shimmer_2s_ease-in-out_infinite]

        before:bg-gradient-to-r
        before:from-transparent
        before:via-white/60
        before:to-transparent

        dark:before:via-white/5

        motion-reduce:before:hidden
        `,
        className
      )}
    />
  );
}