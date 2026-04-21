// Mapeo de condiciones climáticas a imágenes (paisajes, sin personas)
const weatherBackgrounds: Record<string, Record<string, string>> = {
  // Soleado / Despejado — montaña desierto / vía láctea
  clear: {
    day: 'https://images.unsplash.com/photo-VVqOZcAKm24?w=1200&h=800&fit=crop',
    night: 'https://images.unsplash.com/photo-BTuQv_g2Bw8?w=1200&h=800&fit=crop',
  },
  // Nublado — montañas bajo cielo encapotado / nubes nocturnas
  clouds: {
    day: 'https://images.unsplash.com/photo-gF8tDxbpgX0?w=1200&h=800&fit=crop',
    night: 'https://images.unsplash.com/photo-DsxD_bTq8x0?w=1200&h=800&fit=crop',
  },
  // Lluvia — ventana con lluvia y ciudad / calle mojada nocturna
  rain: {
    day: 'https://images.unsplash.com/photo-gtG0y9CUgcA?w=1200&h=800&fit=crop',
    night: 'https://images.unsplash.com/photo-hQOct36DUSY?w=1200&h=800&fit=crop',
  },
  // Tormenta — relámpago sobre paisaje
  thunderstorm: {
    day: 'https://images.unsplash.com/photo-in9-n0JwgZ0?w=1200&h=800&fit=crop',
    night: 'https://images.unsplash.com/photo-od0R_9e_aqA?w=1200&h=800&fit=crop',
  },
  // Nieve — paisaje nevado con montañas / luna llena sobre nieve
  snow: {
    day: 'https://images.unsplash.com/photo-we4enFZr0aA?w=1200&h=800&fit=crop',
    night: 'https://images.unsplash.com/photo-jDVzoU86g8c?w=1200&h=800&fit=crop',
  },
  // Niebla — bosque brumoso al amanecer / luna entre nubes
  mist: {
    day: 'https://images.unsplash.com/photo-FItOgF4jrBA?w=1200&h=800&fit=crop',
    night: 'https://images.unsplash.com/photo-ve_uN9V8xqU?w=1200&h=800&fit=crop',
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
  
  const condition = getWeatherCondition(weather.weather[0].description);
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
