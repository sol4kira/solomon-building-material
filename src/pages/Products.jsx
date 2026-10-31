import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, AlertCircle } from 'lucide-react';
import { products } from '../data/products';
import { productCategories } from '../data/categories';
import { businessInfo } from '../data/businessInfo';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

export default function Products() {
  const { language, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  // Derive selected category slug from URL parameter (supports slug or legacy name matching)
  const matchedCategory = categoryParam 
    ? productCategories.find(c => 
        c.slug.toLowerCase() === categoryParam.toLowerCase() || 
        c.id.toLowerCase() === categoryParam.toLowerCase() || 
        (c.name && c.name.en && c.name.en.toLowerCase() === categoryParam.toLowerCase()) ||
        (c.name && c.name.am && c.name.am.toLowerCase() === categoryParam.toLowerCase())
      )
    : null;
  const selectedCategorySlug = matchedCategory ? matchedCategory.slug : 'all';

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [initialOptionId, setInitialOptionId] = useState(null);

  const handleSelectProduct = (product) => {
    let matchedOptId = null;
    if (searchQuery && product.options) {
      const q = searchQuery.trim().toLowerCase();
      const matched = product.options.find(opt => {
        const optName = typeof opt.name === 'object' ? (opt.name[language] || opt.name.en || '') : String(opt.name || '');
        const optDesc = typeof opt.description === 'object' ? (opt.description[language] || opt.description.en || '') : String(opt.description || '');
        return optName.toLowerCase().includes(q) || optDesc.toLowerCase().includes(q);
      });
      if (matched) matchedOptId = matched.id;
    }
    setSelectedProduct(product);
    setInitialOptionId(matchedOptId || (product.options ? product.options[0].id : null));
  };

  const handleCategorySelect = (slug) => {
    const nextParams = new URLSearchParams(searchParams);
    if (slug === 'all') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', slug);
    }
    setSearchParams(nextParams);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('category');
    setSearchParams(nextParams);
  };

  // Filter products by category and search query (matching localized product info and options)
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category match using stable categoryId/slug
      const matchesCategory = selectedCategorySlug === 'all' || item.categoryId === selectedCategorySlug;

      // Search match
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;

      const getLocalized = (val) => (typeof val === 'object' && val !== null ? (val[language] || val.en || '') : String(val || ''));
      const nameMatch = getLocalized(item.name).toLowerCase().includes(q);
      const descMatch = getLocalized(item.description).toLowerCase().includes(q);

      const catObj = productCategories.find(c => c.slug === item.categoryId);
      const catMatch = catObj ? getLocalized(catObj.name).toLowerCase().includes(q) : false;

      const optionsMatch = item.options ? item.options.some(opt => {
        const optName = getLocalized(opt.name).toLowerCase();
        const optDesc = getLocalized(opt.description).toLowerCase();
        return optName.includes(q) || optDesc.includes(q);
      }) : false;

      return matchesCategory && (nameMatch || descMatch || catMatch || optionsMatch);
    });
  }, [selectedCategorySlug, searchQuery, language]);

  const currentCategoryObj = productCategories.find(c => c.slug === selectedCategorySlug);
  const currentCategoryName = currentCategoryObj 
    ? (currentCategoryObj.name[language] || currentCategoryObj.name.en) 
    : '';

  return (
    <div className="section section-warm" style={{ paddingTop: '3rem', minHeight: '80vh' }}>
      <div className="container">
        {/* Page Heading & Introduction */}
        <div style={{ maxWidth: '780px', marginBottom: '2.5rem' }}>
          <span className="section-eyebrow">{t('products.eyebrow')}</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
            {t('products.title')}
          </h1>
          <p className="section-subtitle">
            {t('products.subtitle', {
              whatsapp: businessInfo.whatsappNumber,
              phone1: businessInfo.phoneDisplay,
              phone2: businessInfo.secondaryPhone
            })}
          </p>
        </div>

        {/* Catalog Search & Category Filters */}
        <div className="catalog-controls">
          {/* Functional Search Bar */}
          <div className="catalog-search-bar">
            <Search className="catalog-search-icon" size={18} aria-hidden="true" />
            <input
              type="text"
              className="catalog-search-input"
              placeholder={t('products.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label={t('products.searchAria')}
            />
            {searchQuery && (
              <button 
                type="button" 
                className="catalog-search-clear" 
                onClick={() => setSearchQuery("")}
                aria-label={t('products.searchClear')}
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <nav aria-label={t('footer.categories')}>
            <ul className="catalog-filter-list">
              {productCategories.map((cat) => {
                const isSelected = selectedCategorySlug === cat.slug;
                const catLabel = cat.name[language] || cat.name.en;
                return (
                  <li key={cat.slug}>
                    <button
                      type="button"
                      className={`filter-pill ${isSelected ? 'active' : ''}`}
                      onClick={() => handleCategorySelect(cat.slug)}
                      aria-pressed={isSelected}
                    >
                      {catLabel}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Results Counter & Reset Action */}
        <div className="catalog-status-bar">
          <div>
            {t('products.showingCount')} <strong>{filteredProducts.length}</strong> {t('products.ofTotal')} <strong>{products.length}</strong> {t('products.showroomItems')}
            {selectedCategorySlug !== 'all' && (
              <span> {t('products.inCategory')} <strong>{currentCategoryName}</strong></span>
            )}
            {searchQuery && (
              <span> {t('products.matchingQuery')} "<em>{searchQuery}</em>"</span>
            )}
          </div>

          {(selectedCategorySlug !== 'all' || searchQuery) && (
            <button 
              type="button" 
              className="catalog-reset-btn" 
              onClick={handleResetFilters}
            >
              {t('products.resetFilters')}
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={handleSelectProduct}
              />
            ))}
          </div>
        ) : (
          <div className="catalog-empty">
            <AlertCircle size={40} className="catalog-empty-icon" />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{t('products.emptyTitle')}</h3>
            <p style={{ maxWidth: '450px', margin: '0 auto 1.5rem auto' }}>
              {t('products.emptyDesc')}
            </p>
            <Button variant="primary" onClick={handleResetFilters}>
              {t('products.showAllBtn')}
            </Button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          initialOptionId={initialOptionId}
          onClose={() => {
            setSelectedProduct(null);
            setInitialOptionId(null);
          }}
        />
      )}
    </div>
  );
}
