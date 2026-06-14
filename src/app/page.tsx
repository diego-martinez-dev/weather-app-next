'use client';

import { Suspense, useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import WeatherClient from '@/components/WeatherClient';
import Favorites from '@/components/Favorites';
import { SettingsProvider, useSettings } from '@/contexts/SettingsContext';
import { SunIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { getWeatherIcon } from '@/lib/weatherIcons';
import { getCityDescription, getCityTouristTip } from '@/data/cityDescriptions';

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
  const { language } = useSettings();
  const lastFetchedLang = useRef<string>('');

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
    if (!weather?.name) return;
    if (favorites.includes(weather.name)) {
      setFavorites(favorites.filter(city => city !== weather.name));
    } else {
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
    lastFetchedLang.current = language;
    setLoading(true);
    setError('');
    
    // Timeout de 8 segundos para la petición
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    
    try {
      let weatherRes;
      let url = '';
      
      if (cityName) {
        url = `/api/weather?city=${encodeURIComponent(cityName)}&lang=${language}`;
      } else if (lat && lon) {
        url = `/api/weather?lat=${lat}&lon=${lon}&lang=${language}`;
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
        const forecastRes = await fetch(`/api/weather?type=forecast&city=${encodeURIComponent(weatherData.name)}&lang=${language}`);
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
    if (weather?.name && lastFetchedLang.current !== language) {
      fetchWeatherData(weather.name);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weather, language]);

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
          {(() => { const I = weather?.weather?.[0]?.icon ? getWeatherIcon(weather.weather[0].icon) : SunIcon; return <I style={{ width: '1.5rem', height: '1.5rem', display: 'inline', verticalAlign: '-0.15em', color: 'black' }} />; })()}
          {weather?.name ?? 'Clima Hoy'}
        </h1>

        {weather?.name && (() => {
          const slug = weather.name.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
          const description = getCityDescription(slug);
          const touristTip = getCityTouristTip(slug);
          if (!description && !touristTip) return null;
          return (
            <div style={{ maxWidth: 900, margin: '8px auto 20px', padding: '16px 20px', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-text)', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
              {description && (
                <p style={{ margin: touristTip ? '0 0 12px 0' : '0' }}>
                  <LightBulbIcon style={{ width: '1.2em', height: '1.2em', display: 'inline', verticalAlign: '-0.2em', marginRight: 6 }} />
                  <strong>Tip:</strong> {description}
                </p>
              )}
              {touristTip && (
                <p style={{ margin: '0' }}>
                  <LightBulbIcon style={{ width: '1.2em', height: '1.2em', display: 'inline', verticalAlign: '-0.2em', marginRight: 6 }} />
                  <strong>Tip para turistas:</strong> {touristTip}
                </p>
              )}
            </div>
          );
        })()}

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