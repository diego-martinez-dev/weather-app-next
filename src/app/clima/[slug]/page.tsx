import type { Metadata } from 'next';
import Link from 'next/link';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import CityPageClient from './CityPageClient';
import { LightBulbIcon, CalendarIcon, CloudIcon, QuestionMarkCircleIcon, BookOpenIcon, MapPinIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';
import { getCityDescription, getCityTouristTip } from '@/data/cityDescriptions';
import { getCityClimate } from '@/data/cityClimate';
import { getGuideBySlug } from '@/data/guides';
import { getCountryForCity } from '@/data/countries';

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
    title: `Clima en ${city} hoy: temperatura, el tiempo y pronóstico por hora`,
    description: `El tiempo en ${city} hoy en tiempo real: temperatura actual, ¿va a llover?, viento, humedad y pronóstico por horas y para los próximos 7 días.`,
    alternates: {
      canonical: `https://www.clima-hoy.com/clima/${slug}`,
    },
    openGraph: {
      title: `Clima y el tiempo en ${city} hoy`,
      description: `Temperatura actual, lluvia y pronóstico por horas en ${city}.`,
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
  const country = getCountryForCity(slug);
  const description = getCityDescription(slug);
  const touristTip = getCityTouristTip(slug);
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
      <TopMenu />
      <div className="home-two-columns">
        <CityPageClient slug={slug} cityName={city} />

        <h1>Clima en {city} hoy</h1>

        <p style={{ maxWidth: 900, margin: '0 auto 16px', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-text)', textAlign: 'center' }}>
          Consulta el tiempo en {city} en tiempo real: temperatura actual, probabilidad de lluvia,
          viento y humedad, además del pronóstico por horas y para los próximos días. ¿Va a llover
          hoy en {city}? Mira la previsión actualizada del clima.
        </p>

        {(description || touristTip) && (
          <div style={{ maxWidth: 900, margin: '8px auto 20px', padding: '16px 20px', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-text)', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
            {description && (
              <p style={{ margin: touristTip ? '0 0 12px 0' : '0' }}>
                <LightBulbIcon style={{ width: '1.2em', height: '1.2em', display: 'inline', verticalAlign: '-0.2em', marginRight: 6 }} />
                <strong>Tip:</strong> {description}
              </p>
            )}
            {touristTip && (
              <p style={{ margin: '0' }}>
                <LightBulbIcon style={{ width: '1.2em', height: '1.2em', display: 'inline', verticalAlign: '-0.2em', marginRight: 6 }} />
                <strong>Tip para turistas:</strong> {touristTip}
              </p>
            )}
          </div>
        )}

        {climate && (
          <div style={{ maxWidth: 900, margin: '0 auto 20px' }}>
            {(climate.bestTimeToVisit || climate.rainySeasons || climate.avgTempRange) && (
              <div style={{ padding: '16px 20px', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-text)', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)', marginBottom: 12 }}>
                {climate.avgTempRange && (
                  <p style={{ margin: '0 0 8px' }}>
                    <CalendarIcon style={{ width: '1.2em', height: '1.2em', display: 'inline', verticalAlign: '-0.2em', marginRight: 6 }} />
                    <strong>Temperatura típica:</strong> {climate.avgTempRange}
                  </p>
                )}
                {climate.bestTimeToVisit && (
                  <p style={{ margin: climate.rainySeasons ? '0 0 8px' : '0' }}>
                    <CalendarIcon style={{ width: '1.2em', height: '1.2em', display: 'inline', verticalAlign: '-0.2em', marginRight: 6 }} />
                    <strong>Mejor época para visitar:</strong> {climate.bestTimeToVisit}
                  </p>
                )}
                {climate.rainySeasons && (
                  <p style={{ margin: '0' }}>
                    <CloudIcon style={{ width: '1.2em', height: '1.2em', display: 'inline', verticalAlign: '-0.2em', marginRight: 6 }} />
                    <strong>Temporada de lluvias:</strong> {climate.rainySeasons}
                  </p>
                )}
              </div>
            )}
            {climate.faq?.length > 0 && (
              <div style={{ padding: '16px 20px', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-text)', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
                <h2 style={{ margin: '0 0 12px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <QuestionMarkCircleIcon style={{ width: '1.2em', height: '1.2em' }} />
                  Preguntas frecuentes sobre el clima en {city}
                </h2>
                {climate.faq.map(({ question, answer }, i) => (
                  <details key={i} style={{ marginBottom: i < climate.faq.length - 1 ? 8 : 0 }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{question}</summary>
                    <p style={{ margin: '6px 0 0 0', paddingLeft: 16 }}>{answer}</p>
                  </details>
                ))}
              </div>
            )}
          </div>
        )}

        {relatedGuides.length > 0 && (
          <div style={{ maxWidth: 900, margin: '24px auto 8px', padding: '16px 20px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
            <h2 style={{ margin: '0 0 12px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
              <BookOpenIcon style={{ width: '1.2em', height: '1.2em' }} />
              Guías relacionadas
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 8px' }}>
              {relatedGuides.map(({ slug: gSlug, title }) => (
                <li key={gSlug} style={{ marginBottom: 6 }}>
                  <Link href={`/guias/${gSlug}`} style={{ color: 'var(--color-primary, #1a73e8)', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#888' }}>
              <Link href="/glosario" style={{ color: 'var(--color-primary, #1a73e8)', textDecoration: 'none' }}>Glosario meteorológico</Link>
              {' · '}
              <Link href="/faq" style={{ color: 'var(--color-primary, #1a73e8)', textDecoration: 'none' }}>Preguntas frecuentes</Link>
            </p>
          </div>
        )}

        {country && country.cities.length > 1 && (
          <div style={{ maxWidth: 900, margin: '16px auto 8px', padding: '16px 20px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
            <h2 style={{ margin: '0 0 10px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
              <MapPinIcon style={{ width: '1.2em', height: '1.2em' }} />
              Clima en otras ciudades de {country.name}
            </h2>
            <p style={{ margin: '0 0 12px', fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-text)' }}>
              Consulta el tiempo de otras ciudades de {country.name} o lee la{' '}
              <Link href={`/clima-pais/${country.slug}`} style={{ color: 'var(--color-primary, #1a73e8)', textDecoration: 'none' }}>
                guía del clima de {country.name}
              </Link>{' '}
              con sus estaciones y temporada de lluvias.
            </p>
            <div className="cities-grid">
              {country.cities
                .filter(c => c.slug !== slug)
                .slice(0, 11)
                .map(c => (
                  <Link key={c.slug} href={`/clima/${c.slug}`} className="city-card">
                    <BuildingOffice2Icon style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.1em' }} /> {c.name}
                  </Link>
                ))}
            </div>
          </div>
        )}

        <div style={{ maxWidth: 900, margin: '16px auto 8px', padding: '16px 20px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
          <h2 style={{ margin: '0 0 8px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
            <CloudIcon style={{ width: '1.2em', height: '1.2em' }} />
            ¿Está lloviendo en {city}? Radar en vivo
          </h2>
          <p style={{ margin: '0 0 12px', fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-text)' }}>
            Consulta el mapa de lluvia en vivo para {city}: ve dónde está lloviendo en la zona y cómo
            avanzan las precipitaciones, con animación y zoom a nivel de ciudad. Útil para saber si
            salir con paraguas o esperar a que escampe.
          </p>
          <Link
            href={`/lluvia?ciudad=${slug}`}
            style={{ display: 'inline-block', background: '#1a73e8', color: 'white', borderRadius: 8, padding: '8px 16px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}
          >
            Ver radar de lluvia en {city} →
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
