import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

export default function CategoryCard({ category }) {
  const { language, t } = useLanguage();
  const { image } = category;

  const title = typeof category.title === 'object' 
    ? category.title[language] 
    : category.title;

  const description = typeof category.description === 'object' 
    ? category.description[language] 
    : category.description;

  const badge = typeof category.badge === 'object' 
    ? category.badge[language] 
    : category.badge;

  const slug = category.slug || category.id;
  const linkTo = `/products?category=${encodeURIComponent(slug)}`;

  return (
    <Link to={linkTo} className="category-card" aria-label={title}>
      <div className="category-card-media">
        <ImageWithFallback
          src={image}
          alt={`${title} showroom materials`}
          className="category-card-image"
          fallbackText={title}
        />
        {badge && <span className="category-card-tag">{badge}</span>}
      </div>

      <div className="category-card-body">
        <h3 className="category-card-title">{title}</h3>
        <p className="category-card-desc">{description}</p>
        
        <div className="category-card-footer">
          <span>{t('common.exploreMaterials')}</span>
          <ArrowRight size={16} aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
