import type { BlogPost } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/components/ui/link';
import { formatDateLong, timeAgo } from '@/lib/utils';
import { Clock, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'compact';
  className?: string;
}

export function BlogCard({
  post,
  variant = 'default',
  className,
}: BlogCardProps) {
  /* Compact variant */
  if (variant === 'compact') {
    return (
      <article
        className={cn(
          'group py-4',
          className
        )}
      >
        <Link
          href={`/blog/${post.slug}`}
          showExternalIcon={false}
          className="block"
        >
          <time
            dateTime={post.publishedAt}
            className="
              text-xs
              uppercase
              tracking-[0.12em]
              text-zinc-400
              dark:text-zinc-500
            "
          >
            {formatDateLong(post.publishedAt)}
          </time>

          <h3
            className="
              mt-2
              text-base
              font-medium
              text-zinc-900
              transition-colors
              group-hover:text-zinc-600
              dark:text-zinc-100
              dark:group-hover:text-zinc-300
            "
          >
            {post.title}
          </h3>

          <p
            className="
              mt-2
              line-clamp-2
              text-sm
              leading-6
              text-zinc-500
              dark:text-zinc-400
            "
          >
            {post.excerpt}
          </p>
        </Link>
      </article>
    );
  }

  /* Editorial Variant */
  return (
    <article
      className={cn(
        `
        group
        py-8
        transition-colors
        `,
        className
      )}
    >
      <Link
        href={`/blog/${post.slug}`}
        showExternalIcon={false}
        className="block"
      >
        {/* Meta */}
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-5
            gap-y-2
            text-xs
            text-zinc-400
            dark:text-zinc-500
          "
        >
          <time dateTime={post.publishedAt}>
            {formatDateLong(post.publishedAt)}
          </time>

          <span>
            {timeAgo(post.publishedAt)}
          </span>

          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readingTime} min read
          </span>
        </div>

        {/* Title */}
        <div className="mt-4 flex items-start justify-between gap-6">
          <h2
            className="
              text-2xl
              font-semibold
              leading-tight
              tracking-tight
              text-zinc-900
              transition-colors
              group-hover:text-zinc-600
              dark:text-zinc-100
              dark:group-hover:text-zinc-300
            "
          >
            {post.title}
          </h2>

          <ArrowUpRight
            size={18}
            className="
              mt-1
              shrink-0
              text-zinc-300
              opacity-0
              transition-all
              duration-200
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
              group-hover:opacity-100
              dark:text-zinc-600
            "
          />
        </div>

        {/* Excerpt */}
        <p
          className="
            mt-4
            max-w-3xl
            text-[15px]
            leading-7
            text-zinc-600
            dark:text-zinc-400
          "
        >
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="
                  rounded-full
                  border-zinc-200
                  px-2.5
                  py-1
                  text-[11px]
                  font-medium
                  text-zinc-500
                  dark:border-zinc-700
                  dark:text-zinc-400
                "
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </Link>

      {/* Divider */}
      <div
        className="
          mt-8
          h-px
          bg-zinc-100
          dark:bg-zinc-800
        "
      />
    </article>
  );
}