import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import Button from './Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header className="site-header" role="banner">
      <div className="container header-container">
        {/* Brand Wordmark & Subtitle */}
        <Link to="/" className="brand-link" aria-label="Solomon Building Materials Home" onClick={closeMenu}>
          <span className="brand-title">{businessInfo.shortName}</span>
          <span className="brand-subtitle">{businessInfo.tagline}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            Home
          </NavLink>
          <NavLink 
            to="/products" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Products
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
        </nav>

        {/* Header CTA & Mobile Toggle */}
        <div className="header-actions">
          <div className="header-cta">
            <a 
              href={`tel:${businessInfo.phone}`} 
              className="btn btn-secondary btn-sm"
              aria-label={`Call ${businessInfo.phoneDisplay}`}
            >
              <Phone size={15} />
              <span>{businessInfo.phoneDisplay}</span>
            </a>
            <Button to="/contact" variant="primary" size="sm">
              Contact Shop
            </Button>
          </div>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer open" id="mobile-navigation" aria-label="Mobile Navigation">
          <ul className="mobile-nav-links">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                end
                onClick={closeMenu}
              >
                <span>Home</span>
                <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>Products &amp; Catalog</span>
                <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>About Solomon</span>
                <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <span>Contact &amp; Location</span>
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
              Call {businessInfo.phoneDisplay}
            </Button>
            <Button
              href={`tel:${businessInfo.secondaryPhone}`}
              variant="secondary"
              icon={Phone}
              fullWidth
              onClick={closeMenu}
            >
              Call {businessInfo.secondaryPhoneDisplay}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
