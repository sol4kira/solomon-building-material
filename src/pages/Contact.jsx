import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  Send,
  MapPin, 
  Clock, 
  ExternalLink, 
  CheckCircle2
} from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import Button from '../components/Button';

export default function Contact() {
  return (
    <div className="section section-warm" style={{ paddingTop: '3.5rem', minHeight: '80vh' }}>
      <div className="container">
        {/* Page Heading & Guidance */}
        <div style={{ maxWidth: '780px', marginBottom: '3rem' }}>
          <span className="section-eyebrow">Get In Touch</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
            Contact {businessInfo.name}
          </h1>
          <p className="section-subtitle">
            Visit our showroom or get in touch for questions regarding MDF boards, UV decorative panels, PVC and UV edge banding, wood paints (siller, lacquer, mastish, cola), and hardware.
          </p>
        </div>

        {/* 4 Clean, Balanced Contact Cards Grid */}
        <div className="contact-cards-grid">
          {/* Card 1: Phone Numbers */}
          <div className="contact-card">
            <div className="contact-card-icon">
              <Phone size={22} />
            </div>
            <h2 className="contact-card-title">Phone Call</h2>
            <p className="contact-card-detail">
              Call our showroom directly during business hours.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <a 
                href={`tel:${businessInfo.phone}`} 
                className="btn btn-secondary btn-sm"
                style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}
              >
                <Phone size={14} /> Call {businessInfo.phoneDisplay}
              </a>
              <a 
                href={`tel:${businessInfo.secondaryPhone}`} 
                className="btn btn-secondary btn-sm"
                style={{ display: 'inline-flex', width: '100%', justifyContent: 'center' }}
              >
                <Phone size={14} /> Call {businessInfo.secondaryPhoneDisplay}
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp & Telegram (Full length into two on the same number) */}
          <div className="contact-card">
            <div className="contact-card-icon" style={{ backgroundColor: '#E7F9EE', color: '#25D366' }}>
              <MessageSquare size={22} />
            </div>
            <h2 className="contact-card-title">WhatsApp &amp; Telegram</h2>
            <p className="contact-card-detail">
              Direct chat on our official line (+{businessInfo.whatsappNumber}).
            </p>
            <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <Button
                href={businessInfo.getWhatsAppUrl()}
                variant="whatsapp"
                size="sm"
                target="_blank"
                icon={MessageSquare}
                fullWidth
              >
                WhatsApp (+{businessInfo.whatsappNumber})
              </Button>
              <Button
                href={businessInfo.getTelegramUrl()}
                variant="telegram"
                size="sm"
                target="_blank"
                icon={Send}
                fullWidth
              >
                Telegram (+{businessInfo.telegramNumber})
              </Button>
            </div>
          </div>

          {/* Card 3: Showroom Location */}
          <div className="contact-card">
            <div className="contact-card-icon">
              <MapPin size={22} />
            </div>
            <h2 className="contact-card-title">Showroom Location</h2>
            <p className="contact-card-detail">
              <strong>{businessInfo.address.street}</strong><br />
              {businessInfo.address.cityStateZip}<br />
              <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-light)' }}>
                {businessInfo.address.note}
              </span>
            </p>
            {businessInfo.address.googleMapsUrl && (
              <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                <Button
                  href={businessInfo.address.googleMapsUrl}
                  variant="outline"
                  size="sm"
                  target="_blank"
                  icon={ExternalLink}
                  fullWidth
                >
                  Open in Google Maps
                </Button>
              </div>
            )}
          </div>

          {/* Card 4: Operating Hours */}
          <div className="contact-card">
            <div className="contact-card-icon">
              <Clock size={22} />
            </div>
            <h2 className="contact-card-title">Operating Hours</h2>
            <div style={{ marginTop: '0.25rem' }}>
              <ul className="hours-list">
                {businessInfo.hours.map((h, i) => (
                  <li key={i} className="hours-row">
                    <span className="hours-days">{h.days}</span>
                    <span className="hours-time">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Visit Guidelines */}
        <div style={{ 
          backgroundColor: 'var(--color-surface-alt)', 
          padding: '1.25rem 1.5rem', 
          borderRadius: 'var(--radius-md)', 
          border: '1px solid var(--color-border)',
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start',
          maxWidth: '850px'
        }}>
          <CheckCircle2 size={20} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--color-text-secondary)' }}>
            <strong style={{ color: 'var(--color-text-main)' }}>Visiting our shop:</strong> We stock full-sized MDF sheets, UV decorative boards, edge banding rolls, paints, and hardware. If you are arranging vehicle transport for sheet loading, call us ahead so we can prepare your order.
          </div>
        </div>
      </div>
    </div>
  );
}
