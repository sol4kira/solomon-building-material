import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function CategoryCard({ category }) {
  const { title, targetFilter, description, image, badge } = category;
  const linkTo = `/products?category=${encodeURIComponent(targetFilter)}`;

  return (
    <Link to={linkTo} className="category-card" aria-label={`Browse ${title}`}>
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
          <span>Explore Materials</span>
          <ArrowRight size={16} aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
