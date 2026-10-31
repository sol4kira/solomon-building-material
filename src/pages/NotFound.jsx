import React from 'react';
import { Home } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="section section-warm" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <span className="badge" style={{ marginBottom: '1rem' }}>
          {t('notFound.badge')}
        </span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          {t('notFound.title')}
        </h1>
        <p style={{ marginBottom: '2rem', fontSize: '1.0625rem' }}>
          {t('notFound.desc')}
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button to="/" variant="primary" icon={Home}>
            {t('notFound.backHome')}
          </Button>
          <Button to="/products" variant="secondary">
            {t('notFound.browseCatalog')}
          </Button>
        </div>
      </div>
    </div>
  );
}
