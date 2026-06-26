import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { projects } from '@/content/projects';
import { blogPosts } from '@/content/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, '');

  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/open-source`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(
      project.endDate ??
      project.startDate ??
      now
    ),
    changeFrequency:
      project.status === 'active'
        ? ('monthly' as const)
        : ('yearly' as const),
    priority: project.featured ? 0.8 : 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(
      post.updatedAt ??
      post.publishedAt
    ),
    changeFrequency: 'monthly',
    priority: post.featured ? 0.7 : 0.6,
  }));

  return [
    ...staticPages,
    ...projectPages,
    ...blogPages,
  ];
}