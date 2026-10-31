import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Clock } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { featuredCategories } from '../data/categories';
import { useLanguage } from '../context/LanguageContext';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { language, t } = useLanguage();

  const brandName = typeof businessInfo.name === 'object' 
    ? businessInfo.name[language] 
    : businessInfo.name;

  const brandTagline = typeof businessInfo.tagline === 'object' 
    ? businessInfo.tagline[language] 
    : businessInfo.tagline;

  const brandDescription = typeof businessInfo.description === 'object' 
    ? businessInfo.description[language] 
    : businessInfo.description;

  const addressStreet = typeof businessInfo.address.street === 'object'
    ? businessInfo.address.street[language]
    : businessInfo.address.street;

  const addressCityState = typeof businessInfo.address.cityStateZip === 'object'
    ? businessInfo.address.cityStateZip[language]
    : businessInfo.address.cityStateZip;

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Description */}
          <div className="footer-brand">
            <div>
              <span className="footer-brand-title">{brandName}</span>
              <div className="footer-brand-subtitle">{brandTagline}</div>
            </div>
            <p className="footer-desc">
              {brandDescription}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="footer-heading">{t('footer.navigation')}</h3>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">{t('footer.home')}</Link>
              </li>
              <li>
                <Link to="/products" className="footer-link">{t('footer.catalog')}</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">{t('footer.about')}</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">{t('footer.contactLocation')}</Link>
              </li>
            </ul>
          </div>

          {/* Category Quick Links */}
          <div>
            <h3 className="footer-heading">{t('footer.categories')}</h3>
            <ul className="footer-links">
              {featuredCategories.map((cat) => {
                const title = typeof cat.title === 'object' ? cat.title[language] : cat.title;
                const slug = cat.slug || cat.id;
                return (
                  <li key={cat.id}>
                    <Link 
                      to={`/products?category=${encodeURIComponent(slug)}`} 
                      className="footer-link"
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div>
            <h3 className="footer-heading">{t('footer.contact')}</h3>
            
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <div>
                <a href={`tel:${businessInfo.phone}`} className="footer-link">
                  {businessInfo.phoneDisplay}
                </a>
                <span style={{ margin: '0 0.5rem' }}>/</span>
                <a href={`tel:${businessInfo.secondaryPhone}`} className="footer-link">
                  {businessInfo.secondaryPhoneDisplay}
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <MessageSquare size={18} className="footer-contact-icon" />
              <div>
                <a 
                  href={businessInfo.getWhatsAppUrl()} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  WhatsApp: +{businessInfo.whatsappNumber}
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <div>
                <div>{addressStreet}</div>
                <div style={{ fontSize: '0.8125rem', color: '#9E9184' }}>
                  {addressCityState}
                </div>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} className="footer-contact-icon" />
              <div>
                {businessInfo.hours.map((h, i) => {
                  const days = typeof h.days === 'object' ? h.days[language] : h.days;
                  const time = typeof h.time === 'object' ? h.time[language] : h.time;
                  return (
                    <div key={i} style={i > 0 ? { fontSize: '0.8125rem', color: '#9E9184' } : undefined}>
                      {days}: {time}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="footer-bottom">
          <p style={{ color: 'inherit', fontSize: 'inherit' }}>
            &copy; {CURRENT_YEAR} {brandName}. {t('footer.rights')}
          </p>
          <p style={{ color: '#8A7B6E', fontSize: '0.8125rem' }}>
            {t('footer.subtitle')}
          </p>
        </div>
      </div>
    </footer>
  );
}
