import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import '../legal.css';

export default function PrivacyPage() {
  return (
    <div>
      <TopMenu />
      <div className="legal-page">
        <div className="legal-container">
          <h1>Política de Privacidad</h1>
          <p className="last-updated">Última actualización: 19 de abril de 2026</p>

          <section>
            <h2>1. Información que Recopilamos</h2>
            <p>Recopilamos la siguiente información:</p>
            <ul>
              <li><strong>Ubicación geográfica:</strong> Con tu permiso, accedemos a tu ubicación para mostrarte el clima local.</li>
              <li><strong>Ciudades favoritas:</strong> Guardamos tus ciudades favoritas en tu navegador (localStorage).</li>
              <li><strong>Datos de uso:</strong> Información anónima sobre cómo interactúas con la aplicación.</li>
            </ul>
          </section>

          <section>
            <h2>2. Cómo Usamos tu Información</h2>
            <p>Usamos tu información para:</p>
            <ul>
              <li>Mostrarte el clima de tu ubicación actual</li>
              <li>Recordar tus ciudades favoritas</li>
              <li>Mejorar nuestra aplicación basándonos en patrones de uso</li>
            </ul>
          </section>

          <section>
            <h2>3. Almacenamiento de Datos</h2>
            <p>Tus datos se almacenan localmente en tu navegador (localStorage). No almacenamos tus datos en servidores externos.</p>
          </section>

          <section>
            <h2>4. Servicios de Terceros</h2>
            <p>Utilizamos OpenWeatherMap para obtener datos meteorológicos y Vercel para alojar nuestra aplicación.</p>
          </section>

          <section>
            <h2>5. Tus Derechos</h2>
            <p>Tienes derecho a acceder, modificar o eliminar tus datos. Puedes limpiar tus favoritos borrando los datos del sitio en tu navegador.</p>
          </section>

          <section>
            <h2>6. Contacto</h2>
            <p>Para preguntas sobre esta política, contáctanos en: <strong>privacidad@clima-hoy.com</strong></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}