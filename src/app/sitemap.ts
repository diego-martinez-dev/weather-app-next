import { MetadataRoute } from 'next';

// Lista de ciudades principales (puedes expandirla)
const cities = [
  'bogota', 'medellin', 'cali', 'barranquilla', 'cartagena',
  'madrid', 'barcelona', 'london', 'paris', 'new-york',
  'tokyo', 'berlin', 'rome', 'buenos-aires', 'mexico-city',
  'santiago', 'lima', 'quito', 'montevideo', 'brasilia',
  'bucaramanga', 'pereira', 'manizales', 'cucuta', 'ibague',
  'santa-marta', 'sincelejo', 'valledupar', 'rio-hacha', 'quibdo'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.clima-hoy.com';
  const currentDate = new Date();
  
  // URLs principales
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/data-sources`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];
  
  // URLs de ciudades
  const cityRoutes = cities.map(city => ({
    url: `${baseUrl}/clima/${city}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));
  
  return [...routes, ...cityRoutes];
}
