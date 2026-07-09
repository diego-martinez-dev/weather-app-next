export interface AirComponents {
  co: number;
  no: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  nh3: number;
}

export interface AqiInfo {
  level: 1 | 2 | 3 | 4 | 5;
  labelKey: string;
  color: string;
  adviceKey: string;
}

export function getAqiInfo(aqi: number): AqiInfo {
  switch (aqi) {
    case 1: return { level: 1, labelKey: 'app.weather.aqi_excellent', color: '#00e400', adviceKey: 'app.air.advice_1' };
    case 2: return { level: 2, labelKey: 'app.weather.aqi_good', color: '#92d050', adviceKey: 'app.air.advice_2' };
    case 3: return { level: 3, labelKey: 'app.weather.aqi_moderate', color: '#ff7e00', adviceKey: 'app.air.advice_3' };
    case 4: return { level: 4, labelKey: 'app.weather.aqi_bad', color: '#ff0000', adviceKey: 'app.air.advice_4' };
    default: return { level: 5, labelKey: 'app.weather.aqi_very_bad', color: '#8f3f97', adviceKey: 'app.air.advice_5' };
  }
}

type PollutantLevel = 'bueno' | 'moderado' | 'alto';

const thresholds: Record<string, [number, number]> = {
  pm2_5: [12, 35],
  pm10:  [54, 154],
  o3:    [100, 160],
  no2:   [40, 100],
  so2:   [20, 80],
  co:    [4400, 9400],
};

export function getPollutantLevel(name: string, value: number): PollutantLevel {
  const t = thresholds[name];
  if (!t) return 'bueno';
  if (value <= t[0]) return 'bueno';
  if (value <= t[1]) return 'moderado';
  return 'alto';
}

export const pollutantLevelColor: Record<PollutantLevel, string> = {
  bueno:    '#00b894',
  moderado: '#f39c12',
  alto:     '#e74c3c',
};
