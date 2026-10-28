import React, { useEffect } from 'react';
import { X, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import ImageWithFallback from './ImageWithFallback';

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Close product details dialog"
        >
          <X size={20} />
        </button>

        <div className="modal-grid">
          <div className="modal-media" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAF7F2', minHeight: '320px', padding: '1.5rem' }}>
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="product-modal-image"
              fallbackText={product.category}
              style={{ width: '100%', height: '100%', maxHeight: '360px', objectFit: 'contain' }}
            />
          </div>

          <div className="modal-body">
            <div>
              <span className="badge" style={{ marginBottom: '0.75rem' }}>
                {product.category}
              </span>
              <h2 id="modal-title" style={{ fontSize: '1.45rem', marginBottom: '0.75rem' }}>
                {product.name}
              </h2>
            </div>

            <p style={{ fontSize: '1rem', lineHeight: '1.65', color: 'var(--color-text-secondary)' }}>
              {product.description}
            </p>

            {/* Direct Call Buttons */}
            <div className="modal-call-actions">
              <a 
                href={`tel:${businessInfo.phone}`}
                className="btn btn-primary btn-sm"
              >
                <Phone size={14} /> Call {businessInfo.phoneDisplay}
              </a>
              <a 
                href={`tel:${businessInfo.secondaryPhone}`}
                className="btn btn-secondary btn-sm"
              >
                <Phone size={14} /> Call {businessInfo.secondaryPhoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
