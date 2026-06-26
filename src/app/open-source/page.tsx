import { Badge } from '@/components/ui/badge';
import { Link } from '@/components/ui/link';

import {
  FiGithub,
  FiStar,
  FiGitBranch,
  FiCode,
  FiArrowUpRight,
  FiShield,
  FiHeart,
  FiBookOpen,
} from 'react-icons/fi';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Source',
  description:
    'Repositories and contributions to the open source ecosystem.',
};

const repos = [
  {
    id: 'oss-1',
    name: 'pg-migrate',
    description:
      'Zero-downtime PostgreSQL schema migration toolkit using shadow tables and dual-write coordination.',
    url: 'https://github.com/placeholder/pg-migrate',
    stars: 124,
    forks: 18,
    language: 'Go',
    topics: ['postgresql', 'migrations', 'database', 'cli'],
  },
  {
    id: 'oss-2',
    name: 'redisq',
    description:
      'Lightweight Redis Streams-based job queue with consumer groups, retries, and Prometheus metrics.',
    url: 'https://github.com/placeholder/redisq',
    stars: 87,
    forks: 9,
    language: 'Go',
    topics: ['redis', 'queue', 'distributed-systems'],
  },
  {
    id: 'oss-3',
    name: 'design-system',
    description:
      'Token-driven React component library built on Radix UI primitives. WCAG AA compliant.',
    url: 'https://github.com/placeholder/design-system',
    stars: 203,
    forks: 41,
    language: 'TypeScript',
    topics: ['react', 'design-system', 'accessibility', 'tailwind'],
  },
];

const contributions = [
  {
    id: 'contrib-1',
    repo: 'tailwindlabs/tailwindcss',
    description:
      'Fixed incorrect CSS variable resolution in the JIT engine under specific nesting conditions.',
    url: 'https://github.com/tailwindlabs/tailwindcss/pull/0000',
    type: 'Bug fix',
  },
  {
    id: 'contrib-2',
    repo: 'radix-ui/primitives',
    description:
      'Improved keyboard navigation documentation for the Combobox component.',
    url: 'https://github.com/radix-ui/primitives/pull/0000',
    type: 'Documentation',
  },
];

export default function OpenSourcePage() {
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
          Open Source
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
          Building in public.
        </h1>

        <p
          className="
            mt-6
            max-w-2xl
            text-[15px]
            leading-8
            text-zinc-600
            dark:text-zinc-400
          "
        >
          I enjoy sharing tools, contributing back to the ecosystem,
          and improving the developer experience through thoughtful,
          maintainable software.
        </p>
      </header>

      {/* Pinned Repositories */}
      <section
        className="mt-14"
        aria-labelledby="repos-heading"
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
            Repositories
          </p>

          <h2
            id="repos-heading"
            className="
              mt-2
              text-2xl
              font-semibold
              tracking-tight
              text-zinc-900
              dark:text-zinc-100
            "
          >
            Pinned work.
          </h2>
        </div>

        <div className="space-y-4">

          {repos.map((repo) => (
            <article
              key={repo.id}
              className="
                rounded-2xl
                border
                border-zinc-100
                bg-white
                p-6
                transition-colors
                hover:border-zinc-200
                dark:border-zinc-800
                dark:bg-zinc-900/40
                dark:hover:border-zinc-700
              "
            >
              <div className="flex flex-col gap-5">

                {/* Header */}
                <div className="flex items-start justify-between gap-4">

                  <div className="min-w-0 flex-1">

                    <Link
                      href={repo.url}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-lg
                        font-medium
                        text-zinc-900
                        dark:text-zinc-100
                      "
                    >
                      <FiGithub
                        size={17}
                        className="text-zinc-400"
                      />

                      <span className="truncate">
                        {repo.name}
                      </span>

                      <FiArrowUpRight
                        size={15}
                        className="text-zinc-400"
                      />
                    </Link>

                    <p
                      className="
                        mt-3
                        max-w-2xl
                        text-sm
                        leading-7
                        text-zinc-600
                        dark:text-zinc-400
                      "
                    >
                      {repo.description}
                    </p>

                  </div>

                  <Badge
                    variant="outline"
                    className="shrink-0"
                  >
                    {repo.language}
                  </Badge>

                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {repo.topics.map((topic) => (
                    <Badge
                      key={topic}
                      variant="muted"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>

                {/* Metadata */}
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    gap-5
                    border-t
                    border-zinc-100
                    pt-4
                    text-sm
                    text-zinc-500
                    dark:border-zinc-800
                    dark:text-zinc-400
                  "
                >
                  <span className="flex items-center gap-1.5">
                    <FiStar size={14} />
                    {repo.stars}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FiGitBranch size={14} />
                    {repo.forks}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FiCode size={14} />
                    {repo.language}
                  </span>
                </div>

              </div>
            </article>
          ))}

        </div>
      </section>
            {/* Selected Contributions */}
            <section
        className="mt-16"
        aria-labelledby="contributions-heading"
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
            Contributions
          </p>

          <h2
            id="contributions-heading"
            className="
              mt-2
              text-2xl
              font-semibold
              tracking-tight
              text-zinc-900
              dark:text-zinc-100
            "
          >
            Giving back.
          </h2>

          <p
            className="
              mt-3
              max-w-2xl
              text-sm
              leading-7
              text-zinc-600
              dark:text-zinc-400
            "
          >
            Small improvements, documentation updates, and fixes to
            the tools I rely on every day.
          </p>
        </div>

        <div className="space-y-4">
          {contributions.map((contribution) => (
            <article
              key={contribution.id}
              className="
                flex
                gap-4
                rounded-2xl
                border
                border-zinc-100
                bg-white
                p-5
                transition-colors
                hover:border-zinc-200
                dark:border-zinc-800
                dark:bg-zinc-900/40
                dark:hover:border-zinc-700
              "
            >
              {/* Timeline Marker */}
              <div
                className="
                  mt-1
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-zinc-100
                  bg-zinc-50
                  text-zinc-500
                  dark:border-zinc-800
                  dark:bg-zinc-900
                  dark:text-zinc-400
                "
              >
                <FiCode size={15} />
              </div>

              <div className="min-w-0 flex-1">

                <div className="flex flex-wrap items-center gap-3">

                  <Link
                    href={contribution.url}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      text-sm
                      font-medium
                      text-zinc-900
                      dark:text-zinc-100
                    "
                  >
                    {contribution.repo}

                    <FiArrowUpRight
                      size={14}
                      className="text-zinc-400"
                    />
                  </Link>

                  <Badge variant="muted">
                    {contribution.type}
                  </Badge>

                </div>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-zinc-600
                    dark:text-zinc-400
                  "
                >
                  {contribution.description}
                </p>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Open Source Principles */}
      <section
        className="mt-16"
        aria-labelledby="principles-heading"
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
            Principles
          </p>

          <h2
            id="principles-heading"
            className="
              mt-2
              text-2xl
              font-semibold
              tracking-tight
              text-zinc-900
              dark:text-zinc-100
            "
          >
            Why open source matters.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">

          <article
            className="
              rounded-2xl
              border
              border-zinc-100
              bg-white
              p-5
              dark:border-zinc-800
              dark:bg-zinc-900/40
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-zinc-50
                text-zinc-500
                dark:bg-zinc-900
                dark:text-zinc-400
              "
            >
              <FiShield size={18} />
            </div>

            <h3
              className="
                mt-4
                text-sm
                font-medium
                text-zinc-900
                dark:text-zinc-100
              "
            >
              MIT Licensed
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-7
                text-zinc-600
                dark:text-zinc-400
              "
            >
              Useful software should be easy to learn from,
              adapt, and build upon.
            </p>
          </article>

          <article
            className="
              rounded-2xl
              border
              border-zinc-100
              bg-white
              p-5
              dark:border-zinc-800
              dark:bg-zinc-900/40
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-zinc-50
                text-zinc-500
                dark:bg-zinc-900
                dark:text-zinc-400
              "
            >
              <FiHeart size={18} />
            </div>

            <h3
              className="
                mt-4
                text-sm
                font-medium
                text-zinc-900
                dark:text-zinc-100
              "
            >
              Community Driven
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-7
                text-zinc-600
                dark:text-zinc-400
              "
            >
              Bug reports, documentation, reviews, and
              discussions improve software together.
            </p>
          </article>

          <article
            className="
              rounded-2xl
              border
              border-zinc-100
              bg-white
              p-5
              dark:border-zinc-800
              dark:bg-zinc-900/40
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-zinc-50
                text-zinc-500
                dark:bg-zinc-900
                dark:text-zinc-400
              "
            >
              <FiBookOpen size={18} />
            </div>

            <h3
              className="
                mt-4
                text-sm
                font-medium
                text-zinc-900
                dark:text-zinc-100
              "
            >
              Learn in Public
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-7
                text-zinc-600
                dark:text-zinc-400
              "
            >
              Sharing processes, successes, and mistakes
              helps others move faster.
            </p>
          </article>

        </div>
      </section>

      {/* GitHub CTA */}
      <section className="mt-16">
        <div
          className="
            rounded-2xl
            border
            border-zinc-100
            bg-zinc-50/50
            px-6
            py-6
            dark:border-zinc-800
            dark:bg-zinc-900/40
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <h2
                className="
                  text-lg
                  font-medium
                  text-zinc-900
                  dark:text-zinc-100
                "
              >
                Explore more on GitHub.
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
                Browse additional repositories,
                experiments, and works in progress.
              </p>
            </div>

            <Link
              href="https://github.com/yourusername"
              showExternalIcon={false}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-zinc-900
                px-4
                py-2
                text-sm
                font-medium
                text-white
                transition-colors
                hover:bg-zinc-800
                dark:bg-zinc-100
                dark:text-zinc-900
                dark:hover:bg-zinc-200
              "
            >
              <FiGithub size={16} />

              GitHub Profile

              <FiArrowUpRight size={14} />
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}