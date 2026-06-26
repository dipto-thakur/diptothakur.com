import { projects, getProjectBySlug } from '@/content/projects';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/components/ui/link';
import { Separator } from '@/components/ui/separator';
import { formatDateRange } from '@/lib/utils';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiGithub,
  FiGlobe,
  FiLayers,
  FiTarget,
  FiAlertTriangle,
  FiFileText,
} from 'react-icons/fi';

import { HiOutlineLightBulb } from 'react-icons/hi';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">

      {/* Back */}
      <Link
        href="/projects"
        variant="muted"
        showExternalIcon={false}
        className="
          group
          mb-12
          inline-flex
          items-center
          gap-1.5
          text-sm
        "
      >
        <FiArrowLeft
          size={14}
          className="
            transition-transform
            duration-200
            group-hover:-translate-x-0.5
          "
        />

        Projects
      </Link>

      <article>

        {/* HERO */}
        <header>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">

            {project.categories.map((category) => (
              <Badge
                key={category}
                variant="muted"
              >
                {category}
              </Badge>
            ))}

            <StatusBadge status={project.status} />

          </div>

{/* Title */}
<div className="mt-6">
  <h1
    className="
      max-w-4xl
      text-4xl
      font-semibold
      tracking-[-0.05em]
      text-zinc-900
      dark:text-zinc-100
      sm:text-5xl
    "
  >
    {project.title}
  </h1>

  <div
    className="
      mt-3
      inline-flex
      items-center
      gap-1.5
      text-[11px]
      font-medium
      uppercase
      tracking-[0.16em]
      text-zinc-400
      dark:text-zinc-500
    "
  >
    <FiFileText
      size={11}
      className="shrink-0"
    />

    Case Study · Architecture · Decisions · Outcomes
  </div>
</div>

          {/* Summary */}
          <p
            className="
              mt-6
              max-w-3xl
              text-[16px]
              leading-8
              text-zinc-600
              dark:text-zinc-400
            "
          >
            {project.summary}
          </p>

          {/* Links */}
          {project.externalLinks.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">

              {project.externalLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-2xl
                    border
                    border-zinc-200/80
                    bg-white/80
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-zinc-700
                    backdrop-blur-sm
                    transition-all
                    duration-200
                    hover:border-zinc-300
                    hover:bg-white

                    dark:border-zinc-800
                    dark:bg-zinc-900/70
                    dark:text-zinc-300
                    dark:hover:border-zinc-700
                    dark:hover:bg-zinc-900
                  "
                >
                  {link.type === 'github' ? (
                    <FiGithub size={15} />
                  ) : (
                    <FiGlobe size={15} />
                  )}

                  {link.label}

                  <FiArrowUpRight size={14} />
                </a>
              ))}

            </div>
          )}

          {/* Snapshot */}
          <div
            className="
              mt-12
              grid
              gap-px
              overflow-hidden
              rounded-3xl
              border
              border-zinc-200/70
              bg-zinc-200/70

              dark:border-zinc-800
              dark:bg-zinc-800

              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            <SnapshotItem
              label="Role"
              value={project.role || '—'}
            />

            <SnapshotItem
              label="Timeline"
              value={formatDateRange(
                project.startDate,
                project.endDate
              )}
            />

            <SnapshotItem
              label="Status"
              value={
                <StatusBadge status={project.status} />
              }
            />

            <SnapshotItem
              label="Stack"
              value={`${project.technologies.length} Technologies`}
            />

          </div>

        </header>

        <Separator className="my-16" />

        <div className="space-y-16">

          {/* OVERVIEW */}
          <section
            aria-labelledby="overview-heading"
            className="max-w-3xl"
          >
            <SectionEyebrow>
              Overview
            </SectionEyebrow>

            <h2
              id="overview-heading"
              className="
                mt-2
                text-3xl
                font-semibold
                tracking-tight
                text-zinc-900
                dark:text-zinc-100
              "
            >
              Why this project mattered.
            </h2>

            <div
              className="
                prose-portfolio
                mt-8
                whitespace-pre-line
              "
            >
              {project.description}
            </div>
          </section>

          {/* PROBLEM & CONSTRAINTS */}
          <section
            aria-labelledby="problem-heading"
          >
            <SectionEyebrow>
              Context
            </SectionEyebrow>

            <h2
              id="problem-heading"
              className="
                mt-2
                text-3xl
                font-semibold
                tracking-tight
                text-zinc-900
                dark:text-zinc-100
              "
            >
              The problem space.
            </h2>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">

              <InfoCard
                icon={<FiTarget size={18} />}
                title="Problem"
              >
                {project.summary}
              </InfoCard>

              <InfoCard
                icon={<FiAlertTriangle size={18} />}
                title="Constraints"
              >
                {project.challenges.length > 0
                  ? project.challenges[0]
                  : 'Balancing quality, delivery speed, and maintainability.'}
              </InfoCard>

            </div>

          </section>
                    {/* ARCHITECTURE */}
                    <section
            aria-labelledby="architecture-heading"
          >
            <SectionEyebrow>
              Architecture
            </SectionEyebrow>

            <h2
              id="architecture-heading"
              className="
                mt-2
                text-3xl
                font-semibold
                tracking-tight
                text-zinc-900
                dark:text-zinc-100
              "
            >
              How the system was structured.
            </h2>

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
              The implementation prioritized simplicity,
              maintainability, and predictable performance
              over unnecessary complexity.
            </p>

            {/* Architecture Flow */}
            <div
              className="
                mt-8
                overflow-hidden
                rounded-3xl
                border
                border-zinc-200/70
                bg-white/80
                backdrop-blur-sm

                dark:border-zinc-800
                dark:bg-zinc-900/70
              "
            >
              <div
                className="
                  grid
                  divide-y
                  divide-zinc-200/70

                  dark:divide-zinc-800

                  sm:grid-cols-4
                  sm:divide-x
                  sm:divide-y-0
                "
              >

                <ArchitectureStep
                  title="Interface"
                  description="User interactions and presentation."
                  items={[
                    project.technologies[0] ?? 'Frontend',
                  ]}
                />

                <ArchitectureStep
                  title="Application"
                  description="Business logic and orchestration."
                  items={[
                    project.technologies[1] ?? 'API Layer',
                  ]}
                />

                <ArchitectureStep
                  title="Services"
                  description="Processing and integrations."
                  items={[
                    project.technologies[2] ?? 'Workers',
                  ]}
                />

                <ArchitectureStep
                  title="Storage"
                  description="Persistence and retrieval."
                  items={[
                    project.technologies[3] ?? 'Database',
                  ]}
                />

              </div>
            </div>

            {/* Technology Stack */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <Badge
                  key={technology}
                  variant="default"
                >
                  {technology}
                </Badge>
              ))}
            </div>
          </section>

          {/* TECHNICAL DECISIONS */}
          <section
            aria-labelledby="decisions-heading"
          >
            <SectionEyebrow>
              Engineering
            </SectionEyebrow>

            <h2
              id="decisions-heading"
              className="
                mt-2
                text-3xl
                font-semibold
                tracking-tight
                text-zinc-900
                dark:text-zinc-100
              "
            >
              Key decisions.
            </h2>

            <div className="mt-8 space-y-4">

              {project.solutions.length > 0 ? (
                project.solutions.map(
                  (solution, index) => (
                    <article
                      key={index}
                      className="
                        rounded-3xl
                        border
                        border-zinc-200/70
                        bg-white/80
                        p-6
                        backdrop-blur-sm

                        dark:border-zinc-800
                        dark:bg-zinc-900/70
                      "
                    >
                      <div className="flex gap-4">

                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-zinc-100
                            text-zinc-600

                            dark:bg-zinc-800
                            dark:text-zinc-300
                          "
                        >
                          <HiOutlineLightBulb size={18} />
                        </div>

                        <div>

                          <h3
                            className="
                              text-sm
                              font-semibold
                              text-zinc-900
                              dark:text-zinc-100
                            "
                          >
                            Decision {index + 1}
                          </h3>

                          <p
                            className="
                              mt-3
                              text-[15px]
                              leading-7
                              text-zinc-600
                              dark:text-zinc-400
                            "
                          >
                            {solution}
                          </p>

                        </div>

                      </div>
                    </article>
                  )
                )
              ) : (
                <article
                  className="
                    rounded-3xl
                    border
                    border-zinc-200/70
                    bg-white/80
                    p-6

                    dark:border-zinc-800
                    dark:bg-zinc-900/70
                  "
                >
                  <p
                    className="
                      text-[15px]
                      leading-7
                      text-zinc-600
                      dark:text-zinc-400
                    "
                  >
                    Decisions focused on balancing
                    reliability, maintainability,
                    and delivery speed.
                  </p>
                </article>
              )}

            </div>
          </section>

          {/* SCREENSHOTS */}
          <section
            aria-labelledby="screens-heading"
          >
            <SectionEyebrow>
              Product
            </SectionEyebrow>

            <h2
              id="screens-heading"
              className="
                mt-2
                text-3xl
                font-semibold
                tracking-tight
                text-zinc-900
                dark:text-zinc-100
              "
            >
              Selected screens.
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                text-[15px]
                leading-7
                text-zinc-600
                dark:text-zinc-400
              "
            >
              Visual snapshots highlighting
              important flows, interactions,
              and product decisions.
            </p>

            <div
              className="
                mt-8
                grid
                gap-4

                md:grid-cols-3
              "
            >

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-zinc-200/70
                  bg-zinc-50

                  dark:border-zinc-800
                  dark:bg-zinc-900

                  md:col-span-2
                "
              >
                <div className="aspect-[16/10]" />

                <div className="p-5">
                  <p
                    className="
                      text-sm
                      font-medium
                      text-zinc-900
                      dark:text-zinc-100
                    "
                  >
                    Primary Experience
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-zinc-500
                      dark:text-zinc-400
                    "
                  >
                    Main workflow and product journey.
                  </p>
                </div>
              </div>

              <div className="space-y-4">

                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="
                      overflow-hidden
                      rounded-3xl
                      border
                      border-zinc-200/70
                      bg-zinc-50

                      dark:border-zinc-800
                      dark:bg-zinc-900
                    "
                  >
                    <div className="aspect-[16/10]" />

                    <div className="p-5">
                      <p
                        className="
                          text-sm
                          font-medium
                          text-zinc-900
                          dark:text-zinc-100
                        "
                      >
                        Supporting Screen {item}
                      </p>
                    </div>
                  </div>
                ))}

              </div>

            </div>
          </section>

          {/* CHALLENGES & SOLUTIONS */}
          {(project.challenges.length > 0 ||
            project.solutions.length > 0) && (
            <section
              aria-labelledby="approach-heading"
            >
              <SectionEyebrow>
                Process
              </SectionEyebrow>

              <h2
                id="approach-heading"
                className="
                  mt-2
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-zinc-900
                  dark:text-zinc-100
                "
              >
                Challenges and trade-offs.
              </h2>

              <div className="mt-8 space-y-4">

                {Array.from({
                  length: Math.max(
                    project.challenges.length,
                    project.solutions.length
                  ),
                }).map((_, index) => (
                  <article
                    key={index}
                    className="
                      rounded-3xl
                      border
                      border-zinc-200/70
                      bg-white/80
                      p-6
                      backdrop-blur-sm

                      dark:border-zinc-800
                      dark:bg-zinc-900/70
                    "
                  >
                    <div className="grid gap-8 lg:grid-cols-2">

                      <div>
                        <p
                          className="
                            text-xs
                            uppercase
                            tracking-[0.14em]
                            text-zinc-400
                            dark:text-zinc-500
                          "
                        >
                          Challenge
                        </p>

                        <p
                          className="
                            mt-4
                            text-[15px]
                            leading-7
                            text-zinc-600
                            dark:text-zinc-400
                          "
                        >
                          {project.challenges[index] ?? '—'}
                        </p>
                      </div>

                      <div>
                        <p
                          className="
                            text-xs
                            uppercase
                            tracking-[0.14em]
                            text-zinc-400
                            dark:text-zinc-500
                          "
                        >
                          Resolution
                        </p>

                        <p
                          className="
                            mt-4
                            text-[15px]
                            leading-7
                            text-zinc-600
                            dark:text-zinc-400
                          "
                        >
                          {project.solutions[index] ?? '—'}
                        </p>
                      </div>

                    </div>
                  </article>
                ))}

              </div>
            </section>
          )}
                    {/* RESULTS */}
                    <section
            aria-labelledby="results-heading"
          >
            <SectionEyebrow>
              Outcomes
            </SectionEyebrow>

            <h2
              id="results-heading"
              className="
                mt-2
                text-3xl
                font-semibold
                tracking-tight
                text-zinc-900
                dark:text-zinc-100
              "
            >
              Results and impact.
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                text-[15px]
                leading-7
                text-zinc-600
                dark:text-zinc-400
              "
            >
              The measurable outcomes and improvements
              delivered through this project.
            </p>

            <div
              className="
                mt-8
                grid
                gap-px
                overflow-hidden
                rounded-3xl
                border
                border-zinc-200/70
                bg-zinc-200/70

                dark:border-zinc-800
                dark:bg-zinc-800

                sm:grid-cols-3
              "
            >

              {(project.metrics?.length
                ? project.metrics
                : [
                    {
                      value: '↑ Performance',
                      label: 'Improved efficiency',
                    },
                    {
                      value: '↓ Complexity',
                      label: 'Reduced overhead',
                    },
                    {
                      value: '↑ Reliability',
                      label: 'More predictable',
                    },
                  ]
              ).map((metric, index) => (
                <div
                  key={index}
                  className="
                    bg-white/80
                    p-8
                    backdrop-blur-sm

                    dark:bg-zinc-900/70
                  "
                >
                  <p
                    className="
                      text-3xl
                      font-semibold
                      tracking-tight
                      text-zinc-900
                      dark:text-zinc-100
                    "
                  >
                    {metric.value}
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      text-zinc-500
                      dark:text-zinc-400
                    "
                  >
                    {metric.label}
                  </p>
                </div>
              ))}

            </div>
          </section>

          {/* LESSONS LEARNED */}
          <section
            aria-labelledby="reflection-heading"
            className="max-w-3xl"
          >
            <SectionEyebrow>
              Reflection
            </SectionEyebrow>

            <h2
              id="reflection-heading"
              className="
                mt-2
                text-3xl
                font-semibold
                tracking-tight
                text-zinc-900
                dark:text-zinc-100
              "
            >
              Lessons learned.
            </h2>

            <div
              className="
                mt-8
                overflow-hidden
                rounded-3xl
                border
                border-zinc-200/70
                bg-white/80
                p-8
                backdrop-blur-sm

                dark:border-zinc-800
                dark:bg-zinc-900/70
              "
            >

              {project.lessonsLearned?.length ? (
                <ul className="space-y-5">

                  {project.lessonsLearned.map(
                    (lesson, index) => (
                      <li
                        key={index}
                        className="
                          flex
                          gap-4
                        "
                      >
                        <div
                          className="
                            mt-1
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-zinc-100
                            text-sm
                            font-medium
                            text-zinc-600

                            dark:bg-zinc-800
                            dark:text-zinc-300
                          "
                        >
                          {index + 1}
                        </div>

                        <p
                          className="
                            text-[15px]
                            leading-7
                            text-zinc-600
                            dark:text-zinc-400
                          "
                        >
                          {lesson}
                        </p>
                      </li>
                    )
                  )}

                </ul>
              ) : (
                <p
                  className="
                    text-[15px]
                    leading-7
                    text-zinc-600
                    dark:text-zinc-400
                  "
                >
                  Every project reinforced the
                  importance of prioritization,
                  iterative delivery, and building
                  systems that remain understandable
                  as they evolve.
                </p>
              )}

            </div>
          </section>

          {/* RELATED PROJECTS */}
          <section
            aria-labelledby="related-heading"
          >
            <SectionEyebrow>
              Explore More
            </SectionEyebrow>

            <h2
              id="related-heading"
              className="
                mt-2
                text-3xl
                font-semibold
                tracking-tight
                text-zinc-900
                dark:text-zinc-100
              "
            >
              Related projects.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              {projects
                .filter((p) => p.slug !== project.slug)
                .slice(0, 2)
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`/projects/${related.slug}`}
                    showExternalIcon={false}
                    className="
                      group
                      block
                      rounded-3xl
                      border
                      border-zinc-200/70
                      bg-white/80
                      p-6
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:border-zinc-300

                      dark:border-zinc-800
                      dark:bg-zinc-900/70
                      dark:hover:border-zinc-700
                    "
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <h3
                          className="
                            text-lg
                            font-semibold
                            text-zinc-900
                            dark:text-zinc-100
                          "
                        >
                          {related.title}
                        </h3>

                        <p
                          className="
                            mt-3
                            line-clamp-3
                            text-sm
                            leading-7
                            text-zinc-500
                            dark:text-zinc-400
                          "
                        >
                          {related.summary}
                        </p>

                      </div>

                      <FiArrowUpRight
                        size={16}
                        className="
                          shrink-0
                          text-zinc-400
                          transition-transform
                          duration-200
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />

                    </div>

                  </Link>
                ))}

            </div>
          </section>

        </div>

        <Separator className="my-16" />

        {/* CTA */}
        <section
          className="
            rounded-[2rem]
            border
            border-zinc-200/70
            bg-white/80
            px-8
            py-10
            text-center
            backdrop-blur-sm

            dark:border-zinc-800
            dark:bg-zinc-900/70
          "
        >

          <h2
            className="
              text-2xl
              font-semibold
              tracking-tight
              text-zinc-900
              dark:text-zinc-100
            "
          >
            Interested in similar work?
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-[15px]
              leading-7
              text-zinc-500
              dark:text-zinc-400
            "
          >
            I enjoy building thoughtful,
            maintainable products and solving
            problems through engineering.
          </p>

          <div
            className="
              mt-8
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >

            <Link
              href="/contact"
              showExternalIcon={false}
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-zinc-900
                px-5
                py-3
                text-sm
                font-medium
                text-white

                dark:bg-zinc-100
                dark:text-zinc-900
              "
            >
              Get in touch

              <FiArrowUpRight size={14} />
            </Link>

            <Link
              href="/projects"
              variant="muted"
              showExternalIcon={false}
              className="
                rounded-2xl
                px-5
                py-3
                text-sm
              "
            >
              Browse projects
            </Link>

          </div>

        </section>

      </article>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function SectionEyebrow({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
      {children}
    </p>
  );
}

function SnapshotItem({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div
      className="
        bg-white/80
        p-6
        backdrop-blur-sm

        dark:bg-zinc-900/70
      "
    >
      <p
        className="
          text-xs
          uppercase
          tracking-[0.14em]
          text-zinc-400
          dark:text-zinc-500
        "
      >
        {label}
      </p>

      <div
        className="
          mt-3
          text-sm
          font-medium
          text-zinc-900
          dark:text-zinc-100
        "
      >
        {value}
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article
      className="
        rounded-3xl
        border
        border-zinc-200/70
        bg-white/80
        p-6
        backdrop-blur-sm

        dark:border-zinc-800
        dark:bg-zinc-900/70
      "
    >
      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-2xl
            bg-zinc-100
            text-zinc-600

            dark:bg-zinc-800
            dark:text-zinc-300
          "
        >
          {icon}
        </div>

        <h3
          className="
            text-sm
            font-semibold
            text-zinc-900
            dark:text-zinc-100
          "
        >
          {title}
        </h3>

      </div>

      <p
        className="
          mt-5
          text-[15px]
          leading-7
          text-zinc-600
          dark:text-zinc-400
        "
      >
        {children}
      </p>
    </article>
  );
}

function ArchitectureStep({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div
      className="
        bg-white/80
        p-6
        backdrop-blur-sm

        dark:bg-zinc-900/70
      "
    >
      <FiLayers
        size={18}
        className="
          text-zinc-400
          dark:text-zinc-500
        "
      />

      <h3
        className="
          mt-5
          font-semibold
          text-zinc-900
          dark:text-zinc-100
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          text-sm
          leading-6
          text-zinc-500
          dark:text-zinc-400
        "
      >
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge
            key={item}
            variant="muted"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status?: string;
}) {
  return (
    <Badge variant="outline">
      {status ?? 'Completed'}
    </Badge>
  );
}