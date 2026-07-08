'use client';

import { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import { SettingsProvider, useSettings } from '@/contexts/SettingsContext';
import { CloudIcon, CalendarIcon } from '@heroicons/react/24/outline';
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

function PorHoraContent({ slug, cityName }: { slug: string; cityName: string }) {
  const { language, convertTemp, getTempSymbol } = useSettings();
  const [items, setItems] = useState<ForecastItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchForecast() {
      setLoading(true);
      try {
        const res = await fetch(`/api/weather?type=forecast&city=${encodeURIComponent(cityName)}&lang=${language}`);
        const data = await res.json();
        if (!data.list) { setError('No se pudo obtener el pronóstico'); return; }

        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split('T')[0];
        const filtered: ForecastItem[] = data.list.filter(
          (i: ForecastItem) => i.dt_txt.startsWith(todayStr) || i.dt_txt.startsWith(tomorrowStr)
        );
        setItems(filtered);
      } catch {
        setError('No se pudo obtener el pronóstico');
      } finally {
        setLoading(false);
      }
    }
    fetchForecast();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityName, language]);

  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const todayItems = items.filter(i => i.dt_txt.startsWith(todayStr));
  const tomorrowItems = items.filter(i => i.dt_txt.startsWith(tomorrowStr));

  const todayLabel = today.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
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
          Por hora
        </nav>

        <h1 style={{ textAlign: 'center', margin: '0 auto 16px', maxWidth: 900, padding: '0 16px' }}>
          <CalendarIcon style={{ width: '1.4rem', height: '1.4rem', display: 'inline', verticalAlign: '-0.2em', marginRight: 8 }} />
          Clima por hora en {cityName}
        </h1>

        {loading && (
          <div style={{ textAlign: 'center', padding: 40, color: '#888' }}>Cargando pronóstico...</div>
        )}

        {error && (
          <p style={{ textAlign: 'center', color: '#e53e3e' }}>{error}</p>
        )}

        {!loading && !error && items.length === 0 && (
          <p style={{ textAlign: 'center', color: '#888', padding: 40 }}>
            El pronóstico por hora no está disponible. Consultá el{' '}
            <Link href={`/clima/${slug}`} style={{ color: '#1a73e8' }}>pronóstico completo de {cityName}</Link>.
          </p>
        )}

        {!loading && !error && todayItems.length > 0 && (
          <div style={{ maxWidth: 900, margin: '0 auto 16px', padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
            <p style={{ margin: '0 0 12px', fontWeight: 600, fontSize: '0.9rem', color: '#555' }}>
              {todayLabel.charAt(0).toUpperCase() + todayLabel.slice(1)} — hoy
            </p>
            <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 4 }}>
              {todayItems.map((item) => {
                const hour = item.dt_txt.split(' ')[1].slice(0, 5);
                const HIcon = getWeatherIcon(item.weather[0].icon);
                return (
                  <div key={item.dt_txt} style={{ textAlign: 'center', minWidth: 70, flexShrink: 0 }}>
                    <p style={{ margin: '0 0 4px', fontSize: '0.8rem', color: '#888' }}>{hour}</p>
                    <HIcon style={{ width: '1.5rem', height: '1.5rem', margin: '0 auto 4px' }} />
                    <p style={{ margin: '0 0 2px', fontWeight: 600, fontSize: '0.9rem' }}>
                      {Math.round(convertTemp(item.main.temp))}{getTempSymbol()}
                    </p>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#888' }}>
                      <CloudIcon style={{ width: '0.9em', height: '0.9em', display: 'inline', verticalAlign: '-0.1em', marginRight: 2 }} />
                      {Math.round(item.pop * 100)}%
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {!loading && !error && tomorrowItems.length > 0 && (
          <div style={{ maxWidth: 900, margin: '0 auto 20px', padding: '20px 24px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
            <p style={{ margin: '0 0 12px', fontWeight: 600, fontSize: '0.9rem', color: '#555' }}>
              {tomorrowLabel.charAt(0).toUpperCase() + tomorrowLabel.slice(1)} — mañana
            </p>
            <div style={{ display: 'flex', gap: 12, overflowX: 'auto', paddingBottom: 4 }}>
              {tomorrowItems.map((item) => {
                const hour = item.dt_txt.split(' ')[1].slice(0, 5);
                const HIcon = getWeatherIcon(item.weather[0].icon);
                return (
                  <div key={item.dt_txt} style={{ textAlign: 'center', minWidth: 70, flexShrink: 0 }}>
                    <p style={{ margin: '0 0 4px', fontSize: '0.8rem', color: '#888' }}>{hour}</p>
                    <HIcon style={{ width: '1.5rem', height: '1.5rem', margin: '0 auto 4px' }} />
                    <p style={{ margin: '0 0 2px', fontWeight: 600, fontSize: '0.9rem' }}>
                      {Math.round(convertTemp(item.main.temp))}{getTempSymbol()}
                    </p>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#888' }}>
                      <CloudIcon style={{ width: '0.9em', height: '0.9em', display: 'inline', verticalAlign: '-0.1em', marginRight: 2 }} />
                      {Math.round(item.pop * 100)}%
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div style={{ maxWidth: 900, margin: '0 auto 24px', padding: '16px 20px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '0.9rem', lineHeight: 1.7 }}>
          <p style={{ margin: '0 0 8px' }}>
            El pronóstico hora a hora de {cityName} se basa en datos de OpenWeatherMap actualizados cada pocas horas.
            Para ver la temperatura actual, el índice UV, la calidad del aire y el pronóstico de 7 días, visitá la página principal de la ciudad.
          </p>
          <p style={{ margin: 0 }}>
            <Link href={`/clima/${slug}`} style={{ color: '#1a73e8', fontWeight: 600 }}>
              Ver el clima actual y pronóstico completo de {cityName} →
            </Link>
            {' · '}
            <Link href={`/clima/${slug}/manana`} style={{ color: '#1a73e8' }}>
              Clima mañana en {cityName}
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function PorHoraCityClient({ slug, cityName }: { slug: string; cityName: string }) {
  return (
    <SettingsProvider>
      <Suspense fallback={<SkeletonLoader />}>
        <PorHoraContent slug={slug} cityName={cityName} />
      </Suspense>
    </SettingsProvider>
  );
}
