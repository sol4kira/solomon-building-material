import React from 'react';
import { Eye, Layers } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import Button from './Button';

export default function ProductCard({ product, onSelect }) {
  const { name, category, description, image, options } = product;
  const hasOptions = options && options.length > 1;

  return (
    <article className="product-card">
      <div 
        className="product-card-media" 
        onClick={() => onSelect && onSelect(product)}
        style={{ cursor: onSelect ? 'pointer' : 'default', backgroundColor: '#FAF7F2' }}
      >
        <ImageWithFallback
          src={image}
          alt={name}
          className="product-card-image"
          fallbackText={category}
        />
        <span className="product-card-category">{category}</span>

        {hasOptions && (
          <span className="product-card-options-pill" title={`${options.length} options available`}>
            <Layers size={12} />
            <span>{options.length} Types</span>
          </span>
        )}
      </div>

      <div className="product-card-body">
        <h3 
          className="product-card-title"
          onClick={() => onSelect && onSelect(product)}
          style={{ cursor: onSelect ? 'pointer' : 'default' }}
        >
          {name}
        </h3>

        {hasOptions && (
          <div className="product-card-options-summary">
            <span className="options-badge">{options.length} Options</span>
            <span className="options-preview-text" title={options.map(o => o.name).join(', ')}>
              {options.map(o => o.name.replace(/\s*\([^)]*\)/, '')).join(' · ')}
            </span>
          </div>
        )}

        {description && (
          <p className="product-card-desc">{description}</p>
        )}

        {/* Card Actions: Single clean View Details button */}
        <div className="product-card-actions" style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
          <Button
            variant="secondary"
            size="sm"
            icon={Eye}
            fullWidth
            onClick={() => onSelect && onSelect(product)}
          >
            {hasOptions ? `View Details & ${options.length} Options` : 'View Details'}
          </Button>
        </div>
      </div>
    </article>
  );
}
