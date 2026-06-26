'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { cn } from '@/lib/utils';

interface ExperienceAchievementsProps {
  achievements: string[];
  className?: string;
}

export function ExperienceAchievements({
  achievements,
  className,
}: ExperienceAchievementsProps) {
  const [expanded, setExpanded] = useState(false);

  if (achievements.length === 0) return null;

  return (
    <div className={cn('mt-1', className)}>

      {/* Toggle */}
      <button
        type="button"
        onClick={() => setExpanded((p) => !p)}
        aria-expanded={expanded}
        className="
          group flex items-center gap-2 py-1 text-left
          focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-zinc-900 focus-visible:ring-offset-2
          dark:focus-visible:ring-zinc-100 dark:focus-visible:ring-offset-zinc-950
        "
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.13em] text-zinc-400 transition-colors duration-150 group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300">
          Highlights
        </span>

        <span className="text-[11px] tabular-nums text-zinc-300 dark:text-zinc-700">
          {achievements.length}
        </span>

        <FiChevronDown
          size={12}
          aria-hidden="true"
          className={cn(
            'text-zinc-300 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] dark:text-zinc-600',
            expanded && 'rotate-180'
          )}
        />
      </button>

      {/* Collapsible */}
      <div
        className={cn(
          'grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
          expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <ul className="mt-3 space-y-2.5 pb-1">
            {achievements.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}