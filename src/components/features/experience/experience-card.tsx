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
    <article className={cn('group relative flex gap-3 sm:gap-5', className)}>

      {/* ── Timeline spine ───────────────────────────────────────── */}
      <div className="flex flex-col items-center">

        {/* Logo node — smaller on mobile */}
        <div className="relative z-10 mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-zinc-200/80 dark:bg-zinc-950 dark:ring-zinc-800/80 sm:h-8 sm:w-8">
          {experience.logo ? (
            <img
              src={getAvatarUrl(experience.logo, 32)}
              alt={`${experience.company} logo`}
              width={28}
              height={28}
              loading="lazy"
              className="h-7 w-7 rounded-lg object-contain ring-1 ring-zinc-200/80 dark:ring-zinc-800/80 sm:h-8 sm:w-8"
            />
          ) : (
            <span className="text-[9px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 sm:text-[10px]">
              {experience.company.slice(0, 2)}
            </span>
          )}
        </div>

        {/* Vertical line */}
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-zinc-200/80 transition-colors duration-200 group-hover:bg-zinc-300 dark:bg-zinc-800/80 dark:group-hover:bg-zinc-700" />
        )}

      </div>

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className={cn('min-w-0 flex-1 pb-8 sm:pb-10', isLast && 'pb-0')}>

        {/* Company + date — stacked on mobile, inline on desktop */}
        <div className="flex flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-1">
          <p className="text-[15px] font-semibold tracking-tight text-zinc-900 transition-colors duration-200 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300 sm:text-lg">
            {experience.company}
          </p>

          <time className="text-[11px] text-zinc-400 dark:text-zinc-500 sm:text-sm sm:text-zinc-500 sm:dark:text-zinc-400">
            {formatDateRange(experience.startDate, experience.endDate, experience.current)}
          </time>
        </div>

        {/* Role + meta — location hidden on mobile if long */}
        <div className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[12px] text-zinc-500 dark:text-zinc-400 sm:mt-1.5 sm:gap-x-2 sm:text-sm">
          <span className="font-medium text-zinc-700 dark:text-zinc-300">
            {experience.role}
          </span>

          <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">·</span>

          <span>{employmentTypeLabel[experience.employmentType]}</span>

          {experience.location && (
            <>
              <span className="hidden text-zinc-300 dark:text-zinc-700 sm:inline" aria-hidden="true">·</span>
              <span className="hidden sm:inline">{experience.location}</span>
            </>
          )}
        </div>

        {/* Achievements */}
        {experience.achievements?.length > 0 && (
          <div className="mt-4 sm:mt-5">
            <ExperienceAchievements achievements={experience.achievements} />
          </div>
        )}

        {/* Skills — scrollable single row on mobile */}
        {experience.skills.length > 0 && (
          <div className="mt-4 flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-none sm:mt-5 sm:flex-wrap sm:overflow-visible sm:pb-0">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="shrink-0 rounded-full border border-zinc-200/80 px-2 py-0.5 text-[11px] text-zinc-500 dark:border-zinc-800/80 dark:text-zinc-400 sm:px-2.5 sm:text-xs"
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