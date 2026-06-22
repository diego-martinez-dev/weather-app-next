import type { Metadata } from 'next';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import WindyMap from '@/components/WindyMap';

export const metadata: Metadata = {
  title: 'Mapa de lluvia en tiempo real — Radar de lluvia animado | Clima Hoy',
  description:
    '¿Va a llover? Consulta el radar de lluvia en tiempo real con animación. Mapa de lluvia en vivo para motociclistas, peatones y ciclistas. Actualizado cada 5 minutos.',
  alternates: {
    canonical: 'https://www.clima-hoy.com/lluvia',
  },
  openGraph: {
    title: 'Mapa de lluvia en tiempo real | Clima Hoy',
    description: 'Mapa de lluvia animado e interactivo. Consulta si está lloviendo ahora y cómo evoluciona la lluvia en las próximas horas, con zoom hasta tu zona.',
    url: 'https://www.clima-hoy.com/lluvia',
    siteName: 'Clima Hoy',
    locale: 'es_CO',
    type: 'website',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué muestra este mapa de lluvia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Muestra dónde está lloviendo y cómo se moverá la lluvia, con una animación por horas. Los colores indican la intensidad: de azul (llovizna) a rojo y morado (lluvia muy fuerte). El mapa es interactivo: puedes hacer zoom hasta tu zona y mover la línea de tiempo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo veo la lluvia de mi ciudad o barrio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usa el buscador del mapa para ir a cualquier ciudad, o acerca el zoom hasta tu barrio. También puedes arrastrar el mapa para explorar las zonas cercanas y ver si la lluvia se acerca.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cada cuánto se actualiza?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El mapa usa los datos de previsión más recientes de Windy. Mueve la línea de tiempo para ver cómo evolucionará la lluvia en las próximas horas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Para quién es útil este mapa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es especialmente útil para motociclistas, ciclistas, peatones y cualquiera que necesite decidir si salir ahora o esperar a que pase la lluvia.',
      },
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.clima-hoy.com' },
    { '@type': 'ListItem', position: 2, name: 'Mapa de lluvia', item: 'https://www.clima-hoy.com/lluvia' },
  ],
};

// Coordenadas por defecto: Bogotá (ciudad más lluviosa de la región + mayor tráfico del sitio)
const DEFAULT_LAT = 4.711;
const DEFAULT_LON = -74.0721;
const DEFAULT_ZOOM = 8;

export default function LluviaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <TopMenu />

      <div className="home-two-columns">
        <h1 style={{ textAlign: 'center', margin: '24px auto 8px', fontSize: '1.7rem', maxWidth: 900 }}>
          Mapa de lluvia en tiempo real
        </h1>

        <p style={{ maxWidth: 900, margin: '0 auto 20px', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-text)', textAlign: 'center' }}>
          Consulta el <strong>mapa de lluvia interactivo y animado</strong>: ve dónde está
          lloviendo ahora mismo y cómo se moverá la lluvia en las próximas horas. Acerca el zoom
          hasta tu zona, busca cualquier ciudad y mueve la línea de tiempo. Ideal para
          <strong> motociclistas, peatones y ciclistas</strong> que necesitan saber si conviene
          salir o esperar.
        </p>

        <div style={{ maxWidth: 900, margin: '0 auto 20px' }}>
          <WindyMap lat={DEFAULT_LAT} lon={DEFAULT_LON} zoom={DEFAULT_ZOOM} height={480} />
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto 32px', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-text)' }}>
          <h2 style={{ fontSize: '1.1rem', margin: '0 0 16px' }}>Preguntas frecuentes sobre el radar de lluvia</h2>

          <details style={{ marginBottom: 10, background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '12px 16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
              ¿Qué muestra este mapa de lluvia?
            </summary>
            <p style={{ margin: '8px 0 0 0', paddingLeft: 16 }}>
              Muestra dónde está lloviendo y cómo se moverá la lluvia, con una animación por horas.
              Los colores indican la intensidad: de azul (llovizna) a rojo y morado (lluvia muy
              fuerte). El mapa es interactivo: puedes hacer zoom hasta tu zona y mover la línea de
              tiempo.
            </p>
          </details>

          <details style={{ marginBottom: 10, background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '12px 16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
              ¿Cómo veo la lluvia de mi ciudad o barrio?
            </summary>
            <p style={{ margin: '8px 0 0 0', paddingLeft: 16 }}>
              Usa el buscador del mapa para ir a cualquier ciudad, o acerca el zoom hasta tu barrio.
              También puedes arrastrar el mapa para explorar las zonas cercanas y ver si la lluvia se
              acerca.
            </p>
          </details>

          <details style={{ marginBottom: 10, background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '12px 16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
              ¿Cada cuánto se actualiza?
            </summary>
            <p style={{ margin: '8px 0 0 0', paddingLeft: 16 }}>
              El mapa usa los datos de previsión más recientes de Windy. Mueve la línea de tiempo
              para ver cómo evolucionará la lluvia en las próximas horas.
            </p>
          </details>

          <details style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '12px 16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
              ¿Para quién es útil este mapa?
            </summary>
            <p style={{ margin: '8px 0 0 0', paddingLeft: 16 }}>
              Es especialmente útil para <strong>motociclistas, ciclistas y peatones</strong>, y para
              cualquiera que necesite decidir si salir ahora o esperar a que pase la lluvia.
            </p>
          </details>
        </div>
      </div>

      <Footer />
    </>
  );
}
