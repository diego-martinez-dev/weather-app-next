'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import TemperatureIndicator from './TemperatureIndicator';
import './WeatherMap.css';

// Fix para los íconos de Leaflet
const DefaultIcon = L.Icon.Default as any;
delete DefaultIcon.prototype._getIconUrl;
DefaultIcon.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface WeatherMapProps {
  lat: number;
  lon: number;
  cityName: string;
  tempCelsius: number;
  tempDisplay: string;
  onLocationClick: () => void;
}

export default function WeatherMap({ 
  lat, 
  lon, 
  cityName, 
  tempCelsius, 
  tempDisplay, 
  onLocationClick 
}: WeatherMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!lat || !lon || !mapRef.current) return;

    if (!mapInstanceRef.current) {
      // Inicializar mapa
      mapInstanceRef.current = L.map(mapRef.current).setView([lat, lon], 6);
      
      // Capa base (CartoDB)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
        minZoom: 3
      }).addTo(mapInstanceRef.current);
      
      // Capa de temperatura de OpenWeatherMap (usando la API centralizada)
      // Nota: Leaflet no puede usar nuestra API porque necesita una URL de tiles
      // Así que todavía necesitamos la key aquí para los tiles
      // Esta es la única excepción porque es una URL de imagen
      const API_KEY = '91ca0e29e5a576e51887bc6e349bbd9d';
      L.tileLayer(`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`, {
        attribution: 'Temperature data © <a href="https://openweathermap.org/">OpenWeatherMap</a>',
        opacity: 0.65,
        maxZoom: 18
      }).addTo(mapInstanceRef.current);

      // Marcador de la ciudad con ícono personalizado
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div style="background: #ff4444; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>',
        iconSize: [12, 12],
        iconAnchor: [6, 6]
      });
      
      L.marker([lat, lon], { icon: customIcon })
        .bindPopup(`<b>${cityName}</b><br/>🌡️ ${tempDisplay}`)
        .addTo(mapInstanceRef.current)
        .openPopup();
    } else {
      mapInstanceRef.current.setView([lat, lon], 6);
    }
  }, [lat, lon, cityName, tempDisplay]);

  return (
    <div className="weather-map-container">
      <div ref={mapRef} className="weather-map" style={{ height: '500px', width: '100%' }} />
      <button className="map-location-button" onClick={onLocationClick}>
        📍
      </button>
      <div className="weather-map-indicator">
        <TemperatureIndicator 
          tempCelsius={tempCelsius}
          tempDisplay={tempDisplay}
          minTemp={-45}
          maxTemp={54}
        />
      </div>
    </div>
  );
}