'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const popularCities = ['Madrid', 'Barcelona', 'London', 'Paris', 'New York', 'Tokyo', 'Berlin', 'Rome', 'Buenos Aires', 'Mexico City', 'Bogota', 'Santiago'];

interface SearchBoxProps {
  city: string;
  setCity: (city: string) => void;
  onSearch: () => void;
}

function SearchBox({ city, setCity, onSearch }: SearchBoxProps) {
  const { t } = useTranslation();
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    if (value.length > 1) {
      const filtered = popularCities.filter(c => c.toLowerCase().includes(value.toLowerCase()));
      setSuggestions(filtered.slice(0, 6));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const selectSuggestion = (suggestion: string) => {
    setCity(suggestion);
    setSuggestions([]);
    setShowSuggestions(false);
    onSearch();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="search-box" ref={wrapperRef}>
      <div className="search-input-container">
        <input
          type="text"
          placeholder={t('app.search.placeholder')}
          value={city}
          onChange={handleInputChange}
          onKeyPress={(e) => e.key === 'Enter' && onSearch()}
          onFocus={() => city.length > 1 && setShowSuggestions(true)}
        />
        <button onClick={onSearch}>{t('app.search.button')}</button>
      </div>
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="suggestions-dropdown">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="suggestion-item" onClick={() => selectSuggestion(suggestion)}>
              <MagnifyingGlassIcon className="suggestion-icon" style={{ width: '1em', height: '1em', display: 'inline', verticalAlign: '-0.1em' }} />
              <span className="suggestion-text">{suggestion}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBox;