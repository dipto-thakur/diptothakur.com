'use client';

import { useEffect, useRef, useState } from 'react';

interface RoleFlipProps {
  roles: readonly string[];
  interval?: number;
}

export function RoleFlip({
  roles,
  interval = 3600,
}: RoleFlipProps) {
  const [index, setIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (roles.length <= 1) return;

    intervalRef.current = setInterval(() => {
      const nextIndex = (index + 1) % roles.length;

      setPreviousIndex(index);
      setIndex(nextIndex);
      setAnimating(true);

      timeoutRef.current = setTimeout(() => {
        setAnimating(false);
        setPreviousIndex(null);
      }, 500);
    }, interval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [index, interval, roles.length]);

  const longestRole = roles.reduce((a, b) =>
    a.length > b.length ? a : b
  );

  return (
    <span
      className="
        relative
        inline-flex
        h-[1.5em]
        overflow-hidden
        align-middle
      "
    >
      {/* Width stabilizer */}
      <span className="invisible font-medium whitespace-nowrap">
        {longestRole}
      </span>

      {/* Previous role */}
      {previousIndex !== null && (
        <span
          aria-hidden="true"
          className={`
            absolute
            inset-0
            whitespace-nowrap
            font-medium
            text-zinc-700
            dark:text-zinc-300
            transition-all
            duration-500
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              animating
                ? '-translate-y-full opacity-0'
                : 'translate-y-0 opacity-100'
            }
          `}
        >
          {roles[previousIndex]}
        </span>
      )}

      {/* Current role */}
      <span
        className={`
          absolute
          inset-0
          whitespace-nowrap
          font-medium
          text-zinc-700
          dark:text-zinc-300
          transition-all
          duration-500
          ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            animating
              ? 'translate-y-0 opacity-100'
              : 'translate-y-0 opacity-100'
          }
          ${
            previousIndex !== null && animating
              ? 'translate-y-full animate-none'
              : ''
          }
        `}
        style={{
          transform:
            previousIndex !== null && animating
              ? 'translateY(0%)'
              : 'translateY(0%)',
        }}
      >
        <span
          className={`
            block
            transition-transform
            duration-500
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              previousIndex !== null && animating
                ? '-translate-y-full'
                : 'translate-y-0'
            }
          `}
        >
          {roles[index]}
        </span>
      </span>
    </span>
  );
}