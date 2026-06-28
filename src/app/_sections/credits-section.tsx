import { credits } from '../_data/credits';

export function CreditsSection() {
  return (
    <section aria-labelledby="credits-heading">
      <div className="rounded-2xl border border-zinc-100 bg-zinc-50/50 px-5 py-5 dark:border-zinc-900 dark:bg-zinc-900/30">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="hidden sm:block">
            <p
              id="credits-heading"
              className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500"
            >
              Built With
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Tools and services that helped shape this portfolio.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            {credits.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="inline-flex h-9 items-center justify-center gap-1.5 rounded-xl border border-zinc-200/60 px-2.5 text-sm text-zinc-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-100/70 hover:text-zinc-900 dark:border-zinc-800/60 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100 sm:px-3"
              >
                <Icon size={14} className="shrink-0" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}