'use client';

import { Suspense, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import WeatherClient from '@/components/WeatherClient';
import Favorites from '@/components/Favorites';
import RainRadarMapWrapper from '@/components/RainRadarMapWrapper';
import { SettingsProvider, useSettings } from '@/contexts/SettingsContext';
import { SunIcon } from '@heroicons/react/24/outline';
import { getWeatherIcon } from '@/lib/weatherIcons';

function SkeletonLoader() {
  return (
    <>
      <div className="skeleton favorites-skeleton"></div>
      <div className="skeleton weather-card-skeleton"></div>
    </>
  );
}

function CityContent({ slug, cityName }: { slug: string; cityName: string }) {
  const router = useRouter();
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
    <>
      <Favorites favorites={favorites} onRemoveFavorite={removeFavorite} />
      <h2 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {(() => { const I = weather?.weather?.[0]?.icon ? getWeatherIcon(weather.weather[0].icon) : SunIcon; return <I style={{ width: '1.5rem', height: '1.5rem', color: 'black' }} />; })()}
        {weather?.name ?? cityName}
      </h2>
      {error && <p style={{ textAlign: 'center', color: '#e53e3e' }}>{error}</p>}
      {weather && (
        <>
          <WeatherClient
            weather={weather}
            tempCelsius={weather.main?.temp}
            airQuality={airQuality}
            forecast={forecast}
            onAddFavorite={addFavorite}
            isFavorite={isFavorite}
            onLocationClick={handleLocationClick}
          />
          {weather.coord?.lat && weather.coord?.lon && (
            <div style={{ margin: '24px 0 8px' }}>
              <RainRadarMapWrapper
                lat={weather.coord.lat}
                lon={weather.coord.lon}
                zoom={8}
                cityName={weather.name}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default function CityPageClient({ slug, cityName }: { slug: string; cityName: string }) {
  return (
    <SettingsProvider>
      <Suspense fallback={<SkeletonLoader />}>
        <CityContent slug={slug} cityName={cityName} />
      </Suspense>
    </SettingsProvider>
  );
}
