import { experiences } from '@/content/experience';
import { ExperienceCard } from '@/components/features/experience/experience-card';
import { SectionHeader } from '@/components/ui/section-header';
import { Link } from '@/components/ui/link';
import { FiArrowRight } from 'react-icons/fi';

const PREVIEW_COUNT = 2;

export function ExperienceSection() {
  const preview = experiences.slice(0, PREVIEW_COUNT);

  return (
    <section aria-labelledby="experience-heading">
      <SectionHeader
        id="experience-heading"
        title="Experience"
        description="Roles, teams, and contributions that shaped my journey."
        href="/experience"
      />

      <div className="mt-8 space-y-0">
        {preview.map((experience, i) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isLast={i === preview.length - 1}
          />
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/experience"
          variant="muted"
          showExternalIcon={false}
          className="inline-flex items-center gap-1.5 text-sm"
        >
          View all experience
          <FiArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}