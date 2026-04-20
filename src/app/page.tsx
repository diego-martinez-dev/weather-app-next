'use client';

import { useState, useEffect } from 'react';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import WeatherClient from '@/components/WeatherClient';
import LoadingSpinner from '@/components/LoadingSpinner';
import { SettingsProvider } from '@/contexts/SettingsContext';

export default function HomePage() {
  const [weather, setWeather] = useState<any>(null);
  const [airQuality, setAirQuality] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getWeatherByLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              // Clima actual
              const weatherRes = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`);
              const weatherData = await weatherRes.json();
              
              if (weatherData.cod === 200) {
                setWeather(weatherData);
                
                // Calidad del aire
                const airRes = await fetch(`/api/weather?type=air&lat=${latitude}&lon=${longitude}`);
                const airData = await airRes.json();
                setAirQuality(airData);
                
                // Pronóstico
                const forecastRes = await fetch(`/api/weather?type=forecast&lat=${latitude}&lon=${longitude}`);
                const forecastData = await forecastRes.json();
                setForecast(forecastData);
              } else {
                throw new Error('Error al obtener clima');
              }
            } catch (err) {
              console.error(err);
              setError('No se pudo obtener el clima');
            } finally {
              setLoading(false);
            }
          },
          () => {
            setError('No se pudo obtener tu ubicación');
            setLoading(false);
          }
        );
      } else {
        setError('Geolocalización no soportada');
        setLoading(false);
      }
    };

    getWeatherByLocation();
  }, []);

  return (
    <SettingsProvider>
      <div>
        <TopMenu />
        <div className="home-two-columns">
          <h1>🌤️ Clima Hoy</h1>
          {loading && <LoadingSpinner />}
          {error && <p className="error">{error}</p>}
          {weather && (
            <WeatherClient 
              weather={weather}
              tempCelsius={weather.main?.temp}
              airQuality={airQuality}
              forecast={forecast}
            />
          )}
        </div>
        <Footer />
      </div>
    </SettingsProvider>
  );
}
