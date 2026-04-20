'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSettings } from '@/contexts/SettingsContext';
import './hourly-forecast.css';

interface ForecastListItem {
  dt: number;
  main: { temp: number; temp_min: number; temp_max: number };
  weather: Array<{ icon: string; description: string }>;
  pop: number;
}

interface HourlySlot {
  dt: number;
  temp: number;
  icon: string;
  description: string;
  pop: number;
}

interface HourlyForecastProps {
  forecastData: { list: ForecastListItem[] };
}

const HOURS_TO_SHOW = 12;
const RAIN_THRESHOLD = 0.3;
const RAIN_ALERT_HOURS = 4;

function interpolateHourly(list: ForecastListItem[]): HourlySlot[] {
  const result: HourlySlot[] = [];

  for (let i = 0; i < list.length - 1; i++) {
    const a = list[i];
    const b = list[i + 1];

    for (let h = 0; h < 3; h++) {
      const frac = h / 3;
      result.push({
        dt: a.dt + h * 3600,
        temp: a.main.temp + (b.main.temp - a.main.temp) * frac,
        icon: a.weather[0].icon,
        description: a.weather[0].description,
        pop: Math.min(1, Math.max(0, (a.pop ?? 0) + ((b.pop ?? 0) - (a.pop ?? 0)) * frac)),
      });
    }
  }

  if (list.length > 0) {
    const last = list[list.length - 1];
    result.push({
      dt: last.dt,
      temp: last.main.temp,
      icon: last.weather[0].icon,
      description: last.weather[0].description,
      pop: last.pop ?? 0,
    });
  }

  return result;
}

export default function HourlyForecast({ forecastData }: HourlyForecastProps) {
  const { t } = useTranslation();
  const { convertTemp, getTempSymbol, language } = useSettings();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Hora de inicio: hora actual + 1h, redondeada al siguiente número exacto
  const nowSec = Math.floor(Date.now() / 1000);
  const startDt = Math.ceil((nowSec + 3600) / 3600) * 3600;

  // Interpolar los primeros 8 slots de la API (24h de cobertura) a intervalos horarios
  const allHourly = interpolateHourly(forecastData.list.slice(0, 8));
  const slots = allHourly.filter(s => s.dt >= startDt).slice(0, HOURS_TO_SHOW);

  const hasImmediateRain = slots.slice(0, RAIN_ALERT_HOURS).some(s => s.pop >= RAIN_THRESHOLD);

  const formatHour = (dt: number): string =>
    new Date(dt * 1000).toLocaleTimeString(language, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

  if (!mounted) {
    return (
      <div className="hourly-forecast-container">
        <h3>⏱️ {t('app.hourly.title')}</h3>
        <div className="hourly-scroll-track">
          {Array.from({ length: HOURS_TO_SHOW }).map((_, i) => (
            <div key={i} className="hourly-card hourly-card--skeleton" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="hourly-forecast-container">
      <h3>⏱️ {t('app.hourly.title')}</h3>

      {hasImmediateRain && (
        <div className="hourly-rain-alert">
          <span>🌧️</span>
          <span>{t('app.hourly.next_hours_rain', { count: RAIN_ALERT_HOURS })}</span>
        </div>
      )}

      <div className="hourly-scroll-track">
        {slots.map(slot => (
          <div
            key={slot.dt}
            className={`hourly-card${slot.pop >= RAIN_THRESHOLD ? ' hourly-card--rainy' : ''}`}
          >
            <div className="hourly-time">{formatHour(slot.dt)}</div>
            <img
              src={`https://openweathermap.org/img/wn/${slot.icon}@2x.png`}
              alt={slot.description}
              width={40}
              height={40}
            />
            <div className="hourly-temp">
              {convertTemp(slot.temp)}{getTempSymbol()}
            </div>
            {slot.pop >= 0.05 && (
              <div className="hourly-pop">
                <span>💧</span>
                <span>{Math.round(slot.pop * 100)}%</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
