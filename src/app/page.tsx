'use client';

import { useState, useEffect } from 'react';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import WeatherClient from '@/components/WeatherClient';
import LoadingSpinner from '@/components/LoadingSpinner';
import { SettingsProvider } from '@/contexts/SettingsContext';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || '';

export default function HomePage() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getWeatherByLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const res = await fetch(
                `/api/weather?lat=${latitude}&lon=${longitude}`
              );
              if (!res.ok) throw new Error('Error al obtener el clima');
              const data = await res.json();
              setWeather(data);
            } catch (err) {
              setError('No se pudo obtener el clima');
              // Fallback
              const fallbackRes = await fetch('/api/weather?city=Bogota');
              const fallbackData = await fallbackRes.json();
              setWeather(fallbackData);
            } finally {
              setLoading(false);
            }
          },
          async () => {
            setError('Usando ubicación por defecto: Bogotá');
            const fallbackRes = await fetch('/api/weather?city=Bogota');
            const fallbackData = await fallbackRes.json();
            setWeather(fallbackData);
            setLoading(false);
          }
        );
      } else {
        setError('Geolocalización no soportada. Usando Bogotá.');
        const fetchDefault = async () => {
          const res = await fetch('/api/weather?city=Bogota');
          const data = await res.json();
          setWeather(data);
          setLoading(false);
        };
        fetchDefault();
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
              tempCelsius={weather.main.temp}
              API_KEY={API_KEY}
            />
          )}
        </div>
        <Footer />
      </div>
    </SettingsProvider>
  );
}
