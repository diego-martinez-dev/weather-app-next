import { SunIcon, MoonIcon, CloudIcon, CloudArrowDownIcon, BoltIcon } from '@heroicons/react/24/outline';

export function getWeatherIcon(iconCode: string): React.ElementType {
  const prefix = iconCode.slice(0, 2);
  const isDay = iconCode.endsWith('d');
  if (prefix === '01') return isDay ? SunIcon : MoonIcon;
  if (['09', '10'].includes(prefix)) return CloudArrowDownIcon;
  if (prefix === '11') return BoltIcon;
  return CloudIcon;
}
