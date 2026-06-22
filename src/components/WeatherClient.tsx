'use client';

import { useTranslation } from 'react-i18next';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import WeatherCard from './WeatherCard';
import WeatherMapWrapper from './WeatherMapWrapper';
import Forecast from './Forecast';
import HourlyForecast from './HourlyForecast';
import { useSettings } from '@/contexts/SettingsContext';
import { getWeatherSignals } from '@/lib/weatherSignals';
import { getAdvice } from '@/lib/weatherAdvice';
import { getLexicon } from '@/lib/localLexicon';

interface WeatherClientProps {
  weather: any;
  tempCelsius: number;
  airQuality?: any;
  forecast?: any;
  onAddFavorite: () => void;
  isFavorite: boolean;
  onLocationClick?: () => void;
}

export default function WeatherClient({
  weather,
  tempCelsius,
  airQuality,
  forecast,
  onAddFavorite,
  isFavorite,
  onLocationClick,
}: WeatherClientProps) {
  const { convertTemp, getTempSymbol, language, country } = useSettings();
  const { t } = useTranslation();
  const tempDisplay = `${convertTemp(tempCelsius)}${getTempSymbol()}`;

  const signals = getWeatherSignals(weather, forecast);
  const { scenario, params } = getAdvice(signals);
  const lexicon = getLexicon(language, country);
  const adviceText = t(`app.advice.${scenario}`, {
    ...params,
    ...lexicon,
    tempMaxToday: convertTemp(params.tempMaxToday),
    tempMinToday: convertTemp(params.tempMinToday),
  });

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, maxWidth: 900, margin: '0 auto 16px', padding: '12px 16px', fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--color-text)', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
        <LightBulbIcon style={{ width: '1.3em', height: '1.3em', flexShrink: 0, marginTop: 2, color: '#f59e0b' }} />
        <span><strong>{t('app.advice.title')}:</strong> {adviceText}</span>
      </div>

      <div className="two-column-layout">
        <div className="left-column">
          <WeatherCard 
            weather={weather}
            convertTemp={convertTemp}
            getTempSymbol={getTempSymbol}
            onAddFavorite={onAddFavorite}
            isFavorite={isFavorite}
            airQuality={airQuality}
            forecast={forecast}
          />
        </div>
        
        <div className="right-column">
          <WeatherMapWrapper
            lat={weather.coord.lat}
            lon={weather.coord.lon}
            cityName={weather.name}
            tempCelsius={tempCelsius}
            tempDisplay={tempDisplay}
            onLocationClick={onLocationClick ?? (() => {})}
          />
        </div>
      </div>
      
      {forecast?.list && <HourlyForecast forecastData={forecast} />}

      <Forecast cityName={weather.name} forecastData={forecast} />
    </>
  );
}