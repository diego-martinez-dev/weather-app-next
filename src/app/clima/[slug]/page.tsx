import type { Metadata } from 'next';
import CityPageClient from './CityPageClient';
import { getCityDescription, getCityTouristTip } from '@/data/cityDescriptions';

function slugToCity(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export const topCities = [
  // Colombia
  'bogota', 'medellin', 'cali', 'barranquilla', 'cartagena',
  'bucaramanga', 'pereira', 'manizales', 'cucuta', 'ibague',
  'santa-marta', 'villavicencio', 'armenia', 'pasto', 'monteria',
  'sincelejo', 'valledupar', 'neiva', 'popayan', 'tunja',
  // España
  'madrid', 'barcelona', 'valencia', 'sevilla', 'bilbao',
  'malaga', 'zaragoza', 'alicante', 'granada', 'murcia',
  // Latinoamérica
  'mexico-city', 'buenos-aires', 'santiago', 'lima', 'bogota',
  'caracas', 'quito', 'montevideo', 'asuncion', 'la-paz',
  'brasilia', 'sao-paulo', 'rio-de-janeiro', 'guadalajara', 'monterrey',
  'havana', 'santo-domingo', 'san-jose', 'panama-city', 'managua',
  // Argentina adicional
  'cordoba', 'rosario', 'mendoza',
  // Chile adicional
  'valparaiso', 'concepcion', 'antofagasta',
  // Brasil adicional
  'salvador',
  // Perú
  'arequipa', 'cusco', 'trujillo',
  // Ecuador
  'guayaquil', 'cuenca', 'manta',
  // México adicional
  'puebla',
  // Mundo
  'new-york', 'london', 'paris', 'tokyo', 'berlin',
  'rome', 'amsterdam', 'dubai', 'sydney', 'toronto',
  // Estados Unidos adicional
  'los-angeles', 'chicago', 'miami', 'san-francisco',
  // Canadá adicional
  'vancouver', 'montreal', 'calgary', 'ottawa',
];

export async function generateStaticParams() {
  return topCities.map(slug => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const city = slugToCity(slug);

  return {
    title: `Clima en ${city} hoy | Temperatura y pronóstico - Clima Hoy`,
    description: `Consulta el clima actual en ${city}: temperatura, humedad, viento y pronóstico de 5 días. Información actualizada en tiempo real.`,
    alternates: {
      canonical: `https://www.clima-hoy.com/clima/${slug}`,
    },
    openGraph: {
      title: `Clima en ${city} hoy - Clima Hoy`,
      description: `Temperatura actual, lluvia y pronóstico del tiempo en ${city}.`,
      url: `https://www.clima-hoy.com/clima/${slug}`,
      siteName: 'Clima Hoy',
      locale: 'es_CO',
      type: 'website',
    },
  };
}

export default async function CityPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const city = slugToCity(slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Clima en ${city} hoy`,
    description: `Temperatura actual y pronóstico del tiempo en ${city}. Actualizado en tiempo real.`,
    url: `https://www.clima-hoy.com/clima/${slug}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Clima Hoy',
      url: 'https://www.clima-hoy.com',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.clima-hoy.com' },
        { '@type': 'ListItem', position: 2, name: 'Clima', item: 'https://www.clima-hoy.com/clima' },
        { '@type': 'ListItem', position: 3, name: city, item: `https://www.clima-hoy.com/clima/${slug}` },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CityPageClient slug={slug} description={getCityDescription(slug)} touristTip={getCityTouristTip(slug)} />
    </>
  );
}
