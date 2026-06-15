'use client';

import { Suspense, useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import WeatherClient from '@/components/WeatherClient';
import Favorites from '@/components/Favorites';
import { SettingsProvider, useSettings } from '@/contexts/SettingsContext';
import { SunIcon, LightBulbIcon, CalendarIcon, CloudIcon, QuestionMarkCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { getWeatherIcon } from '@/lib/weatherIcons';
import type { CityClimate } from '@/data/cityClimate';

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

function CityContent({ slug, description, touristTip, climate, relatedGuides }: { slug: string; description?: string | null; touristTip?: string | null; climate?: CityClimate | null; relatedGuides?: { slug: string; title: string }[] }) {
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
        {(description || touristTip) && (
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
        )}
        {climate && (
          <div style={{ maxWidth: 900, margin: '0 auto 20px' }}>
            {(climate.bestTimeToVisit || climate.rainySeasons || climate.avgTempRange) && (
              <div style={{ padding: '16px 20px', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-text)', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)', marginBottom: 12 }}>
                {climate.avgTempRange && (
                  <p style={{ margin: '0 0 8px' }}>
                    <CalendarIcon style={{ width: '1.2em', height: '1.2em', display: 'inline', verticalAlign: '-0.2em', marginRight: 6 }} />
                    <strong>Temperatura típica:</strong> {climate.avgTempRange}
                  </p>
                )}
                {climate.bestTimeToVisit && (
                  <p style={{ margin: climate.rainySeasons ? '0 0 8px' : '0' }}>
                    <CalendarIcon style={{ width: '1.2em', height: '1.2em', display: 'inline', verticalAlign: '-0.2em', marginRight: 6 }} />
                    <strong>Mejor época para visitar:</strong> {climate.bestTimeToVisit}
                  </p>
                )}
                {climate.rainySeasons && (
                  <p style={{ margin: '0' }}>
                    <CloudIcon style={{ width: '1.2em', height: '1.2em', display: 'inline', verticalAlign: '-0.2em', marginRight: 6 }} />
                    <strong>Temporada de lluvias:</strong> {climate.rainySeasons}
                  </p>
                )}
              </div>
            )}
            {climate.faq?.length > 0 && (
              <div style={{ padding: '16px 20px', fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--color-text)', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
                <h2 style={{ margin: '0 0 12px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <QuestionMarkCircleIcon style={{ width: '1.2em', height: '1.2em' }} />
                  Preguntas frecuentes sobre el clima en {cityName}
                </h2>
                {climate.faq.map(({ question, answer }, i) => (
                  <details key={i} style={{ marginBottom: i < climate.faq.length - 1 ? 8 : 0 }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{question}</summary>
                    <p style={{ margin: '6px 0 0 0', paddingLeft: 16 }}>{answer}</p>
                  </details>
                ))}
              </div>
            )}
          </div>
        )}
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
        {relatedGuides && relatedGuides.length > 0 && (
          <div style={{ maxWidth: 900, margin: '24px auto 8px', padding: '16px 20px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
            <h2 style={{ margin: '0 0 12px', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: 6 }}>
              <BookOpenIcon style={{ width: '1.2em', height: '1.2em' }} />
              Guías relacionadas
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 8px' }}>
              {relatedGuides.map(({ slug: gSlug, title }) => (
                <li key={gSlug} style={{ marginBottom: 6 }}>
                  <Link href={`/guias/${gSlug}`} style={{ color: 'var(--color-primary, #1a73e8)', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#888' }}>
              <Link href="/glosario" style={{ color: 'var(--color-primary, #1a73e8)', textDecoration: 'none' }}>Glosario meteorológico</Link>
              {' · '}
              <Link href="/faq" style={{ color: 'var(--color-primary, #1a73e8)', textDecoration: 'none' }}>Preguntas frecuentes</Link>
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default function CityPageClient({ slug, description, touristTip, climate, relatedGuides }: { slug: string; description?: string | null; touristTip?: string | null; climate?: CityClimate | null; relatedGuides?: { slug: string; title: string }[] }) {
  return (
    <SettingsProvider>
      <Suspense fallback={<SkeletonLoader />}>
        <CityContent slug={slug} description={description} touristTip={touristTip} climate={climate} relatedGuides={relatedGuides} />
      </Suspense>
    </SettingsProvider>
  );
}
