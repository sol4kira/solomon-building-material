import React from 'react';
import { 
  Hammer, 
  Wrench, 
  Home as HomeIcon, 
  Briefcase, 
  Edit3, 
  Layers, 
  Check 
} from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ImageWithFallback from '../components/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

import mdfRawBoardImg from '../assets/products/mdf-raw-board.jpg';
import midoSealerImg from '../assets/products/mido-sealer.jpg';

export default function About() {
  const { language, t } = useLanguage();
  const bName = businessInfo.name[language] || businessInfo.name.en;

  return (
    <>
      {/* ====================================================================
          About Hero Section
          ==================================================================== */}
      <section className="section section-warm" style={{ paddingBottom: '2.5rem' }}>
        <div className="container">
          <div className="about-hero">
            <span className="section-eyebrow">{t('about.heroEyebrow')}</span>
            <h1 className="section-title">
              {t('about.heroTitle', { name: bName })}
            </h1>
            <p className="section-subtitle">
              {t('about.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Story & Materials Overview
          ==================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-content">
              <span className="section-eyebrow">{t('about.shopEyebrow')}</span>
              <h2 className="section-title">
                {t('about.shopTitle')}
              </h2>
              <p>
                {t('about.shopP1', { name: bName })}
              </p>
              <p>
                {t('about.shopP2')}
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', marginTop: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <Check size={18} color="var(--color-primary)" />
                  <span><strong>{t('about.mdfLabel')}</strong> {t('about.mdfDesc')}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <Check size={18} color="var(--color-primary)" />
                  <span><strong>{t('about.uvLabel')}</strong> {t('about.uvDesc')}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <Check size={18} color="var(--color-primary)" />
                  <span><strong>{t('about.edgeLabel')}</strong> {t('about.edgeDesc')}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <Check size={18} color="var(--color-primary)" />
                  <span><strong>{t('about.paintsLabel')}</strong> {t('about.paintsDesc')}</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <Check size={18} color="var(--color-primary)" />
                  <span><strong>{t('about.hardwareLabel')}</strong> {t('about.hardwareDesc')}</span>
                </li>
              </ul>
            </div>

            <div className="about-preview-media">
              <ImageWithFallback
                src={mdfRawBoardImg}
                alt="Stacked wood boards and showroom panels at Solomon"
                fallbackText="Solomon Material Stacks"
              />
            </div>
          </div>

          {/* Business Heritage Section */}
          <div className="history-card">
            <div className="placeholder-notice">
              <Edit3 size={14} />
              <span>{t('about.philosophyBadge')}</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
              {t('about.philosophyTitle')}
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              {t('about.philosophyP1', { name: bName })}
            </p>

            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', maxHeight: '300px' }}>
              <ImageWithFallback
                src={midoSealerImg}
                alt="Wood paints, siller, lacquer, and finishing supplies"
                fallbackText="Finishing Materials Collection"
                style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#FAF7F2' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Who We Serve Section
          ==================================================================== */}
      <section className="section section-warm">
        <div className="container">
          <SectionHeading
            eyebrow={t('about.whoEyebrow')}
            title={t('about.whoTitle')}
            subtitle={t('about.whoSubtitle')}
            center
          />

          <div className="serving-grid">
            <div className="serving-card">
              <div className="serving-icon">
                <Hammer size={22} />
              </div>
              <h3 style={{ fontSize: '1.125rem' }}>{t('about.customerCarpentersTitle')}</h3>
              <p style={{ fontSize: '0.875rem' }}>
                {t('about.customerCarpentersDesc')}
              </p>
            </div>

            <div className="serving-card">
              <div className="serving-icon">
                <Layers size={22} />
              </div>
              <h3 style={{ fontSize: '1.125rem' }}>{t('about.customerCabinetTitle')}</h3>
              <p style={{ fontSize: '0.875rem' }}>
                {t('about.customerCabinetDesc')}
              </p>
            </div>

            <div className="serving-card">
              <div className="serving-icon">
                <Briefcase size={22} />
              </div>
              <h3 style={{ fontSize: '1.125rem' }}>{t('about.customerContractorsTitle')}</h3>
              <p style={{ fontSize: '0.875rem' }}>
                {t('about.customerContractorsDesc')}
              </p>
            </div>

            <div className="serving-card">
              <div className="serving-icon">
                <Wrench size={22} />
              </div>
              <h3 style={{ fontSize: '1.125rem' }}>{t('about.customerFinishersTitle')}</h3>
              <p style={{ fontSize: '0.875rem' }}>
                {t('about.customerFinishersDesc')}
              </p>
            </div>

            <div className="serving-card">
              <div className="serving-icon">
                <HomeIcon size={22} />
              </div>
              <h3 style={{ fontSize: '1.125rem' }}>{t('about.customerDiyTitle')}</h3>
              <p style={{ fontSize: '0.875rem' }}>
                {t('about.customerDiyDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Contact CTA
          ==================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="contact-cta-box">
            <div className="contact-cta-inner">
              <span className="section-eyebrow">{t('about.ctaEyebrow')}</span>
              <h2 className="section-title">
                {t('about.ctaTitle')}
              </h2>
              <p className="section-subtitle">
                {t('about.ctaSubtitle')}
              </p>

              <div className="contact-cta-actions">
                <Button to="/contact" variant="primary" size="lg">
                  {t('about.ctaHoursBtn')}
                </Button>
                <Button to="/products" variant="secondary" size="lg">
                  {t('about.ctaCatalogBtn')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
