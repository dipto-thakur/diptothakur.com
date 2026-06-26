import { blogPosts, getPostBySlug } from '@/content/blog';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/components/ui/link';
import { Separator } from '@/components/ui/separator';
import { formatDateLong } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock } from 'lucide-react';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,

    openGraph: {
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Lightweight markdown parsing
  const lines = post.content.split('\n');

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">

      {/* Back */}
      <Link
        href="/blog"
        variant="muted"
        showExternalIcon={false}
        className="
          group
          mb-10
          inline-flex
          items-center
          text-sm
          text-zinc-500
          transition-colors
          hover:text-zinc-900
          dark:text-zinc-400
          dark:hover:text-zinc-100
        "
      >
        <ArrowLeft
          size={14}
          aria-hidden="true"
          className="
            mr-1
            transition-transform
            duration-200
            group-hover:-translate-x-0.5
          "
        />

        Writing
      </Link>

      <article>

        {/* Editorial Hero */}
        <header className="max-w-3xl">

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
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

          {/* Publication Label */}
          <p
            className="
              mt-6
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

          {/* Title */}
          <h1
            className="
              mt-3
              text-4xl
              font-semibold
              leading-tight
              tracking-[-0.04em]
              text-zinc-900
              dark:text-zinc-100
              sm:text-5xl
            "
          >
            {post.title}
          </h1>

          {/* Excerpt */}
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
            {post.excerpt}
          </p>

          {/* Metadata */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-x-8
              gap-y-4
              text-sm
            "
          >

            {/* Author */}
            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.12em]
                  text-zinc-400
                  dark:text-zinc-500
                "
              >
                Author
              </p>

              <p
                className="
                  mt-1
                  font-medium
                  text-zinc-900
                  dark:text-zinc-100
                "
              >
                {post.author}
              </p>
            </div>

            {/* Published */}
            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.12em]
                  text-zinc-400
                  dark:text-zinc-500
                "
              >
                Published
              </p>

              <time
                dateTime={post.publishedAt}
                className="
                  mt-1
                  block
                  font-medium
                  text-zinc-900
                  dark:text-zinc-100
                "
              >
                {formatDateLong(post.publishedAt)}
              </time>
            </div>

            {/* Reading Time */}
            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.12em]
                  text-zinc-400
                  dark:text-zinc-500
                "
              >
                Reading Time
              </p>

              <div
                className="
                  mt-1
                  flex
                  items-center
                  gap-1.5
                  font-medium
                  text-zinc-900
                  dark:text-zinc-100
                "
              >
                <Clock size={13} aria-hidden="true" />
                {post.readingTime} min read
              </div>
            </div>

          </div>

        </header>

        <Separator className="my-14" />
                {/* Article Body */}
                <div
          className="
            mx-auto
            max-w-3xl
            space-y-6
          "
        >
          {lines.map((line, i) => {
            const text = line.trim();

            if (!text) {
              return null;
            }

            /* Ignore title from markdown */
            if (text.startsWith('# ')) {
              return null;
            }

            /* H2 */
            if (text.startsWith('## ')) {
              return (
                <section key={i} className="pt-10">
                  <h2
                    className="
                      text-2xl
                      font-semibold
                      tracking-tight
                      text-zinc-900
                      dark:text-zinc-100
                    "
                  >
                    {text.replace('## ', '')}
                  </h2>
                </section>
              );
            }

            /* H3 */
            if (text.startsWith('### ')) {
              return (
                <h3
                  key={i}
                  className="
                    pt-6
                    text-lg
                    font-semibold
                    text-zinc-900
                    dark:text-zinc-100
                  "
                >
                  {text.replace('### ', '')}
                </h3>
              );
            }

            /* Blockquote */
            if (text.startsWith('> ')) {
              return (
                <blockquote
                  key={i}
                  className="
                    my-8
                    border-l-2
                    border-zinc-300
                    pl-5
                    text-lg
                    italic
                    leading-8
                    text-zinc-600
                    dark:border-zinc-700
                    dark:text-zinc-400
                  "
                >
                  {text.replace('> ', '')}
                </blockquote>
              );
            }

            /* Code fences */
            if (text.startsWith('```')) {
              return null;
            }

            /* Strong standalone */
            if (
              text.startsWith('**') &&
              text.endsWith('**')
            ) {
              return (
                <p
                  key={i}
                  className="
                    text-lg
                    font-medium
                    leading-8
                    text-zinc-900
                    dark:text-zinc-100
                  "
                >
                  {text.replace(/\*\*/g, '')}
                </p>
              );
            }

            /* Lists */
            if (
              text.startsWith('- ') ||
              text.startsWith('* ')
            ) {
              return (
                <div
                  key={i}
                  className="
                    flex
                    gap-4
                    text-[15px]
                    leading-8
                    text-zinc-600
                    dark:text-zinc-400
                  "
                >
                  <span
                    className="
                      mt-3
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-zinc-300
                      dark:bg-zinc-600
                    "
                  />

                  <span>
                    {text.replace(/^[-*]\s/, '')}
                  </span>
                </div>
              );
            }

            /* Default paragraph */
            return (
              <p
                key={i}
                className="
                  text-[16px]
                  leading-8
                  text-zinc-600
                  dark:text-zinc-400
                "
              >
                {text}
              </p>
            );
          })}
        </div>

        <Separator className="my-16" />

        {/* Closing CTA */}
        <footer
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
              Continue Exploring
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
              More thoughts on engineering,
              systems, and building software.
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
              Browse the archive for technical notes,
              production lessons, and ideas collected
              throughout my work.
            </p>

            <div className="mt-6">
              <Link
                href="/blog"
                showExternalIcon={false}
                className="
                  inline-flex
                  items-center
                  rounded-full
                  bg-zinc-900
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  hover:bg-zinc-700
                  dark:bg-zinc-100
                  dark:text-zinc-900
                  dark:hover:bg-zinc-300
                "
              >
                View all articles
              </Link>
            </div>
          </div>
        </footer>

      </article>
    </div>
  );
}