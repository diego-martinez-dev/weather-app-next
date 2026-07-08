import type { Metadata } from 'next';
import Link from 'next/link';
import { topCities } from '../page';
import PorHoraCityClient from './PorHoraCityClient';

function slugToCity(slug: string): string {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export async function generateStaticParams() {
  return topCities.map(slug => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const city = slugToCity(slug);

  return {
    title: `Clima por hora en ${city} — Pronóstico hora a hora | Clima Hoy`,
    description: `Pronóstico del tiempo en ${city} hora a hora: temperatura, probabilidad de lluvia y condición del cielo cada 3 horas para hoy y mañana. Consultá el clima de ${city} por horas.`,
    alternates: {
      canonical: `https://www.clima-hoy.com/clima/${slug}/por-hora`,
    },
    openGraph: {
      title: `Clima por hora en ${city} | Clima Hoy`,
      description: `Pronóstico hora a hora de ${city}: temperatura, lluvia y viento para las próximas 48 horas.`,
      url: `https://www.clima-hoy.com/clima/${slug}/por-hora`,
      siteName: 'Clima Hoy',
      locale: 'es_CO',
      type: 'website',
    },
  };
}

export default async function PorHoraPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const city = slugToCity(slug);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.clima-hoy.com' },
      { '@type': 'ListItem', position: 2, name: 'Clima', item: 'https://www.clima-hoy.com/clima' },
      { '@type': 'ListItem', position: 3, name: city, item: `https://www.clima-hoy.com/clima/${slug}` },
      { '@type': 'ListItem', position: 4, name: 'Por hora', item: `https://www.clima-hoy.com/clima/${slug}/por-hora` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PorHoraCityClient slug={slug} cityName={city} />
      <p style={{ maxWidth: 900, margin: '0 auto', padding: '12px 16px', fontSize: '0.9rem', lineHeight: 1.6 }}>
        ¿Qué tiempo hará en {city} en las próximas horas? El pronóstico hora a hora de {city} muestra la temperatura,
        probabilidad de lluvia y condición del cielo cada 3 horas para hoy y mañana. Ideal para planificar salidas
        al aire libre o saber si necesitás paraguas.{' '}
        <Link href={`/clima/${slug}`} style={{ color: '#1a73e8' }}>Ver el clima actual de {city}</Link>.
      </p>
    </>
  );
}
