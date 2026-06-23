import { MetadataRoute } from 'next';
import { topCities } from './clima/[slug]/page';
import { guideSlugs } from '@/data/guides';
import { countrySlugs } from '@/data/countries';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.clima-hoy.com';
  const currentDate = new Date();

  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: currentDate, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/clima`, lastModified: currentDate, changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/guias`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/glosario`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/lluvia`, lastModified: currentDate, changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/acerca`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/contacto`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.4 },
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

  const cityMananaRoutes = topCities.map(city => ({
    url: `${baseUrl}/clima/${city}/manana`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  const guideRoutes = guideSlugs.map(slug => ({
    url: `${baseUrl}/guias/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const countryRoutes = countrySlugs.map(slug => ({
    url: `${baseUrl}/clima-pais/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...cityRoutes, ...cityMananaRoutes, ...guideRoutes, ...countryRoutes];
}
