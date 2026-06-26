import type { Experience } from '@/types';
import { formatDateRange, cn } from '@/lib/utils';
import { getAvatarUrl } from '@/lib/imagekit';
import { ExperienceAchievements } from './experience-achievements';

interface ExperienceCardProps {
  experience: Experience;
  isLast?: boolean;
  className?: string;
}

const employmentTypeLabel: Record<Experience['employmentType'], string> = {
  'full-time':  'Full-time',
  'part-time':  'Part-time',
  contract:     'Contract',
  freelance:    'Freelance',
  internship:   'Internship',
};

export function ExperienceCard({ experience, isLast = false, className }: ExperienceCardProps) {
  return (
    <article className={cn('group relative flex gap-5', className)}>

      {/* ── Timeline spine ───────────────────────────────────────── */}
      <div className="flex flex-col items-center">

        {/* Logo node */}
        <div className="relative z-10 mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-zinc-200/80 dark:bg-zinc-950 dark:ring-zinc-800/80">
          {experience.logo ? (
            <img
              src={getAvatarUrl(experience.logo, 32)}
              alt={`${experience.company} logo`}
              width={28}
              height={28}
              loading="lazy"
              className="h-8 w-8 rounded-lg object-contain ring-1 ring-zinc-200/80 dark:ring-zinc-800/80"
            />
          ) : (
            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              {experience.company.slice(0, 2)}
            </span>
          )}
        </div>

        {/* Vertical line — hidden on last item */}
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-zinc-200/80 transition-colors duration-200 group-hover:bg-zinc-300 dark:bg-zinc-800/80 dark:group-hover:bg-zinc-700" />
        )}

      </div>

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className={cn('min-w-0 flex-1 pb-10', isLast && 'pb-0')}>

        {/* Company + meta row */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <p className="text-lg font-semibold tracking-tight text-zinc-900 transition-colors duration-200 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300">
            {experience.company}
          </p>

          <time className="text-sm text-zinc-500 dark:text-zinc-400">
            {formatDateRange(experience.startDate, experience.endDate, experience.current)}
          </time>
        </div>

        {/* Role + inline meta */}
        <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="font-medium text-zinc-700 dark:text-zinc-300">
            {experience.role}
          </span>

          <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">·</span>

          <span>{employmentTypeLabel[experience.employmentType]}</span>

          {experience.location && (
            <>
              <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">·</span>
              <span>{experience.location}</span>
            </>
          )}
        </div>

        {/* Achievements accordion */}
        {experience.achievements?.length > 0 && (
          <div className="mt-5">
            <ExperienceAchievements achievements={experience.achievements} />
          </div>
        )}

        {/* Skills — outlined chips */}
        {experience.skills.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-200/80 px-2.5 py-0.5 text-xs text-zinc-500 dark:border-zinc-800/80 dark:text-zinc-400"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

      </div>
    </article>
  );
}