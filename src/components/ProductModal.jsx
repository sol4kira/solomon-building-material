import React, { useState, useEffect } from 'react';
import { X, Phone, Check } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import ImageWithFallback from './ImageWithFallback';

export default function ProductModal({ product, initialOptionId, onClose }) {
  const [prevProduct, setPrevProduct] = useState(product);
  const [selectedOptionId, setSelectedOptionId] = useState(
    initialOptionId || product?.options?.[0]?.id || null
  );

  // Sync state if product changes (React state-during-render pattern)
  if (product !== prevProduct) {
    setPrevProduct(product);
    setSelectedOptionId(initialOptionId || product?.options?.[0]?.id || null);
  }

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

  const hasOptions = Array.isArray(product.options) && product.options.length > 0;
  const activeOption = hasOptions
    ? (product.options.find((opt) => opt.id === selectedOptionId) || product.options[0])
    : null;

  const currentImage = activeOption?.image || product.image;
  const currentTitle = activeOption ? activeOption.name : product.name;
  const currentDescription = activeOption?.description || product.description;

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
          {/* Modal Left: Product / Option Image */}
          <div className="modal-media" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FAF7F2', minHeight: '320px', padding: '1.5rem' }}>
            <ImageWithFallback
              key={currentImage} // Force clean transition when image changes
              src={currentImage}
              alt={currentTitle}
              className="product-modal-image"
              fallbackText={product.category}
              style={{ width: '100%', height: '100%', maxHeight: '360px', objectFit: 'contain' }}
            />
          </div>

          {/* Modal Right: Details & Options */}
          <div className="modal-body">
            <div>
              <span className="badge" style={{ marginBottom: '0.75rem' }}>
                {product.category}
              </span>
              <h2 id="modal-title" style={{ fontSize: '1.4rem', marginBottom: '0.35rem', lineHeight: '1.25' }}>
                {currentTitle}
              </h2>
              {hasOptions && activeOption && (
                <div className="modal-parent-name">
                  Part of <strong>{product.name}</strong> collection
                </div>
              )}
            </div>

            {/* Options Selector: Rendered if matching options exist */}
            {hasOptions && (
              <div className="modal-options-container">
                <div className="modal-options-header">
                  <span className="modal-options-label">
                    Available Types &amp; Options ({product.options.length}):
                  </span>
                </div>
                <div className="modal-options-list">
                  {product.options.map((option) => {
                    const isSelected = option.id === activeOption.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        className={`modal-option-chip ${isSelected ? 'active' : ''}`}
                        onClick={() => setSelectedOptionId(option.id)}
                        aria-pressed={isSelected}
                      >
                        <img 
                          src={option.image} 
                          alt="" 
                          aria-hidden="true"
                          className="modal-option-thumb" 
                        />
                        <span className="modal-option-name">{option.name}</span>
                        {isSelected && (
                          <span className="modal-option-check" aria-hidden="true">
                            <Check size={14} />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Option or Product Description */}
            <p style={{ fontSize: '0.9375rem', lineHeight: '1.65', color: 'var(--color-text-secondary)' }}>
              {currentDescription}
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
