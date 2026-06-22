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
          <p className="last-updated">Última actualización: 14 de junio de 2026</p>

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

            <h3>Publicidad (Google AdSense)</h3>
            <p>Este sitio muestra anuncios a través de <strong>Google AdSense</strong>. Google y sus socios utilizan cookies de publicidad —incluida la cookie de <strong>DoubleClick</strong>— para mostrar anuncios basados en tus visitas previas a este y otros sitios web. Puedes inhabilitar la publicidad personalizada en la <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Configuración de anuncios de Google</a> o gestionar las cookies de terceros en <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">aboutads.info</a>. Más detalles en la <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">política publicitaria de Google</a>.</p>

            <h3>Geolocalización del navegador</h3>
            <p>Si lo autorizas a través del diálogo del navegador, usamos la API de geolocalización (<code>navigator.geolocation</code>) para obtener el clima de tu ubicación actual. Esta autorización es gestionada por el navegador y puedes revocarla en cualquier momento desde la configuración del sitio.</p>

            <h3>Mapa meteorológico</h3>
            <p>El mapa de temperaturas carga teselas (tiles) desde los servidores de OpenWeatherMap. Al visualizar el mapa, tu dirección IP queda expuesta a OpenWeatherMap. Consulta su <a href="https://openweathermap.org/privacy-policy" target="_blank" rel="noopener noreferrer">política de privacidad</a>.</p>

            <h3>Mapa de lluvia (Windy)</h3>
            <p>El mapa de lluvia en <a href="/lluvia">/lluvia</a> y en las páginas de ciudad se muestra mediante un mapa interactivo incrustado de <strong>Windy</strong>. Al cargarlo, tu dirección IP queda expuesta a Windy y este puede usar sus propias cookies. Consulta su <a href="https://account.windy.com/privacy" target="_blank" rel="noopener noreferrer">política de privacidad</a>.</p>
          </section>

          <section>
            <h2>3. Gestión del consentimiento</h2>
            <p>Al acceder por primera vez, verás un banner donde puedes elegir entre <strong>Aceptar todo</strong> (esenciales + analytics) o <strong>Solo esenciales</strong>. Tu elección se guarda en localStorage. Para cambiarla, borra los datos del sitio desde la configuración de tu navegador y recarga la página.</p>
          </section>

          <section>
            <h2>4. Tus derechos</h2>
            <p>De acuerdo con el RGPD y la LSSI-CE, tienes derecho a acceder, rectificar y suprimir los datos que te conciernen. Salvo los datos de cuenta de quienes inician sesión con Google (nombre, correo y foto de perfil), no recopilamos datos personales identificables. Puedes ejercer estos derechos borrando los datos locales de tu navegador, solicitando la eliminación de tu cuenta o contactándonos en <a href="mailto:contacto@clima-hoy.com">contacto@clima-hoy.com</a>.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
