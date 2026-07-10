export interface UvInfo {
  labelKey: string;
  color: string;
  adviceKey: string;
}

export function getUvInfo(uvi: number): UvInfo {
  if (uvi <= 2) return { labelKey: 'app.uv.low',       color: '#4caf50', adviceKey: 'app.uv.advice_low' };
  if (uvi <= 5) return { labelKey: 'app.uv.moderate',  color: '#ffb300', adviceKey: 'app.uv.advice_moderate' };
  if (uvi <= 7) return { labelKey: 'app.uv.high',      color: '#ff7043', adviceKey: 'app.uv.advice_high' };
  if (uvi <= 10) return { labelKey: 'app.uv.very_high', color: '#e53935', adviceKey: 'app.uv.advice_very_high' };
  return { labelKey: 'app.uv.extreme', color: '#7b1fa2', adviceKey: 'app.uv.advice_extreme' };
}
