'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { cn } from '@/lib/utils';

interface TestimonialStripProps {
  children: React.ReactNode;
  className?: string;
  interval?: number;
}

export function TestimonialStrip({
  children,
  className,
  interval = 5500,
}: TestimonialStripProps) {
  const items = useMemo(
    () => (Array.isArray(children) ? children : [children]),
    [children]
  );

  const reducedMotion = useReducedMotion();

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = items.length;

  const goTo = (next: number) => {
    if (next === index) return;

    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  useEffect(() => {
    if (total <= 1) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % total);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, total]);

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      filter: reducedMotion ? 'blur(0px)' : 'blur(5px)',
      y: reducedMotion ? 0 : dir * 20,
      scale: reducedMotion ? 1 : 0.985,
    }),

    center: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      scale: 1,
    },

    exit: (dir: number) => ({
      opacity: 0,
      filter: reducedMotion ? 'blur(0px)' : 'blur(4px)',
      y: reducedMotion ? 0 : -dir * 20,
      scale: reducedMotion ? 1 : 0.985,
    }),
  };

  return (
    <section className={cn('relative', className)}>
      {/* Content */}
      <div
        className="
          relative
          min-h-[220px]
          overflow-hidden
        "
      >
        <AnimatePresence
          initial={false}
          custom={direction}
          mode="wait"
        >
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: reducedMotion ? 0 : 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            {items[index]}
          </motion.div>
        </AnimatePresence>
      </div>

      {total > 1 && (
        <div
          className="
            mt-8
            flex
            items-center
            justify-between
            gap-6
          "
        >
          {/* Progress */}
          <div
            className="
              h-px
              flex-1
              overflow-hidden
              rounded-full
              bg-zinc-200/80
              dark:bg-zinc-800
            "
          >
            <motion.div
              key={index}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{
                duration: interval / 1000,
                ease: 'linear',
              }}
              className="
                h-full
                bg-zinc-900
                dark:bg-zinc-100
              "
            />
          </div>

          {/* Dots */}
          <div
            role="tablist"
            aria-label="Testimonials"
            className="flex items-center gap-2"
          >
            {items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  `
                  relative
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-zinc-900
                  dark:focus-visible:ring-zinc-100
                  `,
                  i === index
                    ? `
                      w-7
                      bg-zinc-900
                      dark:bg-zinc-100
                    `
                    : `
                      w-2
                      bg-zinc-300
                      hover:bg-zinc-400
                      dark:bg-zinc-700
                      dark:hover:bg-zinc-600
                    `
                )}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}