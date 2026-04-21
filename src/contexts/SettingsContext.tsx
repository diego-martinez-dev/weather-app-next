'use client';

import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import i18n from '@/lib/i18n';

interface SettingsContextType {
  unit: string;
  setUnit: (unit: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  country: string;
  setCountry: (country: string) => void;
  convertTemp: (celsius: number) => number;
  getTempSymbol: () => string;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [unit, setUnit] = useState<string>('celsius');
  const [language, setLanguage] = useState<string>('es');
  const [country, setCountry] = useState<string>('ES');
  const [isClient, setIsClient] = useState(false);

  // Marcar cuando estamos en el cliente
  useEffect(() => {
    setIsClient(true);
    const savedUnit = localStorage.getItem('temperatureUnit');
    const savedLanguage = localStorage.getItem('language');
    const savedCountry = localStorage.getItem('country');
    
    if (savedUnit) setUnit(savedUnit);
    if (savedLanguage) setLanguage(savedLanguage);
    if (savedCountry) setCountry(savedCountry);
  }, []);

  // Cambiar idioma en i18n cuando cambie la preferencia
  useEffect(() => {
    if (isClient) {
      i18n.changeLanguage(language);
    }
  }, [language, isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('temperatureUnit', unit);
    }
  }, [unit, isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('language', language);
    }
  }, [language, isClient]);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('country', country);
    }
  }, [country, isClient]);

  const convertTemp = (celsius: number) => {
    if (unit === 'fahrenheit') {
      return Math.round((celsius * 9/5) + 32);
    }
    return Math.round(celsius);
  };

  const getTempSymbol = () => {
    return unit === 'celsius' ? '°C' : '°F';
  };

  const detectCountryByIP = async () => {
    if (localStorage.getItem('cookieConsent') !== 'all') return;
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      if (data && data.country_code) {
        setCountry(data.country_code);
      }
    } catch (error) {
      console.error('Error detectando país por IP:', error);
    }
  };

  useEffect(() => {
    if (isClient) {
      const initCountry = async () => {
        const savedCountry = localStorage.getItem('country');
        if (!savedCountry || savedCountry === 'ES') {
          await detectCountryByIP();
        }
      };
      initCountry();
    }
  }, [isClient]);

  const value = {
    unit,
    setUnit,
    language,
    setLanguage,
    country,
    setCountry,
    convertTemp,
    getTempSymbol
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}