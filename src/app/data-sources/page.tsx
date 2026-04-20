import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import '../legal.css';

export default function DataSourcesPage() {
  return (
    <div>
      <TopMenu />
      <div className="legal-page">
        <div className="legal-container">
          <h1>Fuentes de Datos</h1>
          <p className="last-updated">Última actualización: 19 de abril de 2026</p>

          <section>
            <h2>1. Datos Meteorológicos</h2>
            <p>Todos los datos meteorológicos son proporcionados por <strong>OpenWeatherMap</strong>, un servicio líder en información meteorológica global.</p>
            <p>Más información: <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">OpenWeatherMap.org</a></p>
          </section>

          <section>
            <h2>2. Precisión y Actualización</h2>
            <p>Los datos se actualizan regularmente. La información mostrada incluye temperatura, humedad, viento y condiciones climáticas.</p>
          </section>

          <section>
            <h2>3. Atribución</h2>
            <p>Esta aplicación utiliza datos de OpenWeatherMap bajo los términos de su licencia. La atribución se encuentra visible en el pie de página.</p>
          </section>

          <section>
            <h2>4. Limitaciones</h2>
            <p>Los datos meteorológicos pueden tener retrasos. Para decisiones críticas, recomendamos consultar fuentes oficiales adicionales.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}