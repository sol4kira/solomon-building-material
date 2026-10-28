import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, AlertCircle } from 'lucide-react';
import { products } from '../data/products';
import { productCategories } from '../data/categories';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import Button from '../components/Button';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  // Derive selected category directly from URL parameter
  const selectedCategory = categoryParam && productCategories.includes(categoryParam) 
    ? categoryParam 
    : "All";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategorySelect = (category) => {
    const nextParams = new URLSearchParams(searchParams);
    if (category === "All") {
      nextParams.delete('category');
    } else {
      nextParams.set('category', category);
    }
    setSearchParams(nextParams);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('category');
    setSearchParams(nextParams);
  };

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category match
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

      // Search match (name, description, category, or specifications)
      const q = searchQuery.trim().toLowerCase();
      if (!q) return matchesCategory;

      const nameMatch = item.name.toLowerCase().includes(q);
      const descMatch = item.description ? item.description.toLowerCase().includes(q) : false;
      const catMatch = item.category.toLowerCase().includes(q);

      return matchesCategory && (nameMatch || descMatch || catMatch);
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="section section-warm" style={{ paddingTop: '3rem', minHeight: '80vh' }}>
      <div className="container">
        {/* Page Heading & Introduction */}
        <div style={{ maxWidth: '780px', marginBottom: '2.5rem' }}>
          <span className="section-eyebrow">Catalog & Showroom Selection</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
            Our Products
          </h1>
          <p className="section-subtitle">
            Explore our curated selection of MDF &amp; wood boards, UV decorative panels, PVC &amp; UV edge banding, wood paints (siller, lacquer, mastish, cola), and cabinet hardware. Contact us on WhatsApp (251991445050) or call 0991445050 / 0911210767 for stock availability.
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
              placeholder="Search by material name, category, or spec (e.g. 18mm, hinge, UV)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search materials and hardware"
            />
            {searchQuery && (
              <button 
                type="button" 
                className="catalog-search-clear" 
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <nav aria-label="Product categories">
            <ul className="catalog-filter-list">
              {productCategories.map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategorySelect(category)}
                    aria-pressed={selectedCategory === category}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Results Counter & Reset Action */}
        <div className="catalog-status-bar">
          <div>
            Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> showroom items
            {selectedCategory !== "All" && (
              <span> in <strong>{selectedCategory}</strong></span>
            )}
            {searchQuery && (
              <span> matching "<em>{searchQuery}</em>"</span>
            )}
          </div>

          {(selectedCategory !== "All" || searchQuery) && (
            <button 
              type="button" 
              className="catalog-reset-btn" 
              onClick={handleResetFilters}
            >
              Reset filters
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
                onSelect={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>
        ) : (
          <div className="catalog-empty">
            <AlertCircle size={40} className="catalog-empty-icon" />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No materials found</h3>
            <p style={{ maxWidth: '450px', margin: '0 auto 1.5rem auto' }}>
              We couldn't find any products matching your current search or category filter. Try clearing your search term or browsing all categories.
            </p>
            <Button variant="primary" onClick={handleResetFilters}>
              Show All Products
            </Button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
