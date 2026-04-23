import { MetadataRoute } from 'next';
import { topCities } from './clima/[slug]/page';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.clima-hoy.com';
  const currentDate = new Date();

  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: currentDate, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/clima`, lastModified: currentDate, changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.3 },
    { url: `${baseUrl}/data-sources`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.3 },
  ];

  const cityRoutes = topCities.map(city => ({
    url: `${baseUrl}/clima/${city}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...cityRoutes];
}
