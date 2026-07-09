'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { getAqiInfo, getPollutantLevel, pollutantLevelColor, type AirComponents } from '@/lib/airQuality';
import './AirQuality.css';

interface AirQualityProps {
  airQuality: any;
}

const POLLUTANTS: { key: keyof AirComponents; label: string; unit: string }[] = [
  { key: 'pm2_5', label: 'PM2.5', unit: 'µg/m³' },
  { key: 'pm10',  label: 'PM10',  unit: 'µg/m³' },
  { key: 'o3',    label: 'O₃',    unit: 'µg/m³' },
  { key: 'no2',   label: 'NO₂',   unit: 'µg/m³' },
];

export default function AirQuality({ airQuality }: AirQualityProps) {
  const { t } = useTranslation();

  if (!airQuality?.list?.[0]?.main) return null;

  const aqi = airQuality.list[0].main.aqi as number;
  const components: AirComponents = airQuality.list[0].components;
  const info = getAqiInfo(aqi);

  return (
    <section className="air-quality-section">
      <h2 className="air-quality-title">{t('app.air.title')}</h2>

      <div className="air-quality-aqi" style={{ borderLeft: `4px solid ${info.color}` }}>
        <div className="air-quality-aqi-label">
          <span className="air-quality-aqi-dot" style={{ background: info.color }} />
          <strong>{t(info.labelKey)}</strong>
          <span className="air-quality-aqi-index">ICA {aqi}/5</span>
        </div>
        <p className="air-quality-advice">{t(info.adviceKey)}</p>
      </div>

      <div className="air-quality-pollutants">
        {POLLUTANTS.map(({ key, label, unit }) => {
          const value = components?.[key];
          if (value === undefined) return null;
          const level = getPollutantLevel(key, value);
          const color = pollutantLevelColor[level];
          return (
            <div key={key} className="pollutant-item">
              <div className="pollutant-name">{label}</div>
              <div className="pollutant-value">{value.toFixed(1)} <span className="pollutant-unit">{unit}</span></div>
              <div className="pollutant-level" style={{ color }}>{t(`app.air.level_${level}`)}</div>
            </div>
          );
        })}
      </div>

      <p className="air-quality-link">
        <Link href="/calidad-del-aire">{t('app.air.learn_more')}</Link>
      </p>
    </section>
  );
}
