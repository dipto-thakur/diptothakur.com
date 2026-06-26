import { siteConfig, socialLinks } from '@/config/site';

import {
  FiGithub,
  FiX,
  FiRss,
  FiGlobe,
  FiLinkedin,  FiArrowRight,
  FiMapPin,
  FiMail,
  FiCode,   FiTwitter,
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

type IconComponent = React.ComponentType<{
  size?: number;
  className?: string;
}>;

const iconMap = {
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
} as const satisfies Record<string, IconComponent>;

const getIcon = (key: string): IconComponent =>
  iconMap[key as keyof typeof iconMap] ?? FiGlobe;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-100 dark:border-zinc-900">
      <div
        className="
          mx-auto
          max-w-4xl
          px-4
          py-8
          sm:px-6
        "
      >
        <div
          className="
            flex
            flex-col
            gap-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Identity */}
          <div className="space-y-1">
            <p
              className="
                text-sm
                font-medium
                text-zinc-900
                dark:text-zinc-100
              "
            >
              {siteConfig.name}
            </p>

            <p
              className="
                text-sm
                text-zinc-500
                dark:text-zinc-400
              "
            >
              {siteConfig.availability}
            </p>

            <p
              className="
                text-xs
                text-zinc-400
                dark:text-zinc-500
              "
            >
              © {new Date().getFullYear()} · Built with care.
            </p>
          </div>

          {/* Socials */}
          <nav
            aria-label="Social links"
            className="flex items-center gap-2"
          >
            {socialLinks.map((link) => {
              const Icon = getIcon(link.icon);

              return (
                <a
                  key={link.label}
                  href={link.url}
                  target={
                    link.url.startsWith('http')
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    link.url.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  aria-label={link.label}
                  title={link.label}
                  className="
                    inline-flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-zinc-200
                    text-zinc-500
                    transition-all
                    duration-200
                    hover:border-zinc-300
                    hover:text-zinc-900
                    dark:border-zinc-800
                    dark:text-zinc-400
                    dark:hover:border-zinc-700
                    dark:hover:text-zinc-100
                  "
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}