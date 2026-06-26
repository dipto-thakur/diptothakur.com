import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'muted';
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex
        items-center
        rounded-full
        px-2.5
        py-1
        text-[11px]
        font-medium
        tracking-[-0.01em]
        whitespace-nowrap
        transition-colors
        `,
        {
          // Primary metadata
          'bg-zinc-100/80 text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300':
            variant === 'default',

          // Technical labels
          'border border-zinc-200 bg-transparent text-zinc-600 dark:border-zinc-700 dark:text-zinc-400':
            variant === 'outline',

          // Secondary topics
          'bg-zinc-50 text-zinc-500 dark:bg-zinc-900/60 dark:text-zinc-500':
            variant === 'muted',
        },
        className
      )}
    >
      {children}
    </span>
  );
}