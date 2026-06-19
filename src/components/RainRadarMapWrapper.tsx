'use client';

import dynamic from 'next/dynamic';

const RainRadarMap = dynamic(
  () => import('./RainRadarMap'),
  {
    ssr: false,
    loading: () => (
      <div style={{
        height: '420px',
        width: '100%',
        background: '#e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20px',
      }}>
        <p style={{ color: '#666', fontSize: '0.95rem' }}>Cargando radar de lluvia...</p>
      </div>
    ),
  }
);

interface RainRadarMapWrapperProps {
  lat: number;
  lon: number;
  zoom?: number;
  cityName?: string;
  showSearch?: boolean;
}

export default function RainRadarMapWrapper(props: RainRadarMapWrapperProps) {
  return <RainRadarMap {...props} />;
}
