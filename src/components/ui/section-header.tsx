import { cn } from '@/lib/utils';
import { Link } from '@/components/ui/link';
import { FiArrowRight } from 'react-icons/fi';

interface SectionHeaderProps {
  title: string;
  description?: string;
  href?: string;
  hrefLabel?: string;
  className?: string;
  id?: string;
}

export function SectionHeader({
  title,
  description,
  href,
  hrefLabel = 'View all',
  className,
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        `
        flex
        flex-col
        gap-4
        sm:flex-row
        sm:items-end
        sm:justify-between
        `,
        className
      )}
    >
      <div className="min-w-0">
        <h2
          id={id}
          className="
            text-[1.375rem]
            font-semibold
            tracking-[-0.03em]
            text-zinc-900
            dark:text-zinc-100
          "
        >
          {title}
        </h2>

        {description && (
          <p
            className="
              mt-2
              max-w-2xl
              text-sm
              leading-7
              tracking-[-0.01em]
              text-zinc-500
              dark:text-zinc-400
            "
          >
            {description}
          </p>
        )}
      </div>

      {href && (
        <Link
          href={href}
          variant="muted"
          showExternalIcon={false}
          className="
            group
            inline-flex
            shrink-0
            items-center
            gap-1.5
            self-start
            text-sm
            font-medium
            tracking-[-0.01em]
            sm:self-end
          "
        >
          <span>{hrefLabel}</span>

          <FiArrowRight
            size={14}
            aria-hidden="true"
            className="
              transition-transform
              duration-200
              ease-out
              group-hover:translate-x-0.5
            "
          />
        </Link>
      )}
    </div>
  );
}