import { featuredProjects } from '@/content/projects';
import { ProjectCard } from '@/components/features/projects/project-card';
import { SectionHeader } from '@/components/ui/section-header';
import { Link } from '@/components/ui/link';
import { FiArrowRight } from 'react-icons/fi';

export function ProjectsSection() {
  return (
    <section aria-labelledby="projects-heading">
      <SectionHeader
        id="projects-heading"
        title="Selected Projects"
        description="Products, experiments, and systems I'm proud of."
        href="/projects"
      />

      <div className="mt-8 space-y-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} variant="default" />
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/projects"
          variant="muted"
          showExternalIcon={false}
          className="inline-flex items-center gap-1.5 text-sm"
        >
          Explore all projects
          <FiArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}