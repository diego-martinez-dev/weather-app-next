import type { Metadata } from 'next';
import Link from 'next/link';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import { MapPinIcon, CalendarIcon, CloudIcon, QuestionMarkCircleIcon, BuildingOffice2Icon, GlobeAltIcon, SunIcon } from '@heroicons/react/24/outline';
import { countries, countrySlugs, getCountryBySlug } from '@/data/countries';

export async function generateStaticParams() {
  return countrySlugs.map(pais => ({ pais }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ pais: string }> }
): Promise<Metadata> {
  const { pais } = await params;
  const country = getCountryBySlug(pais);
  if (!country) return {};

  return {
    title: `Clima en ${country.name}: el tiempo por ciudades, estaciones y temporada de lluvias`,
    description: `Guía completa del clima de ${country.name}: regiones climáticas, cuándo viajar, qué llevar, temporada de lluvias y el pronóstico de sus principales ciudades.`,
    alternates: {
      canonical: `https://www.clima-hoy.com/clima-pais/${pais}`,
    },
    openGraph: {
      title: `Clima en ${country.name} por ciudades`,
      description: `Cómo es el clima de ${country.name}: estaciones, lluvias y el tiempo de sus principales ciudades.`,
      url: `https://www.clima-hoy.com/clima-pais/${pais}`,
      siteName: 'Clima Hoy',
      locale: 'es_CO',
      type: 'website',
    },
  };
}

export default async function CountryPage(
  { params }: { params: Promise<{ pais: string }> }
) {
  const { pais } = await params;
  const country = getCountryBySlug(pais);

  if (!country) {
    return (
      <>
        <TopMenu />
        <div className="home-two-columns">
          <h1>País no encontrado</h1>
          <p>
            No tenemos una guía de clima para este país todavía.{' '}
            <Link href="/clima">Ver todas las ciudades →</Link>
          </p>
        </div>
        <Footer />
      </>
    );
  }

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Clima en ${country.name}`,
    description: `Guía del clima de ${country.name}: estaciones, temporada de lluvias y el tiempo de sus principales ciudades.`,
    url: `https://www.clima-hoy.com/clima-pais/${pais}`,
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
        { '@type': 'ListItem', position: 3, name: country.name, item: `https://www.clima-hoy.com/clima-pais/${pais}` },
      ],
    },
  };

  const faqJsonLd = country.faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: country.faq.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      }
    : null;

  const otherCountries = countries.filter(c => c.slug !== country.slug);

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
        <h1>
          <MapPinIcon style={{ width: '1.1em', height: '1.1em', display: 'inline', verticalAlign: '-0.15em' }} />{' '}
          Clima en {country.name}
        </h1>

        {country.intro.map((para, i) => (
          <p key={i} style={{ maxWidth: 900, margin: '0 auto 14px', fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--color-text)' }}>
            {para}
          </p>
        ))}

        {country.climateRegions.length > 0 && (
          <div style={{ maxWidth: 900, margin: '8px auto 20px', padding: '16px 20px', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-text)', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
            <h2 style={{ margin: '0 0 14px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
              <GlobeAltIcon style={{ width: '1.2em', height: '1.2em' }} />
              Clima por regiones de {country.name}
            </h2>
            {country.climateRegions.map((region, i) => (
              <div key={i} style={{ marginBottom: i < country.climateRegions.length - 1 ? 12 : 0 }}>
                <strong>{region.name}</strong>
                <p style={{ margin: '4px 0 0', paddingLeft: 0 }}>{region.description}</p>
              </div>
            ))}
          </div>
        )}

        <div style={{ maxWidth: 900, margin: '8px auto 20px', padding: '16px 20px', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-text)', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
          <p style={{ margin: '0 0 10px' }}>
            <CalendarIcon style={{ width: '1.2em', height: '1.2em', display: 'inline', verticalAlign: '-0.2em', marginRight: 6 }} />
            <strong>Mejor época para viajar:</strong> {country.bestSeason}
          </p>
          <p style={{ margin: '0' }}>
            <CloudIcon style={{ width: '1.2em', height: '1.2em', display: 'inline', verticalAlign: '-0.2em', marginRight: 6 }} />
            <strong>Temporada de lluvias:</strong> {country.rainySeason}
          </p>
        </div>

        <div style={{ maxWidth: 900, margin: '8px auto 20px', padding: '16px 20px', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-text)', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
          <h2 style={{ margin: '0 0 10px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
            <SunIcon style={{ width: '1.2em', height: '1.2em' }} />
            ¿Cuándo viajar a {country.name}?
          </h2>
          <p style={{ margin: 0 }}>{country.whenToGo}</p>
        </div>

        <div style={{ maxWidth: 900, margin: '8px auto 20px', padding: '16px 20px', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-text)', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
          <h2 style={{ margin: '0 0 10px', fontSize: '1rem' }}>
            🎒 Qué llevar
          </h2>
          <p style={{ margin: 0 }}>{country.whatToPack}</p>
        </div>

        <section className="cities-section">
          <h2>
            <BuildingOffice2Icon style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.15em' }} />{' '}
            El tiempo en las ciudades de {country.name}
          </h2>
          <div className="cities-grid">
            {country.cities.map(city => (
              <Link key={city.slug} href={`/clima/${city.slug}`} className="city-card">
                <BuildingOffice2Icon style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.1em' }} /> {city.name}
              </Link>
            ))}
          </div>
        </section>

        {country.faq.length > 0 && (
          <div style={{ maxWidth: 900, margin: '8px auto 20px', padding: '16px 20px', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-text)', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
            <h2 style={{ margin: '0 0 12px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
              <QuestionMarkCircleIcon style={{ width: '1.2em', height: '1.2em' }} />
              Preguntas frecuentes sobre el clima en {country.name}
            </h2>
            {country.faq.map(({ question, answer }, i) => (
              <details key={i} style={{ marginBottom: i < country.faq.length - 1 ? 8 : 0 }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{question}</summary>
                <p style={{ margin: '6px 0 0 0', paddingLeft: 16 }}>{answer}</p>
              </details>
            ))}
          </div>
        )}

        <section className="cities-section">
          <h2>Clima en otros países</h2>
          <div className="cities-grid">
            {otherCountries.map(c => (
              <Link key={c.slug} href={`/clima-pais/${c.slug}`} className="city-card">
                <MapPinIcon style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.1em' }} /> {c.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
