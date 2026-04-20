import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://clima-hoy.com';
  
  // Fecha actual para el sitemap
  const currentDate = new Date();
  
  // Ciudades principales para el sitemap (puedes expandir esta lista)
  const cities = [
    'Bogota',
    'Medellin',
    'Cali',
    'Barranquilla',
    'Cartagena',
    'Madrid',
    'Barcelona',
    'London',
    'Paris',
    'New-York',
    'Tokyo',
    'Berlin',
    'Rome',
    'Buenos-Aires',
    'Mexico-City',
    'Santiago',
    'Lima',
    'Quito'
  ];
  
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
  
  // Agregar URLs de ciudades
  const cityRoutes = cities.map(city => ({
    url: `${baseUrl}/?city=${city}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));
  
  return [...routes, ...cityRoutes];
}
