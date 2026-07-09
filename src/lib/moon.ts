export interface MoonPhase {
  phaseKey: string;
  illumination: number;
  emoji: string;
}

// Reference new moon: 2000-01-06 18:14 UTC (Julian day 2451550.1)
const NEW_MOON_JD = 2451550.1;
const SYNODIC_MONTH = 29.530589;

function toJulianDay(date: Date): number {
  return date.getTime() / 86400000 + 2440587.5;
}

export function getMoonPhase(date: Date): MoonPhase {
  const jd = toJulianDay(date);
  const daysSince = jd - NEW_MOON_JD;
  const cyclePos = ((daysSince % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH;
  const phase = cyclePos / SYNODIC_MONTH;

  // illumination approximation (0..1)
  const illumination = Math.round((1 - Math.cos(2 * Math.PI * phase)) / 2 * 100);

  let phaseKey: string;
  let emoji: string;

  if (phase < 0.0625)      { phaseKey = 'app.moon.new';             emoji = '🌑'; }
  else if (phase < 0.1875) { phaseKey = 'app.moon.waxing_crescent'; emoji = '🌒'; }
  else if (phase < 0.3125) { phaseKey = 'app.moon.first_quarter';   emoji = '🌓'; }
  else if (phase < 0.4375) { phaseKey = 'app.moon.waxing_gibbous';  emoji = '🌔'; }
  else if (phase < 0.5625) { phaseKey = 'app.moon.full';            emoji = '🌕'; }
  else if (phase < 0.6875) { phaseKey = 'app.moon.waning_gibbous';  emoji = '🌖'; }
  else if (phase < 0.8125) { phaseKey = 'app.moon.last_quarter';    emoji = '🌗'; }
  else if (phase < 0.9375) { phaseKey = 'app.moon.waning_crescent'; emoji = '🌘'; }
  else                     { phaseKey = 'app.moon.new';             emoji = '🌑'; }

  return { phaseKey, illumination, emoji };
}
