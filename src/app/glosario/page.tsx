import type { Metadata } from 'next';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import { glossaryTerms } from '@/data/glossary';
import '../legal.css';
import './glosario.css';

export const metadata: Metadata = {
  title: 'Glosario meteorológico — Clima Hoy',
  description: 'Definiciones claras de los términos meteorológicos más importantes: presión atmosférica, punto de rocío, frentes, índice UV, sensación térmica, ENSO y más.',
  alternates: {
    canonical: 'https://clima-hoy.com/glosario',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: 'Glosario meteorológico — Clima Hoy',
  description: 'Definiciones de los términos meteorológicos más importantes para entender el tiempo y los pronósticos.',
  url: 'https://clima-hoy.com/glosario',
};

export default function GlosarioPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopMenu />
      <div className="legal-page">
        <div className="legal-container">
          <h1>Glosario meteorológico</h1>
          <p className="last-updated">
            {glossaryTerms.length} términos con definiciones originales
          </p>

          <section>
            <p>
              El lenguaje meteorológico tiene sus propias reglas y sus propios términos, muchos de
              los cuales se usan en los pronósticos diarios sin que nadie explique qué significan
              exactamente. Este glosario reúne los conceptos más importantes para entender el tiempo,
              los pronósticos y los fenómenos climáticos, con definiciones escritas para ser útiles
              —no solo precisas— y con enlaces a las guías que profundizan en cada tema.
            </p>
            <p>
              Los términos están ordenados alfabéticamente. Si querés aprender más sobre algún
              concepto, hacé clic en el enlace de la guía relacionada al final de cada definición.
            </p>
          </section>

          <dl className="glossary-list">
            {glossaryTerms
              .slice()
              .sort((a, b) => a.term.es.localeCompare(b.term.es, 'es'))
              .map((item, i) => (
                <div key={i} className="glossary-item">
                  <dt className="glossary-term">{item.term.es}</dt>
                  <dd className="glossary-definition">
                    {item.definition.es}
                    {item.relatedGuide && (
                      <span className="glossary-link">
                        {' '}→{' '}
                        <a href={`/guias/${item.relatedGuide}`}>Ver guía relacionada</a>
                      </span>
                    )}
                  </dd>
                </div>
              ))}
          </dl>

          <section style={{ marginTop: '2.5rem' }}>
            <h2>¿Querés aprender más?</h2>
            <p>
              Explorá nuestras <a href="/guias">guías sobre meteorología</a> para entender en
              profundidad cómo funcionan los pronósticos, qué es la sensación térmica, cómo
              protegerte del sol y mucho más. También podés consultar el{' '}
              <a href="/faq">FAQ</a> con las preguntas más frecuentes sobre el clima y la app.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
