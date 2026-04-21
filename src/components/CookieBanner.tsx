'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
      setVisible(true);
    }
  }, []);

  const accept = (level: 'all' | 'essential') => {
    localStorage.setItem('cookieConsent', level);
    window.dispatchEvent(new CustomEvent('cookieConsentUpdate', { detail: level }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <div className="cookie-banner__content">
        <div className="cookie-banner__text">
          <p>
            Usamos <strong>localStorage</strong> para guardar tus favoritos y preferencias, <strong>Google Analytics</strong> para medir el tráfico, y detectamos tu ubicación por IP para mostrarte datos relevantes. Puedes aceptar todo o continuar solo con lo esencial.{' '}
            <Link href="/cookies" className="cookie-banner__link">Política de cookies</Link>
            {' · '}
            <Link href="/privacy" className="cookie-banner__link">Privacidad</Link>
          </p>
        </div>
        <div className="cookie-banner__actions">
          <button
            className="cookie-banner__btn cookie-banner__btn--secondary"
            onClick={() => accept('essential')}
          >
            Solo esenciales
          </button>
          <button
            className="cookie-banner__btn cookie-banner__btn--primary"
            onClick={() => accept('all')}
          >
            Aceptar todo
          </button>
        </div>
      </div>
    </div>
  );
}
