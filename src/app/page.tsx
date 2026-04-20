'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import WeatherClient from '@/components/WeatherClient';
import Favorites from '@/components/Favorites';
import LoadingSpinner from '@/components/LoadingSpinner';
import { SettingsProvider } from '@/contexts/SettingsContext';

// Componente de contenido estático para SEO (visible para Googlebot)
function StaticHomeContent() {
  return (
    <div>
      <TopMenu />
      <div className="home-two-columns">
        <h1>🌤️ Clima Hoy - Tu aplicación del clima en tiempo real</h1>
        <p>Consulta el clima actual, pronóstico y mapa de temperatura para cualquier ciudad del mundo.</p>
        
        <h2>🌡️ Características principales</h2>
        <ul>
          <li>Temperatura actual y sensación térmica</li>
          <li>Humedad y calidad del aire</li>
          <li>Amanecer y atardecer</li>
          <li>Mapa meteorológico con temperatura superficial</li>
          <li>Pronóstico para 5 días</li>
          <li>Ciudades favoritas</li>
        </ul>
        
        <h2>🏙️ Ciudades principales</h2>
        <div className="cities-grid">
          <a href="/clima/bogota" className="city-card">🌆 Bogotá</a>
          <a href="/clima/medellin" className="city-card">🌆 Medellín</a>
          <a href="/clima/cali" className="city-card">🌆 Cali</a>
          <a href="/clima/barranquilla" className="city-card">🌆 Barranquilla</a>
          <a href="/clima/cartagena" className="city-card">🌆 Cartagena</a>
          <a href="/clima/madrid" className="city-card">🌍 Madrid</a>
          <a href="/clima/barcelona" className="city-card">🌍 Barcelona</a>
          <a href="/clima/london" className="city-card">🌍 Londres</a>
          <a href="/clima/paris" className="city-card">🌍 París</a>
          <a href="/clima/new-york" className="city-card">🌍 Nueva York</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function HomeContent() {
  const searchParams = useSearchParams();
  const cityFromUrl = searchParams.get('city');
  
  const [weather, setWeather] = useState<any>(null);
  const [airQuality, setAirQuality] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteCities');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteCities', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (weather && weather.name) {
      setIsFavorite(favorites.includes(weather.name));
    }
  }, [weather, favorites]);

  const addFavorite = () => {
    if (weather && weather.name && !favorites.includes(weather.name)) {
      setFavorites([...favorites, weather.name]);
    }
  };

  const removeFavorite = (cityName: string) => {
    setFavorites(favorites.filter(city => city !== cityName));
  };

  const fetchWeatherData = async (cityName?: string, lat?: number, lon?: number) => {
    setLoading(true);
    setError('');
    
    try {
      let weatherRes;
      
      if (cityName) {
        weatherRes = await fetch(`/api/weather?city=${encodeURIComponent(cityName)}`);
      } else if (lat && lon) {
        weatherRes = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
      } else {
        throw new Error('No se proporcionaron datos de búsqueda');
      }
      
      const weatherData = await weatherRes.json();
      
      if (weatherData.cod === 200) {
        setWeather(weatherData);
        
        const airRes = await fetch(`/api/weather?type=air&lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}`);
        const airData = await airRes.json();
        setAirQuality(airData);
        
        const forecastRes = await fetch(`/api/weather?type=forecast&city=${encodeURIComponent(weatherData.name)}`);
        const forecastData = await forecastRes.json();
        setForecast(forecastData);
      } else {
        throw new Error(weatherData.message || 'Error al obtener clima');
      }
    } catch (err) {
      console.error(err);
      setError('No se pudo obtener el clima');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getWeatherByLocation = () => {
      if (cityFromUrl) {
        fetchWeatherData(cityFromUrl);
      } else {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              fetchWeatherData(undefined, latitude, longitude);
            },
            () => {
              // Fallback a Bogotá en lugar de mostrar error
              fetchWeatherData('Bogota');
            }
          );
        } else {
          fetchWeatherData('Bogota');
        }
      }
    };

    getWeatherByLocation();
  }, [cityFromUrl]);

  // Para Googlebot y SSR: mostrar contenido estático
  if (!isClient) {
    return <StaticHomeContent />;
  }

  if (loading) {
    return <StaticHomeContent />;
  }

  if (error && !weather) {
    return <StaticHomeContent />;
  }

  return (
    <div>
      <TopMenu />
      <div className="home-two-columns">
        <h1>🌤️ Clima Hoy</h1>
        
        <Favorites 
          favorites={favorites}
          onRemoveFavorite={removeFavorite}
        />
        
        {weather && (
          <WeatherClient 
            weather={weather}
            tempCelsius={weather.main?.temp}
            airQuality={airQuality}
            forecast={forecast}
            onAddFavorite={addFavorite}
            isFavorite={isFavorite}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default function HomePage() {
  return (
    <SettingsProvider>
      <Suspense fallback={<StaticHomeContent />}>
        <HomeContent />
      </Suspense>
    </SettingsProvider>
  );
}
