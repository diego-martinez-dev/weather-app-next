// Mapeo de condiciones climáticas a imágenes (paisajes, sin personas)
const weatherBackgrounds: Record<string, Record<string, string>> = {
  // Soleado / Despejado — montaña desierto / vía láctea
  clear: {
    day: 'https://images.unsplash.com/photo-1615286628718-4a4c8924d0eb?w=1200&h=800&fit=crop',
    night: 'https://images.unsplash.com/photo-1647941953367-6ff24a0e5857?w=1200&h=800&fit=crop',
  },
  // Nublado — montañas bajo cielo encapotado / nubes nocturnas
  clouds: {
    day: 'https://images.unsplash.com/photo-1626373032927-0526a740b091?w=1200&h=800&fit=crop',
    night: 'https://images.unsplash.com/photo-1661543405382-86d8433707bb?w=1200&h=800&fit=crop',
  },
  // Lluvia — ventana con lluvia y ciudad / calle mojada nocturna
  rain: {
    day: 'https://images.unsplash.com/photo-1646830428221-e9db117787c3?w=1200&h=800&fit=crop',
    night: 'https://images.unsplash.com/photo-1570731618429-1c4ef33ea65f?w=1200&h=800&fit=crop',
  },
  // Tormenta — relámpago sobre paisaje
  thunderstorm: {
    day: 'https://images.unsplash.com/photo-1598254222583-66e6e5f846d0?w=1200&h=800&fit=crop',
    night: 'https://images.unsplash.com/photo-1673446705499-0eaaecf46737?w=1200&h=800&fit=crop',
  },
  // Nieve — paisaje nevado con montañas / luna llena sobre nieve
  snow: {
    day: 'https://images.unsplash.com/photo-zSA0ByrONc8?w=1200&h=800&fit=crop',
    night: 'https://images.unsplash.com/photo-1573506715256-fd46f5a21d4a?w=1200&h=800&fit=crop',
  },
  // Niebla — bosque brumoso al amanecer / luna entre nubes
  mist: {
    day: 'https://images.unsplash.com/photo-1584823501335-10b246a774b1?w=1200&h=800&fit=crop',
    night: 'https://images.unsplash.com/photo-1677126577072-a52772eb7769?w=1200&h=800&fit=crop',
  },
};

// Obtener la condición principal del clima
const getWeatherCondition = (description: string): string => {
  const desc = description.toLowerCase();
  if (desc.includes('clear') || desc.includes('sun')) return 'clear';
  if (desc.includes('cloud')) return 'clouds';
  if (desc.includes('rain') || desc.includes('drizzle')) return 'rain';
  if (desc.includes('thunder')) return 'thunderstorm';
  if (desc.includes('snow')) return 'snow';
  if (desc.includes('mist') || desc.includes('fog') || desc.includes('haze')) return 'mist';
  return 'clear';
};

// Determinar si es de día o noche basado en el amanecer/atardecer
const isDayTime = (sunrise: number, sunset: number, currentTime: number): boolean => {
  if (!sunrise || !sunset) return true;
  return currentTime > sunrise && currentTime < sunset;
};

// Obtener la URL del fondo según el clima y hora
export const getWeatherBackground = (
  weather: any,
  isDay: boolean
): string => {
  if (!weather || !weather.weather || !weather.weather[0]) {
    return weatherBackgrounds.clear.day;
  }
  
  const condition = getWeatherCondition(weather.weather[0].main ?? weather.weather[0].description);
  const timeOfDay = isDay ? 'day' : 'night';
  
  return weatherBackgrounds[condition][timeOfDay];
};

// Obtener overlay (capa semitransparente) según hora
export const getOverlayColor = (isDay: boolean): string => {
  if (isDay) {
    return 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 100%)';
  }
  return 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%)';
};
