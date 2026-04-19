'use client';

import dynamic from 'next/dynamic';

// Importar dinámicamente para evitar SSR
const WeatherMap = dynamic(
  () => import('./WeatherMap'),
  { 
    ssr: false,
    loading: () => (
      <div style={{ 
        height: '500px', 
        width: '100%', 
        background: '#e0e0e0', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: '12px'
      }}>
        <p>Cargando mapa...</p>
      </div>
    )
  }
);

interface WeatherMapWrapperProps {
  lat: number;
  lon: number;
  cityName: string;
  tempCelsius: number;
  tempDisplay: string;
  API_KEY: string;
  onLocationClick: () => void;
}

export default function WeatherMapWrapper(props: WeatherMapWrapperProps) {
  return <WeatherMap {...props} />;
}
