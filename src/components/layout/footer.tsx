import { siteConfig, socialLinks } from '@/config/site';
import { FiGithub, FiLinkedin, FiX, FiMail, FiGlobe, FiRss, FiArrowUpRight } from 'react-icons/fi';
import { FaDev, FaMedium, FaDiscord, FaYoutube, FaInstagram, FaFacebook, FaReddit, FaCodepen, FaStackOverflow } from 'react-icons/fa';
import { SiHashnode, SiLeetcode, SiCodeforces, SiBluesky, SiThreads } from 'react-icons/si';
import type { ComponentType } from 'react';

/* ── Icon map ──────────────────────────────────────────────────────── */
type IconComponent = ComponentType<{ size?: number; className?: string }>;

const iconMap = {
  github: FiGithub, linkedin: FiLinkedin, twitter: FiX,
  mail: FiMail, globe: FiGlobe, rss: FiRss,
  devto: FaDev, hashnode: SiHashnode, medium: FaMedium,
  codepen: FaCodepen, stackoverflow: FaStackOverflow,
  leetcode: SiLeetcode, codeforces: SiCodeforces,
  discord: FaDiscord, youtube: FaYoutube, instagram: FaInstagram,
  facebook: FaFacebook, threads: SiThreads, bluesky: SiBluesky, reddit: FaReddit,
} as const satisfies Record<string, IconComponent>;

const getIcon = (key: string): IconComponent =>
  iconMap[key as keyof typeof iconMap] ?? FiGlobe;

/* ── Data ──────────────────────────────────────────────────────────── */
const navLinks = [
  {
    heading: 'Work',
    links: [
      { label: 'Projects',    href: '/projects' },
      { label: 'Experience',  href: '/experience' },
      { label: 'Open Source', href: '/open-source' },
      { label: 'Case Studies',href: '/projects?filter=case-study' },
    ],
  },
  {
    heading: 'Me',
    links: [
      { label: 'About',       href: '/about' },
      { label: 'Stack',       href: '/#stack' },
      { label: 'Writing',     href: '/blog' },
      { label: 'Contact',     href: '/contact' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'GitHub',      href: 'https://github.com/dipto-thakur', external: true },
      { label: 'LinkedIn',    href: 'https://linkedin.com/in/dipto-thakur', external: true },
      { label: 'Twitter / X', href: 'https://x.com/dipto_thakur', external: true },
      { label: 'Email',       href: `mailto:${siteConfig.email}`, external: true },
    ],
  },
];

/* ── Footer ────────────────────────────────────────────────────────── */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">

        {/* ── Upper: brand + nav ─────────────────────────────────── */}
        <div className="grid gap-10 py-12 sm:grid-cols-[1fr_auto] sm:gap-16 lg:grid-cols-[1fr_auto_auto_auto]">

          {/* Brand column */}
          <div className="space-y-5">

            {/* Wordmark */}
            <div>
              <p className="text-[13px] font-semibold tracking-[-0.02em] text-zinc-900 dark:text-zinc-100">
                {siteConfig.name}
              </p>
              <p className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-zinc-400 dark:text-zinc-500">
                {siteConfig.roles?.[0] ?? 'Developer & Designer'}
              </p>
            </div>

            {/* Short bio line */}
            <p className="max-w-[22ch] text-[13px] leading-6 text-zinc-500 dark:text-zinc-400">
              Building thoughtful interfaces and systems from{' '}
              <span className="text-zinc-700 dark:text-zinc-300">{siteConfig.location}</span>.
            </p>
          </div>

          {/* Nav columns — collapse on mobile into 2 col grid */}
          <div className="col-span-full grid grid-cols-3 gap-8 sm:col-span-1 lg:contents">
            {navLinks.map((group) => (
              <div key={group.heading}>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                  {group.heading}
                </p>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="group inline-flex items-center gap-1 text-[13px] text-zinc-500 transition-colors duration-150 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                      >
                        {link.label}
                        {link.external && (
                          <FiArrowUpRight
                            size={11}
                            className="opacity-0 transition-all duration-200 group-hover:-translate-y-px group-hover:translate-x-px group-hover:opacity-60"
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* ── Divider ────────────────────────────────────────────── */}
        <div className="h-px w-full bg-zinc-100 dark:bg-zinc-900" />

        {/* ── Lower: copyright + socials ─────────────────────────── */}
        <div className="flex flex-col-reverse gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright */}
          <p className="text-[12px] text-zinc-400 dark:text-zinc-500">
            © {year}{' '}
            <span className="text-zinc-500 dark:text-zinc-400">{siteConfig.name}</span>
            {' '}· Crafted with intention.
          </p>

          {/* Social icons */}
          <nav aria-label="Social links" className="flex items-center justify-between gap-1">
            {socialLinks.map((link) => {
              const Icon = getIcon(link.icon);
              const isExternal = link.url.startsWith('http');
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  title={link.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-all duration-150 hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-500 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-300"
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </nav>

        </div>

      </div>
    </footer>
  );
}