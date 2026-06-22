import type { WeatherSignals } from './weatherSignals';

const LOW_VISIBILITY = ['Mist', 'Fog', 'Haze', 'Smoke', 'Dust', 'Sand', 'Ash', 'Squall'];

export interface Advice {
  scenario: string;
  params: Record<string, number>;
}

// Elige el escenario del consejo a partir de las señales del pronóstico.
// La probabilidad de lluvia del día manda sobre la condición actual para que el
// consejo nunca contradiga los recuadros de pronóstico.
export function getAdvice(signals: WeatherSignals): Advice {
  const { conditionMain, rainProbToday, tempMaxToday, tempMinToday, windKmh, hasThunderstormToday } = signals;

  const params = { rainProbToday, tempMaxToday, tempMinToday, windKmh };

  let scenario: string;

  if (conditionMain === 'Thunderstorm' || (rainProbToday >= 70 && hasThunderstormToday)) {
    scenario = 'storm';
  } else if (rainProbToday >= 70 || conditionMain === 'Rain' || conditionMain === 'Drizzle') {
    scenario = 'rainVeryLikely';
  } else if (rainProbToday >= 35) {
    scenario = 'rainPossible';
  } else if (LOW_VISIBILITY.includes(conditionMain)) {
    scenario = 'lowVisibility';
  } else if (tempMaxToday >= 33) {
    scenario = 'extremeHeat';
  } else if (tempMinToday <= 6) {
    scenario = 'cold';
  } else if (conditionMain === 'Clear' && tempMaxToday >= 28) {
    scenario = 'hotSunny';
  } else if (conditionMain === 'Clear') {
    scenario = 'clearNice';
  } else if (conditionMain === 'Clouds') {
    scenario = 'cloudyDry';
  } else {
    scenario = 'general';
  }

  return { scenario, params };
}
