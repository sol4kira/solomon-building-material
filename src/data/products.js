/**
 * Solomon Building Materials — Product Catalog Data
 * 
 * Uses real product photography from Solomon Building Materials.
 */

import cmMastishImg from '../assets/products/cm-mastish.jpg';
import colaWoodGlueImg from '../assets/products/cola-wood-glue.jpg';
import drawerHandlesImg from '../assets/products/drawer-handles.jpg';
import drawerSliderImg from '../assets/products/drawer-slider.jpg';
import edgeBindingPvcImg from '../assets/products/edge-binding-pvc.jpg';
import edgeBindingUvImg from '../assets/products/edge-binding-uv.jpg';
import hingeHydraulicImg from '../assets/products/hinge-hydraulic.jpg';
import lexiDoorHandleImg from '../assets/products/lexi-door-handle.jpg';
import midoLacquerImg from '../assets/products/mido-lacquer.jpg';
import midoSealerImg from '../assets/products/mido-sealer.jpg';
import silverHandleImg from '../assets/products/silver-handle.jpg';
import mdfRawBoardImg from '../assets/products/mdf-raw-board.jpg';
import mdfGreenBoardImg from '../assets/products/mdf-green-board.jpg';
import uvMarbleBoardImg from '../assets/products/uv-marble-board.jpg';

export const products = [
  // 1. MDF & Wood Boards
  {
    id: "mdf-raw-standard",
    name: "Standard Raw MDF Board",
    category: "MDF & Wood Boards",
    featured: true,
    description: "High-density raw medium-density fiberboard with a smooth sanded surface. Perfect for CNC cutting, custom carpentry, shelving, and painted furniture projects.",
    image: mdfRawBoardImg
  },
  {
    id: "mdf-moisture-resistant-green",
    name: "Moisture Resistant (MR) Green MDF Board",
    category: "MDF & Wood Boards",
    featured: true,
    description: "Specially formulated green-core moisture-resistant MDF board bonded with water-repellent resin. Ideal for kitchen cabinets, bathroom vanities, and humid environments.",
    image: mdfGreenBoardImg
  },
  {
    id: "plywood-commercial-sheet",
    name: "Commercial Grade Plywood Sheet",
    category: "MDF & Wood Boards",
    featured: false,
    description: "Multi-ply engineered hardwood plywood with clean face veneers and cross-banded layers for high screw-holding power and structural durability.",
    image: mdfRawBoardImg
  },

  // 2. UV Boards
  {
    id: "uv-board-calacatta-marble",
    name: "High-Gloss Mirror Finish UV Board - White Marble",
    category: "UV Boards",
    featured: true,
    description: "High-definition Italian marble decorative panel sealed under multiple coats of ultraviolet-cured clear lacquer. Offers exceptional mirror reflection, scratch resistance, and modern luxury.",
    image: uvMarbleBoardImg
  },
  {
    id: "uv-board-smoked-woodgrain",
    name: "Gloss Woodgrain UV Decorative Board",
    category: "UV Boards",
    featured: false,
    description: "Combines warm natural wood grain textures with a crystal-clear UV protective shield for high-end showroom cabinets, reception counters, and feature walls.",
    image: uvMarbleBoardImg
  },

  // 3. Edge Banding (PVC & UV)
  {
    id: "edge-banding-pvc-standard",
    name: "PVC Flexible Edge Banding (Standard)",
    category: "Edge Banding (PVC & UV)",
    featured: true,
    description: "Impact-absorbing PVC edge tape for sealing and protecting exposed board edges. Available in various widths, solid colors, and realistic wood grain patterns.",
    image: edgeBindingPvcImg
  },
  {
    id: "edge-banding-uv-gloss",
    name: "UV High-Gloss Matching Edge Banding",
    category: "Edge Banding (PVC & UV)",
    featured: true,
    description: "Premium high-gloss UV edge banding tape specially color-matched to our high-gloss marble and acrylic UV panels. Delivers a seamless, mirror-shine edge finish.",
    image: edgeBindingUvImg
  },

  // 4. Wood Paints & Finishes (Siller, Lacquer, Mastish, Cola)
  {
    id: "mido-siller-sanding-sealer",
    name: "Mido Siller (Wood Sanding Sealer)",
    category: "Wood Paints & Finishes",
    featured: true,
    description: "Fast-drying professional wood sanding sealer. Seals open wood and MDF pores, prevents excessive paint absorption, and sands easily to a smooth base.",
    image: midoSealerImg
  },
  {
    id: "mido-lacer-clear-lacquer",
    name: "Mido Lacer (Clear Wood Finish Lacquer)",
    category: "Wood Paints & Finishes",
    featured: true,
    description: "Premium clear protective wood lacquer topcoat. Leaves a crystal-clear, durable, moisture-resistant protective film with brilliant gloss or smooth satin sheen.",
    image: midoLacquerImg
  },
  {
    id: "cm-mastish-wood-filler",
    name: "CM Mastish (Wood Mastic & Putty Filler)",
    category: "Wood Paints & Finishes",
    featured: true,
    description: "Pliable, fast-curing wood mastic paste for filling knot holes, cracks, joint imperfections, and screw recesses on furniture boards before painting or sealing.",
    image: cmMastishImg
  },
  {
    id: "cola-wood-glue-heavy-duty",
    name: "Cola (Carpenter's Heavy-Duty Wood Glue)",
    category: "Wood Paints & Finishes",
    featured: true,
    description: "High-bond strength PVA white carpenter's wood adhesive. Rapid setting formula engineered for structural furniture joinery, dowel joints, and edge lamination.",
    image: colaWoodGlueImg
  },

  // 5. Hinges & Sliders
  {
    id: "hinge-hydraulic-softclose",
    name: "Concealed Hydraulic Soft-Close Hinge (Full Overlay)",
    category: "Hinges & Sliders",
    featured: true,
    description: "Integrated silent hydraulic brass damper ensures smooth, quiet door closing every time. Features clip-on tool-free assembly and 3D cam adjustment.",
    image: hingeHydraulicImg
  },
  {
    id: "drawer-slide-ballbearing",
    name: "Telescopic Full-Extension Ball Bearing Drawer Slides",
    category: "Hinges & Sliders",
    featured: true,
    description: "Heavy-duty 45mm profile 3-fold ball-bearing runners with smooth full-extension glide. High weight capacity with quick disconnect lever.",
    image: drawerSliderImg
  },

  // 6. Handles & Accessories
  {
    id: "drawer-handles-modern",
    name: "Modern Cabinet & Drawer Handles",
    category: "Handles & Accessories",
    featured: true,
    description: "Contemporary designer cabinet handles crafted for durability, sleek grip, and elegant finish on modern wardrobe and kitchen doors.",
    image: drawerHandlesImg
  },
  {
    id: "lexi-door-handle",
    name: "Lexi Door Handle",
    category: "Handles & Accessories",
    featured: false,
    description: "Premium architectural door and cabinet handle with smooth ergonomic contour and lasting protective surface coat.",
    image: lexiDoorHandleImg
  },
  {
    id: "silver-aluminum-handle",
    name: "Silver Aluminum Edge & Bar Handle",
    category: "Handles & Accessories",
    featured: false,
    description: "Sleek anodized silver aluminum handle providing a clean, minimalist profile for modern drawers and cabinetry.",
    image: silverHandleImg
  }
];
