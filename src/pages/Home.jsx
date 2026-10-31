import React, { useState } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Store, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles,
  Paintbrush
} from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { featuredCategories } from '../data/categories';
import { products } from '../data/products';
import SectionHeading from '../components/SectionHeading';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import Button from '../components/Button';
import ImageWithFallback from '../components/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

import uvMarbleBoardImg from '../assets/products/uv-marble-board.jpg';
import mdfRawBoardImg from '../assets/products/mdf-raw-board.jpg';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { language, t } = useLanguage();

  const brandName = typeof businessInfo.name === 'object' 
    ? businessInfo.name[language] 
    : businessInfo.name;

  const brandShortName = typeof businessInfo.shortName === 'object' 
    ? businessInfo.shortName[language] 
    : businessInfo.shortName;

  // Filter featured products for the showcase
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);

  return (
    <>
      {/* ====================================================================
          Hero Section
          ==================================================================== */}
      <section className="hero-section" aria-label="Introduction">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <Sparkles size={16} />
                <span>{t('home.heroEyebrow')}</span>
              </div>

              <h1 className="hero-title">
                {t('home.heroTitle')}
              </h1>

              <p className="hero-subtitle">
                {t('home.heroSubtitle')}
              </p>

              <div className="hero-actions">
                <Button to="/products" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                  {t('home.exploreProducts')}
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  {t('home.contactUs')}
                </Button>
              </div>

              <div className="hero-features">
                <div className="hero-feature-item">
                  <CheckCircle2 size={18} className="hero-feature-icon" />
                  <span>{t('home.featureShowroom')}</span>
                </div>
                <div className="hero-feature-item">
                  <CheckCircle2 size={18} className="hero-feature-icon" />
                  <span>{t('home.featureCall', { phone: businessInfo.phoneDisplay })}</span>
                </div>
                <div className="hero-feature-item">
                  <CheckCircle2 size={18} className="hero-feature-icon" />
                  <span>{t('home.featureMakers')}</span>
                </div>
              </div>
            </div>

            <div className="hero-media">
              <div className="hero-image-wrapper">
                <ImageWithFallback
                  src={uvMarbleBoardImg}
                  alt={`${brandName} showroom panels and boards`}
                  className="hero-image"
                  fallbackText={brandName}
                />
                <div className="hero-badge-overlay">
                  <Store size={22} className="hero-badge-icon" />
                  <div>
                    <div className="hero-badge-text">{brandName}</div>
                    <div className="hero-badge-sub">{t('home.heroBadgeSub')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Product Categories Section: "What We Sell"
          ==================================================================== */}
      <section className="section section-white" aria-labelledby="categories-heading">
        <div className="container">
          <SectionHeading
            eyebrow={t('home.categoriesEyebrow')}
            title={t('home.categoriesTitle')}
            subtitle={t('home.categoriesSubtitle')}
            center
          />

          <div className="category-grid">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button to="/products" variant="outline" icon={ArrowRight} iconPosition="right">
              {t('home.viewAllCategories')}
            </Button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Why Choose Solomon Section
          ==================================================================== */}
      <section className="section section-warm" aria-labelledby="why-heading">
        <div className="container">
          <SectionHeading
            eyebrow={t('home.whyEyebrow')}
            title={t('home.whyTitle', { name: brandShortName })}
            subtitle={t('home.whySubtitle')}
            center
          />

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon-box">
                <Layers size={24} />
              </div>
              <h3 className="why-title">{t('home.whyMakersTitle')}</h3>
              <p className="why-desc">
                {t('home.whyMakersDesc')}
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-box">
                <Paintbrush size={24} />
              </div>
              <h3 className="why-title">{t('home.whyPaintsTitle')}</h3>
              <p className="why-desc">
                {t('home.whyPaintsDesc')}
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-box">
                <Store size={24} />
              </div>
              <h3 className="why-title">{t('home.whyShopTitle')}</h3>
              <p className="why-desc">
                {t('home.whyShopDesc')}
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-box">
                <PhoneCall size={24} />
              </div>
              <h3 className="why-title">{t('home.whyContactTitle')}</h3>
              <p className="why-desc">
                {t('home.whyContactDesc', { 
                  phone1: businessInfo.phoneDisplay, 
                  phone2: businessInfo.secondaryPhoneDisplay 
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Featured Products Section
          ==================================================================== */}
      <section className="section section-white" aria-labelledby="featured-heading">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-eyebrow">{t('home.featuredEyebrow')}</span>
              <h2 className="section-title" id="featured-heading">{t('home.featuredTitle')}</h2>
              <p className="section-subtitle">{t('home.featuredSubtitle')}</p>
            </div>
            <Button to="/products" variant="primary" icon={ArrowRight} iconPosition="right">
              {t('home.viewCompleteCatalog')}
            </Button>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          About Preview Section
          ==================================================================== */}
      <section className="section section-warm" aria-labelledby="about-preview-heading">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-media">
              <ImageWithFallback
                src={mdfRawBoardImg}
                alt={`Precision wood boards and materials at ${brandName}`}
                fallbackText={brandName}
              />
            </div>

            <div className="about-preview-content">
              <span className="section-eyebrow">{t('home.aboutPreviewEyebrow')}</span>
              <h2 className="section-title" id="about-preview-heading">
                {t('home.aboutPreviewTitle')}
              </h2>
              <p>
                {t('home.aboutPreviewP1', { name: brandName })}
              </p>
              <p>
                {t('home.aboutPreviewP2')}
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <Button to="/about" variant="secondary" icon={ArrowRight} iconPosition="right">
                  {t('home.aboutPreviewBtn', { name: brandShortName })}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Contact Call To Action
          ==================================================================== */}
      <section className="section" aria-labelledby="cta-heading">
        <div className="container">
          <div className="contact-cta-box">
            <div className="contact-cta-inner">
              <span className="section-eyebrow">{t('home.ctaEyebrow')}</span>
              <h2 className="section-title" id="cta-heading">
                {t('home.ctaTitle')}
              </h2>
              <p className="section-subtitle">
                {t('home.ctaSubtitle')}
              </p>

              <div className="contact-cta-actions">
                <Button to="/contact" variant="primary" size="lg">
                  {t('home.ctaContactBtn')}
                </Button>
                <Button to="/products" variant="secondary" size="lg">
                  {t('home.ctaCatalogBtn')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
