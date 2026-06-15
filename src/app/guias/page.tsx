import type { Metadata } from 'next';
import Link from 'next/link';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import { guides } from '@/data/guides';
import '../legal.css';

export const metadata: Metadata = {
  title: 'Guías meteorológicas — Clima Hoy',
  description: 'Artículos originales sobre meteorología: cómo leer pronósticos, entender la sensación térmica, el índice UV, la humedad, los tipos de nubes y más.',
  alternates: {
    canonical: 'https://www.clima-hoy.com/guias',
  },
};

export default function GuiasPage() {
  return (
    <div>
      <TopMenu />
      <div className="legal-page">
        <div className="legal-container">
          <h1>Guías sobre el clima</h1>
          <p className="last-updated">
            Artículos originales para entender mejor el tiempo y la meteorología
          </p>

          <section>
            <p>
              El clima es una parte fundamental de la vida cotidiana: influye en cómo nos vestimos,
              cómo nos sentimos, qué actividades podemos hacer y hasta qué tan bien dormimos. Sin
              embargo, muchos de los datos que aparecen en las apps del tiempo —la sensación
              térmica, el índice UV, la probabilidad de lluvia, la humedad relativa— se usan sin
              entender qué significan realmente.
            </p>
            <p>
              Estas guías están escritas para cerrar esa brecha. No son artículos de divulgación
              superficial sino explicaciones completas y prácticas para que puedas interpretar mejor
              el pronóstico, protegerte en situaciones de riesgo y tomar mejores decisiones basadas
              en la información meteorológica.
            </p>
          </section>

          <section>
            <ul style={{ listStyle: 'none', padding: 0, margin: '2rem 0' }}>
              {guides.map(guide => (
                <li key={guide.slug} style={{ marginBottom: '2rem', borderBottom: '1px solid #ddd', paddingBottom: '1.5rem' }}>
                  <h2 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>
                    <Link href={`/guias/${guide.slug}`} style={{ color: '#1a73e8', textDecoration: 'none' }}>
                      {guide.title.es}
                    </Link>
                  </h2>
                  <p style={{ color: '#555', margin: 0 }}>{guide.description.es}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
