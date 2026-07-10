// Dibuja la fase lunar real a partir de `phase` (0..1: 0=luna nueva, 0.25=cuarto
// creciente, 0.5=llena, 0.75=cuarto menguante). Método: un semicírculo iluminado
// (derecha si es creciente, izquierda si es menguante) + una elipse del terminador
// que se rellena de luz (gibosa) o de sombra (creciente) según la iluminación.

interface MoonPhaseIconProps {
  phase: number;
  size?: number;
  style?: React.CSSProperties;
}

const LIT = '#f4c430';
const DARK = '#3b4048';

export function MoonPhaseIcon({ phase, size = 28, style }: MoonPhaseIconProps) {
  const p = ((phase % 1) + 1) % 1;
  const angle = p * 2 * Math.PI;
  const rx = Math.abs(Math.cos(angle)) * 50;
  const waxing = p < 0.5;
  const gibbous = p > 0.25 && p < 0.75;

  const litHalf = waxing
    ? 'M50,0 A50,50 0 0 1 50,100 Z'
    : 'M50,0 A50,50 0 0 0 50,100 Z';
  const ellipseFill = gibbous ? LIT : DARK;

  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={style} role="img" aria-hidden="true">
      <circle cx="50" cy="50" r="50" fill={DARK} />
      <path d={litHalf} fill={LIT} />
      <ellipse cx="50" cy="50" rx={rx} ry="50" fill={ellipseFill} />
      <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="1.5" />
    </svg>
  );
}
