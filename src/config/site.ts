import type { NavItem, SocialLink } from '@/types';

export const siteConfig = {

  name: 'Dipto Thakur',
  title: 'Dipto Thakur - Full-Stack Devloper',
  description:
    'Full-stack engineer focused on building reliable, well-documented software. I write about engineering, systems thinking, and lessons from production.',
  url: 'https://alexmorgan.dev',
  email: 'dkt.officials@gmail.com',
  location: 'Kolkata, India',
  locationMap:
  "https://maps.app.goo.gl/tFCzraReBJBdmLey9",
  availability: 'Open to opportunities',
  roles: [
    'Full-Stack Developer',
    'Frontend Engineer',
    'UI Engineer',
    'Technical Writer',
  ] as const,
  tagline: 'I build Digital Products that holds up.',
  currentFocus: 'Build - Solve - Elevate.',
  imagekit: {
    urlEndpoint: 'https://ik.imagekit.io/xonqtzzvs',
  },
  profileImage: 'https://ik.imagekit.io/xonqtzzvs/diptothakur.png',
  coverImage: 'https://ik.imagekit.io/xonqtzzvs/diptothakur.png?updatedAt=1782056514254',
} as const;

export const navItems: NavItem[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Blog', href: '/blog' },
  { label: 'Open Source', href: '/open-source' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/xxx', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/xxx', icon: 'linkedin' },
  { label: 'X / Twitter', url: 'https://x.com/xxx', icon: 'twitter' },
 // { label: 'Portfolio', url: 'https://yourdomain.com', icon: 'globe' },
  { label: 'Dev.to', url: 'https://dev.to/xxx', icon: 'devto' },
  { label: 'Hashnode', url: 'https://xxx.hashnode.dev', icon: 'hashnode' },
  { label: 'Medium', url: 'https://medium.com/@xxx', icon: 'medium' },
 // { label: 'Stack Overflow', url: 'https://stackoverflow.com/users/xxx', icon: 'stackoverflow' },
//  { label: 'LeetCode', url: 'https://leetcode.com/u/xxx', icon: 'leetcode' },
 { label: 'YouTube', url: 'https://youtube.com/@xxx', icon: 'youtube' },
  { label: 'Instagram', url: 'https://instagram.com/xxx', icon: 'instagram' },
  { label: 'Facebook', url: 'https://facebook.com/xxx', icon: 'facebook' },
  { label: 'Threads', url: 'https://threads.net/@xxx', icon: 'threads' },
  { label: 'Reddit', url: 'https://reddit.com/u/xxx', icon: 'reddit' },
];

