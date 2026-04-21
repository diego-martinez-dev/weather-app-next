'use client';

import { Suspense, useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import WeatherClient from '@/components/WeatherClient';
import Favorites from '@/components/Favorites';
import { SettingsProvider } from '@/contexts/SettingsContext';
import { SunIcon } from '@heroicons/react/24/outline';

function slugToCity(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function SkeletonLoader() {
  return (
    <div>
      <TopMenu />
      <div className="home-two-columns">
        <div className="skeleton favorites-skeleton"></div>
        <div className="skeleton weather-card-skeleton"></div>
      </div>
      <Footer />
    </div>
  );
}

function CityContent() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();
  const cityName = slugToCity(params.slug ?? '');

  const [weather, setWeather] = useState<any>(null);
  const [airQuality, setAirQuality] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('favoriteCities');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteCities', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (weather?.name) setIsFavorite(favorites.includes(weather.name));
  }, [weather, favorites]);

  const addFavorite = () => {
    if (weather?.name && !favorites.includes(weather.name)) {
      setFavorites(prev => [...prev, weather.name]);
    }
  };

  const removeFavorite = (city: string) => {
    setFavorites(prev => prev.filter(c => c !== city));
  };

  const fetchWeatherData = async (city: string) => {
    setLoading(true);
    setError('');
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      const weatherRes = await fetch(
        `/api/weather?city=${encodeURIComponent(city)}`,
        { signal: controller.signal }
      );
      clearTimeout(timeoutId);
      const weatherData = await weatherRes.json();

      if (weatherData.cod === 200) {
        setWeather(weatherData);
        const [airRes, forecastRes] = await Promise.all([
          fetch(`/api/weather?type=air&lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}`),
          fetch(`/api/weather?type=forecast&city=${encodeURIComponent(weatherData.name)}`),
        ]);
        setAirQuality(await airRes.json());
        setForecast(await forecastRes.json());
      } else {
        setError(weatherData.message || 'Ciudad no encontrada');
      }
    } catch {
      setError('No se pudo obtener el clima');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cityName) fetchWeatherData(cityName);
  }, [cityName]);

  // El botón de ubicación navega al home que auto-detecta la ubicación
  const handleLocationClick = () => router.push('/');

  if (loading) return <SkeletonLoader />;

  return (
    <div>
      <TopMenu />
      <div className="home-two-columns">
        <h1>
          {weather?.weather?.[0]?.icon
            ? <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} style={{ width: '2rem', height: '2rem', display: 'inline', verticalAlign: 'middle' }} />
            : <SunIcon style={{ width: '1.1em', height: '1.1em', display: 'inline', verticalAlign: '-0.15em' }} />
          }
          {weather?.name ?? cityName}
        </h1>

        <Favorites
          favorites={favorites}
          onRemoveFavorite={removeFavorite}
        />

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

export default function CityPage() {
  return (
    <SettingsProvider>
      <Suspense fallback={<SkeletonLoader />}>
        <CityContent />
      </Suspense>
    </SettingsProvider>
  );
}
