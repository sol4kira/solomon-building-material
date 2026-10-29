/**
 * Solomon Building Materials — Product Catalog Data
 * 
 * Uses real product photography from Solomon Building Materials.
 * Products sharing common names/families are grouped with selectable options.
 */

import mdfRawBoardImg from '../assets/products/mdf-raw-board.jpg';
import mdfGreenBoardImg from '../assets/products/mdf-green-board.jpg';
import uvMarbleBoardImg from '../assets/products/uv-marble-board.jpg';
import edgeBindingPvcImg from '../assets/products/edge-binding-pvc.jpg';
import edgeBindingUvImg from '../assets/products/edge-binding-uv.jpg';
import midoSealerImg from '../assets/products/mido-sealer.jpg';
import midoLacquerImg from '../assets/products/mido-lacquer.jpg';
import cmMastishImg from '../assets/products/cm-mastish.jpg';
import colaWoodGlueImg from '../assets/products/cola-wood-glue.jpg';
import hingeHydraulicImg from '../assets/products/hinge-hydraulic.jpg';
import drawerSliderImg from '../assets/products/drawer-slider.jpg';
import drawerHandlesImg from '../assets/products/drawer-handles.jpg';
import lexiDoorHandleImg from '../assets/products/lexi-door-handle.jpg';
import silverHandleImg from '../assets/products/silver-handle.jpg';
import handlesCollectionImg from '../assets/products/handles-collection.jpg';
import accessoryShelfPinsImg from '../assets/products/accessory-shelf-pins.jpg';
import accessoryLatchesBracketsImg from '../assets/products/accessory-latches-brackets.jpg';
import wardrobeOvalRailImg from '../assets/products/wardrobe-oval-rail.jpg';
import woodScrewsImg from '../assets/products/wood-screws.jpg';

export const products = [
  // 1. MDF & Wood Boards
  {
    id: "mdf-boards",
    name: "MDF Boards",
    category: "MDF & Wood Boards",
    featured: true,
    description: "High-density raw and moisture-resistant engineered fiberboards. Smooth, stable, and ready for precision cutting, joinery, and painting.",
    image: mdfRawBoardImg,
    options: [
      {
        id: "mdf-raw-standard",
        name: "Standard Raw MDF Board",
        image: mdfRawBoardImg,
        description: "High-density raw medium-density fiberboard with a smooth sanded surface. Perfect for CNC cutting, custom carpentry, shelving, and painted furniture projects."
      },
      {
        id: "mdf-moisture-resistant-green",
        name: "Moisture Resistant (MR) Green MDF Board",
        image: mdfGreenBoardImg,
        description: "Specially formulated green-core moisture-resistant MDF board bonded with water-repellent resin. Ideal for kitchen cabinets, bathroom vanities, and humid environments."
      }
    ]
  },

  // 2. UV Boards
  {
    id: "uv-boards",
    name: "UV Decorative Boards",
    category: "UV Boards",
    featured: true,
    description: "Ultra-violet cured high-gloss decorative panels for modern luxury kitchens, wardrobes, and accent wall features.",
    image: uvMarbleBoardImg,
    options: [
      {
        id: "uv-board-calacatta-marble",
        name: "White Marble High-Gloss UV Board",
        image: uvMarbleBoardImg,
        description: "High-definition Italian marble decorative panel sealed under multiple coats of ultraviolet-cured clear lacquer. Offers exceptional mirror reflection, scratch resistance, and modern luxury."
      },
      {
        id: "uv-board-smoked-woodgrain",
        name: "Gloss Woodgrain UV Decorative Board",
        image: uvMarbleBoardImg,
        description: "Combines warm natural wood grain textures with a crystal-clear UV protective shield for high-end showroom cabinets, reception counters, and feature walls."
      }
    ]
  },

  // 3. Edge Banding (PVC & UV)
  {
    id: "edge-banding",
    name: "Edge Banding (PVC & UV)",
    category: "Edge Banding (PVC & UV)",
    featured: true,
    description: "Professional edge sealing tapes designed to protect board edges from moisture and impact while matching board surfaces seamlessly.",
    image: edgeBindingPvcImg,
    options: [
      {
        id: "edge-banding-pvc-standard",
        name: "Standard PVC Flexible Edge Banding",
        image: edgeBindingPvcImg,
        description: "Impact-absorbing flexible PVC edge tape for sealing and protecting exposed board edges. Available in various widths, solid colors, and wood grain patterns."
      },
      {
        id: "edge-banding-uv-gloss",
        name: "UV High-Gloss Matching Edge Banding",
        image: edgeBindingUvImg,
        description: "Premium high-gloss UV edge banding tape specially color-matched to our high-gloss marble and acrylic UV panels. Delivers a seamless mirror-shine edge finish."
      }
    ]
  },

  // 4. Wood Paints & Finishes (Siller, Lacquer)
  {
    id: "mido-wood-finishes",
    name: "Mido Wood Paints & Finishes",
    category: "Wood Paints & Finishes",
    featured: true,
    description: "Professional grade sanding sealer and crystal-clear wood lacquer for durable, satin or high-gloss protective furniture finishes.",
    image: midoSealerImg,
    options: [
      {
        id: "mido-siller-sanding-sealer",
        name: "Mido Siller (Wood Sanding Sealer)",
        image: midoSealerImg,
        description: "Fast-drying professional wood sanding sealer. Seals open wood and MDF pores, prevents excessive paint absorption, and sands easily to an ultra-smooth base."
      },
      {
        id: "mido-lacer-clear-lacquer",
        name: "Mido Lacer (Clear Wood Finish Lacquer)",
        image: midoLacquerImg,
        description: "Premium clear protective wood lacquer topcoat. Leaves a crystal-clear, durable, moisture-resistant protective film with brilliant gloss or smooth satin sheen."
      }
    ]
  },

  // 5. CM Mastish
  {
    id: "cm-mastish-wood-filler",
    name: "CM Mastish (Wood Mastic & Putty Filler)",
    category: "Wood Paints & Finishes",
    featured: true,
    description: "Pliable, fast-curing wood mastic paste for filling knot holes, cracks, joint imperfections, and screw recesses on furniture boards before painting or sealing.",
    image: cmMastishImg
  },

  // 6. Cola Wood Glue
  {
    id: "cola-wood-glue-heavy-duty",
    name: "Cola (Carpenter's Heavy-Duty Wood Glue)",
    category: "Wood Paints & Finishes",
    featured: true,
    description: "High-bond strength PVA white carpenter's wood adhesive. Rapid setting formula engineered for structural furniture joinery, dowel joints, and edge lamination.",
    image: colaWoodGlueImg
  },

  // 7. Hinges & Sliders
  {
    id: "hinges-sliders",
    name: "Hinges & Drawer Runners",
    category: "Hinges & Sliders",
    featured: true,
    description: "Cabinet motion hardware including hydraulic soft-close concealed hinges and telescopic ball-bearing drawer runners.",
    image: hingeHydraulicImg,
    options: [
      {
        id: "hinge-hydraulic-softclose",
        name: "Concealed Hydraulic Soft-Close Hinge",
        image: hingeHydraulicImg,
        description: "Integrated silent hydraulic brass damper ensures smooth, quiet door closing every time. Features clip-on tool-free assembly and 3D cam adjustment."
      },
      {
        id: "drawer-slide-ballbearing",
        name: "Telescopic Full-Extension Ball Bearing Slides",
        image: drawerSliderImg,
        description: "Heavy-duty 45mm profile 3-fold ball-bearing runners with smooth full-extension glide. High weight capacity with quick disconnect lever."
      }
    ]
  },

  // 8. Handles & Accessories
  {
    id: "handles",
    name: "Cabinet & Door Handles",
    category: "Handles & Accessories",
    featured: true,
    description: "Complete selection of contemporary and architectural handles, door levers, edge pulls, and minimalist knobs for wardrobes and kitchens.",
    image: drawerHandlesImg,
    options: [
      {
        id: "drawer-handles-modern",
        name: "Modern Cabinet & Drawer Handles",
        image: drawerHandlesImg,
        description: "Contemporary designer cabinet handles crafted for durability, sleek grip, and elegant finish on modern wardrobe and kitchen doors."
      },
      {
        id: "lexi-door-handle",
        name: "Lexi Door Handle",
        image: lexiDoorHandleImg,
        description: "Premium architectural door and cabinet handle with smooth ergonomic contour and lasting protective surface coat."
      },
      {
        id: "silver-aluminum-handle",
        name: "Silver Aluminum Edge & Bar Handle",
        image: silverHandleImg,
        description: "Sleek anodized silver aluminum handle providing a clean, minimalist profile for modern drawers and cabinetry."
      },
      {
        id: "handles-architectural-suite",
        name: "Designer Architectural Pulls & Knobs",
        image: handlesCollectionImg,
        description: "Coordinated architectural suite of cabinet bar pulls, t-bars, and knobs in warm brushed brass, champagne, and matte bronze finishes."
      }
    ]
  },

  // 9. Furniture Accessories & Fittings
  {
    id: "furniture-accessories",
    name: "Furniture Accessories & Fittings",
    category: "Handles & Accessories",
    featured: true,
    description: "Essential cabinet fittings and workshop accessories including cabinet legs, door stoppers, lift-up openers, shelf support pins, decorative screw caps, wardrobe rails, and screws.",
    image: accessoryLatchesBracketsImg,
    options: [
      {
        id: "accessory-cabinet-legs-doorstoppers-liftup",
        name: "Cabinet Legs, Door Stoppers & Lift-Up Openers",
        image: accessoryLatchesBracketsImg,
        description: "Cabinet door stoppers, magnetic lift-up openers, push-to-open touch latches, and heavy-duty 90-degree steel angle corner braces."
      },
      {
        id: "accessory-pins-shelf-support-screw-caps",
        name: "Pins, Shelf Supports & Decorative Screw Caps",
        image: accessoryShelfPinsImg,
        description: "Clear acrylic shelf support pins with steel dowels, cabinet leg nail glides, floor protectors, and snap-on decorative screw cover caps."
      },
      {
        id: "accessory-wardrobe-rail",
        name: "Wardrobe Oval Hanging Rails & Brackets",
        image: wardrobeOvalRailImg,
        description: "Fluted aluminum wardrobe oval clothes hanging rails available in white, champagne, and gold with matching heavy-duty end flange brackets."
      },
      {
        id: "accessory-wood-screws",
        name: "Woodworking Screws & Fasteners",
        image: woodScrewsImg,
        description: "Complete workshop assortment of countersunk wood screws, drywall screws, chipboard fasteners, and furniture connecting bolts."
      }
    ]
  }
];
