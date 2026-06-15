import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import { getGuideBySlug, guideSlugs, guides } from '@/data/guides';
import '../../legal.css';

export async function generateStaticParams() {
  return guideSlugs.map(slug => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  const keywords = guide.title.es
    .toLowerCase()
    .split(/\s+/)
    .filter(w => w.length > 3)
    .join(', ');

  return {
    title: `${guide.title.es} | Guías — Clima Hoy`,
    description: guide.description.es,
    keywords: `clima, meteorología, ${keywords}`,
    authors: [{ name: 'Clima Hoy' }],
    alternates: {
      canonical: `https://www.clima-hoy.com/guias/${slug}`,
    },
    openGraph: {
      title: guide.title.es,
      description: guide.description.es,
      url: `https://www.clima-hoy.com/guias/${slug}`,
      siteName: 'Clima Hoy',
      locale: 'es_CO',
      type: 'article',
      publishedTime: guide.date,
    },
  };
}

export default async function GuiaPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const currentIndex = guides.findIndex(g => g.slug === slug);
  const relatedGuides = guide.related
    ? guide.related.slice(0, 3).map(s => getGuideBySlug(s)).filter(Boolean)
    : [1, 2, 3].map(offset => guides[(currentIndex + offset) % guides.length]);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title.es,
    description: guide.description.es,
    datePublished: guide.date,
    dateModified: guide.date,
    author: {
      '@type': 'Organization',
      name: 'Clima Hoy',
      url: 'https://www.clima-hoy.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Clima Hoy',
      url: 'https://www.clima-hoy.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.clima-hoy.com/guias/${slug}`,
    },
    image: 'https://www.clima-hoy.com/favicon.svg',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.clima-hoy.com' },
      { '@type': 'ListItem', position: 2, name: 'Guías', item: 'https://www.clima-hoy.com/guias' },
      { '@type': 'ListItem', position: 3, name: guide.title.es, item: `https://www.clima-hoy.com/guias/${slug}` },
    ],
  };

  const paragraphs = guide.body.es.split('\n\n');

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <TopMenu />
      <div className="legal-page">
        <div className="legal-container">
          <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.5rem' }}>
            <Link href="/" style={{ color: '#1a73e8', textDecoration: 'none' }}>Inicio</Link>
            {' › '}
            <Link href="/guias" style={{ color: '#1a73e8', textDecoration: 'none' }}>Guías</Link>
            {' › '}
            {guide.title.es}
          </p>

          <h1>{guide.title.es}</h1>
          <p className="last-updated">
            Publicado el {new Date(guide.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          {paragraphs.map((block, i) => {
            if (block.startsWith('## ')) {
              return <h2 key={i}>{block.slice(3)}</h2>;
            }
            if (block.startsWith('**') && block.endsWith('**')) {
              return <p key={i}><strong>{block.slice(2, -2)}</strong></p>;
            }
            if (block.startsWith('- ')) {
              const items = block.split('\n').filter(l => l.startsWith('- '));
              return (
                <ul key={i}>
                  {items.map((item, j) => <li key={j}>{item.slice(2)}</li>)}
                </ul>
              );
            }
            return <p key={i}>{block}</p>;
          })}

          <hr style={{ margin: '2rem 0', borderColor: '#ddd' }} />
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            ¿Te resultó útil esta guía?{' '}
            <Link href="/guias">Ver más guías sobre meteorología</Link> o{' '}
            <Link href="/">consultar el clima ahora</Link>.
          </p>

          {relatedGuides.length > 0 && (
            <section style={{ marginTop: '2.5rem' }}>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
                Guías relacionadas
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem' }}>
                {relatedGuides.map(related => related && (
                  <li key={related.slug} style={{ padding: '1rem 1.25rem', borderRadius: '8px', border: '1px solid #e5e7eb', background: '#f9fafb' }}>
                    <h3 style={{ margin: '0 0 0.35rem', fontSize: '1rem', fontWeight: 600 }}>
                      <Link href={`/guias/${related.slug}`} style={{ color: '#1a73e8', textDecoration: 'none' }}>
                        {related.title.es}
                      </Link>
                    </h3>
                    <p style={{ margin: 0, color: '#555', fontSize: '0.875rem', lineHeight: 1.55 }}>
                      {related.description.es}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
