import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    logo: 'https://ik.imagekit.io/xonqtzzvs/hhclogo.png',
    company: 'Acme Infrastructure',
    role: 'Senior Software Engineer',
    employmentType: 'full-time',
    startDate: '2022-05-01',
    current: true,
    location: 'San Francisco, CA (Hybrid)',
    responsibilities: [
      'Designed and maintained the data pipeline infrastructure processing 100M+ events per day.',
      'Led a 3-person team delivering the distributed task queue that replaced a legacy cron system.',
      'Defined engineering standards for observability and on-call practices across the platform team.',
      'Mentored two junior engineers through their first production incident ownership experiences.',
    ],
    achievements: [
      'Reduced mean time to recovery (MTTR) for pipeline incidents from 47 minutes to 11 minutes.',
      'Delivered the task queue rewrite 2 weeks ahead of schedule with zero production incidents.',
      'Established the team\'s first structured runbook library — now used across 6 teams.',
    ],
    skills: ['Go', 'Kubernetes', 'Redis', 'PostgreSQL', 'Prometheus', 'Terraform'],
    externalLinks: [
      { label: 'Acme Infrastructure', url: 'https://placeholder.example.com', type: 'other' },
    ],
  },
  {
    id: 'exp-2',
    logo: 'https://ik.imagekit.io/xonqtzzvs/hhclogo.png',

    company: 'Buildworks',
    role: 'Software Engineer',
    employmentType: 'full-time',
    startDate: '2020-03-01',
    endDate: '2022-04-01',
    current: false,
    location: 'Remote',
    responsibilities: [
      'Built and maintained the customer-facing React application serving 20k+ daily active users.',
      'Owned the design system foundations library, shared across four product teams.',
      'Contributed to backend API development in Node.js and PostgreSQL.',
      'Ran weekly frontend guild meetings to align engineering and design on component standards.',
    ],
    achievements: [
      'The design system reduced per-feature UI implementation time by ~40% in adopting teams.',
      'Improved Lighthouse performance score for the main product from 61 to 94.',
      'Led the migration from Create React App to Vite, cutting cold build times by 8x.',
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Storybook'],
    externalLinks: [
      { label: 'Buildworks', url: 'https://placeholder.example.com', type: 'other' },
    ],
  },
  {
    id: 'exp-3',
    logo: 'https://ik.imagekit.io/xonqtzzvs/hhclogo.png',
    company: 'Freelance',
    role: 'Full-Stack Developer',
    employmentType: 'freelance',
    startDate: '2019-01-01',
    endDate: '2020-02-01',
    current: false,
    location: 'Remote',
    responsibilities: [
      'Delivered end-to-end web applications for 8 clients across SaaS, e-commerce, and content verticals.',
      'Managed full project lifecycle from requirements through deployment and handoff.',
      'Provided ongoing maintenance and support contracts for 3 long-term clients.',
    ],
    achievements: [
      'Maintained a 5-star client rating across all engagements.',
      'Built a custom inventory management system that saved a client 15 staff-hours per week.',
    ],
    skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Vercel'],
    externalLinks: [],
  },
];
