import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import '../legal.css';

export default function CookiesPage() {
  return (
    <div>
      <TopMenu />
      <div className="legal-page">
        <div className="legal-container">
          <h1>Política de Cookies</h1>
          <p className="last-updated">Última actualización: 19 de abril de 2026</p>

          <section>
            <h2>1. ¿Qué son las Cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu navegador para recordar información sobre tus preferencias y actividades.</p>
          </section>

          <section>
            <h2>2. Cookies que Utilizamos</h2>
            <p>Nuestra aplicación utiliza localStorage para almacenar tus ciudades favoritas y preferencias de ubicación. No utilizamos cookies de seguimiento de terceros.</p>
          </section>

          <section>
            <h2>3. Gestión de Cookies</h2>
            <p>Puedes gestionar las cookies desde tu navegador. Al desactivarlas, las ciudades favoritas no se guardarán entre sesiones.</p>
          </section>

          <section>
            <h2>4. Consentimiento</h2>
            <p>Al utilizar nuestra aplicación, aceptas el uso de cookies según esta política.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}