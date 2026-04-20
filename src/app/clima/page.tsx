import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import Link from 'next/link';

const popularCities = [
  { name: 'Bogotá', slug: 'bogota' },
  { name: 'Medellín', slug: 'medellin' },
  { name: 'Cali', slug: 'cali' },
  { name: 'Barranquilla', slug: 'barranquilla' },
  { name: 'Cartagena', slug: 'cartagena' },
  { name: 'Bucaramanga', slug: 'bucaramanga' },
  { name: 'Pereira', slug: 'pereira' },
  { name: 'Manizales', slug: 'manizales' },
  { name: 'Cúcuta', slug: 'cucuta' },
  { name: 'Ibagué', slug: 'ibague' },
  { name: 'Santa Marta', slug: 'santa-marta' },
  { name: 'Riohacha', slug: 'riohacha' },
];

const internationalCities = [
  { name: 'Madrid', slug: 'madrid' },
  { name: 'Barcelona', slug: 'barcelona' },
  { name: 'Londres', slug: 'london' },
  { name: 'París', slug: 'paris' },
  { name: 'Nueva York', slug: 'new-york' },
  { name: 'Tokio', slug: 'tokyo' },
  { name: 'Berlín', slug: 'berlin' },
  { name: 'Roma', slug: 'rome' },
  { name: 'Buenos Aires', slug: 'buenos-aires' },
  { name: 'Ciudad de México', slug: 'mexico-city' },
  { name: 'Santiago', slug: 'santiago' },
  { name: 'Lima', slug: 'lima' },
];

export default function ClimaHubPage() {
  return (
    <div>
      <TopMenu />
      <div className="home-two-columns">
        <h1>🌤️ Clima en todas las ciudades</h1>
        <p>Consulta el clima actual en cualquier ciudad del mundo.</p>
        
        <section className="cities-section">
          <h2>🇨🇴 Ciudades de Colombia</h2>
          <div className="cities-grid">
            {popularCities.map((city) => (
              <Link key={city.slug} href={`/clima/${city.slug}`} className="city-card">
                🌆 {city.name}
              </Link>
            ))}
          </div>
        </section>
        
        <section className="cities-section">
          <h2>🌎 Ciudades internacionales</h2>
          <div className="cities-grid">
            {internationalCities.map((city) => (
              <Link key={city.slug} href={`/clima/${city.slug}`} className="city-card">
                🌍 {city.name}
              </Link>
            ))}
          </div>
        </section>
        
        <section className="search-section">
          <h2>🔍 Buscar otra ciudad</h2>
          <p>Usa el buscador en la parte superior para encontrar el clima de cualquier ciudad.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
