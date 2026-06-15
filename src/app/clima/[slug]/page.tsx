import type { Metadata } from 'next';
import CityPageClient from './CityPageClient';
import { getCityDescription, getCityTouristTip } from '@/data/cityDescriptions';
import { getCityClimate } from '@/data/cityClimate';
import { getGuideBySlug } from '@/data/guides';

const highAltitudeSlugs = new Set(['bogota', 'quito', 'la-paz', 'cusco', 'arequipa', 'cuenca', 'tunja', 'manizales', 'pasto', 'popayan', 'armenia']);
const tropicalBeachSlugs = new Set(['cartagena', 'santa-marta', 'barranquilla', 'havana', 'santo-domingo', 'managua', 'panama-city', 'san-jose', 'miami', 'manta', 'guayaquil', 'rio-de-janeiro', 'salvador', 'dubai', 'sydney']);
const colombiaSlugs = new Set(['bogota', 'medellin', 'cali', 'barranquilla', 'cartagena', 'bucaramanga', 'pereira', 'manizales', 'cucuta', 'ibague', 'santa-marta', 'villavicencio', 'armenia', 'pasto', 'monteria', 'sincelejo', 'valledupar', 'neiva', 'popayan', 'tunja', 'riohacha']);
const europeSlugs = new Set(['madrid', 'barcelona', 'valencia', 'sevilla', 'bilbao', 'malaga', 'zaragoza', 'alicante', 'granada', 'murcia', 'london', 'paris', 'berlin', 'rome', 'amsterdam']);
const latamSlugs = new Set(['mexico-city', 'buenos-aires', 'santiago', 'lima', 'caracas', 'montevideo', 'asuncion', 'brasilia', 'sao-paulo', 'guadalajara', 'monterrey', 'cordoba', 'rosario', 'mendoza', 'valparaiso', 'concepcion', 'antofagasta', 'trujillo', 'puebla', 'toronto', 'vancouver', 'montreal', 'calgary', 'ottawa']);

function getRelatedGuideSlugs(slug: string): string[] {
  if (highAltitudeSlugs.has(slug)) {
    return ['como-afecta-la-altitud-al-clima', 'por-que-hace-mas-frio-en-la-montana', 'como-vestirse-segun-la-sensacion-termica'];
  }
  if (tropicalBeachSlugs.has(slug)) {
    return ['mejores-meses-para-viajar-a-la-playa-en-latinoamerica', 'que-es-la-humedad-y-por-que-el-calor-humedo-agobia-mas', 'como-se-forman-las-tormentas-electricas'];
  }
  if (colombiaSlugs.has(slug)) {
    return ['clima-de-colombia-regiones-y-temporadas', 'ciudades-mas-lluviosas-de-colombia', 'el-nino-la-nina-que-son-y-como-afectan-latinoamerica'];
  }
  if (europeSlugs.has(slug)) {
    return ['diferencia-entre-clima-y-tiempo', 'como-elegir-epoca-del-ano-para-viajar-segun-el-clima', 'como-vestirse-segun-la-sensacion-termica'];
  }
  if (latamSlugs.has(slug)) {
    return ['ciudades-con-el-mejor-clima-de-latinoamerica', 'el-nino-la-nina-que-son-y-como-afectan-latinoamerica', 'como-elegir-epoca-del-ano-para-viajar-segun-el-clima'];
  }
  return ['diferencia-entre-clima-y-tiempo', 'que-es-la-sensacion-termica', 'tipos-de-nubes-y-que-clima-anuncian'];
}

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
  'mexico-city', 'buenos-aires', 'santiago', 'lima', 'caracas',
  'quito', 'montevideo', 'asuncion', 'la-paz',
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
    title: `Clima en ${city} hoy — Pronóstico por hora y 7 días | Clima Hoy`,
    description: `¿Qué temperatura hace en ${city} hoy? Consulta el pronóstico del tiempo actualizado: lluvia, viento, humedad y pronóstico para el fin de semana. Información en tiempo real.`,
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
  const climate = getCityClimate(slug);
  const relatedGuides = getRelatedGuideSlugs(slug)
    .map(s => { const g = getGuideBySlug(s); return g ? { slug: s, title: g.title.es } : null; })
    .filter(Boolean) as { slug: string; title: string }[];

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Clima en ${city} hoy`,
    description: `¿Qué temperatura hace en ${city} hoy? Pronóstico del tiempo actualizado: lluvia, viento, humedad y forecast para el fin de semana.`,
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

  const faqJsonLd = climate?.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: climate.faq.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <CityPageClient
        slug={slug}
        description={getCityDescription(slug)}
        touristTip={getCityTouristTip(slug)}
        climate={climate}
        relatedGuides={relatedGuides}
      />
    </>
  );
}
