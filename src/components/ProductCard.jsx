import React from 'react';
import { Eye, Layers } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';
import { productCategories } from '../data/categories';

export default function ProductCard({ product, onSelect }) {
  const { language, t } = useLanguage();
  const { image, options, categoryId } = product;
  const hasOptions = options && options.length > 1;

  const name = typeof product.name === 'object' 
    ? product.name[language] 
    : product.name;

  const description = typeof product.description === 'object' 
    ? product.description[language] 
    : product.description;

  const categoryObj = productCategories.find(
    (c) => c.id === categoryId || c.slug === categoryId
  );
  const categoryName = categoryObj 
    ? categoryObj.name[language] 
    : (typeof product.category === 'object' ? product.category[language] : (product.category || ''));

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
          fallbackText={categoryName}
        />
        {categoryName && <span className="product-card-category">{categoryName}</span>}

        {hasOptions && (
          <span className="product-card-options-pill" title={t('common.optionsCount', { count: options.length })}>
            <Layers size={12} />
            <span>{t('common.typesCount', { count: options.length })}</span>
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
            <span className="options-badge">{t('common.optionsCount', { count: options.length })}</span>
            <span 
              className="options-preview-text" 
              title={options.map((o) => (typeof o.name === 'object' ? o.name[language] : o.name)).join(', ')}
            >
              {options
                .map((o) => (typeof o.name === 'object' ? o.name[language] : o.name).replace(/\s*\([^)]*\)/, ''))
                .join(' · ')}
            </span>
          </div>
        )}

        {description && (
          <p className="product-card-desc">{description}</p>
        )}

        {/* Card Actions */}
        <div className="product-card-actions" style={{ marginTop: 'auto', paddingTop: '0.75rem' }}>
          <Button
            variant="secondary"
            size="sm"
            icon={Eye}
            fullWidth
            onClick={() => onSelect && onSelect(product)}
          >
            {hasOptions 
              ? t('common.viewDetailsWithOptions', { count: options.length }) 
              : t('common.viewDetails')}
          </Button>
        </div>
      </div>
    </article>
  );
}
