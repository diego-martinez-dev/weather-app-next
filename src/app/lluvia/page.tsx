import type { Metadata } from 'next';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import RainRadarMapWrapper from '@/components/RainRadarMapWrapper';

export const metadata: Metadata = {
  title: 'Mapa de lluvia en tiempo real — Radar de lluvia animado | Clima Hoy',
  description:
    '¿Va a llover? Consulta el radar de lluvia en tiempo real con animación. Mapa de lluvia en vivo para motociclistas, peatones y ciclistas. Actualizado cada 5 minutos.',
  alternates: {
    canonical: 'https://www.clima-hoy.com/lluvia',
  },
  openGraph: {
    title: 'Mapa de lluvia en tiempo real | Clima Hoy',
    description: 'Radar de lluvia animado y en vivo. Consulta si está lloviendo ahora y la previsión de lluvia para los próximos 30 minutos.',
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
      name: '¿Con qué frecuencia se actualiza el radar de lluvia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El radar se actualiza aproximadamente cada 10 minutos. El mapa recarga los datos de RainViewer cada 5 minutos para mostrar siempre la información más reciente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué muestra el radar de lluvia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El radar muestra la lluvia detectada por satélite en las últimas 2 horas (frames del pasado) y una previsión nowcast para los próximos 30 minutos. Los colores van de azul claro (llovizna) a rojo y morado (lluvia muy fuerte).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo ver el radar de lluvia de mi ciudad específica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Usa el buscador sobre el mapa para centrar el radar en tu ciudad, o pulsa el botón de geolocalización para ir directamente a tu ubicación actual.',
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
          Consulta el <strong>radar de lluvia en tiempo real</strong> con animación: ve dónde está
          lloviendo ahora mismo y cómo se moverá la lluvia en los próximos 30 minutos.
          Ideal para <strong>motociclistas, peatones y ciclistas</strong> que necesitan saber si
          conviene salir o esperar. Los datos provienen de <strong>RainViewer</strong> y se
          actualizan automáticamente cada 5 minutos.
        </p>

        <div style={{ maxWidth: 900, margin: '0 auto 20px' }}>
          <RainRadarMapWrapper
            lat={DEFAULT_LAT}
            lon={DEFAULT_LON}
            zoom={DEFAULT_ZOOM}
            showSearch
          />
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto 32px', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-text)' }}>
          <h2 style={{ fontSize: '1.1rem', margin: '0 0 16px' }}>Preguntas frecuentes sobre el radar de lluvia</h2>

          <details style={{ marginBottom: 10, background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '12px 16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
              ¿Con qué frecuencia se actualiza el radar de lluvia?
            </summary>
            <p style={{ margin: '8px 0 0 0', paddingLeft: 16 }}>
              El radar se actualiza aproximadamente cada 10 minutos. El mapa recarga los datos de
              RainViewer cada 5 minutos para mostrar siempre la información más reciente.
            </p>
          </details>

          <details style={{ marginBottom: 10, background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '12px 16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
              ¿Qué muestra el radar de lluvia?
            </summary>
            <p style={{ margin: '8px 0 0 0', paddingLeft: 16 }}>
              El radar muestra la lluvia detectada por satélite en las últimas 2 horas (frames del
              pasado) y una previsión <em>nowcast</em> para los próximos 30 minutos. Los colores
              van de azul claro (llovizna) a rojo y morado (lluvia muy fuerte).
            </p>
          </details>

          <details style={{ marginBottom: 10, background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '12px 16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
              ¿Puedo ver el radar de lluvia de mi ciudad específica?
            </summary>
            <p style={{ margin: '8px 0 0 0', paddingLeft: 16 }}>
              Sí. Usa el buscador sobre el mapa para centrar el radar en tu ciudad, o pulsa el
              botón de geolocalización para ir directamente a tu ubicación actual.
            </p>
          </details>

          <details style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '12px 16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
              ¿Cómo leer los colores del radar?
            </summary>
            <p style={{ margin: '8px 0 0 0', paddingLeft: 16 }}>
              La escala de color de la leyenda va de izquierda a derecha: <strong>azul claro</strong> es
              llovizna ligera, <strong>verde</strong> es lluvia moderada, <strong>amarillo y naranja</strong> es
              lluvia fuerte, y <strong>rojo y morado</strong> indica lluvia muy intensa o granizo. Las
              zonas sin color no tienen lluvia detectada.
            </p>
          </details>
        </div>
      </div>

      <Footer />
    </>
  );
}
