'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface FavoritesProps {
  favorites: string[];
  onRemoveFavorite: (city: string) => void;
}

export default function Favorites({ favorites, onRemoveFavorite }: FavoritesProps) {
  const { t } = useTranslation();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const selectFavoriteCity = (cityName: string) => {
    const citySlug = cityName.toLowerCase().replace(/ /g, '-');
    router.push(`/clima/${citySlug}`);
  };

  if (!mounted) {
    return (
      <div className="favorites-section">
        <h3>Ciudades favoritas</h3>
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className="favorites-section">
        <h3>{t('app.favorites.title')}</h3>
        <p className="no-favorites">{t('app.favorites.empty')}</p>
      </div>
    );
  }

  return (
    <div className="favorites-section">
      <h3>{t('app.favorites.title')}</h3>
      <div className="favorites-list">
        {favorites.map((city, index) => (
          <div key={index} className="favorite-item">
            <span onClick={() => selectFavoriteCity(city)} className="favorite-city-name">
              {city}
            </span>
            <button
              onClick={() => onRemoveFavorite(city)}
              className="remove-favorite"
              title={t('app.favorites.remove')}
            >
              <XMarkIcon style={{ width: '1em', height: '1em' }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
