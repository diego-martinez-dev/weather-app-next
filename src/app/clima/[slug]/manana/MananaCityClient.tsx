'use client';

import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import { SettingsProvider, useSettings } from '@/contexts/SettingsContext';
import { SunIcon, CloudIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { getWeatherIcon } from '@/lib/weatherIcons';

interface ForecastItem {
  dt_txt: string;
  main: { temp: number; temp_min: number; temp_max: number; humidity: number };
  weather: { main: string; description: string; icon: string }[];
  pop: number;
  wind: { speed: number };
}

function SkeletonLoader() {
  return (
    <div>
      <TopMenu />
      <div className="home-two-columns">
        <div className="skeleton weather-card-skeleton" style={{ height: 200 }}></div>
      </div>
      <Footer />
    </div>
  );
}

function MananaContent({ slug, cityName }: { slug: string; cityName: string }) {
  const { language, convertTemp, getTempSymbol } = useSettings();
  const [tomorrowItems, setTomorrowItems] = useState<ForecastItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchForecast() {
      setLoading(true);
      try {
        const res = await fetch(`/api/weather?type=forecast&city=${encodeURIComponent(cityName)}&lang=${language}`);
        const data = await res.json();
        if (!data.list) { setError('No se pudo obtener el pronóstico'); return; }

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split('T')[0];
        const items: ForecastItem[] = data.list.filter((i: ForecastItem) => i.dt_txt.startsWith(tomorrowStr));
        setTomorrowItems(items);
      } catch {
        setError('No se pudo obtener el pronóstico');
      } finally {
        setLoading(false);
      }
    }
    fetchForecast();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName, language]);

  const noonItem = tomorrowItems.find(i => i.dt_txt.includes('12:00:00')) || tomorrowItems[0];
  const minTemp = tomorrowItems.length ? Math.min(...tomorrowItems.map(i => i.main.temp_min)) : null;
  const maxTemp = tomorrowItems.length ? Math.max(...tomorrowItems.map(i => i.main.temp_max)) : null;
  const maxPop = tomorrowItems.length ? Math.max(...tomorrowItems.map(i => i.pop)) : null;
  const WeatherIcon = noonItem?.weather?.[0]?.icon ? getWeatherIcon(noonItem.weather[0].icon) : SunIcon;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowLabel = tomorrow.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <div>
      <TopMenu />
      <div className="home-two-columns">
        <nav style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.5rem', maxWidth: 900, margin: '12px auto 8px', padding: '0 16px' }}>
          <Link href="/" style={{ color: '#1a73e8', textDecoration: 'none' }}>Inicio</Link>
          {' › '}
          <Link href={`/clima/${slug}`} style={{ color: '#1a73e8', textDecoration: 'none' }}>Clima en {cityName}</Link>
          {' › '}
          Mañana
        </nav>

        <h1 style={{ textAlign: 'center', margin: '0 auto 16px', maxWidth: 900, padding: '0 16px' }}>
          <CalendarIcon style={{ width: '1.4rem', height: '1.4rem', display: 'inline', verticalAlign: '-0.2em', marginRight: 8 }} />
          Clima mañana en {cityName}
        </h1>

        {loading && (
          <div style={{ textAlign: 'center', padding: 40, color: '#888' }}>Cargando pronóstico...</div>
        )}

        {error && (
          <p style={{ textAlign: 'center', color: '#e53e3e' }}>{error}</p>
        )}

        {!loading && !error && tomorrowItems.length > 0 && (
          <div style={{ maxWidth: 900, margin: '0 auto 20px', padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
            <p style={{ margin: '0 0 16px', color: '#888', fontSize: '0.9rem' }}>
              {tomorrowLabel.charAt(0).toUpperCase() + tomorrowLabel.slice(1)}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <WeatherIcon style={{ width: '4rem', height: '4rem', color: '#f59e0b', flexShrink: 0 }} />
              <div>
                {noonItem && (
                  <p style={{ margin: '0 0 4px', fontSize: '1.1rem', textTransform: 'capitalize', fontWeight: 500 }}>
                    {noonItem.weather[0].description}
                  </p>
                )}
                {minTemp !== null && maxTemp !== null && (
                  <p style={{ margin: 0, fontSize: '1.8rem', fontWeight: 700 }}>
                    {Math.round(convertTemp(minTemp))}{getTempSymbol()} — {Math.round(convertTemp(maxTemp))}{getTempSymbol()}
                  </p>
                )}
              </div>
            </div>

            {(maxPop !== null || noonItem?.main?.humidity) && (
              <div style={{ marginTop: 16, display: 'flex', gap: 24, flexWrap: 'wrap', fontSize: '0.9rem', color: '#555' }}>
                {maxPop !== null && (
                  <span>
                    <CloudIcon style={{ width: '1.1em', height: '1.1em', display: 'inline', verticalAlign: '-0.15em', marginRight: 4 }} />
                    Lluvia: {Math.round(maxPop * 100)}%
                  </span>
                )}
                {noonItem?.main?.humidity && (
                  <span>Humedad: {noonItem.main.humidity}%</span>
                )}
                {noonItem?.wind?.speed && (
                  <span>Viento: {Math.round(noonItem.wind.speed * 3.6)} km/h</span>
                )}
              </div>
            )}

            {tomorrowItems.length > 1 && (
              <div style={{ marginTop: 20 }}>
                <p style={{ margin: '0 0 10px', fontWeight: 600, fontSize: '0.9rem' }}>Por hora</p>
                <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 4 }}>
                  {tomorrowItems.map((item) => {
                    const hour = item.dt_txt.split(' ')[1].slice(0, 5);
                    const HIcon = getWeatherIcon(item.weather[0].icon);
                    return (
                      <div key={item.dt_txt} style={{ textAlign: 'center', minWidth: 56, flexShrink: 0 }}>
                        <p style={{ margin: '0 0 4px', fontSize: '0.8rem', color: '#888' }}>{hour}</p>
                        <HIcon style={{ width: '1.5rem', height: '1.5rem', margin: '0 auto 4px' }} />
                        <p style={{ margin: 0, fontWeight: 600, fontSize: '0.85rem' }}>
                          {Math.round(convertTemp(item.main.temp))}{getTempSymbol()}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {!loading && !error && tomorrowItems.length === 0 && (
          <p style={{ textAlign: 'center', color: '#888', padding: 40 }}>
            El pronóstico para mañana aún no está disponible. Consultá el{' '}
            <Link href={`/clima/${slug}`} style={{ color: '#1a73e8' }}>pronóstico completo de {cityName}</Link>.
          </p>
        )}

        <div style={{ maxWidth: 900, margin: '0 auto 24px', padding: '16px 20px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '0.9rem', lineHeight: 1.7 }}>
          <p style={{ margin: '0 0 8px' }}>
            El pronóstico del tiempo para mañana en {cityName} se basa en datos actualizados de OpenWeatherMap.
            Para consultar la temperatura actual, el índice UV, la calidad del aire y el pronóstico completo de los próximos 7 días, visitá la página principal de la ciudad.
          </p>
          <p style={{ margin: 0 }}>
            <Link href={`/clima/${slug}`} style={{ color: '#1a73e8', fontWeight: 600 }}>
              Ver el clima actual y pronóstico completo de {cityName} →
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function MananaCityClient({ slug, cityName }: { slug: string; cityName: string }) {
  return (
    <SettingsProvider>
      <Suspense fallback={<SkeletonLoader />}>
        <MananaContent slug={slug} cityName={cityName} />
      </Suspense>
    </SettingsProvider>
  );
}
