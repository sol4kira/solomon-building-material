import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { useLanguage } from '../context/LanguageContext';
import Button from './Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const closeMenu = () => setMobileMenuOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const brandShortName = typeof businessInfo.shortName === 'object'
    ? businessInfo.shortName[language]
    : businessInfo.shortName;

  const brandTagline = typeof businessInfo.tagline === 'object'
    ? businessInfo.tagline[language]
    : businessInfo.tagline;

  return (
    <header className="site-header" role="banner">
      <div className="container header-container">
        {/* Brand Wordmark & Subtitle */}
        <Link to="/" className="brand-link" aria-label={`${brandShortName} Home`} onClick={closeMenu}>
          <span className="brand-title">{brandShortName}</span>
          <span className="brand-subtitle">{brandTagline}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            {t('nav.home')}
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            {t('nav.products')}
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            {t('nav.about')}
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            {t('nav.contact')}
          </NavLink>
        </nav>

        {/* Header CTA & Mobile Toggle */}
        <div className="header-actions">
          {/* Language Toggle Button */}
          <button
            type="button"
            className="lang-toggle-btn"
            onClick={toggleLanguage}
            aria-label={language === 'en' ? 'Switch language to Amharic' : 'Switch language to English'}
            title={language === 'en' ? 'ወደ አማርኛ ቀይር' : 'Switch to English'}
          >
            <Globe size={15} aria-hidden="true" />
            <span>{language === 'en' ? 'አማ' : 'EN'}</span>
          </button>

          <div className="header-cta">
            <a 
              href={`tel:${businessInfo.phone}`} 
              className="btn btn-secondary btn-sm"
              aria-label={t('nav.callNumber', { number: businessInfo.phoneDisplay })}
            >
              <Phone size={15} />
              <span>{businessInfo.phoneDisplay}</span>
            </a>
            <Button to="/contact" variant="primary" size="sm">
              {t('nav.contactShop')}
            </Button>
          </div>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t('nav.menuClose') : t('nav.menuOpen')}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer open" id="mobile-navigation" aria-label="Mobile Navigation">
          <div className="mobile-lang-row">
            <span className="mobile-lang-label">
              {language === 'en' ? 'Language / ቋንቋ' : 'ቋንቋ / Language'}
            </span>
            <button
              type="button"
              className="lang-toggle-btn"
              onClick={toggleLanguage}
              aria-label={language === 'en' ? 'Switch language to Amharic' : 'Switch language to English'}
            >
              <Globe size={15} aria-hidden="true" />
              <span>{language === 'en' ? 'አማ' : 'EN'}</span>
            </button>
          </div>

          <ul className="mobile-nav-links">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                end
                onClick={closeMenu}
              >
                <span>{t('nav.home')}</span>
                <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>{t('nav.productsAndCatalog')}</span>
                <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>{t('nav.aboutSolomon')}</span>
                <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>{t('nav.contactAndLocation')}</span>
                <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </li>
          </ul>

          <div className="mobile-contact-block">
            <Button
              href={`tel:${businessInfo.phone}`}
              variant="primary"
              icon={Phone}
              fullWidth
              onClick={closeMenu}
            >
              {t('nav.callNumber', { number: businessInfo.phoneDisplay })}
            </Button>
            <Button
              href={`tel:${businessInfo.secondaryPhone}`}
              variant="secondary"
              icon={Phone}
              fullWidth
              onClick={closeMenu}
            >
              {t('nav.callNumber', { number: businessInfo.secondaryPhoneDisplay })}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
