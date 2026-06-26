import { experiences } from '@/content/experience';
import { ExperienceCard } from '@/components/features/experience/experience-card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'My professional history — roles, responsibilities, and what I built.',
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Experience</h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Roles I have held, teams I have been part of, and the work I am most proud of.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-zinc-100 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Want the full picture?{' '}
          <a
            href="/placeholder-resume.pdf"
            className="font-medium text-zinc-900 underline underline-offset-2 dark:text-zinc-100"
            aria-label="Download resume PDF"
          >
            Download my resume
          </a>
          .
        </p>
      </div>
    </div>
  );
}
