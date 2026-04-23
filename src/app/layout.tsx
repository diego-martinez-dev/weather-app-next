import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { SettingsProvider } from '@/contexts/SettingsContext';
import AuthProvider from '@/components/AuthProvider';
import CookieBanner from '@/components/CookieBanner';
import AnalyticsConsent from '@/components/AnalyticsConsent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Clima Hoy - Tu aplicación del clima en tiempo real',
  description: 'Consulta el clima actual, pronóstico y mapa de temperatura para cualquier ciudad del mundo. Actualizado en tiempo real.',
  keywords: 'clima, tiempo, temperatura, pronóstico, lluvia, viento',
  authors: [{ name: 'Clima Hoy' }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.clima-hoy.com',
  },
  openGraph: {
    title: 'Clima Hoy - Tu aplicación del clima',
    description: 'Consulta el clima actual para cualquier ciudad',
    url: 'https://www.clima-hoy.com',
    siteName: 'Clima Hoy',
    locale: 'es_CO',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://www.clima-hoy.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="google-adsense-account" content="ca-pub-1859146451941420" />
      </head>
      <body className={inter.className}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1859146451941420"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <AuthProvider>
          <SettingsProvider>
            {children}
          </SettingsProvider>
        </AuthProvider>
        <CookieBanner />
        <AnalyticsConsent />
      </body>
    </html>
  );
}
