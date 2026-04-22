'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useSettings } from '@/contexts/SettingsContext';
import { SunIcon, MagnifyingGlassIcon, Bars3Icon, FireIcon, MapPinIcon, GlobeAltIcon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import './TopMenu.css';

export default function TopMenu() {
  const { t } = useTranslation();
  const router = useRouter();
  const { data: session } = useSession();
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
    return found ? found.flag : '';
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
          <div className="menu-logo"><SunIcon style={{ width: '1.2em', height: '1.2em', display: 'inline', verticalAlign: '-0.15em' }} /> Clima Hoy</div>
          <div className="menu-search">
            <input type="text" placeholder="Buscar ciudad..." className="menu-search-input" />
            <button className="menu-search-button"><MagnifyingGlassIcon style={{ width: '1.1em', height: '1.1em' }} /></button>
          </div>
          <button className="mobile-menu-btn"><Bars3Icon style={{ width: '1.3em', height: '1.3em' }} /></button>
        </div>
      </div>
    );
  }

  return (
    <div className="top-menu">
      <div className="top-menu-container-full">
        {/* Logo */}
        <div className="menu-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <SunIcon style={{ width: '1.2em', height: '1.2em', display: 'inline', verticalAlign: '-0.15em' }} /> Clima Hoy
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
            <MagnifyingGlassIcon style={{ width: '1.1em', height: '1.1em' }} />
          </button>
        </form>

        {/* Botón menú hamburguesa (solo móvil) */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menú"
        >
          <Bars3Icon style={{ width: '1.3em', height: '1.3em' }} />
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
                  <FireIcon style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.1em' }} /> {t('app.menu.celsius')} (°C)
                </div>
                <div 
                  className={`dropdown-item ${unit === 'fahrenheit' ? 'active' : ''}`}
                  onClick={() => { setUnit('fahrenheit'); setShowUnitDropdown(false); }}
                >
                  <FireIcon style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.1em' }} /> {t('app.menu.fahrenheit')} (°F)
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

          <div className="menu-item">
            {session?.user ? (
              <div className="user-menu">
                {session.user.image
                  ? <img src={session.user.image} alt={session.user.name ?? ''} className="user-avatar" referrerPolicy="no-referrer" />
                  : <UserCircleIcon style={{ width: '1.6rem', height: '1.6rem' }} />
                }
                <button className="auth-btn auth-btn--logout" onClick={() => signOut()}>
                  {t('app.auth.logout')}
                </button>
              </div>
            ) : (
              <button className="auth-btn auth-btn--login" onClick={() => signIn('google')}>
                {t('app.auth.login')}
              </button>
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
              <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}><XMarkIcon style={{ width: '1.2em', height: '1.2em' }} /></button>
            </div>
            <div className="mobile-menu-items">
              <div className="mobile-menu-item">
                <span className="mobile-item-label"><MapPinIcon style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.1em' }} /> País</span>
                <span className="mobile-item-value">{getCountryFlag()} {country}</span>
              </div>
              
              <div className="mobile-menu-item">
                <span className="mobile-item-label"><FireIcon style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.1em' }} /> Temperatura</span>
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
                <span className="mobile-item-label"><GlobeAltIcon style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.1em' }} /> Idioma</span>
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

              <div className="mobile-menu-item">
                <span className="mobile-item-label"><UserCircleIcon style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.1em' }} /> {t('app.auth.account')}</span>
                {session?.user ? (
                  <div className="mobile-user-info">
                    <span className="mobile-user-name">{session.user.name}</span>
                    <button className="auth-btn auth-btn--logout" onClick={() => { signOut(); setMobileMenuOpen(false); }}>
                      {t('app.auth.logout')}
                    </button>
                  </div>
                ) : (
                  <button className="auth-btn auth-btn--login" onClick={() => { signIn('google'); setMobileMenuOpen(false); }}>
                    {t('app.auth.login')}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}