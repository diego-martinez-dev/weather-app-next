import { MetadataRoute } from 'next';

// Ciudades por categoría
const majorCities = [
  'bogota', 'medellin', 'cali', 'barranquilla', 'cartagena',
  'madrid', 'barcelona', 'london', 'paris', 'new-york',
  'tokyo', 'berlin', 'rome', 'buenos-aires', 'mexico-city'
];

const mediumCities = [
  'santiago', 'lima', 'quito', 'montevideo', 'brasilia',
  'bucaramanga', 'pereira', 'manizales', 'cucuta', 'ibague',
  'santa-marta', 'sincelejo', 'valledupar', 'riohacha', 'quibdo'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.clima-hoy.com';
  const currentDate = new Date();
  
  // URLs principales
  const routes = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/clima`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/data-sources`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ];
  
  // Ciudades grandes (priority 0.9)
  const majorCityRoutes = majorCities.map(city => ({
    url: `${baseUrl}/clima/${city}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));
  
  // Ciudades medianas (priority 0.8)
  const mediumCityRoutes = mediumCities.map(city => ({
    url: `${baseUrl}/clima/${city}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));
  
  return [...routes, ...majorCityRoutes, ...mediumCityRoutes];
}
