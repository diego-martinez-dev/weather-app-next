import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';
import WeatherClient from '@/components/WeatherClient';
import { SettingsProvider } from '@/contexts/SettingsContext';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || '';

async function getWeatherData(ciudad: string) {
  try {
    // Si es coordenadas (formato @lat,lon)
    if (ciudad.startsWith('@')) {
      const [lat, lon] = ciudad.substring(1).split(',');
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`,
        { next: { revalidate: 300 } }
      );
      if (!res.ok) return null;
      return res.json();
    }
    
    // Búsqueda por nombre de ciudad
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`,
      { next: { revalidate: 300 } }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ ciudad: string }> }): Promise<Metadata> {
  const { ciudad } = await params;
  const weather = await getWeatherData(ciudad);
  
  if (!weather) {
    return { title: 'Ciudad no encontrada - Clima Hoy' };
  }
  
  const temp = Math.round(weather.main.temp);
  const description = weather.weather[0].description;
  
  return {
    title: `${weather.name} - ${temp}°C | ${description} | Clima Hoy`,
    description: `Clima actual en ${weather.name}: ${description}, temperatura ${temp}°C, humedad ${weather.main.humidity}%.`,
  };
}

export default async function ClimaPage({ params }: { params: Promise<{ ciudad: string }> }) {
  const { ciudad } = await params;
  const weather = await getWeatherData(ciudad);
  if (!weather) notFound();
  
  return (
    <SettingsProvider>
      <div>
        <TopMenu />
        <div className="home-two-columns">
          <h1>🌤️ {weather.name}</h1>
          <WeatherClient 
            weather={weather}
            tempCelsius={weather.main.temp}
            API_KEY={API_KEY}
          />
        </div>
        <Footer />
      </div>
    </SettingsProvider>
  );
}
