'use client';

import { useTranslation } from 'react-i18next';
import { SunIcon, ClockIcon } from '@heroicons/react/24/outline';
import { getMoonPhase } from '@/lib/moon';
import { MoonPhaseIcon } from './MoonPhaseIcon';
import './SunMoon.css';

interface SunMoonProps {
  weather: any;
}

function formatTime(epoch: number, timezoneOffset: number): string {
  const localMs = (epoch + timezoneOffset) * 1000;
  const d = new Date(localMs);
  const h = d.getUTCHours().toString().padStart(2, '0');
  const m = d.getUTCMinutes().toString().padStart(2, '0');
  return `${h}:${m}`;
}

function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return `${h} h ${m} min`;
}

export default function SunMoon({ weather }: SunMoonProps) {
  const { t } = useTranslation();

  if (!weather?.sys?.sunrise || !weather?.sys?.sunset) return null;

  const tz: number = weather.timezone ?? 0;
  const sunrise = weather.sys.sunrise as number;
  const sunset = weather.sys.sunset as number;
  const dayLength = sunset - sunrise;

  const moon = getMoonPhase(new Date());

  return (
    <section className="sun-moon-section">
      <h2 className="sun-moon-title">{t('app.sun_moon.title')}</h2>
      <div className="sun-moon-grid">
        <div className="sun-moon-item">
          <SunIcon className="sun-moon-icon" />
          <div className="sun-moon-label">{t('app.weather.sunrise')}</div>
          <div className="sun-moon-value">{formatTime(sunrise, tz)}</div>
        </div>
        <div className="sun-moon-item">
          <SunIcon className="sun-moon-icon" />
          <div className="sun-moon-label">{t('app.weather.sunset')}</div>
          <div className="sun-moon-value">{formatTime(sunset, tz)}</div>
        </div>
        <div className="sun-moon-item">
          <ClockIcon className="sun-moon-icon" />
          <div className="sun-moon-label">{t('app.sun_moon.day_length')}</div>
          <div className="sun-moon-value">{formatDuration(dayLength)}</div>
        </div>
        <div className="sun-moon-item">
          <MoonPhaseIcon phase={moon.phase} size={27} style={{ marginBottom: 2 }} />
          <div className="sun-moon-label">{t(moon.phaseKey)}</div>
          <div className="sun-moon-value">{moon.illumination}%</div>
        </div>
      </div>
    </section>
  );
}
