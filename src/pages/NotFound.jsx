import React from 'react';
import { Home } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="section section-warm" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <span className="badge" style={{ marginBottom: '1rem' }}>
          404 &bull; Page Not Found
        </span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          This page could not be found
        </h1>
        <p style={{ marginBottom: '2rem', fontSize: '1.0625rem' }}>
          The link you followed may be broken or the material page may have been moved. Return to the home page or browse our complete product catalog.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button to="/" variant="primary" icon={Home}>
            Back to Home
          </Button>
          <Button to="/products" variant="secondary">
            Browse Product Catalog
          </Button>
        </div>
      </div>
    </div>
  );
}
