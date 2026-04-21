'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { useSettings } from '@/contexts/SettingsContext';
import './TopMenu.css';

export default function TopMenu() {
  const { t } = useTranslation();
  const router = useRouter();
  const { unit, setUnit, language, setLanguage, country, getTempSymbol } = useSettings();
  
  const [showUnitDropdown, setShowUnitDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [searchCity, setSearchCity] = useState('');
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const unitRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Cerrar menú móvil al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (unitRef.current && !unitRef.current.contains(event.target as Node)) {
        setShowUnitDropdown(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setShowLanguageDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const countries = [
    { code: 'ES', flag: '🇪🇸' },
    { code: 'CO', flag: '🇨🇴' },
    { code: 'MX', flag: '🇲🇽' },
    { code: 'AR', flag: '🇦🇷' },
    { code: 'US', flag: '🇺🇸' },
    { code: 'UK', flag: '🇬🇧' },
  ];

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' }
  ];

  const getCountryFlag = () => {
    const found = countries.find(c => c.code === country);
    return found ? found.flag : '🌍';
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchCity.trim()) {
      const citySlug = searchCity.trim().toLowerCase().replace(/ /g, '-');
      router.push(`/clima/${citySlug}`);
      setSearchCity('');
      setMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    router.push('/');
    setMobileMenuOpen(false);
  };

  if (!mounted) {
    return (
      <div className="top-menu">
        <div className="top-menu-container-full">
          <div className="menu-logo">🌤️ Clima Hoy</div>
          <div className="menu-search">
            <input type="text" placeholder="Buscar ciudad..." className="menu-search-input" />
            <button className="menu-search-button">🔍</button>
          </div>
          <button className="mobile-menu-btn">☰</button>
        </div>
      </div>
    );
  }

  return (
    <div className="top-menu">
      <div className="top-menu-container-full">
        {/* Logo */}
        <div className="menu-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          🌤️ WeatherApp
        </div>

        {/* Barra de búsqueda - visible siempre */}
        <form className="menu-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={t('app.search.placeholder')}
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            className="menu-search-input"
          />
          <button type="submit" className="menu-search-button">
            🔍
          </button>
        </form>

        {/* Botón menú hamburguesa (solo móvil) */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menú"
        >
          ☰
        </button>

        {/* Menú desktop (visible en desktop, oculto en móvil) */}
        <div className="menu-right desktop-only">
          <div className="menu-item">
            <span className="country-code">
              {getCountryFlag()} {country}
            </span>
          </div>

          <div className="menu-item dropdown" ref={unitRef}>
            <span 
              className="dropdown-trigger"
              onClick={() => setShowUnitDropdown(!showUnitDropdown)}
            >
              {getTempSymbol()} ▼
            </span>
            {showUnitDropdown && (
              <div className="dropdown-menu">
                <div 
                  className={`dropdown-item ${unit === 'celsius' ? 'active' : ''}`}
                  onClick={() => { setUnit('celsius'); setShowUnitDropdown(false); }}
                >
                  🌡️ {t('app.menu.celsius')} (°C)
                </div>
                <div 
                  className={`dropdown-item ${unit === 'fahrenheit' ? 'active' : ''}`}
                  onClick={() => { setUnit('fahrenheit'); setShowUnitDropdown(false); }}
                >
                  🌡️ {t('app.menu.fahrenheit')} (°F)
                </div>
              </div>
            )}
          </div>

          <div className="menu-item dropdown" ref={languageRef}>
            <span 
              className="dropdown-trigger"
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            >
              {languages.find(l => l.code === language)?.flag || '🇪🇸'} {languages.find(l => l.code === language)?.name || 'Español'} ▼
            </span>
            {showLanguageDropdown && (
              <div className="dropdown-menu">
                {languages.map((lang) => (
                  <div 
                    key={lang.code} 
                    className={`dropdown-item ${language === lang.code ? 'active' : ''}`} 
                    onClick={() => { setLanguage(lang.code); setShowLanguageDropdown(false); }}
                  >
                    {lang.flag} {lang.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menú lateral móvil */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-panel" ref={mobileMenuRef}>
            <div className="mobile-menu-header">
              <span>Configuración</span>
              <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>✕</button>
            </div>
            <div className="mobile-menu-items">
              <div className="mobile-menu-item">
                <span className="mobile-item-label">📍 País</span>
                <span className="mobile-item-value">{getCountryFlag()} {country}</span>
              </div>
              
              <div className="mobile-menu-item">
                <span className="mobile-item-label">🌡️ Temperatura</span>
                <div className="mobile-item-options">
                  <button 
                    className={`mobile-option ${unit === 'celsius' ? 'active' : ''}`}
                    onClick={() => { setUnit('celsius'); setMobileMenuOpen(false); }}
                  >
                    °C
                  </button>
                  <button 
                    className={`mobile-option ${unit === 'fahrenheit' ? 'active' : ''}`}
                    onClick={() => { setUnit('fahrenheit'); setMobileMenuOpen(false); }}
                  >
                    °F
                  </button>
                </div>
              </div>
              
              <div className="mobile-menu-item">
                <span className="mobile-item-label">🌐 Idioma</span>
                <div className="mobile-item-options mobile-lang-options">
                  {languages.map((lang) => (
                    <button 
                      key={lang.code}
                      className={`mobile-option ${language === lang.code ? 'active' : ''}`}
                      onClick={() => { setLanguage(lang.code); setMobileMenuOpen(false); }}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}