'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_KEY } from '@/config';

interface ForecastProps {
  cityName: string;
}

interface ForecastItem {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    icon: string;
    description: string;
  }>;
  dt_txt: string;
}

export default function Forecast({ cityName }: ForecastProps) {
  const [forecast, setForecast] = useState<ForecastItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchForecast = async () => {
      if (!cityName) return;
      
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric&lang=es`
        );
        // Tomar solo los primeros 5 días (cada 8 intervalos de 3 horas = 24 horas)
        const dailyForecast = response.data.list.filter((_: any, index: number) => index % 8 === 0);
        setForecast(dailyForecast.slice(0, 5));
        setError('');
      } catch (err) {
        setError('Error al cargar el pronóstico');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [cityName]);

  if (loading) {
    return (
      <div className="forecast-container">
        <h3>Pronóstico 5 días</h3>
        <p>Cargando pronóstico...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="forecast-container">
        <h3>Pronóstico 5 días</h3>
        <p className="error">{error}</p>
      </div>
    );
  }

  return (
    <div className="forecast-container">
      <h3>📅 Pronóstico 5 días</h3>
      <div className="forecast-list">
        {forecast.map((item, index) => {
          const date = new Date(item.dt * 1000);
          const dayName = date.toLocaleDateString('es', { weekday: 'short' });
          const day = date.getDate();
          const month = date.getMonth() + 1;
          
          return (
            <div key={index} className="forecast-item">
              <div className="forecast-date">
                {dayName}, {day}/{month}
              </div>
              <img 
                src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`} 
                alt={item.weather[0].description}
              />
              <div className="forecast-temp">
                {Math.round(item.main.temp)}°C
              </div>
              <div className="forecast-desc">
                {item.weather[0].description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}