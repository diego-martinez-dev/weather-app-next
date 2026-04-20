'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import WeatherClient from '@/components/WeatherClient';
import Favorites from '@/components/Favorites';
import LoadingSpinner from '@/components/LoadingSpinner';
import { SettingsProvider } from '@/contexts/SettingsContext';

function HomeContent() {
  const searchParams = useSearchParams();
  const cityFromUrl = searchParams.get('city');
  
  const [weather, setWeather] = useState<any>(null);
  const [airQuality, setAirQuality] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  // Cargar favoritos desde localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteCities');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('favoriteCities', JSON.stringify(favorites));
  }, [favorites]);

  // Actualizar estado isFavorite cuando cambia el clima
  useEffect(() => {
    if (weather && weather.name) {
      setIsFavorite(favorites.includes(weather.name));
    }
  }, [weather, favorites]);

  const addFavorite = () => {
    if (weather && weather.name && !favorites.includes(weather.name)) {
      setFavorites([...favorites, weather.name]);
    }
  };

  const removeFavorite = (cityName: string) => {
    setFavorites(favorites.filter(city => city !== cityName));
  };

  const selectFavoriteCity = (cityName: string) => {
    // Actualizar URL y recargar datos
    window.location.href = `/?city=${encodeURIComponent(cityName)}`;
  };

  const fetchWeatherData = async (cityName?: string, lat?: number, lon?: number) => {
    setLoading(true);
    setError('');
    
    try {
      let weatherRes;
      
      if (cityName) {
        weatherRes = await fetch(`/api/weather?city=${encodeURIComponent(cityName)}`);
      } else if (lat && lon) {
        weatherRes = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
      } else {
        throw new Error('No se proporcionaron datos de búsqueda');
      }
      
      const weatherData = await weatherRes.json();
      
      if (weatherData.cod === 200) {
        setWeather(weatherData);
        
        const airRes = await fetch(`/api/weather?type=air&lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}`);
        const airData = await airRes.json();
        setAirQuality(airData);
        
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

  useEffect(() => {
    const getWeatherByLocation = () => {
      if (cityFromUrl) {
        fetchWeatherData(cityFromUrl);
      } else {
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
    <div>
      <TopMenu />
      <div className="home-two-columns">
        <h1>🌤️ Clima Hoy</h1>
        
        <Favorites 
          favorites={favorites}
          onSelectCity={selectFavoriteCity}
          onRemoveFavorite={removeFavorite}
        />
        
        {loading && <LoadingSpinner />}
        {error && <p className="error">{error}</p>}
        {weather && (
          <WeatherClient 
            weather={weather}
            tempCelsius={weather.main?.temp}
            airQuality={airQuality}
            forecast={forecast}
            onAddFavorite={addFavorite}
            isFavorite={isFavorite}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default function HomePage() {
  return (
    <SettingsProvider>
      <Suspense fallback={<LoadingSpinner />}>
        <HomeContent />
      </Suspense>
    </SettingsProvider>
  );
}
