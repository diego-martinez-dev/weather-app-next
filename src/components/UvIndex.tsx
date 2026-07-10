'use client';

import { useTranslation } from 'react-i18next';
import { getUvInfo } from '@/lib/uv';
import './UvIndex.css';

interface UvIndexProps {
  uvData: any;
}

export default function UvIndex({ uvData }: UvIndexProps) {
  const { t } = useTranslation();

  const currentUvi: number | undefined = uvData?.current?.uvi;
  const timezoneOffset: number = uvData?.timezone_offset ?? 0;
  const hourly: any[] = uvData?.hourly ?? [];

  if (currentUvi === undefined) return null;

  const info = getUvInfo(currentUvi);

  const daytimeHours = hourly.slice(0, 24).filter((h: any) => {
    const localHour = new Date((h.dt + timezoneOffset) * 1000).getUTCHours();
    return localHour >= 6 && localHour <= 20 && h.uvi !== undefined;
  });

  const maxUvi = daytimeHours.reduce((max: number, h: any) => Math.max(max, h.uvi ?? 0), currentUvi);
  const maxInfo = getUvInfo(maxUvi);
  const chartMax = Math.max(maxUvi, 3);

  return (
    <section className="uv-section">
      <h2 className="uv-title">{t('app.uv.title')}</h2>

      <div className="uv-current" style={{ borderLeft: `4px solid ${info.color}` }}>
        <div className="uv-current-header">
          <span className="uv-dot" style={{ background: info.color }} />
          <span className="uv-value">{Math.round(currentUvi)}</span>
          <strong className="uv-label">{t(info.labelKey)}</strong>
          {maxUvi > currentUvi && (
            <span className="uv-max">
              {t('app.uv.max_today')}: <span style={{ color: maxInfo.color, fontWeight: 700 }}>{Math.round(maxUvi)}</span>
            </span>
          )}
        </div>
        <p className="uv-advice">{t(info.adviceKey)}</p>
      </div>

      {daytimeHours.length > 0 && (
        <div className="uv-hourly">
          {daytimeHours.map((h: any) => {
            const hInfo = getUvInfo(h.uvi ?? 0);
            const localHour = new Date((h.dt + timezoneOffset) * 1000).getUTCHours();
            const barPct = Math.max(Math.round((h.uvi / chartMax) * 100), h.uvi > 0 ? 8 : 0);
            return (
              <div key={h.dt} className="uv-hour-col">
                <span className="uv-hour-val" style={{ color: hInfo.color }}>{Math.round(h.uvi ?? 0)}</span>
                <div className="uv-hour-bar-wrap">
                  <div className="uv-hour-bar" style={{ background: hInfo.color, height: `${barPct}%` }} />
                </div>
                <span className="uv-hour-time">{localHour}h</span>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
