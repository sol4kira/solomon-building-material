import React from 'react';
import { 
  Hammer, 
  Wrench, 
  Home as HomeIcon, 
  Briefcase, 
  Edit3, 
  Layers, 
  Check 
} from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import ImageWithFallback from '../components/ImageWithFallback';

import mdfRawBoardImg from '../assets/products/mdf-raw-board.jpg';
import midoSealerImg from '../assets/products/mido-sealer.jpg';

export default function About() {
  return (
    <>
      {/* ====================================================================
          About Hero Section
          ==================================================================== */}
      <section className="section section-warm" style={{ paddingBottom: '2.5rem' }}>
        <div className="container">
          <div className="about-hero">
            <span className="section-eyebrow">Our Business</span>
            <h1 className="section-title">
              About {businessInfo.name}
            </h1>
            <p className="section-subtitle">
              A family-owned building materials shop providing quality wood boards, decorative UV panels, edge banding, wood paints, and furniture hardware for craftsmen, workshops, and homeowners.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Story & Materials Overview
          ==================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="about-preview-grid">
            <div className="about-preview-content">
              <span className="section-eyebrow">The Shop</span>
              <h2 className="section-title">
                Supplying the Building Blocks of Fine Cabinetry
              </h2>
              <p>
                At {businessInfo.name}, we believe good furniture starts with the right substrate, proper surface finishes, and dependable hardware. As a family-owned business, we work closely with local carpenters, cabinet makers, and contractors who need reliable supplies for their daily craft.
              </p>
              <p>
                Our shop is focused specifically on furniture-making, cabinetry, and interior finishing:
              </p>
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', marginTop: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <Check size={18} color="var(--color-primary)" />
                  <span><strong>MDF Boards:</strong> Raw MDF sheets, moisture-resistant (MR Green), and melamine-faced panels.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <Check size={18} color="var(--color-primary)" />
                  <span><strong>UV Decorative Boards:</strong> Ultra high-gloss marble patterns and super-matte surfaces.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <Check size={18} color="var(--color-primary)" />
                  <span><strong>Edge Banding:</strong> Standard PVC edge banding and matching high-gloss UV edge tape.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <Check size={18} color="var(--color-primary)" />
                  <span><strong>Wood Paints &amp; Glues:</strong> Mido siller sanding sealer, clear lacquer, CM Mastish wood filler, and Cola wood glue.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <Check size={18} color="var(--color-primary)" />
                  <span><strong>Functional Hardware:</strong> Soft-close hydraulic hinges, telescopic ball-bearing drawer runners, and handles.</span>
                </li>
              </ul>
            </div>

            <div className="about-preview-media">
              <ImageWithFallback
                src={mdfRawBoardImg}
                alt="Stacked wood boards and showroom panels at Solomon"
                fallbackText="Solomon Material Stacks"
              />
            </div>
          </div>

          {/* Business Heritage Section */}
          <div className="history-card">
            <div className="placeholder-notice">
              <Edit3 size={14} />
              <span>Shop Philosophy &amp; Guidance</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
              Committed to Furniture Makers and Woodworkers
            </h3>
            <p style={{ marginBottom: '1.5rem' }}>
              {businessInfo.name} was established to bring workshop-ready materials under one roof. We understand the practical challenges of carpentry: finding consistent sheet thicknesses, matching edge banding seamlessly to board decors, having reliable sanding siller and clear lacquer, and choosing drawer slides that won't fail after years of heavy use. We welcome visitors to inspect samples in our showroom and consult with us directly.
            </p>

            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', maxHeight: '300px' }}>
              <ImageWithFallback
                src={midoSealerImg}
                alt="Wood paints, siller, lacquer, and finishing supplies"
                fallbackText="Finishing Materials Collection"
                style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#FAF7F2' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Who We Serve Section
          ==================================================================== */}
      <section className="section section-warm">
        <div className="container">
          <SectionHeading
            eyebrow="Our Customers"
            title="Who We Serve"
            subtitle="We provide direct material supply and friendly service to a wide community of makers."
            center
          />

          <div className="serving-grid">
            <div className="serving-card">
              <div className="serving-icon">
                <Hammer size={22} />
              </div>
              <h3 style={{ fontSize: '1.125rem' }}>Carpenters</h3>
              <p style={{ fontSize: '0.875rem' }}>
                Reliable raw and moisture-resistant MDF boards, plywood, edge banding, and fast-setting cola adhesive for daily projects.
              </p>
            </div>

            <div className="serving-card">
              <div className="serving-icon">
                <Layers size={22} />
              </div>
              <h3 style={{ fontSize: '1.125rem' }}>Cabinet &amp; Kitchen Makers</h3>
              <p style={{ fontSize: '0.875rem' }}>
                High-gloss UV marble boards, UV edge banding, concealed soft-close hinges, and smooth telescopic drawer runners.
              </p>
            </div>

            <div className="serving-card">
              <div className="serving-icon">
                <Briefcase size={22} />
              </div>
              <h3 style={{ fontSize: '1.125rem' }}>Interior Contractors</h3>
              <p style={{ fontSize: '0.875rem' }}>
                Consistent decorative panels, feature wall surfaces, commercial hardware, and wardrobe fittings for fitout jobs.
              </p>
            </div>

            <div className="serving-card">
              <div className="serving-icon">
                <Wrench size={22} />
              </div>
              <h3 style={{ fontSize: '1.125rem' }}>Finishers &amp; Polishers</h3>
              <p style={{ fontSize: '0.875rem' }}>
                Siller sanding sealer for sealing wood pores, protective clear lacquer for gloss finishes, and Mastish wood filler for flawless repairs.
              </p>
            </div>

            <div className="serving-card">
              <div className="serving-icon">
                <HomeIcon size={22} />
              </div>
              <h3 style={{ fontSize: '1.125rem' }}>Homeowners &amp; DIYers</h3>
              <p style={{ fontSize: '0.875rem' }}>
                Helpful advice for custom shelving, wardrobe refreshes, replacing worn hinges, or picking up handles and paint supplies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          Contact CTA
          ==================================================================== */}
      <section className="section section-white">
        <div className="container">
          <div className="contact-cta-box">
            <div className="contact-cta-inner">
              <span className="section-eyebrow">Visit Our Showroom</span>
              <h2 className="section-title">
                See Our Materials in Person
              </h2>
              <p className="section-subtitle">
                Visit our shop to inspect board finishes, test runner glide, and pick up paints, glues, and hardware for your next project.
              </p>

              <div className="contact-cta-actions">
                <Button to="/contact" variant="primary" size="lg">
                  Showroom Location &amp; Hours
                </Button>
                <Button to="/products" variant="secondary" size="lg">
                  Explore Full Catalog
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
