'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useSettings } from '@/contexts/SettingsContext';
import { faqItems } from '@/data/faq';
import './HomeFaq.css';

const VISIBLE_COUNT = 6;

export default function HomeFaq() {
  const { t } = useTranslation();
  const { language } = useSettings();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.slice(0, VISIBLE_COUNT).map(item => ({
      '@type': 'Question',
      name: item.question.es,
      acceptedAnswer: { '@type': 'Answer', text: item.answer.es },
    })),
  };

  if (!mounted) {
    return (
      <section className="home-faq-section">
        <div className="home-faq-skeleton" />
      </section>
    );
  }

  const visibleItems = faqItems.slice(0, VISIBLE_COUNT);
  const lang = language === 'en' ? 'en' : 'es';

  return (
    <section className="home-faq-section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <h2 className="home-faq-title" suppressHydrationWarning>
        {t('app.home.faq_title')}
      </h2>
      <div className="home-faq-list">
        {visibleItems.map((item, i) => (
          <details key={i} className="home-faq-item">
            <summary className="home-faq-question">
              {item.question[lang]}
            </summary>
            <p className="home-faq-answer">
              {item.answer[lang]}
            </p>
          </details>
        ))}
      </div>
      <div className="home-faq-more">
        <Link href="/faq" className="home-faq-link">
          Ver todas las preguntas frecuentes →
        </Link>
      </div>
    </section>
  );
}
