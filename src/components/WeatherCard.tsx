'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getWeatherBackground, getOverlayColor } from '@/services/backgroundService';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { StarIcon, SunIcon, MoonIcon, FireIcon, BeakerIcon, CloudIcon, ArrowUpCircleIcon, ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import { getWeatherIcon } from '@/lib/weatherIcons';
import './WeatherCard.css';

interface WeatherCardProps {
  weather: any;
  convertTemp: (celsius: number) => number;
  getTempSymbol: () => string;
  onAddFavorite: (cityName: string) => void;
  isFavorite: boolean;
  airQuality?: any;
  forecast?: any;
}

function WeatherCard({ weather, convertTemp, getTempSymbol, onAddFavorite, isFavorite, airQuality, forecast }: WeatherCardProps) {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [overlayColor, setOverlayColor] = useState('');
  const [isDay, setIsDay] = useState(true);
  const [timezone, setTimezone] = useState<number | null>(null);
  const [dayTemp, setDayTemp] = useState<number | null>(null);
  const [nightTemp, setNightTemp] = useState<number | null>(null);

  // Obtener la zona horaria de la ciudad
  useEffect(() => {
    if (weather && weather.coord) {
      if (weather.timezone) {
        setTimezone(weather.timezone);
      } else {
        const estimatedOffset = -weather.coord.lon * 4 * 60;
        setTimezone(Math.round(estimatedOffset));
      }
    }
  }, [weather]);

  // Procesar pronóstico si viene como prop
  useEffect(() => {
    if (forecast && forecast.list) {
      const forecasts = forecast.list;
      const dayForecasts = forecasts.filter((f: any) => {
        const hour = new Date(f.dt * 1000).getHours();
        return hour >= 12 && hour <= 15;
      });
      const nightForecasts = forecasts.filter((f: any) => {
        const hour = new Date(f.dt * 1000).getHours();
        return hour >= 0 && hour <= 3;
      });
      
      if (dayForecasts.length > 0) {
        const avgDayTemp = dayForecasts.reduce((sum: number, f: any) => sum + f.main.temp, 0) / dayForecasts.length;
        setDayTemp(Math.round(avgDayTemp));
      }
      
      if (nightForecasts.length > 0) {
        const avgNightTemp = nightForecasts.reduce((sum: number, f: any) => sum + f.main.temp, 0) / nightForecasts.length;
        setNightTemp(Math.round(avgNightTemp));
      }
    } else {
      setDayTemp(Math.round(weather.main.temp_max));
      setNightTemp(Math.round(weather.main.temp_min));
    }
  }, [forecast, weather]);

  // Actualizar hora local de la ciudad
  useEffect(() => {
    if (!weather || timezone === null) return;

    const updateCityTime = () => {
      const now = new Date();
      const utcTime = now.getTime();
      const cityTime = new Date(utcTime + (timezone * 1000));
      
      const hours = cityTime.getUTCHours().toString().padStart(2, '0');
      const minutes = cityTime.getUTCMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
      
      const hour = cityTime.getUTCHours();
      setIsDay(hour >= 6 && hour < 18);
    };

    updateCityTime();
    const interval = setInterval(updateCityTime, 60000);
    return () => clearInterval(interval);
  }, [weather, timezone]);

  // Actualizar fondo según clima y hora local de la ciudad
  useEffect(() => {
    if (weather && weather.weather && weather.weather[0]) {
      const imageUrl = getWeatherBackground(weather, isDay);
      const overlay = getOverlayColor(isDay);
      setBackgroundImage(imageUrl);
      setOverlayColor(overlay);
    }
  }, [weather, isDay]);

  // Formatear hora del amanecer/atardecer
  const formatSunTime = (timestamp: number) => {
    if (!timestamp || timezone === null) return '--:--';
    const localTime = new Date((timestamp + timezone) * 1000);
    const hours = localTime.getUTCHours().toString().padStart(2, '0');
    const minutes = localTime.getUTCMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Obtener mensaje de calidad del aire
  const getAirQualityMessage = (aqi: number) => {
    switch (aqi) {
      case 1: return { text: t('app.weather.aqi_excellent'), color: '#00e400' };
      case 2: return { text: t('app.weather.aqi_good'), color: '#ffff00' };
      case 3: return { text: t('app.weather.aqi_moderate'), color: '#ff7e00' };
      case 4: return { text: t('app.weather.aqi_bad'), color: '#ff0000' };
      case 5: return { text: t('app.weather.aqi_very_bad'), color: '#8f3f97' };
      default: return { text: t('app.weather.aqi_unknown'), color: '#999' };
    }
  };

  if (!weather) return null;

  // Manejar calidad del aire de forma segura
  let airQualityInfo = null;
  if (airQuality && airQuality.list && airQuality.list[0] && airQuality.list[0].main) {
    airQualityInfo = getAirQualityMessage(airQuality.list[0].main.aqi);
  }

  const displayDayTemp = dayTemp !== null ? dayTemp : Math.round(weather.main.temp_max);
  const displayNightTemp = nightTemp !== null ? nightTemp : Math.round(weather.main.temp_min);

  const WeatherIcon = getWeatherIcon(weather.weather[0].icon);

  return (
    <div
      className="weather-card-modern"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: overlayColor,
          borderRadius: '20px',
          zIndex: 1
        }}
      />
      
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div className="card-header">
          <div>
            <h2 className="city-name">{weather.name}, {weather.sys.country}</h2>
            <div className="city-timezone">
              {t('app.weather.local_time')}: {currentTime || '--:--'}
            </div>
          </div>
          <div className="header-right">
            <button 
              onClick={() => onAddFavorite(weather.name)}
              className={`favorite-btn-modern ${isFavorite ? 'active' : ''}`}
              title={isFavorite ? t('app.favorites.remove') : t('app.favorites.add')}
            >
              {isFavorite
                ? <StarSolid style={{ width: '1.5rem', height: '1.5rem', color: '#f59e0b' }} />
                : <StarIcon style={{ width: '1.5rem', height: '1.5rem' }} />
              }
            </button>
          </div>
        </div>
        
        <div className="main-temp">
          <div className="temp-value">{convertTemp(weather.main.temp)}{getTempSymbol()}</div>
          <div className="weather-description">
            <WeatherIcon style={{ width: '3rem', height: '3rem' }} />
            <span>{weather.weather[0].description}</span>
          </div>
        </div>

        <div className="temp-range">
          <span><SunIcon style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.1em' }} /> {t('app.weather.day')}: {convertTemp(displayDayTemp)}{getTempSymbol()}</span>
          <span><MoonIcon style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.1em' }} /> {t('app.weather.night')}: {convertTemp(displayNightTemp)}{getTempSymbol()}</span>
        </div>

        <div className="weather-details-grid">
          <div className="detail-item">
            <FireIcon className="detail-icon" style={{ width: '1.3rem', height: '1.3rem' }} />
            <span className="detail-label">{t('app.weather.feels_like')}</span>
            <span className="detail-value">{convertTemp(weather.main.feels_like)}{getTempSymbol()}</span>
          </div>
          <div className="detail-item">
            <BeakerIcon className="detail-icon" style={{ width: '1.3rem', height: '1.3rem' }} />
            <span className="detail-label">{t('app.weather.humidity')}</span>
            <span className="detail-value">{weather.main.humidity}%</span>
          </div>
          <div className="detail-item">
            <CloudIcon className="detail-icon" style={{ width: '1.3rem', height: '1.3rem' }} />
            <span className="detail-label">{t('app.weather.air_quality')}</span>
            <span className="detail-value" style={{ color: airQualityInfo?.color }}>
              {airQualityInfo?.text || 'No disponible'}
            </span>
          </div>
        </div>

        <div className="sun-times">
          <div className="sun-item">
            <ArrowUpCircleIcon className="sun-icon" style={{ width: '1.4rem', height: '1.4rem' }} />
            <span>{t('app.weather.sunrise')}: {formatSunTime(weather.sys.sunrise)}</span>
          </div>
          <div className="sun-item">
            <ArrowDownCircleIcon className="sun-icon" style={{ width: '1.4rem', height: '1.4rem' }} />
            <span>{t('app.weather.sunset')}: {formatSunTime(weather.sys.sunset)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
