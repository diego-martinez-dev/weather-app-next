'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <footer>
        <div className="footer-links">
          <a>Términos de uso</a>
          <a>Política de privacidad</a>
          <a>Política de cookies</a>
          <a>Fuentes de datos</a>
        </div>
        <div className="footer-copyright">Weather data © OpenWeather</div>
      </footer>
    );
  }

  return (
    <footer>
      <div className="footer-links">
        <Link href="/terms">{t('app.footer.terms')}</Link>
        <Link href="/privacy">{t('app.footer.privacy')}</Link>
        <Link href="/cookies">{t('app.footer.cookies')}</Link>
        <Link href="/data-sources">{t('app.footer.data_sources')}</Link>
      </div>
      <div className="footer-copyright">{t('app.footer.copyright')}</div>
      <div className="footer-copyright">Website creado por <a href="https://cracksdigitales.com" target="_blank" rel="noopener noreferrer">cracksdigitales.com</a></div>
    </footer>
  );
}
