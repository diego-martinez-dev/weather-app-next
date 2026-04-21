'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSettings } from '@/contexts/SettingsContext';
import { CalendarDaysIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline';
import './forecast.css';

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

interface ForecastData {
  cod: string | number;
  list: ForecastListItem[];
}

interface DayForecast {
  dateKey: string;
  maxTemp: number;
  minTemp: number;
  maxPop: number;
  icon: string;
  description: string;
}

interface ForecastProps {
  cityName: string;
  forecastData?: ForecastData | null;
}

function aggregateDays(list: ForecastListItem[]): DayForecast[] {
  const groupedByDay = new Map<string, ForecastListItem[]>();
  for (const item of list) {
    const dateKey = new Date(item.dt * 1000).toISOString().slice(0, 10);
    if (!groupedByDay.has(dateKey)) groupedByDay.set(dateKey, []);
    groupedByDay.get(dateKey)!.push(item);
  }

  return Array.from(groupedByDay.entries()).slice(0, 5).map(([dateKey, items]) => {
    const maxTemp = Math.max(...items.map(i => i.main.temp_max));
    const minTemp = Math.min(...items.map(i => i.main.temp_min));
    const maxPop = Math.max(...items.map(i => i.pop ?? 0));
    const dayItem =
      items.find(i => {
        const h = new Date(i.dt * 1000).getUTCHours();
        return h >= 12 && h <= 15;
      }) ?? items[Math.floor(items.length / 2)];
    return {
      dateKey,
      maxTemp,
      minTemp,
      maxPop,
      icon: dayItem.weather[0].icon,
      description: dayItem.weather[0].description,
    };
  });
}

export default function Forecast({ cityName, forecastData }: ForecastProps) {
  const { t } = useTranslation();
  const { convertTemp, getTempSymbol, language } = useSettings();
  const [internalList, setInternalList] = useState<ForecastListItem[]>([]);
  const [loading, setLoading] = useState(!forecastData);
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (forecastData) return;
    if (!cityName) return;

    const fetchForecast = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/weather?type=forecast&city=${encodeURIComponent(cityName)}`);
        const data: ForecastData = await res.json();
        if (data.cod === '200' || data.cod === 200) {
          setInternalList(data.list);
        } else {
          setError(t('app.forecast.error'));
        }
      } catch {
        setError(t('app.forecast.error'));
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [cityName, forecastData, t]);

  const rawList = forecastData?.list ?? internalList;
  const days = rawList.length > 0 ? aggregateDays(rawList) : [];

  const weekMin = days.length > 0 ? Math.min(...days.map(d => d.minTemp)) : 0;
  const weekMax = days.length > 0 ? Math.max(...days.map(d => d.maxTemp)) : 1;
  const weekRange = weekMax - weekMin || 1;

  if (!mounted || (loading && !forecastData)) {
    return (
      <div className="forecast-container">
        <h3><CalendarDaysIcon style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.1em' }} /> {t('app.forecast.title')}</h3>
        <p className="forecast-loading">{t('app.forecast.loading')}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="forecast-container">
        <h3><CalendarDaysIcon style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.1em' }} /> {t('app.forecast.title')}</h3>
        <p className="forecast-error">{error}</p>
      </div>
    );
  }

  return (
    <div className="forecast-container">
      <h3><CalendarDaysIcon style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.1em' }} /> {t('app.forecast.title')}</h3>
      <div className="forecast-list">
        {days.map((day) => {
          const date = new Date(day.dateKey + 'T00:00:00Z');
          const dayName = date.toLocaleDateString(language, { weekday: 'short', timeZone: 'UTC' });
          const dayDate = date.toLocaleDateString(language, { day: 'numeric', month: 'short', timeZone: 'UTC' });
          const leftPct = ((day.minTemp - weekMin) / weekRange) * 100;
          const widthPct = ((day.maxTemp - day.minTemp) / weekRange) * 100;

          return (
            <div key={day.dateKey} className="forecast-item">
              <div className="forecast-day-name">{dayName}</div>
              <div className="forecast-day-date">{dayDate}</div>
              <img
                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt={day.description}
                width={50}
                height={50}
              />
              <div className="forecast-desc">{day.description}</div>
              <div className="forecast-temp-range">
                <span className="forecast-temp-min">{convertTemp(day.minTemp)}{getTempSymbol()}</span>
                <div className="forecast-range-bar-track">
                  <div
                    className="forecast-range-bar-fill"
                    style={{ left: `${leftPct}%`, width: `${Math.max(widthPct, 8)}%` }}
                  />
                </div>
                <span className="forecast-temp-max">{convertTemp(day.maxTemp)}{getTempSymbol()}</span>
              </div>
              {day.maxPop >= 0.05 && (
                <div className="forecast-pop">
                  <CloudArrowDownIcon style={{ width: '1em', height: '1em' }} />
                  <span>{Math.round(day.maxPop * 100)}%</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
