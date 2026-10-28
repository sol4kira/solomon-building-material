import React, { useState } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Store, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles,
  Paintbrush
} from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import { featuredCategories } from '../data/categories';
import { products } from '../data/products';
import SectionHeading from '../components/SectionHeading';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import Button from '../components/Button';
import ImageWithFallback from '../components/ImageWithFallback';

import uvMarbleBoardImg from '../assets/products/uv-marble-board.jpg';
import mdfRawBoardImg from '../assets/products/mdf-raw-board.jpg';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter featured products for the showcase
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);

  return (
    <>
      {/* ====================================================================
          Hero Section
          ==================================================================== */}
      <section className="hero-section" aria-label="Introduction">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <Sparkles size={16} />
                <span>Showroom &amp; Workshop Supply</span>
              </div>

              <h1 className="hero-title">
                Everything for Your Furniture Projects
              </h1>

              <p className="hero-subtitle">
                MDF boards, UV boards, PVC &amp; UV edge banding, wood paints (siller, lacquer, mastish, cola), and cabinet hardware in one place.
              </p>

              <div className="hero-actions">
                <Button to="/products" variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
                  Explore Products
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Contact Us
                </Button>
              </div>

              <div className="hero-features">
                <div className="hero-feature-item">
                  <CheckCircle2 size={18} className="hero-feature-icon" />
                  <span>Physical showroom to visit</span>
                </div>
                <div className="hero-feature-item">
                  <CheckCircle2 size={18} className="hero-feature-icon" />
                  <span>Call {businessInfo.phoneDisplay}</span>
                </div>
                <div className="hero-feature-item">
                  <CheckCircle2 size={18} className="hero-feature-icon" />
                  <span>For carpenters &amp; makers</span>
                </div>
              </div>
            </div>

            <div className="hero-media">
              <div className="hero-image-wrapper">
                <ImageWithFallback
                  src={uvMarbleBoardImg}
                  alt="Solomon Building Materials showroom panels and boards"
                  className="hero-image"
                  fallbackText="Solomon Showroom Materials"
                />
                <div className="hero-badge-overlay">
                  <Store size={22} className="hero-badge-icon" />
                  <div>
                    <div className="hero-badge-text">{businessInfo.name}</div>
                    <div className="hero-badge-sub">Boards, Paints &amp; Hardware</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Product Categories Section: "What We Sell"
          ==================================================================== */}
      <section className="section section-white" aria-labelledby="categories-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Material Range"
            title="What We Sell"
            subtitle="Browse our complete stock of furniture boards, high-gloss UV panels, matching edge banding, wood finishes, and cabinet fittings."
            center
          />

          <div className="category-grid">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button to="/products" variant="outline" icon={ArrowRight} iconPosition="right">
              View All Product Categories
            </Button>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Why Choose Solomon Section
          ==================================================================== */}
      <section className="section section-warm" aria-labelledby="why-heading">
        <div className="container">
          <SectionHeading
            eyebrow="Showroom Advantages"
            title={`Why Choose ${businessInfo.shortName}`}
            subtitle="Supplying furniture makers, carpenters, and contractors with dependable materials."
            center
          />

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon-box">
                <Layers size={24} />
              </div>
              <h3 className="why-title">Range for Furniture Makers</h3>
              <p className="why-desc">
                From raw and MR green MDF sheets to decorative UV marble boards, PVC edge banding, and joinery hardware.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-box">
                <Paintbrush size={24} />
              </div>
              <h3 className="why-title">Wood Paints, Siller &amp; Cola</h3>
              <p className="why-desc">
                We supply sanding siller, clear lacquer, wood mastish putty, and high-strength cola wood glue directly for workshop needs.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-box">
                <Store size={24} />
              </div>
              <h3 className="why-title">A Physical Shop to Visit</h3>
              <p className="why-desc">
                Inspect physical board finishes, edge profile samples, and runner smooth glide in person at our showroom.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon-box">
                <PhoneCall size={24} />
              </div>
              <h3 className="why-title">Direct Stock Confirmation</h3>
              <p className="why-desc">
                Call {businessInfo.phoneDisplay} or {businessInfo.secondaryPhoneDisplay} for quick stock confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Featured Products Section
          ==================================================================== */}
      <section className="section section-white" aria-labelledby="featured-heading">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span className="section-eyebrow">Sample Selection</span>
              <h2 className="section-title" id="featured-heading">Featured Materials</h2>
              <p className="section-subtitle">Curated boards, edge banding, paints, and hardware from our shop.</p>
            </div>
            <Button to="/products" variant="primary" icon={ArrowRight} iconPosition="right">
              View Complete Catalog
            </Button>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          About Preview Section
          ==================================================================== */}
      <section className="section section-warm" aria-labelledby="about-preview-heading">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-media">
              <ImageWithFallback
                src={mdfRawBoardImg}
                alt="Precision wood boards and materials at Solomon Building Materials"
                fallbackText="Solomon Building Materials"
              />
            </div>

            <div className="about-preview-content">
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title" id="about-preview-heading">
                Dedicated to Woodcraft &amp; Furniture Makers
              </h2>
              <p>
                {businessInfo.name} is a family-owned building materials shop founded to support furniture makers, cabinet workshops, contractors, and home DIYers with honest guidance and solid materials.
              </p>
              <p>
                Whether you need high-grade MDF boards, glossy UV panels, color-matched PVC/UV edge banding, siller, lacquer, mastish, or cola adhesive, we focus on reliable stock and direct personal service.
              </p>
              <div style={{ marginTop: '0.5rem' }}>
                <Button to="/about" variant="secondary" icon={ArrowRight} iconPosition="right">
                  About {businessInfo.shortName}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Contact Call To Action
          ==================================================================== */}
      <section className="section" aria-labelledby="cta-heading">
        <div className="container">
          <div className="contact-cta-box">
            <div className="contact-cta-inner">
              <span className="section-eyebrow">Get In Touch</span>
              <h2 className="section-title" id="cta-heading">
                Ready to Start Your Furniture Project?
              </h2>
              <p className="section-subtitle">
                Contact our showroom team to verify sheet availability, ask technical questions, or arrange pickup.
              </p>

              <div className="contact-cta-actions">
                <Button to="/contact" variant="primary" size="lg">
                  Contact Us
                </Button>
                <Button to="/products" variant="secondary" size="lg">
                  Explore Complete Catalog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
