import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://asifcontracting.com';

  const staticPages = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/home-improvement`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/new-construction`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/remodeling`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/alterations`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/interior-work`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/exterior-work`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/portfolio`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/testimonials`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/get-quote`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/service-areas`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/service-areas/manhattan`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/service-areas/brooklyn`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/service-areas/queens`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/service-areas/bronx`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/service-areas/staten-island`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  return staticPages.map((page) => ({
    ...page,
    lastModified: new Date(),
  }));
}
