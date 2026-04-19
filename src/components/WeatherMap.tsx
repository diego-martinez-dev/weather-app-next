'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './WeatherMap.css';
import TemperatureIndicator from './TemperatureIndicator';

// Fix para los íconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
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
  API_KEY: string;
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
      mapInstanceRef.current = L.map(mapRef.current).setView([lat, lon], 10);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapInstanceRef.current);

      L.marker([lat, lon])
        .bindPopup(`<b>${cityName}</b><br/>🌡️ ${tempDisplay}`)
        .addTo(mapInstanceRef.current)
        .openPopup();
    } else {
      mapInstanceRef.current.setView([lat, lon], 10);
    }
  }, [lat, lon, cityName, tempDisplay]);

  return (
    <div className="weather-map-container">
      <div ref={mapRef} className="weather-map" style={{ height: '450px', width: '100%' }} />
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
