'use client';

import './TemperatureIndicator.css';

interface TemperatureIndicatorProps {
  tempCelsius: number;
  tempDisplay: string;
  minTemp?: number;
  maxTemp?: number;
}

function TemperatureIndicator({ tempCelsius, tempDisplay, minTemp = -20, maxTemp = 50 }: TemperatureIndicatorProps) {
  const percentage = ((tempCelsius - minTemp) / (maxTemp - minTemp)) * 100;
  const clampedPercentage = Math.min(100, Math.max(0, percentage));

  const getColorByTemp = (temperature: number) => {
    if (temperature <= -10) return '#0000ff';
    if (temperature <= 0)   return '#00aaff';
    if (temperature <= 10)  return '#00ffaa';
    if (temperature <= 20)  return '#00ff00';
    if (temperature <= 30)  return '#ffff00';
    if (temperature <= 40)  return '#ffaa00';
    return '#ff0000';
  };

  const indicatorColor = getColorByTemp(tempCelsius);

  const ranges = [
    { value: -15, label: '<-10°' },
    { value: -5,  label: '-10°'  },
    { value: 5,   label: '0°'    },
    { value: 15,  label: '10°'   },
    { value: 25,  label: '20°'   },
    { value: 35,  label: '30°'   },
    { value: 45,  label: '40°+'  },
  ];
  
  return (
    <div className="temperature-indicator">
      {/* Puntero de temperatura actual */}
      <div className="temp-pointer-container">
        <div
          className="temp-pointer"
          style={{
            left: `${clampedPercentage}%`,
          }}
        >
          <span className="temp-pointer-value">
            {tempDisplay}
          </span>
          <div 
            className="temp-pointer-arrow" 
            style={{ borderTopColor: indicatorColor }}
          />
        </div>
      </div>
      
      {/* Barra de colores */}
      <div className="temp-range-bar">
        {ranges.map((range, index) => (
          <div
            key={index}
            className="temp-range-segment"
            style={{
              flex: 1,
              backgroundColor: getColorByTemp(range.value),
            }}
            title={`${range.label}`}
          />
        ))}
      </div>
      
      {/* Marcadores de temperatura */}
      <div className="temp-marks">
        {ranges.map((range, index) => (
          <span key={index} className="temp-mark">
            {range.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TemperatureIndicator;