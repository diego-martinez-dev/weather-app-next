'use client';

import { CloudIcon } from '@heroicons/react/24/outline';
import { SnowflakeIcon } from './SnowflakeIcon';
import './SnowForecast.css';

interface ForecastItem {
  dt: number;
  dt_txt: string;
  main: { temp: number };
  weather: { main: string; description: string }[];
  snow?: { '3h'?: number };
  pop?: number;
}

interface SnowForecastProps {
  forecast: { list: ForecastItem[] } | null;
}

function groupByDay(items: ForecastItem[]): Record<string, ForecastItem[]> {
  const groups: Record<string, ForecastItem[]> = {};
  for (const item of items) {
    const day = item.dt_txt.split(' ')[0];
    if (!groups[day]) groups[day] = [];
    groups[day].push(item);
  }
  return groups;
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' });
}

export default function SnowForecast({ forecast }: SnowForecastProps) {
  if (!forecast?.list?.length) return null;

  const days = groupByDay(forecast.list);
  const dayEntries = Object.entries(days).slice(0, 5);

  const snowDays = dayEntries.filter(([, items]) =>
    items.some(item => item.weather[0]?.main === 'Snow' || (item.snow?.['3h'] ?? 0) > 0)
  );

  return (
    <div className="snow-forecast">
      <h3 className="snow-forecast__title">
        <SnowflakeIcon style={{ width: '1.1em', height: '1.1em', verticalAlign: '-0.15em', marginRight: 6 }} />
        ¿Va a nevar? Pronóstico de nieve
      </h3>
      {snowDays.length === 0 ? (
        <p className="snow-forecast__no-snow">
          No se prevé nieve en los próximos 5 días según el pronóstico actual. Consultá más abajo el mapa de acumulación de nieve en tiempo real.
        </p>
      ) : (
        <p className="snow-forecast__intro">
          Se espera nieve en los próximos días:
        </p>
      )}
      <div className="snow-forecast__days">
        {dayEntries.map(([dateStr, items]) => {
          const totalSnow = items.reduce((acc, i) => acc + (i.snow?.['3h'] ?? 0), 0);
          const hasSnow = items.some(i => i.weather[0]?.main === 'Snow') || totalSnow > 0;
          const maxPop = Math.max(...items.map(i => Math.round((i.pop ?? 0) * 100)));
          const avgTemp = Math.round(items.reduce((a, i) => a + i.main.temp, 0) / items.length);

          return (
            <div key={dateStr} className={`snow-forecast__day ${hasSnow ? 'snow-forecast__day--snow' : ''}`}>
              <span className="snow-forecast__day-name">{formatDate(dateStr)}</span>
              <span className="snow-forecast__day-icon">
                {hasSnow
                  ? <SnowflakeIcon style={{ width: '1.2em', height: '1.2em' }} />
                  : <CloudIcon style={{ width: '1.2em', height: '1.2em' }} />}
              </span>
              <span className="snow-forecast__day-temp">{avgTemp}°</span>
              {hasSnow && totalSnow > 0 && (
                <span className="snow-forecast__day-accum">{totalSnow.toFixed(1)} mm nieve</span>
              )}
              {hasSnow && maxPop > 0 && (
                <span className="snow-forecast__day-pop">{maxPop}% prob.</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
