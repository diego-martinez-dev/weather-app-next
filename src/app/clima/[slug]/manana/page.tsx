import type { Metadata } from 'next';
import { topCities } from '../page';
import MananaCityClient from './MananaCityClient';

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
    title: `Clima mañana en ${city} — Pronóstico del tiempo | Clima Hoy`,
    description: `¿Qué tiempo va a hacer mañana en ${city}? Temperatura mínima, máxima, probabilidad de lluvia y condición climática para el día de mañana. Pronóstico actualizado hora a hora.`,
    alternates: {
      canonical: `https://www.clima-hoy.com/clima/${slug}/manana`,
    },
    openGraph: {
      title: `Clima mañana en ${city} | Clima Hoy`,
      description: `Pronóstico del tiempo para mañana en ${city}: temperatura mín/máx, lluvia y humedad.`,
      url: `https://www.clima-hoy.com/clima/${slug}/manana`,
      siteName: 'Clima Hoy',
      locale: 'es_CO',
      type: 'website',
    },
  };
}

export default async function MananaPage(
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
      { '@type': 'ListItem', position: 4, name: 'Mañana', item: `https://www.clima-hoy.com/clima/${slug}/manana` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <MananaCityClient slug={slug} cityName={city} />
    </>
  );
}
