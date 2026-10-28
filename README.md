# Solomon Building Materials — Product Showcase Website

A clean, modern, responsive product showcase website for **Solomon Building Materials**, a family-owned shop specializing in furniture-making materials, decorative boards (MDF & UV boards), PVC and UV edge banding, wood paints (siller, lacquer, mastish, cola), and cabinet hardware.

---

## 🌟 Key Features

- **Showroom Aesthetic**: Warm ivory (`#F4F0E8`), rich dark brown (`#35291F`), secondary warm brown (`#65574A`), and subtle neutral borders.
- **Full Furniture Crafts Catalog**:
  - **MDF & Wood Boards**: Raw MDF, moisture-resistant (MR Green) boards, melamine sheets, commercial plywood.
  - **UV Boards**: High-gloss Calacatta marble UV panels, super-matte anti-fingerprint panels, woodgrain UV boards.
  - **Edge Banding (PVC & UV)**: Flexible PVC edge banding rolls and matching high-gloss UV edge banding.
  - **Wood Paints & Finishes**: Siller (sanding sealer), Lacer (clear wood lacquer), Mastish (wood mastic & putty filler), and Cola (carpenter's heavy-duty wood adhesive).
  - **Hinges & Sliders**: Concealed hydraulic soft-close hinges, full-extension ball-bearing runners, undermount rails.
  - **Handles & Accessories**: Satin brushed brass bar pulls, matte black aluminum edge profile handles, plinth leveling legs.
- **Fast, Lightweight Sample Imagery**:
  - Replaced slow, oversized images with dedicated, optimized sample illustrations in `public/images/products/`.
  - Zero bandwidth lag on mobile devices.
- **Clean Product Information**:
  - Simplified product views to clean, focused descriptions without cluttered technical spec tables.
- **Direct Contact & WhatsApp**:
  - Direct Phone 1: **0991445050** (`0991 44 50 50`)
  - Direct Phone 2: **0911210767** (`0911 21 07 67`)
  - Direct WhatsApp: **251991445050** (`+251 99 144 5050`)
  - One-click WhatsApp link directly opens the chat without any complicated multi-step questionnaires.

---

## 📁 Project Structure

```
Solomon Building Materials/
├── public/
│   ├── favicon.svg          # S monogram SVG icon
│   ├── robots.txt           # SEO crawler directions
│   ├── _redirects           # Netlify SPA routing fallback
│   └── images/
│       └── products/        # Fast, lightweight product sample illustrations
├── src/
│   ├── components/
│   │   ├── Button.jsx             # Reusable button and router/anchor link
│   │   ├── CategoryCard.jsx       # Category card with sample preview
│   │   ├── Footer.jsx             # Solomon branding, phones, WhatsApp & hours
│   │   ├── Header.jsx             # Wordmark, nav links & mobile drawer
│   │   ├── ImageWithFallback.jsx  # Resilient image component with fast fallback
│   │   ├── ProductCard.jsx        # Product preview with description & direct WhatsApp
│   │   ├── ProductModal.jsx       # Focused description modal & direct WhatsApp action
│   │   ├── ScrollToTop.jsx        # Automatic scroll-to-top on route change
│   │   └── SectionHeading.jsx     # Reusable section title & eyebrow
│   ├── data/
│   │   ├── businessInfo.js  # ⭐ SHOP OWNER CONFIGURATION (Phones, WhatsApp, Address, Hours)
│   │   ├── categories.js    # Product categories & showroom cards
│   │   └── products.js      # ⭐ PRODUCT CATALOG DATA (Add, edit, or remove items)
│   ├── pages/
│   │   ├── About.jsx        # Family business story & "Who We Serve"
│   │   ├── Contact.jsx      # Showroom location, hours, direct calls & WhatsApp
│   │   ├── Home.jsx         # Hero, categories, "Why Solomon", featured items & CTA
│   │   ├── NotFound.jsx     # 404 fallback page
│   │   └── Products.jsx     # Complete catalog with search & category filters
│   ├── styles/
│   │   ├── components.css   # Component-level styles
│   │   ├── global.css       # CSS reset, typography, buttons, container
│   │   └── variables.css    # Colors, fonts, shadows, radii
│   ├── App.jsx              # Application router & main layout
│   └── main.jsx             # React entry point
├── index.html
├── package.json
└── README.md
```

---

## 🚀 Running the Project

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```
The optimized static build is generated in `dist/`.
