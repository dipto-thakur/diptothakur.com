import {
    FiCode,
    FiZap,
    FiCpu,
    FiPackage,
    FiExternalLink,
    FiBarChart2,
    FiGithub,
    FiShield,
  } from 'react-icons/fi';
  import type { IconType } from 'react-icons';
  
  export interface Credit {
    icon: IconType;
    label: string;
    href: string;
  }
  
  export const credits: Credit[] = [
    { icon: FiCode,        label: 'Tailwind CSS',  href: 'https://tailwindcss.com' },
    { icon: FiZap,         label: 'Next.js',       href: 'https://nextjs.org' },
    { icon: FiCode,        label: 'shadcn/ui',     href: 'https://ui.shadcn.com' },
    { icon: FiCpu,         label: 'TypeScript',    href: 'https://www.typescriptlang.org' },
    { icon: FiPackage,     label: 'React Icons',   href: 'https://react-icons.github.io/react-icons/' },
    { icon: FiExternalLink,label: 'Vercel',        href: 'https://vercel.com' },
    { icon: FiBarChart2,   label: 'OpenPanel',     href: 'https://openpanel.dev' },
    { icon: FiBarChart2,   label: 'PostHog',       href: 'https://posthog.com' },
    { icon: FiGithub,      label: 'Source',        href: 'https://github.com/dipto-thakur' },
    { icon: FiShield,      label: 'MIT License',   href: 'https://opensource.org/license/mit' },
  ];