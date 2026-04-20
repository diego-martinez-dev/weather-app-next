'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSettings } from '@/contexts/SettingsContext';
import './hourly-forecast.css';

interface ForecastListItem {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: Array<{
    icon: string;
    description: string;
  }>;
  pop: number;
}

interface HourlyForecastProps {
  forecastData: { list: ForecastListItem[] };
}

const RAIN_THRESHOLD = 0.3;
const RAIN_ALERT_SLOTS = 4;

export default function HourlyForecast({ forecastData }: HourlyForecastProps) {
  const { t } = useTranslation();
  const { convertTemp, getTempSymbol, language } = useSettings();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const slots = forecastData.list.slice(0, 8);
  const hasImmediateRain = slots
    .slice(0, RAIN_ALERT_SLOTS)
    .some(s => (s.pop ?? 0) >= RAIN_THRESHOLD);

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
          {Array.from({ length: 8 }).map((_, i) => (
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
          <span>{t('app.hourly.next_hours_rain', { count: RAIN_ALERT_SLOTS * 3 })}</span>
        </div>
      )}

      <div className="hourly-scroll-track">
        {slots.map(slot => (
          <div
            key={slot.dt}
            className={`hourly-card${(slot.pop ?? 0) >= RAIN_THRESHOLD ? ' hourly-card--rainy' : ''}`}
          >
            <div className="hourly-time">{formatHour(slot.dt)}</div>
            <img
              src={`https://openweathermap.org/img/wn/${slot.weather[0].icon}@2x.png`}
              alt={slot.weather[0].description}
              width={40}
              height={40}
            />
            <div className="hourly-temp">
              {convertTemp(slot.main.temp)}{getTempSymbol()}
            </div>
            {(slot.pop ?? 0) >= 0.05 && (
              <div className="hourly-pop">
                <span>💧</span>
                <span>{Math.round((slot.pop ?? 0) * 100)}%</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
