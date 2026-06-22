// Devuelve la clave i18n del consejo según la condición climática y la temperatura.
// La condición (`main`) viene de OpenWeatherMap siempre en inglés.
export function getWeatherAdviceKey(main: string | undefined, tempCelsius: number): string {
  const m = main ?? '';
  if (m === 'Thunderstorm') return 'storm';
  if (m === 'Rain' || m === 'Drizzle') return 'rain';
  if (m === 'Snow') return 'snow';
  if (['Mist', 'Fog', 'Haze', 'Smoke', 'Dust', 'Sand', 'Ash', 'Squall'].includes(m)) return 'lowVisibility';
  if (tempCelsius >= 33) return 'extremeHeat';
  if (tempCelsius <= 6) return 'cold';
  if (m === 'Clear') return tempCelsius >= 28 ? 'hotSunny' : 'clear';
  if (m === 'Clouds') return 'clouds';
  return 'default';
}
