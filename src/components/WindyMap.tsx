import './WindyMap.css';

interface WindyMapProps {
  lat: number;
  lon: number;
  zoom?: number;
  height?: number;
}

export default function WindyMap({ lat, lon, zoom = 9, height = 470 }: WindyMapProps) {
  const params = new URLSearchParams({
    lat: String(lat),
    lon: String(lon),
    detailLat: String(lat),
    detailLon: String(lon),
    zoom: String(zoom),
    level: 'surface',
    overlay: 'rain',
    product: 'ecmwf',
    menu: '',
    message: 'true',
    marker: 'true',
    calendar: 'now',
    pressure: '',
    type: 'map',
    location: 'coordinates',
    detail: '',
    metricWind: 'default',
    metricTemp: 'default',
    radarRange: '-1',
  });

  const src = `https://embed.windy.com/embed2.html?${params.toString()}`;

  return (
    <div className="windy-map" style={{ height }}>
      <iframe
        title="Mapa de lluvia en tiempo real (Windy)"
        src={src}
        width="100%"
        height="100%"
        loading="lazy"
        frameBorder="0"
        style={{ border: 0, borderRadius: '12px', display: 'block' }}
      />
    </div>
  );
}
