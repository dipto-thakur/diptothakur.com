import type { BlogPost } from '@/types';
import { Link } from '@/components/ui/link';
import { formatDateLong, timeAgo } from '@/lib/utils';
import { Clock, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'compact';
  className?: string;
}

export function BlogCard({ post, variant = 'default', className }: BlogCardProps) {

  /* ── Compact ─────────────────────────────────────────────────── */
  if (variant === 'compact') {
    return (
      <article className={cn('group py-4', className)}>
        <Link href={`/blog/${post.slug}`} showExternalIcon={false} className="block">

          <time
            dateTime={post.publishedAt}
            className="text-[10px] uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500 sm:text-xs sm:tracking-[0.12em]"
          >
            {formatDateLong(post.publishedAt)}
          </time>

          <h3 className="mt-1.5 text-[15px] font-medium leading-snug tracking-[-0.01em] text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300 sm:mt-2 sm:text-base">
            {post.title}
          </h3>

          <p className="mt-1.5 line-clamp-2 text-[13px] leading-6 text-zinc-500 dark:text-zinc-400 sm:mt-2 sm:text-sm">
            {post.excerpt}
          </p>

        </Link>
      </article>
    );
  }

  /* ── Default / Editorial ─────────────────────────────────────── */
  return (
    <article className={cn('group py-6 transition-colors sm:py-8', className)}>
      <Link href={`/blog/${post.slug}`} showExternalIcon={false} className="block">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-zinc-400 dark:text-zinc-500 sm:gap-x-5 sm:text-xs">
          <time dateTime={post.publishedAt}>
            {formatDateLong(post.publishedAt)}
          </time>

          {/* timeAgo hidden on mobile — saves row width */}
          <span className="hidden sm:inline">{timeAgo(post.publishedAt)}</span>

          <span className="flex items-center gap-1">
            <Clock size={11} className="sm:hidden" />
            <Clock size={12} className="hidden sm:inline" />
            <span>{post.readingTime} min</span>
          </span>
        </div>

        {/* Title + arrow */}
        <div className="mt-3 flex items-start justify-between gap-4 sm:mt-4 sm:gap-6">
          <h2 className="text-[1.2rem] font-semibold leading-tight tracking-[-0.025em] text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300 sm:text-2xl sm:tracking-tight">
            {post.title}
          </h2>

          <ArrowUpRight
            size={16}
            className="mt-0.5 shrink-0 text-zinc-300 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 dark:text-zinc-600 sm:mt-1 sm:size-[18px]"
          />
        </div>

        {/* Excerpt */}
        <p className="mt-3 text-[13.5px] leading-6 text-zinc-600 line-clamp-3 dark:text-zinc-400 sm:mt-4 sm:max-w-3xl sm:text-[15px] sm:leading-7 sm:line-clamp-none">
          {post.excerpt}
        </p>

        {/* Tags — scrollable single row on mobile */}
        {post.tags.length > 0 && (
          <div className="mt-4 flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none sm:mt-5 sm:flex-wrap sm:gap-2 sm:overflow-visible sm:pb-0">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="shrink-0 rounded-full border border-zinc-200/80 px-2 py-0.5 text-[10px] font-medium text-zinc-500 dark:border-zinc-700/80 dark:text-zinc-400 sm:px-2.5 sm:py-1 sm:text-[11px]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

      </Link>

      {/* Divider */}
      <div className="mt-6 h-px bg-zinc-100 dark:bg-zinc-800 sm:mt-8" />
    </article>
  );
}