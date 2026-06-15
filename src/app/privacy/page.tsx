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
          <p className="last-updated">Última actualización: 14 de junio de 2026</p>

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
            <p>Tus preferencias (ciudades favoritas, unidad de temperatura, idioma y país) se almacenan localmente en tu navegador mediante localStorage y no salen de tu dispositivo.</p>
            <p>Si decides iniciar sesión con Google, recopilamos y almacenamos tu nombre, dirección de correo electrónico y foto de perfil en nuestra base de datos (alojada en Supabase) para gestionar tu cuenta. No tenemos acceso a tu contraseña de Google. Puedes solicitar la eliminación de tu cuenta y de estos datos escribiéndonos.</p>
          </section>

          <section>
            <h2>4. Servicios de Terceros</h2>
            <p>Para prestar el servicio utilizamos los siguientes proveedores, cada uno con su propia política de privacidad:</p>
            <ul>
              <li><strong>OpenWeatherMap</strong> — proporciona los datos meteorológicos.</li>
              <li><strong>Vercel</strong> — aloja la aplicación.</li>
              <li><strong>Supabase</strong> — almacena los datos de cuenta de los usuarios registrados.</li>
              <li><strong>Google (inicio de sesión)</strong> — gestiona la autenticación cuando entras con tu cuenta de Google.</li>
              <li><strong>Google Analytics</strong> — mide el tráfico de forma agregada, solo si aceptas las cookies analíticas.</li>
            </ul>
          </section>

          <section>
            <h2>5. Publicidad (Google AdSense)</h2>
            <p>Este sitio utiliza Google AdSense, un servicio de publicidad de Google, para mostrar anuncios.</p>
            <ul>
              <li>Google y sus socios utilizan cookies (incluida la cookie de DoubleClick) para mostrar anuncios basados en tus visitas previas a este y otros sitios web.</li>
              <li>El uso de la cookie de publicidad permite a Google y a sus socios publicar anuncios a los usuarios en función de su navegación.</li>
              <li>Puedes inhabilitar la publicidad personalizada visitando la <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Configuración de anuncios de Google</a>, o desactivar las cookies de terceros de algunos proveedores en <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">aboutads.info</a>.</li>
              <li>Más información en la <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">política de Google sobre cómo usa la información de los sitios que utilizan sus servicios</a>.</li>
            </ul>
          </section>

          <section>
            <h2>6. Tus Derechos</h2>
            <p>Tienes derecho a acceder, modificar o eliminar tus datos. Puedes limpiar tus favoritos borrando los datos del sitio en tu navegador, y solicitar la eliminación de tu cuenta de Google escribiéndonos.</p>
          </section>

          <section>
            <h2>7. Contacto</h2>
            <p>Para preguntas sobre esta política, contáctanos en: <strong>privacidad@clima-hoy.com</strong></p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}