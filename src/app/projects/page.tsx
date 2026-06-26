import type { Metadata } from 'next';
import {
  FiFolder,
  FiStar,
  FiGrid,
  FiArrowRight,
} from 'react-icons/fi';

import { projects } from '@/content/projects';
import { ProjectCard } from '@/components/features/projects/project-card';
import { Separator } from '@/components/ui/separator';
import { Link } from '@/components/ui/link';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "A collection of projects I've built, from infrastructure tooling to design systems.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const archive = projects.filter((p) => !p.featured);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Hero */}
      <header className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-zinc-50/80 px-3 py-1 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/60">
          <FiFolder
            size={12}
            className="text-zinc-400 dark:text-zinc-500"
          />

          <span
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-zinc-500
              dark:text-zinc-400
            "
          >
            Portfolio
          </span>
        </div>

        <h1
          className="
            mt-5
            text-4xl
            font-semibold
            tracking-[-0.05em]
            text-zinc-900
            dark:text-zinc-100
            sm:text-5xl
          "
        >
          Projects
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
          Work I can speak to in depth — the decisions made,
          trade-offs considered, constraints navigated,
          and lessons gathered while building products and systems.
        </p>

        {/* Stats */}
        <div
          className="
            mt-10
            grid
            gap-px
            overflow-hidden
            rounded-2xl
            border border-zinc-200/70
            bg-zinc-200/70
            dark:border-zinc-800
            dark:bg-zinc-800
            sm:grid-cols-3
          "
        >
          {[
            {
              icon: FiGrid,
              value: projects.length,
              label: 'Total Projects',
            },
            {
              icon: FiStar,
              value: featured.length,
              label: 'Featured',
            },
            {
              icon: FiFolder,
              value: archive.length,
              label: 'Archive',
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  bg-white/80
                  px-6
                  py-5
                  backdrop-blur-sm
                  dark:bg-zinc-950/80
                "
              >
                <div className="flex items-center gap-2">
                  <Icon
                    size={14}
                    className="text-zinc-400 dark:text-zinc-500"
                  />

                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-[0.14em]
                      text-zinc-400
                      dark:text-zinc-500
                    "
                  >
                    {item.label}
                  </span>
                </div>

                <p
                  className="
                    mt-3
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-zinc-900
                    dark:text-zinc-100
                  "
                >
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </header>

      {featured.length > 0 && (
        <>
          <Separator className="my-16" />

          {/* Featured */}
          <section aria-labelledby="featured-heading">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
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
                  Selected Work
                </p>

                <h2
                  id="featured-heading"
                  className="
                    mt-2
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-zinc-900
                    dark:text-zinc-100
                  "
                >
                  Featured Projects
                </h2>

                <p
                  className="
                    mt-2
                    max-w-2xl
                    text-sm
                    leading-7
                    text-zinc-600
                    dark:text-zinc-400
                  "
                >
                  Projects that best represent my approach
                  to engineering, problem solving,
                  and execution.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {featured.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          </section>
        </>
      )}

      {archive.length > 0 && (
        <>
          <Separator className="my-16" />

          {/* Archive */}
          <section aria-labelledby="archive-heading">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
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
                  More Work
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
                  Project Archive
                </h2>

                <p
                  className="
                    mt-2
                    max-w-2xl
                    text-sm
                    leading-7
                    text-zinc-600
                    dark:text-zinc-400
                  "
                >
                  Experiments, client work,
                  side projects, and smaller initiatives
                  that contributed to my growth as an engineer.
                </p>
              </div>

              <Link
                href="/contact"
                variant="muted"
                showExternalIcon={false}
                className="hidden shrink-0 sm:inline-flex"
              >
                Let's build something

                <FiArrowRight size={14} />
              </Link>
            </div>

            <div className="space-y-3">
              {archive.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  variant="compact"
                />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}