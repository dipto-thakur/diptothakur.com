import { testimonials } from '@/content/testimonials';
import { TestimonialCard } from '@/components/features/testimonials/testimonial-card';
import { TestimonialStrip } from '@/components/ui/testimonial-strip';
import { SectionHeader } from '@/components/ui/section-header';
import { Link } from '@/components/ui/link';
import { FiArrowRight } from 'react-icons/fi';

export function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading">
      <SectionHeader
        id="testimonials-heading"
        title="What People Say"
        description="Feedback from colleagues, collaborators, and clients."
      />

      <TestimonialStrip className="mt-8 pb-2">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </TestimonialStrip>

      <div className="mt-6 text-center">
        <Link
          href="/contact"
          variant="muted"
          showExternalIcon={false}
          className="inline-flex items-center gap-1.5 text-sm"
        >
          Let's build something together
          <FiArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}