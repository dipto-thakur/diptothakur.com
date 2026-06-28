import { featuredPosts } from '@/content/blog';
import { BlogCard } from '@/components/features/blog/blog-card';
import { SectionHeader } from '@/components/ui/section-header';
import { Link } from '@/components/ui/link';
import { FiArrowRight } from 'react-icons/fi';

export function WritingSection() {
  return (
    <section aria-labelledby="writing-heading">
      <SectionHeader
        id="writing-heading"
        title="Recent Writing"
        description="Notes from building, learning, and shipping."
        href="/blog"
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {featuredPosts.map((post) => (
          <BlogCard key={post.id} post={post} variant="compact" />
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/blog"
          variant="muted"
          showExternalIcon={false}
          className="inline-flex items-center gap-1.5 text-sm"
        >
          Read more articles
          <FiArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}