import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Clock } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { featuredCategories } from '../data/categories';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Description */}
          <div className="footer-brand">
            <div>
              <span className="footer-brand-title">{businessInfo.name}</span>
              <div className="footer-brand-subtitle">{businessInfo.tagline}</div>
            </div>
            <p className="footer-desc">
              {businessInfo.description}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/products" className="footer-link">Product Catalog</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About Solomon</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact &amp; Location</Link>
              </li>
            </ul>
          </div>

          {/* Category Quick Links */}
          <div>
            <h3 className="footer-heading">Categories</h3>
            <ul className="footer-links">
              {featuredCategories.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    to={`/products?category=${encodeURIComponent(cat.targetFilter)}`} 
                    className="footer-link"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Hours */}
          <div>
            <h3 className="footer-heading">Showroom &amp; Contact</h3>
            
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
                <div>{businessInfo.address.street}</div>
                <div style={{ fontSize: '0.8125rem', color: '#9E9184' }}>
                  {businessInfo.address.cityStateZip}
                </div>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} className="footer-contact-icon" />
              <div>
                <div>{businessInfo.hours[0].days}: {businessInfo.hours[0].time}</div>
                <div style={{ fontSize: '0.8125rem', color: '#9E9184' }}>
                  {businessInfo.hours[1]?.days}: {businessInfo.hours[1]?.time}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="footer-bottom">
          <p style={{ color: 'inherit', fontSize: 'inherit' }}>
            &copy; {CURRENT_YEAR} {businessInfo.name}. All rights reserved.
          </p>
          <p style={{ color: '#8A7B6E', fontSize: '0.8125rem' }}>
            Furniture materials, boards &amp; hardware showroom
          </p>
        </div>
      </div>
    </footer>
  );
}
