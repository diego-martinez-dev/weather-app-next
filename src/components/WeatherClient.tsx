'use client';

import WeatherCard from './WeatherCard';
import WeatherMapWrapper from './WeatherMapWrapper';
import Forecast from './Forecast';
import TemperatureIndicator from './TemperatureIndicator';
import { useSettings } from '@/contexts/SettingsContext';

interface WeatherClientProps {
  weather: any;
  tempCelsius: number;
  airQuality?: any;
  forecast?: any;
}

export default function WeatherClient({ weather, tempCelsius, airQuality, forecast }: WeatherClientProps) {
  const { convertTemp, getTempSymbol } = useSettings();
  const tempDisplay = `${convertTemp(tempCelsius)}${getTempSymbol()}`;
  const noop = () => {};

  return (
    <>
      <div className="two-column-layout">
        <div className="left-column">
          <WeatherCard 
            weather={weather}
            convertTemp={convertTemp}
            getTempSymbol={getTempSymbol}
            onAddFavorite={noop}
            isFavorite={false}
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
            API_KEY=""
            onLocationClick={noop}
          />
        </div>
      </div>
      
      <TemperatureIndicator 
        tempCelsius={tempCelsius}
        tempDisplay={tempDisplay}
      />
      
      <Forecast cityName={weather.name} />
    </>
  );
}