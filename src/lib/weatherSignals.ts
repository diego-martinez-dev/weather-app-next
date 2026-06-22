// Extrae señales del clima actual + pronóstico para construir un consejo coherente
// con los recuadros de pronóstico. La probabilidad de lluvia (`pop`) manda sobre la
// condición actual.
export interface WeatherSignals {
  conditionMain: string;        // weather[0].main (inglés)
  tempC: number;                // temp actual en °C
  rainProbToday: number;        // 0-100, máximo pop de las entradas de HOY
  tempMaxToday: number;         // °C
  tempMinToday: number;         // °C
  windKmh: number;              // wind.speed (m/s) * 3.6
  hasThunderstormToday: boolean; // alguna entrada de hoy con Thunderstorm
}

function isSameLocalDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function getWeatherSignals(weather: any, forecast: any): WeatherSignals {
  const conditionMain = weather?.weather?.[0]?.main ?? '';
  const tempC = Math.round(weather?.main?.temp ?? 0);
  const windKmh = Math.round((weather?.wind?.speed ?? 0) * 3.6);

  const list: any[] = forecast?.list ?? [];
  const now = new Date();

  let entries = list.filter((item) => isSameLocalDay(new Date(item.dt * 1000), now));
  if (entries.length === 0) {
    entries = list.slice(0, 8);
  }

  let rainProbToday = 0;
  let tempMaxToday = -Infinity;
  let tempMinToday = Infinity;
  let hasThunderstormToday = false;

  for (const item of entries) {
    if (typeof item.pop === 'number') {
      rainProbToday = Math.max(rainProbToday, item.pop);
    }
    if (typeof item?.main?.temp_max === 'number') {
      tempMaxToday = Math.max(tempMaxToday, item.main.temp_max);
    }
    if (typeof item?.main?.temp_min === 'number') {
      tempMinToday = Math.min(tempMinToday, item.main.temp_min);
    }
    if (item?.weather?.[0]?.main === 'Thunderstorm') {
      hasThunderstormToday = true;
    }
  }

  return {
    conditionMain,
    tempC,
    rainProbToday: Math.round(rainProbToday * 100),
    tempMaxToday: tempMaxToday === -Infinity ? tempC : Math.round(tempMaxToday),
    tempMinToday: tempMinToday === Infinity ? tempC : Math.round(tempMinToday),
    windKmh,
    hasThunderstormToday,
  };
}
