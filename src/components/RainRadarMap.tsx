'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPinIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import './RainRadarMap.css';

const DefaultIcon = L.Icon.Default as any;
delete DefaultIcon.prototype._getIconUrl;
DefaultIcon.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface RainFrame {
  time: number;
  path: string;
  isNowcast: boolean;
}

interface RainRadarMapProps {
  lat: number;
  lon: number;
  zoom?: number;
  cityName?: string;
  showSearch?: boolean;
}

const ANIMATION_INTERVAL = 500;
const REFETCH_INTERVAL = 5 * 60 * 1000;

function formatFrameTime(timestamp: number, isNowcast: boolean, nowcastIndex: number): string {
  if (isNowcast) {
    const minutesAhead = (nowcastIndex + 1) * 10;
    return `+${minutesAhead} min`;
  }
  const d = new Date(timestamp * 1000);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function RainRadarMap({ lat, lon, zoom = 7, cityName, showSearch = false }: RainRadarMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const tileLayersRef = useRef<L.TileLayer[]>([]);
  const animTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const refetchTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [frames, setFrames] = useState<RainFrame[]>([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [radarHost, setRadarHost] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [mapCenter, setMapCenter] = useState<[number, number]>([lat, lon]);

  const fetchFrames = useCallback(async () => {
    try {
      const res = await fetch('https://api.rainviewer.com/public/weather-maps.json');
      if (!res.ok) return;
      const data = await res.json();
      const host: string = data.host;
      const past: RainFrame[] = (data.radar?.past ?? []).map((f: { time: number; path: string }) => ({
        time: f.time,
        path: f.path,
        isNowcast: false,
      }));
      const nowcast: RainFrame[] = (data.radar?.nowcast ?? []).map((f: { time: number; path: string }) => ({
        time: f.time,
        path: f.path,
        isNowcast: true,
      }));
      setRadarHost(host);
      setFrames([...past, ...nowcast]);
    } catch {
      // silencioso — sin red o servicio no disponible
    }
  }, []);

  // Inicializar mapa
  useEffect(() => {
    if (!mapRef.current) return;
    if (mapInstanceRef.current) return;

    const map = L.map(mapRef.current).setView(mapCenter, zoom);
    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a> | Radar © <a href="https://www.rainviewer.com/" target="_blank" rel="noopener noreferrer">RainViewer</a>',
      subdomains: 'abcd',
      maxZoom: 19,
      minZoom: 2,
    }).addTo(map);

    fetchFrames();
  }, []);

  // Marcador de ciudad
  useEffect(() => {
    if (!mapInstanceRef.current || !cityName) return;
    const map = mapInstanceRef.current;
    const icon = L.divIcon({
      className: 'custom-marker',
      html: '<div style="background:#ff4444;width:12px;height:12px;border-radius:50%;border:2px solid white;box-shadow:0 0 10px rgba(0,0,0,0.3);"></div>',
      iconSize: [12, 12],
      iconAnchor: [6, 6],
    });
    if (markerRef.current) {
      markerRef.current.setLatLng([lat, lon]).setPopupContent(`<b>${cityName}</b>`);
    } else {
      markerRef.current = L.marker([lat, lon], { icon })
        .bindPopup(`<b>${cityName}</b>`)
        .addTo(map)
        .openPopup();
    }
  }, [lat, lon, cityName]);

  // Construir capas de tiles cuando llegan los frames
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || frames.length === 0 || !radarHost) return;

    // Limpiar capas viejas
    tileLayersRef.current.forEach(l => map.removeLayer(l));
    tileLayersRef.current = [];

    const nowcastFrames = frames.filter(f => f.isNowcast);

    frames.forEach((frame) => {
      const url = `${radarHost}${frame.path}/256/{z}/{x}/{y}/4/1_1.png`;
      const layer = L.tileLayer(url, {
        opacity: 0,
        zIndex: 200,
        tileSize: 256,
      });
      layer.addTo(map);
      tileLayersRef.current.push(layer);
    });

    // Mostrar el último frame pasado (el más reciente)
    const lastPastIndex = frames.filter(f => !f.isNowcast).length - 1;
    const startIndex = lastPastIndex >= 0 ? lastPastIndex : 0;
    setCurrentFrame(startIndex);

    return () => {
      tileLayersRef.current.forEach(l => map.removeLayer(l));
      tileLayersRef.current = [];
    };
  }, [frames, radarHost]);

  // Mostrar solo la capa del frame actual
  useEffect(() => {
    tileLayersRef.current.forEach((layer, i) => {
      layer.setOpacity(i === currentFrame ? 0.7 : 0);
    });
  }, [currentFrame, frames]);

  // Animación play/pause
  useEffect(() => {
    if (animTimerRef.current) {
      clearInterval(animTimerRef.current);
      animTimerRef.current = null;
    }
    if (!playing || frames.length === 0) return;

    animTimerRef.current = setInterval(() => {
      setCurrentFrame(prev => {
        const next = prev + 1;
        if (next >= frames.length) return 0;
        return next;
      });
    }, ANIMATION_INTERVAL);

    return () => {
      if (animTimerRef.current) clearInterval(animTimerRef.current);
    };
  }, [playing, frames.length]);

  // Re-fetch cada 5 minutos
  useEffect(() => {
    refetchTimerRef.current = setInterval(fetchFrames, REFETCH_INTERVAL);
    return () => {
      if (refetchTimerRef.current) clearInterval(refetchTimerRef.current);
    };
  }, [fetchFrames]);

  const handleGeolocate = () => {
    if (!navigator.geolocation || !mapInstanceRef.current) return;
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude } = pos.coords;
      mapInstanceRef.current!.setView([latitude, longitude], 9);
      setMapCenter([latitude, longitude]);
    });
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim() || !mapInstanceRef.current) return;
    try {
      const res = await fetch(`/api/weather?type=geocode&city=${encodeURIComponent(searchInput.trim())}`);
      if (!res.ok) return;
      const data = await res.json();
      if (data?.[0]?.lat && data?.[0]?.lon) {
        mapInstanceRef.current.setView([data[0].lat, data[0].lon], 9);
      }
    } catch {
      // silencioso
    }
  };

  const nowcastFrames = frames.filter(f => f.isNowcast);
  const nowcastStartIndex = frames.length - nowcastFrames.length;
  const isNowcast = currentFrame >= nowcastStartIndex && nowcastFrames.length > 0;
  const nowcastRelativeIndex = isNowcast ? currentFrame - nowcastStartIndex : 0;
  const timeLabel = frames[currentFrame]
    ? formatFrameTime(frames[currentFrame].time, isNowcast, nowcastRelativeIndex)
    : '--:--';
  const isLastPast =
    !isNowcast && currentFrame === nowcastStartIndex - 1;

  return (
    <div className="rain-radar-container">
      {showSearch && (
        <form className="rain-radar-search" onSubmit={handleSearch}>
          <input
            type="text"
            className="rain-radar-search-input"
            placeholder="Buscar ciudad..."
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
          <button type="submit" className="rain-radar-search-btn">
            <MagnifyingGlassIcon style={{ width: '1em', height: '1em' }} />
          </button>
        </form>
      )}

      <div ref={mapRef} className="rain-radar-map" />

      <button className="rain-radar-geo-btn" onClick={handleGeolocate} title="Mi ubicación">
        <MapPinIcon style={{ width: '1.3rem', height: '1.3rem' }} />
      </button>

      {frames.length > 0 && (
        <div className="rain-radar-controls">
          <div className="rain-radar-controls-row">
            <button className="rain-radar-btn" onClick={() => setPlaying(p => !p)}>
              {playing ? '⏸ Pausar' : '▶ Play'}
            </button>
            <input
              type="range"
              className="rain-radar-slider"
              min={0}
              max={frames.length - 1}
              value={currentFrame}
              onChange={e => {
                setPlaying(false);
                setCurrentFrame(Number(e.target.value));
              }}
            />
            <span className="rain-radar-time-label">
              {isLastPast ? 'Ahora' : timeLabel}
              {isNowcast && <span className="rain-radar-nowcast-tag">Previsión</span>}
            </span>
          </div>
          <div className="rain-radar-legend">
            <span>Llovizna</span>
            <div className="rain-radar-legend-bar" />
            <span>Fuerte</span>
          </div>
          <p className="rain-radar-hint">
            Las zonas con lluvia se ven en colores. Si no ves colores, no está lloviendo en el área
            visible en este momento. Aleja el mapa para ver la lluvia que se acerca.
          </p>
        </div>
      )}
    </div>
  );
}
