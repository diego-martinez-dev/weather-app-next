import type { Metadata } from 'next';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import '../legal.css';

export const metadata: Metadata = {
  title: 'Acerca de Clima Hoy — Tu pronóstico en tiempo real',
  description: 'Conoce qué es Clima Hoy, cómo funciona, qué datos ofrece y quién está detrás del proyecto. Información meteorológica actualizada en tiempo real para cualquier ciudad del mundo.',
  alternates: {
    canonical: 'https://www.clima-hoy.com/acerca',
  },
};

export default function AcercaPage() {
  return (
    <div>
      <TopMenu />
      <div className="legal-page">
        <div className="legal-container">
          <h1>Acerca de Clima Hoy</h1>
          <p className="last-updated">Última actualización: junio de 2026</p>

          <section>
            <h2>Qué es Clima Hoy</h2>
            <p>
              Clima Hoy es una aplicación web gratuita que te permite consultar el tiempo actual y el
              pronóstico de los próximos días para cualquier ciudad del mundo. Fue creada con un
              objetivo claro: que obtener información meteorológica sea rápido, sencillo y accesible
              desde cualquier dispositivo, sin registros obligatorios ni publicidad invasiva.
            </p>
            <p>
              Desde una pantalla obtenés la temperatura actual, la sensación térmica, la humedad
              relativa, la velocidad del viento, la probabilidad de lluvia por hora, la calidad del
              aire y el pronóstico extendido para los próximos cinco días. Todo en una sola página,
              actualizado en tiempo real.
            </p>
          </section>

          <section>
            <h2>De dónde vienen los datos</h2>
            <p>
              Todos los datos meteorológicos que muestra Clima Hoy provienen de
              <strong> OpenWeatherMap</strong>, uno de los servicios de información climática más
              reconocidos a nivel mundial. OpenWeatherMap integra datos de miles de estaciones
              meteorológicas oficiales, satélites, radares y modelos de predicción numérica para
              ofrecer lecturas actualizadas con una frecuencia de entre 10 y 30 minutos según la
              ciudad.
            </p>
            <p>
              Clima Hoy actúa como intermediario entre esa fuente y vos: recibe los datos en tiempo
              real, los presenta de forma clara y los adapta a tus preferencias de idioma y unidad
              de temperatura (Celsius o Fahrenheit). No almacenamos, modificamos ni vendemos la
              información meteorológica que consultás.
            </p>
          </section>

          <section>
            <h2>Para quién está pensado</h2>
            <p>
              Clima Hoy está pensado para cualquier persona que quiera saber qué tiempo hace o va a
              hacer en una ciudad concreta, ya sea donde vive, donde trabaja o donde planea viajar.
              El diseño es limpio y directo, sin menús innecesarios ni pasos intermedios: buscás una
              ciudad y el resultado aparece de inmediato.
            </p>
            <p>
              También es útil para quienes siguen de cerca el clima de otras ciudades o países,
              como familiares en el exterior o destinos turísticos en planificación. La función de
              ciudades favoritas permite guardar las ubicaciones que más consultás y acceder a ellas
              en un solo clic, sin necesidad de crear una cuenta.
            </p>
          </section>

          <section>
            <h2>Nuestra misión</h2>
            <p>
              La misión de Clima Hoy es simple: democratizar el acceso a información meteorológica
              de calidad. Creemos que conocer el clima no debería requerir instalar una app, aceptar
              decenas de permisos ni navegar por interfaces cargadas de anuncios.
            </p>
            <p>
              Seguimos trabajando para ampliar la cobertura de ciudades, mejorar la precisión de los
              pronósticos, agregar nuevas funcionalidades y ofrecer contenido educativo sobre
              meteorología en español. Si tenés sugerencias o encontrás algún error, escribinos a
              través de nuestra <a href="/contacto">página de contacto</a>.
            </p>
          </section>

          <section>
            <h2>About Clima Hoy</h2>
            <p>
              Clima Hoy is a free weather web app that lets you check current conditions and a
              5-day forecast for any city in the world. It was built to make weather information
              fast, simple, and accessible on any device — no sign-up required, no intrusive ads.
            </p>
            <p>
              Weather data is sourced from OpenWeatherMap, a globally recognized meteorological
              data provider that aggregates readings from thousands of official weather stations,
              satellites, radar networks, and numerical prediction models. Data is updated every
              10 to 30 minutes depending on the city. Clima Hoy displays that data clearly and
              adapts it to your preferred language and temperature unit.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
