'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import WeatherClient from '@/components/WeatherClient';
import LoadingSpinner from '@/components/LoadingSpinner';
import { SettingsProvider } from '@/contexts/SettingsContext';

export default function HomePage() {
  const searchParams = useSearchParams();
  const cityFromUrl = searchParams.get('city');
  
  const [weather, setWeather] = useState<any>(null);
  const [airQuality, setAirQuality] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeatherData = async (cityName?: string, lat?: number, lon?: number) => {
      setLoading(true);
      setError('');
      
      try {
        let weatherRes;
        
        if (cityName) {
          // Buscar por ciudad
          weatherRes = await fetch(`/api/weather?city=${encodeURIComponent(cityName)}`);
        } else if (lat && lon) {
          // Buscar por coordenadas
          weatherRes = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
        } else {
          throw new Error('No se proporcionaron datos de búsqueda');
        }
        
        const weatherData = await weatherRes.json();
        
        if (weatherData.cod === 200) {
          setWeather(weatherData);
          
          // Calidad del aire (si tenemos coordenadas)
          const coords = { lat: weatherData.coord.lat, lon: weatherData.coord.lon };
          const airRes = await fetch(`/api/weather?type=air&lat=${coords.lat}&lon=${coords.lon}`);
          const airData = await airRes.json();
          setAirQuality(airData);
          
          // Pronóstico
          const forecastRes = await fetch(`/api/weather?type=forecast&city=${encodeURIComponent(weatherData.name)}`);
          const forecastData = await forecastRes.json();
          setForecast(forecastData);
        } else {
          throw new Error(weatherData.message || 'Error al obtener clima');
        }
      } catch (err) {
        console.error(err);
        setError('No se pudo obtener el clima');
      } finally {
        setLoading(false);
      }
    };

    const getWeatherByLocation = () => {
      if (cityFromUrl) {
        // Si hay ciudad en la URL, buscar por ciudad
        fetchWeatherData(cityFromUrl);
      } else {
        // Si no, usar geolocalización
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              fetchWeatherData(undefined, latitude, longitude);
            },
            () => {
              setError('No se pudo obtener tu ubicación. Busca una ciudad.');
              setLoading(false);
            }
          );
        } else {
          setError('Geolocalización no soportada. Busca una ciudad.');
          setLoading(false);
        }
      }
    };

    getWeatherByLocation();
  }, [cityFromUrl]);

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