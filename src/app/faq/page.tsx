import type { Metadata } from 'next';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import { faqItems } from '@/data/faq';
import '../legal.css';
import './faq.css';

export const metadata: Metadata = {
  title: 'Preguntas frecuentes sobre el clima — FAQ Clima Hoy',
  description: 'Respuestas a las preguntas más frecuentes sobre pronósticos del tiempo, sensación térmica, probabilidad de lluvia, calidad del aire y cómo usar Clima Hoy.',
  alternates: {
    canonical: 'https://www.clima-hoy.com/faq',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question.es,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer.es,
    },
  })),
};

export default function FaqPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopMenu />
      <div className="legal-page">
        <div className="legal-container">
          <h1>Preguntas frecuentes</h1>
          <p className="last-updated">
            {faqItems.length} respuestas sobre el clima y la app
          </p>

          <section>
            <p>
              Reunimos las preguntas que nos llegan más seguido sobre cómo funciona el tiempo, qué
              significan los datos del pronóstico y cómo usar Clima Hoy. Si no encontrás la
              respuesta que buscás, escribinos a{' '}
              <a href="mailto:contacto@clima-hoy.com">contacto@clima-hoy.com</a>.
            </p>
          </section>

          <div className="faq-list">
            {faqItems.map((item, i) => (
              <div key={i} className="faq-item">
                <h2 className="faq-question">{item.question.es}</h2>
                <p className="faq-answer">{item.answer.es}</p>
              </div>
            ))}
          </div>

          <section style={{ marginTop: '2.5rem' }}>
            <h2>¿Querés profundizar más?</h2>
            <p>
              Tenemos <a href="/guias">guías completas sobre meteorología</a> y un{' '}
              <a href="/glosario">glosario con los términos más importantes</a>. Si tenés una
              pregunta que no está acá, <a href="/contacto">escribinos</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
