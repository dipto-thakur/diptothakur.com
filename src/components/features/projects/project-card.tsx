import Image from "next/image";
import { Fragment } from "react";
import type { Project } from "@/types";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

import {
  FiGithub,
  FiGlobe,
  FiArrowUpRight,
  FiArrowRight,
} from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "compact";
  className?: string;
}

/* -------------------------------------------------------------------------- */
/* Status                                                                      */
/* -------------------------------------------------------------------------- */

const statusConfig: Record<
  Project["status"],
  {
    label: string;
    dotClass: string;
    textClass: string;
  }
> = {
  active: {
    label: "Active",
    dotClass: "bg-emerald-500",
    textClass: "text-emerald-600 dark:text-emerald-500",
  },
  completed: {
    label: "Completed",
    dotClass: "bg-blue-500",
    textClass: "text-blue-600 dark:text-blue-500",
  },
  archived: {
    label: "Archived",
    dotClass: "bg-zinc-400",
    textClass: "text-zinc-500 dark:text-zinc-500",
  },
  wip: {
    label: "In Progress",
    dotClass: "bg-amber-500",
    textClass: "text-amber-600 dark:text-amber-500",
  },
};

function StatusDot({
  status,
}: {
  status: Project["status"];
}) {
  const { label, dotClass, textClass } = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs",
        textClass
      )}
    >
      <span
        aria-hidden
        className={cn("h-1.5 w-1.5 rounded-full", dotClass)}
      />
      {label}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Component                                                                    */
/* -------------------------------------------------------------------------- */

export function ProjectCard({
  project,
  variant = "default",
  className,
}: ProjectCardProps) {
  const githubLink = project.externalLinks.find(
    (link) => link.type === "github"
  );

  const liveLink = project.externalLinks.find(
    (link) => link.type === "live"
  );

  /* ------------------------------------------------------------------------ */
  /* Compact Variant                                                          */
  /* ------------------------------------------------------------------------ */

  if (variant === "compact") {
    return (
      <article
        className={cn(
          "group py-4",
          className
        )}
      >
        <div className="flex items-start gap-4">
          {project.logo && (
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              width={40}
              height={40}
              className="mt-1 h-10 w-10 rounded-xl object-contain"
            />
          )}

          <div className="min-w-0 flex-1">
            <Link
              href={`/projects/${project.slug}`}
              showExternalIcon={false}
              className="inline-flex items-center gap-1.5"
            >
              <span
                className="
                  text-base
                  font-medium
                  tracking-[-0.025em]
                  text-zinc-900
                  transition-colors
                  duration-200
                  group-hover:text-zinc-950
                  dark:text-zinc-100
                "
              >
                {project.title}
              </span>

              <FiArrowUpRight
                size={13}
                className="
                  text-zinc-400
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-px
                  dark:text-zinc-600
                "
              />
            </Link>

            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
              {project.categories.map((item, index) => (
                <Fragment key={item}>
                  {index > 0 && (
                    <span className="opacity-40">•</span>
                  )}
                  <span>{item}</span>
                </Fragment>
              ))}

              <span className="opacity-40">•</span>

              <StatusDot status={project.status} />
            </div>

            <p
              className="
                mt-3
                line-clamp-2
                max-w-2xl
                text-sm
                leading-6
                text-zinc-600
                dark:text-zinc-400
              "
            >
              {project.summary}
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-zinc-200/60
                    px-2.5
                    py-0.5
                    text-xs
                    text-zinc-500
                    dark:border-zinc-800/60
                    dark:text-zinc-400
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <FiArrowRight
            size={15}
            className="
              mt-1
              shrink-0
              text-zinc-400
              transition-all
              duration-200
              group-hover:translate-x-1
              group-hover:text-zinc-900
              dark:text-zinc-600
              dark:group-hover:text-zinc-100
            "
          />
        </div>
      </article>
    );
  }

  /* ------------------------------------------------------------------------ */
  /* Default Variant (Part 2)                                                 */
  /* ------------------------------------------------------------------------ */

  return (
    <article
      className={cn(
        "group border-t border-zinc-200/50 py-8 transition-colors dark:border-zinc-800/50",
        className
      )}
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        {/* ------------------------------------------------------------------ */}
        {/* Left                                                               */}
        {/* ------------------------------------------------------------------ */}

        <div className="flex min-w-0 flex-1 items-start gap-4">
          {project.logo && (
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              width={44}
              height={44}
              className="mt-1 h-11 w-11 rounded-xl object-contain"
            />
          )}

          <div className="min-w-0 flex-1">
            {/* Metadata */}

            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
              {project.categories.map((item, index) => (
                <Fragment key={item}>
                  {index > 0 && (
                    <span className="opacity-40">•</span>
                  )}

                  <span>{item}</span>
                </Fragment>
              ))}

              <span className="opacity-40">•</span>

              <StatusDot status={project.status} />
            </div>

            {/* Title */}

            <Link
              href={`/projects/${project.slug}`}
              showExternalIcon={false}
              className="mt-2 inline-flex items-center gap-2"
            >
                <span
                  className="
                    text-[1.45rem]
                    font-semibold
                    leading-tight
                    tracking-[-0.04em]
                    text-zinc-900
                    transition-colors
                    duration-200
                    dark:text-zinc-100
                  "
                >
                  {project.title}
                </span>

              <FiArrowUpRight
                size={16}
                className="
                  text-zinc-400
                  transition-transform
                  duration-200
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-px
                  dark:text-zinc-600
                "
              />
            </Link>

            {/* Summary */}

            <p
              className="
                mt-4
                max-w-3xl
                text-[15px]
                leading-7
                text-balance
                text-zinc-600
                line-clamp-3
                dark:text-zinc-400
              "
            >
              {project.summary}
            </p>

            {/* Technologies */}

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-zinc-200/60
                    px-2.5
                    py-0.5
                    text-xs
                    text-zinc-500
                    transition-colors
                    dark:border-zinc-800/60
                    dark:text-zinc-400
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Actions                                                      */}

        <div
          className="
            flex
            shrink-0
            flex-wrap
            items-center
            gap-2
            md:justify-end
          "
        >
          {liveLink && (
            <a
              href={liveLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live project"
              className="
                inline-flex
                h-9
                items-center
                gap-1.5
                rounded-lg
                px-3
                text-xs
                font-medium
                text-zinc-500
                transition-colors
                duration-200
                hover:text-zinc-900
                dark:text-zinc-400
                dark:hover:text-zinc-100
              "
            >
              <FiGlobe size={13} />
              Live
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub repository"
              className="
                inline-flex
                h-9
                items-center
                gap-1.5
                rounded-lg
                px-3
                text-xs
                font-medium
                text-zinc-500
                transition-colors
                duration-200
                hover:text-zinc-900
                dark:text-zinc-400
                dark:hover:text-zinc-100
              "
            >
              <FiGithub size={13} />
              GitHub
            </a>
          )}

          <Link
            href={`/projects/${project.slug}`}
            showExternalIcon={false}
            className="
              group/explore
              inline-flex
              h-9
              items-center
              gap-1.5
              rounded-lg
              px-3
              text-xs
              font-medium
              text-zinc-900
              transition-colors
              duration-200
              dark:text-zinc-100
            "
          >
            Explore

            <FiArrowRight
              size={13}
              className="
                transition-transform
                duration-200
                group-hover/explore:translate-x-1
              "
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

