import NextLink from 'next/link';
import { cn } from '@/lib/utils';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  showExternalIcon?: boolean;
  variant?: 'default' | 'muted' | 'underline';
}

export function Link({
  href,
  children,
  className,
  external,
  showExternalIcon = true,
  variant = 'default',
}: LinkProps) {
  const isExternal = external ?? (href.startsWith('http') || href.startsWith('mailto'));

  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <NextLink
      href={href}
      className={cn(
        'inline-flex items-center gap-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-1 rounded-sm dark:focus-visible:ring-zinc-100',
        {
          'text-zinc-900 hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-400':
            variant === 'default',
          'text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200':
            variant === 'muted',
          'text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:decoration-zinc-100':
            variant === 'underline',
        },
        className
      )}
      {...externalProps}
    >
      {children}
      {isExternal && showExternalIcon && (
        <ExternalLinkIcon
          size={12}
          className="shrink-0 text-zinc-400"
          aria-hidden="true"
        />
      )}
    </NextLink>
  );
}
