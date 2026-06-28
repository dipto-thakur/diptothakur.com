import { SectionHeader } from '@/components/ui/section-header';
import { stack } from '../_data/stack';

export function StackSection() {
  return (
    <section aria-labelledby="stack-heading">
      <SectionHeader
        id="stack-heading"
        title="Stack"
        description="Technologies, tools, and systems I use regularly."
      />

      {/* ── Mobile: accordion-style rows ── Desktop: label | items grid ── */}
      <div className="mt-8 space-y-0 sm:space-y-8">
        {stack.map((group, index) => (
          <div
            key={group.title}
            className="
              border-b border-zinc-100 py-4 last:border-b-0
              dark:border-zinc-900
              sm:grid sm:gap-4 sm:border-b-0 sm:py-0 sm:grid-cols-[140px_1fr]
            "
          >
            {/* Label */}
            <div className="flex items-center justify-between sm:block sm:space-y-1">
              <div className="flex items-center gap-2.5 sm:block">
                <p className="hidden text-xs font-medium tracking-[0.14em] text-zinc-400 dark:text-zinc-500 sm:block">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500 sm:text-sm sm:font-medium sm:normal-case sm:tracking-normal sm:text-zinc-900 sm:dark:text-zinc-100">
                  {group.title}
                </h3>
              </div>

              {/* Mobile: item count pill */}
              <span className="text-[10px] tabular-nums text-zinc-300 dark:text-zinc-700 sm:hidden">
                {group.items.length}
              </span>
            </div>

            {/* Items */}
            <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-2 sm:mt-0 sm:gap-x-4 sm:gap-y-2">
              {group.items.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-[13px] text-zinc-600 transition-all duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 sm:text-sm sm:text-zinc-500"
                >
                  <span className="border-b border-transparent transition-colors duration-200 group-hover:border-current">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}