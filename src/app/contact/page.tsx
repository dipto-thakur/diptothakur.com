import { siteConfig, socialLinks } from '@/config/site';
import { Link } from '@/components/ui/link';
import { Separator } from '@/components/ui/separator';

import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiArrowUpRight,
} from "react-icons/fi";

import type { Metadata } from 'next';
import { testimonials } from '@/content/testimonials';
import { TestimonialCard } from '@/components/features/testimonials/testimonial-card';
import { TestimonialStrip } from '@/components/ui/testimonial-strip';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch — available for engineering roles and consulting.',
};

/* ---------------- ICON SYSTEM ---------------- */

type IconComponent = React.ComponentType<{
  size?: number;
  className?: string;
}>;

const iconMap = {
  mail: FiMail,
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
  arrowUpRight: FiArrowUpRight,
} satisfies Record<string, IconComponent>;

const getIcon = (key: string): IconComponent | null =>
  iconMap[key as keyof typeof iconMap] ?? null;

/* ---------------- PAGE ---------------- */

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">

      {/* HERO */}
      <header className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
          Contact
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-zinc-900 dark:text-zinc-100 sm:text-5xl">
          Let's build something meaningful.
        </h1>

        <p className="mt-6 max-w-2xl text-[16px] leading-8 text-zinc-600 dark:text-zinc-400">
          Opportunities, collaborations, freelance work, ideas exchange.
        </p>
      </header>

      {/* EMAIL CTA */}
      <section className="mt-12 rounded-3xl bg-zinc-50 px-8 py-8 dark:bg-zinc-900/60">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <div className="flex items-center gap-2">
              <FiMail size={18} className="text-zinc-500 dark:text-zinc-400" />
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Email
              </span>
            </div>

            <p className="mt-3 text-lg font-medium text-zinc-900 dark:text-zinc-100">
              {siteConfig.email}
            </p>

            <p className="mt-2 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
              Response: 24–48h
            </p>
          </div>

          <Link
            href={`mailto:${siteConfig.email}`}
            showExternalIcon={false}
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Say Hello
            <FiArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      {/* SOCIALS */}
      <section className="mt-14">

        <div className="mb-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
            Elsewhere
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Find online
          </h2>
        </div>

        <div className="space-y-2">
          {socialLinks
            .filter((l) => l.icon !== 'rss')
            .map((link) => {
              const Icon = getIcon(link.icon);
              if (!Icon) return null;

              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4"
                >
                  <div className="flex items-center gap-4">
                    <Icon size={18} className="text-zinc-400 dark:text-zinc-500" />

                    <span className="font-medium text-zinc-900 transition-colors group-hover:text-zinc-600 dark:text-zinc-100 dark:group-hover:text-zinc-300">
                      {link.label}
                    </span>
                  </div>

                  <FiArrowUpRight
                    size={16}
                    className="text-zinc-300 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 dark:text-zinc-600"
                  />
                </a>
              );
            })}
        </div>
      </section>

      <Separator className="my-16" />

      {/* TESTIMONIALS */}
      <section aria-labelledby="testimonials-heading">
        <div className="mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
            Testimonials
          </p>

          <h2 id="testimonials-heading" className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Feedback
          </h2>
        </div>

        <TestimonialStrip>
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </TestimonialStrip>
      </section>

    </div>
  );
}