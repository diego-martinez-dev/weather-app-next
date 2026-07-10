import type { Metadata } from 'next';
import Link from 'next/link';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import WindyMap from '@/components/WindyMap';
import { snowDestinations } from '@/data/snowCities';

export const metadata: Metadata = {
  title: 'Nieve y esquí en América: Andes, Patagonia y Estados Unidos | Clima Hoy',
  description:
    'Mapa de nieve en tiempo real y guía de destinos: esquí en los Andes y la Patagonia (junio–septiembre) y nieve en Estados Unidos (diciembre–marzo). Bariloche, Ushuaia, Farellones, Denver, Nueva York y más.',
  alternates: {
    canonical: 'https://www.clima-hoy.com/nieve',
  },
  openGraph: {
    title: 'Nieve y esquí en América | Clima Hoy',
    description: 'Mapa de acumulación de nieve en tiempo real. Destinos de esquí en los Andes y la Patagonia, y ciudades con nieve en Estados Unidos.',
    url: 'https://www.clima-hoy.com/nieve',
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
      name: '¿Cuándo es la temporada de esquí en los Andes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La temporada de esquí en los Andes (Argentina y Chile) va de junio a septiembre, durante el invierno austral. Julio y agosto son los meses de mejor calidad de nieve en destinos como Bariloche, Chapelco, La Hoya y Farellones/Valle Nevado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo nieva en Estados Unidos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La temporada de nieve en el noreste de EE.UU. (Nueva York, Boston, Buffalo) y el Medio Oeste (Chicago, Minneapolis) va de diciembre a marzo. Denver y Colorado tienen nieve en las Montañas Rocosas de octubre a abril.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es el mejor destino de esquí de Latinoamérica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bariloche (Cerro Catedral) y Ushuaia (Cerro Castor) en Argentina, y Valle Nevado/El Colorado/La Parva en Farellones, Chile, son los destinos más importantes. Bariloche destaca por extensión de pistas; Ushuaia por ser el más austral del mundo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué muestra este mapa de nieve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El mapa muestra la acumulación de nieve prevista (overlay "snowAccu" de Windy), actualizado con el modelo ECMWF. Puedes mover la línea de tiempo para ver la evolución de la nieve en los próximos días.',
      },
    },
  ],
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.clima-hoy.com' },
    { '@type': 'ListItem', position: 2, name: 'Nieve y esquí', item: 'https://www.clima-hoy.com/nieve' },
  ],
};

export default function NievePage() {
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
          ❄️ Nieve y esquí en América: Andes, Patagonia y Estados Unidos
        </h1>

        <p style={{ maxWidth: 900, margin: '0 auto 12px', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--color-text)', textAlign: 'center' }}>
          Consulta el <strong>mapa de acumulación de nieve en tiempo real</strong> y descubre los mejores destinos de esquí de América.
          El continente tiene <strong>dos temporadas de nieve opuestas</strong>: los Andes y la Patagonia (Argentina y Chile) esquían
          en <strong>invierno austral (junio–septiembre)</strong>, mientras que Estados Unidos tiene nieve en <strong>invierno boreal (diciembre–marzo)</strong>.
        </p>

        <div style={{ maxWidth: 900, margin: '0 auto 8px', padding: '12px 20px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid #90caf9', fontSize: '0.9rem', lineHeight: 1.7 }}>
          <strong>🗓️ Dos temporadas diferentes:</strong>{' '}
          Si eres del hemisferio norte y quieres esquiar fuera de tu temporada (diciembre–marzo),
          los Andes te ofrecen nieve de junio a septiembre. Si eres latinoamericano y quieres
          ver nieve en invierno boreal, Nueva York, Chicago o Denver son excelentes opciones.
        </div>

        <div style={{ maxWidth: 900, margin: '12px auto 20px' }}>
          <WindyMap lat={-41.13} lon={-71.31} overlay="snowAccu" zoom={5} height={480} />
        </div>

        {snowDestinations.map(group => (
          <div key={group.region} style={{ maxWidth: 900, margin: '0 auto 20px', padding: '16px 20px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
            <h2 style={{ margin: '0 0 14px', fontSize: '1.05rem' }}>
              {group.region === 'Argentina' ? '🇦🇷' : group.region === 'Chile' ? '🇨🇱' : '🇺🇸'} {group.region}
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {group.cities.map(city => (
                <Link
                  key={city.slug}
                  href={`/clima/${city.slug}#nieve`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '6px 14px',
                    background: '#e8f4fd',
                    border: '1px solid #90caf9',
                    borderRadius: 20,
                    textDecoration: 'none',
                    color: '#1565c0',
                    fontSize: '0.88rem',
                    fontWeight: 500,
                  }}
                >
                  ❄️ {city.name}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div style={{ maxWidth: 900, margin: '0 auto 32px', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-text)' }}>
          <h2 style={{ fontSize: '1.1rem', margin: '0 0 16px' }}>Preguntas frecuentes sobre nieve y esquí</h2>

          <details style={{ marginBottom: 10, background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '12px 16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
              ¿Cuándo es la temporada de esquí en los Andes?
            </summary>
            <p style={{ margin: '8px 0 0 0', paddingLeft: 16 }}>
              La temporada de esquí en los Andes (Argentina y Chile) va de <strong>junio a septiembre</strong>, durante el invierno austral. Julio y agosto son los meses de mejor calidad de nieve en destinos como Bariloche (Cerro Catedral), San Martín de los Andes (Chapelco), Esquel (La Hoya), Ushuaia (Cerro Castor) y Farellones/Valle Nevado en Chile.
            </p>
          </details>

          <details style={{ marginBottom: 10, background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '12px 16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
              ¿Cuándo nieva en Estados Unidos?
            </summary>
            <p style={{ margin: '8px 0 0 0', paddingLeft: 16 }}>
              La temporada de nieve en el noreste (Nueva York, Boston, Buffalo) y el Medio Oeste (Chicago, Minneapolis) va de <strong>diciembre a marzo</strong>. Denver y las Montañas Rocosas de Colorado tienen nieve de octubre a abril. Buffalo es famosa por sus nevadas extremas de "efecto lago" que pueden superar el metro en 24 horas.
            </p>
          </details>

          <details style={{ marginBottom: 10, background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '12px 16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
              ¿Cuál es el mejor destino de esquí de Latinoamérica?
            </summary>
            <p style={{ margin: '8px 0 0 0', paddingLeft: 16 }}>
              <strong>Bariloche</strong> (Cerro Catedral) es el más grande y completo: más de 100 pistas, entorno de lago y bosque andino. <strong>Valle Nevado</strong> (Chile) tiene la nieve más ligera y seca. <strong>Ushuaia</strong> (Cerro Castor) es único por ser el centro de esquí más austral del mundo. Para una experiencia menos masificada, La Hoya (Esquel) o Chapelco (San Martín de los Andes) son excelentes alternativas.
            </p>
          </details>

          <details style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', padding: '12px 16px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>
              ¿Qué muestra el mapa de nieve de Windy?
            </summary>
            <p style={{ margin: '8px 0 0 0', paddingLeft: 16 }}>
              El mapa muestra la <strong>acumulación de nieve prevista</strong> (overlay snowAccu del modelo ECMWF de Windy). Los colores indican la cantidad de nieve esperada: de azul claro (poca nieve) a azul oscuro y blanco (grandes acumulaciones). Puedes mover la línea de tiempo para ver cómo evolucionará la nieve en los próximos días, y hacer zoom hasta tu área de interés.
            </p>
          </details>
        </div>
      </div>

      <Footer />
    </>
  );
}
