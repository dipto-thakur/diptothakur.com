import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

import { HeroSection }         from './_sections/hero-section';
import { StackSection }        from './_sections/stack-section';
import { ExperienceSection }   from './_sections/experience-section';
import { ProjectsSection }     from './_sections/projects-section';
import { WritingSection }      from './_sections/writing-section';
import { TestimonialsSection } from './_sections/testimonials-section';
import { CreditsSection }      from './_sections/credits-section';

import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">

      <HeroSection />

      <Separator className="my-14" />
      <StackSection />

      <Separator className="my-14" />
      <ExperienceSection />

      <Separator className="my-14" />
      <ProjectsSection />

      <Separator className="my-14" />
      <WritingSection />

      <Separator className="my-14" />
      <TestimonialsSection />

      <Separator className="my-14" />
      <CreditsSection />

    </div>
  );
}