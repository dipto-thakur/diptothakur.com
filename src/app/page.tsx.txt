import { siteConfig, socialLinks } from '@/config/site';
import { featuredProjects } from '@/content/projects';
import { featuredPosts } from '@/content/blog';
import { testimonials } from '@/content/testimonials';
import { experiences } from '@/content/experience';

import { ProjectCard } from '@/components/features/projects/project-card';
import { BlogCard } from '@/components/features/blog/blog-card';
import { TestimonialCard } from '@/components/features/testimonials/testimonial-card';
import { ExperienceCard } from '@/components/features/experience/experience-card';

import { SectionHeader } from '@/components/ui/section-header';
import { Separator } from '@/components/ui/separator';
import { Link } from '@/components/ui/link';
import { RoleFlip } from '@/components/ui/role-flip';
import { TestimonialStrip } from '@/components/ui/testimonial-strip';

import {
  FiArrowRight,
  FiMapPin,
  FiGithub,
  FiX,
  FiRss,
  FiMail,
  FiLinkedin,
  FiCode,  FiGlobe,
  FiBarChart2,
  FiShield,
  FiExternalLink,
  FiZap, FiCpu,
  FiPackage,
} from 'react-icons/fi';

import {
  FaDev,
  FaMedium,
  FaDiscord,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaReddit,
  FaCodepen,
  FaStackOverflow,
} from "react-icons/fa";
import { SiHashnode, SiLeetcode, SiCodeforces, SiBluesky, SiThreads } from "react-icons/si";

import { getAvatarUrl, getCoverUrl } from '@/lib/image';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

type IconComponent = React.ComponentType<{
  size?: number;
  className?: string;
}>;

const socialIcons = {
  github: FiGithub,
  linkedin: FiLinkedin,
  twitter: FiX,
  mail: FiMail,
  globe: FiGlobe,
  rss: FiRss,
  devto: FaDev,
  hashnode: SiHashnode,
  medium: FaMedium,
  codepen: FaCodepen,
  stackoverflow: FaStackOverflow,
  leetcode: SiLeetcode,
  codeforces: SiCodeforces,
  discord: FaDiscord,
  youtube: FaYoutube,
  instagram: FaInstagram,
  facebook: FaFacebook,
  threads: SiThreads,
  bluesky: SiBluesky,
  reddit: FaReddit,
} as const;

type SocialKey = keyof typeof socialIcons;

const getSocialIcon = (key: string): IconComponent =>
  socialIcons[key as SocialKey] ?? FiGlobe;

  const stack = [
    {
      title: "Language",
      items: [
        { label: "TypeScript", href: "https://www.typescriptlang.org" },
        { label: "JavaScript", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
        { label: "Python", href: "https://www.python.org" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { label: "React", href: "https://react.dev" },
        { label: "Next.js", href: "https://nextjs.org" },
        { label: "Tailwind CSS", href: "https://tailwindcss.com" },
        { label: "shadcn/ui", href: "https://ui.shadcn.com" },
        { label: "Radix UI", href: "https://www.radix-ui.com" },
        { label: "Base UI", href: "https://base-ui.com" },
        { label: "Motion", href: "https://motion.dev" },
        { label: "TanStack", href: "https://tanstack.com" },
      ],
    },
    {
      title: "Backend & Database",
      items: [
        { label: "Node.js", href: "https://nodejs.org" },
        { label: "PostgreSQL", href: "https://www.postgresql.org" },
        { label: "MongoDB", href: "https://www.mongodb.com" },
        { label: "Redis", href: "https://redis.io" },
        { label: "Nginx", href: "https://nginx.org" },
      ],
    },
    {
      title: "Workflow & AI",
      items: [
        { label: "Cursor", href: "https://cursor.com" },
        { label: "Claude", href: "https://claude.ai" },
        { label: "Gemini", href: "https://gemini.google.com" },
        { label: "ChatGPT", href: "https://chatgpt.com" },
        { label: "Git", href: "https://git-scm.com" },
        { label: "GitHub", href: "https://github.com" },
        { label: "Docker", href: "https://www.docker.com" },
        { label: "Vercel", href: "https://vercel.com" },
      ],
    },
    {
      title: "Analytics",
      items: [
        { label: "OpenPanel", href: "https://openpanel.dev" },
        { label: "PostHog", href: "https://posthog.com" },
      ],
    },
    {
      title: "Design",
      items: [
        { label: "Figma", href: "https://figma.com" },
        { label: "Paper", href: "https://paper.dropbox.com" },
        { label: "Photoshop", href: "https://www.adobe.com/products/photoshop.html" },
      ],
    },
  ];

const credits = [
  { icon: FiCode, label: "Tailwind CSS", href: "https://tailwindcss.com" },
  { icon: FiZap, label: "Next.js", href: "https://nextjs.org" },
  { icon: FiCode, label: "shadcn/ui", href: "https://ui.shadcn.com" },
  { icon: FiCpu, label: "TypeScript", href: "https://www.typescriptlang.org" },
  { icon: FiPackage, label: "React Icons", href: "https://react-icons.github.io/react-icons/" },
  { icon: FiExternalLink, label: "Vercel", href: "https://vercel.com" },
  { icon: FiBarChart2, label: "OpenPanel", href: "https://openpanel.dev" },
  { icon: FiBarChart2, label: "PostHog", href: "https://posthog.com" },
  { icon: FiGithub, label: "Source", href: "https://github.com/dipto-thakur" },
  { icon: FiShield, label: "MIT License", href: "https://opensource.org/license/mit" },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">

      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section aria-labelledby="hero-heading">

{/* Cover */}
<div className="relative overflow-hidden rounded-3xl">
  <div className="group relative">
    <img
      src={getCoverUrl(siteConfig.coverImage)}
      alt=""
      className="
        h-52
        w-full
        object-cover
        transition-transform
        duration-1000
        ease-[cubic-bezier(.22,1,.36,1)]
        group-hover:scale-[1.035]
        sm:h-60
      "
    />

    {/* Bottom fade */}
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute inset-0
        bg-gradient-to-t
        from-white
        via-white/25
        to-transparent
        dark:from-zinc-950
        dark:via-zinc-950/15
        dark:to-transparent
      "
    />

    {/* Soft vignette */}
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute inset-0
        bg-[radial-gradient(circle_at_top,transparent_25%,rgba(0,0,0,.06))]
        dark:bg-[radial-gradient(circle_at_top,transparent_30%,rgba(255,255,255,.03))]
      "
    />

    {/* Noise */}
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute inset-0
        opacity-[0.025]
        mix-blend-overlay
        [background-image:url('/noise.png')]
      "
    />
  </div>
</div>

{/* Profile */}
<div className="-mt-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
  <div className="flex items-end gap-6">

    {/* Avatar */}
    <div className="group relative">

      <div
        className="
          rounded-full
          bg-white/96
          p-2
          shadow-xl
          shadow-zinc-900/8
          ring-1
          ring-zinc-200/70
          backdrop-blur-xl
          transition-all
          duration-500
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:-translate-y-1
          group-hover:shadow-zinc-900/12
          group-hover:ring-zinc-300/80
          dark:bg-zinc-950/95
          dark:ring-zinc-800
          dark:shadow-black/30
          dark:group-hover:ring-zinc-700
        "
      >
        <img
          src={getAvatarUrl(siteConfig.profileImage, 120)}
          alt={siteConfig.name}
          className="
            h-28
            w-28
            rounded-full
            object-cover
            transition-all
            duration-700
            ease-[cubic-bezier(.22,1,.36,1)]
            group-hover:scale-[1.045]
            sm:h-32
            sm:w-32
          "
        />
      </div>

      {/* Online */}
      <div
        className="
          absolute
          bottom-2
          right-2
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          bg-white
          shadow-md
          dark:bg-zinc-950
        "
      >
        <span
          className="
            absolute
            h-3.5
            w-3.5
            animate-ping
            rounded-full
            bg-emerald-500/45
          "
        />

        <span
          className="
            relative
            h-3.5
            w-3.5
            rounded-full
            border-2
            border-white
            bg-emerald-500
            dark:border-zinc-950
          "
        />
      </div>

      {/* Glow */}
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          -z-10
          rounded-full
          bg-zinc-900/5
          opacity-0
          blur-2xl
          transition-opacity
          duration-500
          group-hover:opacity-100
          dark:bg-white/5
        "
      />
    </div>

    {/* Identity */}
    <div className="space-y-3">

      <div className="space-y-1.5">

        <h1
          id="hero-heading"
          className="
            text-4xl
            font-semibold
            tracking-[-0.055em]
            text-zinc-950
            dark:text-zinc-50
            sm:text-5xl
          "
        >
          {siteConfig.name}
        </h1>

        <div
          className="
            flex
            flex-wrap
            items-center
            gap-x-2
            gap-y-1
            text-[15px]
            text-zinc-500
            dark:text-zinc-400
          "
        >
          <span className="font-medium text-zinc-400 dark:text-zinc-500">
            Role
          </span>

          <span className="text-zinc-300 dark:text-zinc-700">
            •
          </span>

          <RoleFlip roles={siteConfig.roles} />
        </div>

      </div>

    </div>

  </div>
</div>

        {/* Quick Facts */}
        <div className="mt-8 grid overflow-hidden rounded-xl border border-zinc-100 dark:border-zinc-900 sm:grid-cols-3">
          {[
           {
            label: "Location",
            value: (
              <Link
                href={siteConfig.locationMap}
                external
                className="inline-flex items-center gap-1.5 text-zinc-800 transition-colors hover:text-zinc-950 dark:text-zinc-200 dark:hover:text-white"
              >
                <FiMapPin size={14} className="text-zinc-400" />
                {siteConfig.location}
              </Link>
            ),
          },
            { label: 'Focus',        value: siteConfig.currentFocus  },
            { label: 'Availability', value: siteConfig.availability  },
          ].map((item) => (
            <div
              key={item.label}
              className="border-r border-zinc-100 px-5 py-4 last:border-r-0 dark:border-zinc-900"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                {item.label}
              </p>
              <div className="mt-2 text-sm text-zinc-800 dark:text-zinc-200">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-10 max-w-2xl space-y-2">
          <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            {siteConfig.tagline}
          </p>
          <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            {siteConfig.description}
          </p>
        </div>

        {/* CTA + Socials */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              showExternalIcon={false}
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              View Work
              <FiArrowRight size={14} />
            </Link>

            <Link
              href="/contact"
              showExternalIcon={false}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
            >
              Contact
              <FiMail size={14} />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
  {socialLinks.map((social) => {
    const Icon = getSocialIcon(social.icon);
    const isExternal = social.url.startsWith("http") || social.url.startsWith("mailto:");

    return (
      <a
        key={social.label}
        href={social.url}
        target={social.url.startsWith("http") ? "_blank" : undefined}
        rel={social.url.startsWith("http") ? "noreferrer" : undefined}
        aria-label={social.label}
        title={social.label}
        className="group inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200/60 text-zinc-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 dark:border-zinc-800/60 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100 dark:focus-visible:ring-zinc-700"
      >
        <Icon size={15} className="transition-transform duration-200 group-hover:scale-105" />
      </a>
    );
  })}
</div>

        </div>
      </section>

      <Separator className="my-14" />

      {/* ─── Stack ────────────────────────────────────────────────── */}
      <section aria-labelledby="stack-heading">
          <SectionHeader
            id="stack-heading"
            title="Stack"
            description="Technologies, tools, and systems I use regularly."
          />

          <div className="mt-8 space-y-8">
            {stack.map((group, index) => (
              <div key={group.title} className="grid gap-4 sm:grid-cols-[140px_1fr]">
                <div className="space-y-1">
                  <p className="text-xs font-medium tracking-[0.14em] text-zinc-400 dark:text-zinc-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {group.items.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-sm text-zinc-500 transition-all duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
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

      <Separator className="my-14" />

      {/* ─── Experience ───────────────────────────────────────────── */}
      <section aria-labelledby="experience-heading">
        <SectionHeader
          id="experience-heading"
          title="Experience"
          description="Roles, teams, and contributions that shaped my journey."
          href="/experience"
        />

        <div className="mt-8 space-y-4">
          {experiences.slice(0, 2).map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
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

      <Separator className="my-14" />

      {/* ─── Selected Projects ────────────────────────────────────── */}
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

      <Separator className="my-14" />

      {/* ─── Writing ──────────────────────────────────────────────── */}
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

      <Separator className="my-14" />

      {/* ─── Testimonials ─────────────────────────────────────────── */}
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

      <Separator className="my-14" />

      {/* ─── Credits ──────────────────────────────────────────────── */}
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
        {credits.map(({ icon: Icon, label, href }) => {
          const content = (
            <>
              <Icon size={14} className="shrink-0" />
              <span className="hidden sm:inline">{label}</span>
            </>
          );

          const className =
            "inline-flex h-9 items-center justify-center gap-1.5 rounded-xl border border-zinc-200/60 px-2.5 sm:px-3 text-sm text-zinc-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-100/70 hover:text-zinc-900 dark:border-zinc-800/60 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100";

          return href ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={className}
            >
              {content}
            </a>
          ) : (
            <span
              key={label}
              aria-label={label}
              title={label}
              className={className}
            >
              {content}
            </span>
          );
        })}
      </div>

    </div>
  </div>
</section>

    </div>
  );
}