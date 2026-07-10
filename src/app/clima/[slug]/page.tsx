import type { Metadata } from 'next';
import Link from 'next/link';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import CityPageClient from './CityPageClient';
import WindyMap from '@/components/WindyMap';
import { LightBulbIcon, CalendarIcon, CloudIcon, QuestionMarkCircleIcon, BookOpenIcon, MapPinIcon, BuildingOffice2Icon, TableCellsIcon } from '@heroicons/react/24/outline';
import { getCityDescription, getCityTouristTip } from '@/data/cityDescriptions';
import { getCityClimate } from '@/data/cityClimate';
import { getCityMonthly, MONTHS } from '@/data/cityMonthlyClimate';
import { getGuideBySlug } from '@/data/guides';
import { getCountryForCity } from '@/data/countries';
import { isSnowCity } from '@/data/snowCities';

const snowCityCoords: Record<string, { lat: number; lon: number }> = {
  'bariloche': { lat: -41.1335, lon: -71.3103 },
  'ushuaia': { lat: -54.8019, lon: -68.3030 },
  'san-martin-de-los-andes': { lat: -40.1572, lon: -71.3545 },
  'villa-la-angostura': { lat: -40.7533, lon: -71.6476 },
  'esquel': { lat: -42.9069, lon: -71.3197 },
  'el-bolson': { lat: -41.9602, lon: -71.5335 },
  'el-calafate': { lat: -50.3385, lon: -72.2648 },
  'farellones': { lat: -33.3522, lon: -70.3147 },
  'coyhaique': { lat: -45.5712, lon: -72.0682 },
  'punta-arenas': { lat: -53.1638, lon: -70.9171 },
  'new-york': { lat: 40.7128, lon: -74.0060 },
  'chicago': { lat: 41.8781, lon: -87.6298 },
  'denver': { lat: 39.7392, lon: -104.9903 },
  'boston': { lat: 42.3601, lon: -71.0589 },
  'minneapolis': { lat: 44.9778, lon: -93.2650 },
  'buffalo': { lat: 42.8864, lon: -78.8784 },
};

const snowCityIntros: Record<string, string> = {
  'bariloche': 'Bariloche es el principal destino de esquí de Latinoamérica. El Cerro Catedral, a 20 km de la ciudad, opera de junio a septiembre con más de 100 pistas. La acumulación de nieve puede superar los 3 metros en la temporada. Fuera del invierno, los lagos y bosques andinos hacen de Bariloche un destino espectacular para el trekking veraniego.',
  'ushuaia': 'Ushuaia, la ciudad más austral del mundo, tiene nieve garantizada entre junio y septiembre. El Cerro Castor es el centro de esquí más austral del planeta. Incluso en pleno verano pueden caer nevadas en las cumbres cercanas, y el Canal Beagle puede verse con nieve en sus orillas entre mayo y octubre.',
  'san-martin-de-los-andes': 'El centro de esquí Chapelco, a 20 km de la villa, ofrece esquí entre junio y septiembre con vistas al lago Lacar y la cordillera. La nieve es abundante y de buena calidad, con un ambiente familiar y menos masificado que Bariloche. En invierno, el pueblo patagónico cubierto de nieve tiene un encanto especial.',
  'villa-la-angostura': 'El Cerro Bayo permite esquiar entre junio y septiembre en un entorno de bosque andino y lago Nahuel Huapi. Las nevadas pueden cubrir el pueblo y los senderos de arrayanes en invierno, creando paisajes de postal. La temporada de nieve transforma esta pequeña villa en un destino de montaña íntimo y tranquilo.',
  'esquel': 'La Hoya es uno de los centros de esquí menos conocidos pero más auténticos de la Patagonia: nieve liviana y seca, sin aglomeraciones y con precios accesibles. Opera de junio a septiembre. En el Parque Nacional Los Alerces cercano, la nieve cubre los senderos en invierno; algunos quedan cortados hasta octubre.',
  'el-bolson': 'El Bolsón recibe nevada en las cumbres que lo rodean durante el invierno austral (junio–agosto). No tiene centro de esquí propio, pero el Cerro Piltriquitrón y otros picos cercanos acumulan nieve considerable. El pueblo tiene un microclima más cálido que el resto de la Patagonia, lo que lo hace único.',
  'el-calafate': 'El Calafate y el Glaciar Perito Moreno son un destino glaciar más que un destino de esquí. Las montañas cercanas acumulan nieve en invierno y el frío patagónico puede ser intenso. El Fitz Roy, a 220 km en El Chaltén, tiene nieve en sus cumbres casi todo el año. El invierno permite visitar el glaciar con mucho menos turismo.',
  'farellones': 'Farellones es la localidad que da acceso a tres grandes centros de esquí chilenos: El Colorado, La Parva y Valle Nevado. En invierno austral (junio–octubre) la nieve puede acumularse varios metros a 2.470 metros de altitud. Los días despejados permiten ver los centros de esquí y la cordillera nevada desde el pueblo.',
  'coyhaique': 'Coyhaique tiene nevadas frecuentes entre junio y agosto que pueden cubrir la ciudad y los caminos rurales. Las montañas de la región de Aysén acumulan nieve abundante, transformando el paisaje en un invierno blanco excepcional. La nieve cierra algunos caminos de la Carretera Austral en invierno, lo que debe tenerse en cuenta al planificar.',
  'punta-arenas': 'Punta Arenas y sus alrededores reciben nieve entre junio y agosto, aunque el viento extremo puede dificultar la acumulación en el suelo. Las islas y montañas del estrecho de Magallanes están nevadas buena parte del año. El invierno austral transforma el paisaje subantártico en un espectáculo de hielo y nieve único en el mundo.',
  'new-york': 'Nueva York recibe nevadas entre diciembre y marzo, con tormentas que pueden dejar más de 40 cm en 24 horas. Las "nor\'easters" son las tormentas de nieve más intensas, capaces de paralizar el transporte por horas. Central Park cubierto de nieve es uno de los paisajes más icónicos del invierno en EE.UU.',
  'chicago': 'Chicago recibe entre 100 y 130 cm de nieve por temporada. El viento del lago Michigan hace que la sensación térmica sea mucho más baja que la temperatura real. Las tormentas de nieve de enero y febrero son las más intensas; el lago puede generar nevadas adicionales por efecto lago. El invierno de Chicago es legendario por su dureza.',
  'denver': 'Denver y las Montañas Rocosas de Colorado son el destino de esquí más grande de EE.UU. Los centros Breckenridge, Vail, Keystone y Arapahoe Basin están a 90–120 minutos de la ciudad. Denver misma recibe nevadas entre octubre y abril; las "Upslope storms" pueden traer 30–60 cm en pocas horas aunque la ciudad tiene mucho sol el resto del tiempo.',
  'boston': 'Boston es conocida por sus tormentas de nieve del noreste ("nor\'easters") que pueden traer 60 cm de nieve en 24 horas. Las nevadas son frecuentes de diciembre a marzo. El invierno de Nueva Inglaterra tiene temperaturas de −5°C a 3°C, con nieve que puede permanecer semanas en las aceras.',
  'minneapolis': 'Minneapolis acumula entre 130 y 160 cm de nieve por temporada, con nevadas frecuentes de noviembre a marzo. Las temperaturas con viento pueden bajar a −30°C. La ciudad está perfectamente equipada para el invierno: el sistema de pasarelas climatizadas Skyway (13 km) conecta el centro sin necesidad de salir al frío.',
  'buffalo': 'Buffalo es famosa mundialmente por sus nevadas de "efecto lago": cuando el viento del noroeste cruza el lago Erie, puede descargar más de 100 cm de nieve en 24 horas. La acumulación anual supera los 240 cm, una de las más altas de cualquier gran ciudad de EE.UU. Las tormentas más intensas ocurren entre noviembre y enero.',
};

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
  // Montaña/Esquí (Cono Sur)
  'bariloche', 'ushuaia', 'san-martin-de-los-andes', 'villa-la-angostura',
  'esquel', 'el-bolson', 'el-calafate',
  'farellones', 'coyhaique', 'punta-arenas',
  // EE.UU. (nieve)
  'denver', 'boston', 'minneapolis', 'buffalo',
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
  const monthly = getCityMonthly(slug);
  const country = getCountryForCity(slug);
  const description = getCityDescription(slug);
  const touristTip = getCityTouristTip(slug);
  const snowCity = isSnowCity(slug);
  const snowCoords = snowCityCoords[slug];
  const snowIntro = snowCityIntros[slug];
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
        <CityPageClient slug={slug} cityName={city} showSnow={snowCity} />

        <h1>Clima en {city} hoy</h1>

        <p style={{ maxWidth: 900, margin: '0 auto 16px', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-text)', textAlign: 'center' }}>
          Consulta el tiempo en {city} en tiempo real: temperatura actual, probabilidad de lluvia,
          viento y humedad, además del pronóstico por horas y para los próximos días. ¿Va a llover
          hoy en {city}? Mira la previsión actualizada del clima.
        </p>

        {climate?.avgTempRange && (
          <div style={{ maxWidth: 900, margin: '8px auto 16px', padding: '14px 20px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
            <h2 style={{ margin: '0 0 6px', fontSize: '1rem' }}>¿Qué temperatura hace en {city}?</h2>
            <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.6 }}>
              En {city} la temperatura suele ubicarse en el rango de {climate.avgTempRange}.{climate.bestTimeToVisit ? ' Para el detalle por temporada, mirá la información climática más abajo.' : ''} Consulta arriba la temperatura exacta de ahora mismo y el pronóstico por horas.
            </p>
          </div>
        )}

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

        {monthly && (
          <div style={{ maxWidth: 900, margin: '0 auto 20px' }}>
            <div style={{ padding: '16px 20px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
              <h2 style={{ margin: '0 0 8px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                <TableCellsIcon style={{ width: '1.2em', height: '1.2em' }} />
                Clima en {city} mes a mes
              </h2>
              <p style={{ margin: '0 0 14px', fontSize: '0.88rem', lineHeight: 1.6 }}>{monthly.intro}</p>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.83rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                      <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 600 }}>Mes</th>
                      <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 600 }}>Temperatura</th>
                      <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 600 }}>Lluvia</th>
                      <th style={{ textAlign: 'left', padding: '6px 8px', fontWeight: 600, minWidth: 120 }}>Nota</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthly.months.map((m, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid var(--color-border)', background: i % 2 === 0 ? 'transparent' : 'var(--color-bg, #f8f9fa)' }}>
                        <td style={{ padding: '6px 8px', fontWeight: 600 }}>{MONTHS[i]}</td>
                        <td style={{ padding: '6px 8px' }}>{m.tempRange}</td>
                        <td style={{ padding: '6px 8px' }}>
                          <span style={{
                            display: 'inline-block', padding: '2px 8px', borderRadius: 12, fontSize: '0.78rem', fontWeight: 600,
                            background: m.rain === 'seco' ? '#e8f5e9' : m.rain === 'moderado' ? '#fff3e0' : '#e3f2fd',
                            color: m.rain === 'seco' ? '#2e7d32' : m.rain === 'moderado' ? '#e65100' : '#0d47a1',
                          }}>
                            {m.rain === 'seco' ? '☀ Seco' : m.rain === 'moderado' ? '🌤 Moderado' : '🌧 Lluvioso'}
                          </span>
                        </td>
                        <td style={{ padding: '6px 8px', color: '#888', fontSize: '0.8rem' }}>{m.note ?? ''}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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

        {snowCity && snowCoords && (
          <div id="nieve" style={{ maxWidth: 900, margin: '16px auto 8px', padding: '16px 20px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid #90caf9', boxShadow: 'var(--color-shadow-sm)' }}>
            <h2 style={{ margin: '0 0 10px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
              ❄️ Nieve en {city}
            </h2>
            {snowIntro && (
              <p style={{ margin: '0 0 14px', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-text)' }}>
                {snowIntro}
              </p>
            )}
            <WindyMap lat={snowCoords.lat} lon={snowCoords.lon} overlay="snowAccu" zoom={8} height={420} />
            <p style={{ margin: '10px 0 0', fontSize: '0.85rem', color: '#666' }}>
              <Link href="/nieve" style={{ color: 'var(--color-primary, #1a73e8)', textDecoration: 'none' }}>
                Ver hub de nieve y esquí en los Andes y EE.UU. →
              </Link>
            </p>
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
          <p style={{ margin: '12px 0 0', fontSize: '0.85rem' }}>
            <Link href={`/clima/${slug}/por-hora`} style={{ color: 'var(--color-primary, #1a73e8)', textDecoration: 'none' }}>
              Ver el pronóstico hora a hora de {city} →
            </Link>
            {' · '}
            <Link href={`/clima/${slug}/manana`} style={{ color: 'var(--color-primary, #1a73e8)', textDecoration: 'none' }}>
              Clima mañana en {city}
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
