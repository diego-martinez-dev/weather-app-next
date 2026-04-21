'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import WeatherClient from '@/components/WeatherClient';
import Favorites from '@/components/Favorites';
import { SettingsProvider } from '@/contexts/SettingsContext';
import { SunIcon } from '@heroicons/react/24/outline';

// Skeleton loader para mostrar mientras carga
function SkeletonLoader() {
  return (
    <div>
      <TopMenu />
      <div className="home-two-columns">
        <h1><SunIcon style={{ width: '1.1em', height: '1.1em', display: 'inline', verticalAlign: '-0.15em' }} /> Clima Hoy</h1>
        <div className="skeleton favorites-skeleton"></div>
        <div className="two-column-layout">
          <div className="left-column">
            <div className="skeleton weather-card-skeleton"></div>
          </div>
          <div className="right-column">
            <div className="skeleton map-skeleton"></div>
          </div>
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

  // Cargar favoritos desde localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteCities');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('favoriteCities', JSON.stringify(favorites));
  }, [favorites]);

  // Actualizar estado isFavorite cuando cambia el clima
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

  const getWeatherByCoords = async (lat: number, lon: number) => {
    try {
      const geoRes = await fetch(`/api/weather?type=geocode&lat=${lat}&lon=${lon}`);
      const geoData = await geoRes.json();
      if (Array.isArray(geoData) && geoData.length > 0 && geoData[0].name) {
        fetchWeatherData(geoData[0].name);
      } else {
        fetchWeatherData(undefined, lat, lon);
      }
    } catch {
      fetchWeatherData(undefined, lat, lon);
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => getWeatherByCoords(pos.coords.latitude, pos.coords.longitude),
        () => fetchWeatherData('Bogota')
      );
    } else {
      fetchWeatherData('Bogota');
    }
  };

  // Función mejorada con timeout y mejor manejo de errores
  const fetchWeatherData = async (cityName?: string, lat?: number, lon?: number) => {
    setLoading(true);
    setError('');
    
    // Timeout de 8 segundos para la petición
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    
    try {
      let weatherRes;
      let url = '';
      
      if (cityName) {
        url = `/api/weather?city=${encodeURIComponent(cityName)}`;
      } else if (lat && lon) {
        url = `/api/weather?lat=${lat}&lon=${lon}`;
      } else {
        throw new Error('No se proporcionaron datos de búsqueda');
      }
      
      weatherRes = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      
      const weatherData = await weatherRes.json();
      
      if (weatherData.cod === 200) {
        setWeather(weatherData);
        
        // Calidad del aire
        const airRes = await fetch(`/api/weather?type=air&lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}`);
        const airData = await airRes.json();
        setAirQuality(airData);
        
        // Pronóstico
        const forecastRes = await fetch(`/api/weather?type=forecast&city=${encodeURIComponent(weatherData.name)}`);
        const forecastData = await forecastRes.json();
        setForecast(forecastData);
      } else {
        throw new Error(weatherData.message || 'Error al obtener clima');
      }
    } catch (err) {
      console.error('Error fetching weather:', err);
      setError('No se pudo obtener el clima');
      // Fallback a Bogotá solo si no es una ciudad específica que falló
      if (!cityName && !lat) {
        fetchWeatherData('Bogota');
      } else if (cityName && cityName !== 'Bogota') {
        // Si falló una ciudad específica, intentar con Bogotá como respaldo
        fetchWeatherData('Bogota');
      }
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
              getWeatherByCoords(latitude, longitude);
            },
            () => {
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

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div>
      <TopMenu />
      <div className="home-two-columns">
        <Favorites
          favorites={favorites}
          onRemoveFavorite={removeFavorite}
        />

        <h1>
          {weather?.weather?.[0]?.icon
            ? <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} style={{ width: '2rem', height: '2rem', display: 'inline', verticalAlign: 'middle', filter: 'brightness(0)' }} />
            : <SunIcon style={{ width: '1.1em', height: '1.1em', display: 'inline', verticalAlign: '-0.15em' }} />
          }
          {weather?.name ?? 'Clima Hoy'}
        </h1>

        {error && <p style={{ textAlign: 'center', color: '#e53e3e' }}>{error}</p>}

        {weather && (
          <WeatherClient
            weather={weather}
            tempCelsius={weather.main?.temp}
            airQuality={airQuality}
            forecast={forecast}
            onAddFavorite={addFavorite}
            isFavorite={isFavorite}
            onLocationClick={handleLocationClick}
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
      <Suspense fallback={<SkeletonLoader />}>
        <HomeContent />
      </Suspense>
    </SettingsProvider>
  );
}