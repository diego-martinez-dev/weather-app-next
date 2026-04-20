'use client';

import WeatherCard from './WeatherCard';
import WeatherMapWrapper from './WeatherMapWrapper';
import Forecast from './Forecast';
import HourlyForecast from './HourlyForecast';
import TemperatureIndicator from './TemperatureIndicator';
import { useSettings } from '@/contexts/SettingsContext';

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
  const { convertTemp, getTempSymbol } = useSettings();
  const tempDisplay = `${convertTemp(tempCelsius)}${getTempSymbol()}`;

  return (
    <>
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
      
      <TemperatureIndicator
        tempCelsius={tempCelsius}
        tempDisplay={tempDisplay}
      />

      {forecast?.list && <HourlyForecast forecastData={forecast} />}

      <Forecast cityName={weather.name} forecastData={forecast} />
    </>
  );
}