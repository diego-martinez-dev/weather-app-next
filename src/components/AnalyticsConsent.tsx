'use client';

import { useState, useEffect } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function AnalyticsConsent() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    setHasConsent(localStorage.getItem('cookieConsent') === 'all');

    const handler = (e: Event) => {
      setHasConsent((e as CustomEvent<string>).detail === 'all');
    };
    window.addEventListener('cookieConsentUpdate', handler);
    return () => window.removeEventListener('cookieConsentUpdate', handler);
  }, []);

  if (!hasConsent) return null;
  return <GoogleAnalytics gaId="G-3WVK1Y18H6" />;
}
