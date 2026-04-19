'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.css';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          🌤️ WeatherApp
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/terms" className={`nav-link ${isActive('/terms') ? 'active' : ''}`}>
              Términos
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/privacy" className={`nav-link ${isActive('/privacy') ? 'active' : ''}`}>
              Privacidad
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/cookies" className={`nav-link ${isActive('/cookies') ? 'active' : ''}`}>
              Cookies
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/data-sources" className={`nav-link ${isActive('/data-sources') ? 'active' : ''}`}>
              Fuentes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}