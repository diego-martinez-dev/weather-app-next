import type { Metadata } from 'next';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import '../legal.css';

export const metadata: Metadata = {
  title: 'Contacto — Clima Hoy',
  description: 'Ponete en contacto con el equipo de Clima Hoy. Respondemos consultas, sugerencias y reportes de errores.',
  alternates: {
    canonical: 'https://www.clima-hoy.com/contacto',
  },
};

export default function ContactoPage() {
  return (
    <div>
      <TopMenu />
      <div className="legal-page">
        <div className="legal-container">
          <h1>Contacto</h1>

          <section>
            <h2>¿Tenés alguna pregunta o sugerencia?</h2>
            <p>
              Estamos para ayudarte. Si encontraste un error en los datos del clima, querés sugerirnos
              una nueva ciudad, tenés una idea para mejorar la aplicación o simplemente querés
              comunicarte con nosotros, escribinos directamente a:
            </p>
            <p style={{ fontSize: '1.2rem', margin: '1.5rem 0' }}>
              <strong>
                <a href="mailto:contacto@clima-hoy.com">contacto@clima-hoy.com</a>
              </strong>
            </p>
            <p>
              Respondemos a todos los mensajes. El tiempo de respuesta habitual es de 24 a 48 horas
              en días hábiles.
            </p>
          </section>

          <section>
            <h2>Contact us</h2>
            <p>
              Have a question, found a bug, or want to suggest a new feature? We'd love to hear
              from you. Send us an email at:
            </p>
            <p style={{ fontSize: '1.2rem', margin: '1.5rem 0' }}>
              <strong>
                <a href="mailto:contacto@clima-hoy.com">contacto@clima-hoy.com</a>
              </strong>
            </p>
            <p>
              We reply to every message within 24–48 business hours.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
