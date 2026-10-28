import React from 'react';
import { Eye } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import Button from './Button';

export default function ProductCard({ product, onSelect }) {
  const { name, category, description, image } = product;

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
      </div>

      <div className="product-card-body">
        <h3 
          className="product-card-title"
          onClick={() => onSelect && onSelect(product)}
          style={{ cursor: onSelect ? 'pointer' : 'default' }}
        >
          {name}
        </h3>

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
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}
