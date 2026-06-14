import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import { getGuideBySlug, guideSlugs } from '@/data/guides';
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

  return {
    title: `${guide.title.es} | Guías — Clima Hoy`,
    description: guide.description.es,
    alternates: {
      canonical: `https://clima-hoy.com/guias/${slug}`,
    },
    openGraph: {
      title: guide.title.es,
      description: guide.description.es,
      url: `https://clima-hoy.com/guias/${slug}`,
      siteName: 'Clima Hoy',
      locale: 'es_CO',
      type: 'article',
    },
  };
}

export default async function GuiaPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title.es,
    description: guide.description.es,
    datePublished: guide.date,
    dateModified: guide.date,
    publisher: {
      '@type': 'Organization',
      name: 'Clima Hoy',
      url: 'https://clima-hoy.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://clima-hoy.com/guias/${slug}`,
    },
  };

  const paragraphs = guide.body.es.split('\n\n');

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopMenu />
      <div className="legal-page">
        <div className="legal-container">
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
            <a href="/guias">Ver más guías sobre meteorología</a> o{' '}
            <a href="/">consultar el clima ahora</a>.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
