export type ProjectStatus = 'active' | 'completed' | 'archived' | 'wip';

export interface Project {
  id: string;
  logo?: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  role: string;
  startDate: string;
  endDate?: string;
  technologies: string[];
  categories: string[];
  images: ProjectImage[];
  externalLinks: ExternalLink[];
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  metrics?: {
    value: string;
    label: string;
  }[];
  lessonsLearned: string[];
  featured: boolean;
  features?: string[];
  architecture?: string[];
  tradeOffs?: string[];
  nextSteps?: string[];
  seoKeywords?: string[];

  timeline?: {
  duration: string;
  year: string;
};

}
type StackItem = {
  label: string;
  href: string;
};

type StackCategory = {
  title: string;
  items: StackItem[];
};

export interface StackGroup {
  title: string;
  items: StackItem[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ExternalLink {
  label: string;
  url: string;
  type: 'github' | 'live' | 'docs' | 'case-study' | 'other';
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  readingTime: number;
  featured: boolean;
}

export interface Experience {
  id: string;
  logo?: string;
  company: string;
  role: string;
  employmentType: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
  startDate: string;
  endDate?: string;
  current: boolean;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
  externalLinks: ExternalLink[];
  location?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  avatar?: string;
  quote: string;
  verified: boolean;
  sourceUrl?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
