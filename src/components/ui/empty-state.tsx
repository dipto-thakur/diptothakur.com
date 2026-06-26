import { cn } from '@/lib/utils';

interface EmptyStateProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function EmptyState({ title, description, children, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-lg border border-dashed border-zinc-200 px-6 py-16 text-center dark:border-zinc-800',
        className
      )}
    >
      <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{title}</h3>
      {description && (
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
      )}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
