'use client';

import { Suspense, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import WeatherClient from '@/components/WeatherClient';
import Favorites from '@/components/Favorites';
import { SettingsProvider, useSettings } from '@/contexts/SettingsContext';
import { SunIcon } from '@heroicons/react/24/outline';
import { getWeatherIcon } from '@/lib/weatherIcons';

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

function CityContent({ slug, description }: { slug: string; description?: string | null }) {
  const router = useRouter();
  const cityName = slugToCity(slug);
  const { language } = useSettings();
  const lastFetchedLang = useRef<string>('');

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
    if (!weather?.name) return;
    if (favorites.includes(weather.name)) {
      setFavorites(prev => prev.filter(c => c !== weather.name));
    } else {
      setFavorites(prev => [...prev, weather.name]);
    }
  };

  const removeFavorite = (city: string) => {
    setFavorites(prev => prev.filter(c => c !== city));
  };

  const fetchWeatherData = async (city: string) => {
    lastFetchedLang.current = language;
    setLoading(true);
    setError('');
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      const weatherRes = await fetch(
        `/api/weather?city=${encodeURIComponent(city)}&lang=${language}`,
        { signal: controller.signal }
      );
      clearTimeout(timeoutId);
      const weatherData = await weatherRes.json();

      if (weatherData.cod === 200) {
        setWeather(weatherData);
        const [airRes, forecastRes] = await Promise.all([
          fetch(`/api/weather?type=air&lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}`),
          fetch(`/api/weather?type=forecast&city=${encodeURIComponent(weatherData.name)}&lang=${language}`),
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName]);

  useEffect(() => {
    if (weather?.name && lastFetchedLang.current !== language) {
      fetchWeatherData(weather.name);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weather, language]);

  const handleLocationClick = () => router.push('/');

  if (loading) return <SkeletonLoader />;

  return (
    <div>
      <TopMenu />
      <div className="home-two-columns">
        <Favorites favorites={favorites} onRemoveFavorite={removeFavorite} />
        <h1>
          {(() => { const I = weather?.weather?.[0]?.icon ? getWeatherIcon(weather.weather[0].icon) : SunIcon; return <I style={{ width: '1.5rem', height: '1.5rem', display: 'inline', verticalAlign: '-0.15em', color: 'black' }} />; })()}
          {weather?.name ?? cityName}
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
        {description && (
          <p style={{ maxWidth: 700, margin: '24px auto', padding: '0 16px', fontSize: '0.95rem', lineHeight: 1.7, color: '#475569', textAlign: 'center' }}>
            {description}
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default function CityPageClient({ slug, description }: { slug: string; description?: string | null }) {
  return (
    <SettingsProvider>
      <Suspense fallback={<SkeletonLoader />}>
        <CityContent slug={slug} description={description} />
      </Suspense>
    </SettingsProvider>
  );
}
