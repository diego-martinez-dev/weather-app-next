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
          <p className="last-updated">Última actualización: 21 de abril de 2026</p>

          <section>
            <h2>1. ¿Qué son las Cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu navegador para recordar información sobre tus preferencias y actividades. Además de cookies, esta aplicación usa <strong>localStorage</strong> del navegador para guardar datos de forma local en tu dispositivo.</p>
          </section>

          <section>
            <h2>2. Qué almacenamos y por qué</h2>

            <h3>Esenciales (siempre activos)</h3>
            <p>Estos datos son necesarios para el funcionamiento básico de la aplicación y no requieren consentimiento:</p>
            <ul>
              <li><strong>favoriteCities</strong> (localStorage) — tus ciudades favoritas guardadas localmente.</li>
              <li><strong>temperatureUnit</strong> (localStorage) — tu preferencia de unidad de temperatura (°C / °F).</li>
              <li><strong>language</strong> (localStorage) — tu idioma preferido.</li>
              <li><strong>country</strong> (localStorage) — tu país para mostrar datos relevantes.</li>
              <li><strong>cookieConsent</strong> (localStorage) — tu elección de consentimiento.</li>
            </ul>

            <h3>Analytics (solo con tu consentimiento)</h3>
            <p>Si aceptas las cookies analíticas, se activan los siguientes servicios:</p>
            <ul>
              <li><strong>Google Analytics</strong> — mide el tráfico y el comportamiento de los usuarios mediante las cookies <code>_ga</code> y <code>_gid</code>. Datos enviados a servidores de Google. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de privacidad de Google</a>.</li>
              <li><strong>ipapi.co</strong> — detecta tu país de origen por dirección IP para mostrar datos climáticos relevantes. Tu IP se envía a los servidores de ipapi.co únicamente si das consentimiento. <a href="https://ipapi.co/privacy/" target="_blank" rel="noopener noreferrer">Política de privacidad de ipapi.co</a>.</li>
            </ul>

            <h3>Geolocalización del navegador</h3>
            <p>Si lo autorizas a través del diálogo del navegador, usamos la API de geolocalización (<code>navigator.geolocation</code>) para obtener el clima de tu ubicación actual. Esta autorización es gestionada por el navegador y puedes revocarla en cualquier momento desde la configuración del sitio.</p>

            <h3>Mapa meteorológico</h3>
            <p>El mapa de temperaturas carga teselas (tiles) desde los servidores de OpenWeatherMap. Al visualizar el mapa, tu dirección IP queda expuesta a OpenWeatherMap. Consulta su <a href="https://openweathermap.org/privacy-policy" target="_blank" rel="noopener noreferrer">política de privacidad</a>.</p>
          </section>

          <section>
            <h2>3. Gestión del consentimiento</h2>
            <p>Al acceder por primera vez, verás un banner donde puedes elegir entre <strong>Aceptar todo</strong> (esenciales + analytics) o <strong>Solo esenciales</strong>. Tu elección se guarda en localStorage. Para cambiarla, borra los datos del sitio desde la configuración de tu navegador y recarga la página.</p>
          </section>

          <section>
            <h2>4. Tus derechos</h2>
            <p>De acuerdo con el RGPD y la LSSI-CE, tienes derecho a acceder, rectificar y suprimir los datos que te conciernen. Dado que no recopilamos datos personales identificables en nuestros propios servidores, puedes ejercer estos derechos directamente borrando los datos locales de tu navegador o contactándonos en <a href="mailto:contacto@clima-hoy.com">contacto@clima-hoy.com</a>.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
