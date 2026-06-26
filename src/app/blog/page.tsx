import { blogPosts } from '@/content/blog';
import { BlogCard } from '@/components/features/blog/blog-card';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Technical writing on engineering, systems design, and lessons from production.',
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
  );

  const latestYear =
    sorted.length > 0
      ? new Date(sorted[0].publishedAt).getFullYear()
      : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">

      {/* Hero */}
      <header className="max-w-3xl">

        <p
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.16em]
            text-zinc-400
            dark:text-zinc-500
          "
        >
          Publication
        </p>

        <h1
          className="
            mt-3
            text-4xl
            font-semibold
            tracking-[-0.04em]
            text-zinc-900
            dark:text-zinc-100
            sm:text-5xl
          "
        >
          Writing on software,
          systems, and craft.
        </h1>

        <p
          className="
            mt-6
            max-w-2xl
            text-[16px]
            leading-8
            text-zinc-600
            dark:text-zinc-400
          "
        >
          Technical notes, engineering essays,
          lessons from production, and reflections
          gathered while building software.
        </p>

      </header>

      {/* Stats */}
      <div
        className="
          mt-10
          flex
          flex-wrap
          gap-x-10
          gap-y-5
        "
      >
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-500">
            Articles
          </p>

          <p className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            {sorted.length}
          </p>
        </div>

        {latestYear && (
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-zinc-400 dark:text-zinc-500">
              Latest
            </p>

            <p className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              {latestYear}
            </p>
          </div>
        )}
      </div>

      <Separator className="my-12" />

      {/* Editorial Note */}
      <section
        className="
          rounded-3xl
          bg-zinc-50
          px-6
          py-8
          dark:bg-zinc-900/60
        "
      >
        <div className="max-w-2xl">

          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.16em]
              text-zinc-400
              dark:text-zinc-500
            "
          >
            Editorial Note
          </p>

          <h2
            className="
              mt-3
              text-xl
              font-semibold
              tracking-tight
              text-zinc-900
              dark:text-zinc-100
            "
          >
            Ideas worth documenting.
          </h2>

          <p
            className="
              mt-2
              text-sm
              leading-7
              text-zinc-600
              dark:text-zinc-400
            "
          >
            I write to clarify thinking, document
            trade-offs, and share practical lessons
            that emerge while building products and
            solving real problems.
          </p>

        </div>
      </section>

      {/* Archive */}
      <section
        className="mt-14"
        aria-labelledby="archive-heading"
      >
        <div className="mb-8">

          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-[0.16em]
              text-zinc-400
              dark:text-zinc-500
            "
          >
            Archive
          </p>

          <h2
            id="archive-heading"
            className="
              mt-2
              text-2xl
              font-semibold
              tracking-tight
              text-zinc-900
              dark:text-zinc-100
            "
          >
            All articles
          </h2>

        </div>

        <div className="space-y-5">
          {sorted.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </section>

    </div>
  );
}