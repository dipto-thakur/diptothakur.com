import type { Testimonial } from '@/types';
import { getAvatarUrl } from '@/lib/imagekit';
import { Link } from '@/components/ui/link';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <figure className={cn('w-full', className)}>

      {/* Opening mark — rich serif, decorative */}
      <div
        aria-hidden="true"
        className="mb-2 font-serif text-5xl leading-none tracking-tight text-zinc-200 dark:text-zinc-700 select-none"
        style={{ fontFamily: '"Georgia", "Times New Roman", serif' }}
      >
        &ldquo;
      </div>

      {/* Quote */}
      <blockquote>
        <p
          className="text-[15px] leading-[1.8] text-zinc-700 dark:text-zinc-300 tracking-[0.005em]"
          style={{ fontFamily: '"Georgia", "Times New Roman", serif' }}
        >
          {testimonial.quote}
        </p>
      </blockquote>

      {/* Author */}
{/* Author */}
<figcaption
  className="
    mt-8
    flex
    items-center
    gap-3.5
    border-t
    border-zinc-100/80
    pt-5
    dark:border-zinc-800/80
  "
>
  <div
    className="
      relative
      shrink-0
      overflow-hidden
      rounded-full
      ring-1
      ring-zinc-200/80
      transition-all
      duration-300
      group-hover:ring-zinc-300
      group-hover:shadow-md
      dark:ring-zinc-700/80
      dark:group-hover:ring-zinc-600
    "
  >
    <img
      src={getAvatarUrl(testimonial.avatar, 44)}
      alt={`Photo of ${testimonial.name}`}
      width={44}
      height={44}
      loading="lazy"
      className="
        h-11
        w-11
        object-cover
        transition-transform
        duration-500
        group-hover:scale-[1.04]
      "
    />
  </div>

  <div className="min-w-0 flex-1">
    <div className="flex items-center gap-1.5">
      <cite
        className="
          truncate
          not-italic
          text-[14px]
          font-medium
          tracking-[-0.01em]
          text-zinc-900
          dark:text-zinc-100
        "
      >
        {testimonial.sourceUrl ? (
          <Link
            href={testimonial.sourceUrl}
            showExternalIcon={false}
            className="
              transition-colors
              duration-200
              hover:text-zinc-600
              dark:hover:text-zinc-300
            "
          >
            {testimonial.name}
          </Link>
        ) : (
          testimonial.name
        )}
      </cite>

      {testimonial.verified && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-label="Verified"
          role="img"
          className="
            shrink-0
            text-blue-500
            opacity-90
          "
        >
          <circle
            cx="7"
            cy="7"
            r="7"
            fill="currentColor"
            opacity="0.12"
          />

          <path
            d="M4.4 7.1L6.1 8.9L9.8 5.1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>

    <p
      className="
        mt-1
        flex
        flex-wrap
        items-center
        gap-x-1.5
        text-[11px]
        font-medium
        tracking-[0.08em]
        uppercase
        text-zinc-400
        dark:text-zinc-500
      "
    >
      <span>{testimonial.role}</span>

      {testimonial.organization && (
        <>
          <span className="opacity-30">•</span>
          <span>{testimonial.organization}</span>
        </>
      )}
    </p>
  </div>
</figcaption>

    </figure>
  );
}