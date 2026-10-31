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
import lexiDoorHandleImg from '../assets/products/Lexi-door-hanlde.jpg';
import mainGaitPrimary from '../assets/products/maingate-primery.jpg';
import mainGate from '../assets/products/maingate.jpg';
import internalMainGate from '../assets/products/internal-main-gate.jpg';
import Lexi2 from '../assets/products/lexi-2.jpg';
import lexi3 from '../assets/products/lexi-3.jpg';
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
    description: "Edge banding materials used to cover exposed edges of MDF and laminated boards. They give furniture a more finished appearance and help protect board edges during everyday use.",
    image: edgeBindingPvcImg,
    options: [
      {
        id: "edge-banding-pvc-standard",
        name: "Standard PVC Flexible Edge Banding",
        image: edgeBindingPvcImg,
        description: "Flexible PVC edging for covering exposed board edges. Available in different colors and patterns to match furniture boards."
      },
      {
        id: "edge-banding-uv-gloss",
        name: "UV High-Gloss Matching Edge Banding",
        image: edgeBindingUvImg,
        description: "Glossy edge banding designed to complement high-gloss decorative boards and create a consistent finish around furniture panels."
      }
    ]
  },

  // 4. Wood Paints & Finishes (Siller, Lacquer)
  {
    id: "mido-wood-finishes",
    name: "Mido Wood Paints & Finishes",
    category: "Wood Paints & Finishes",
    featured: true,
    description: "Wood finishing products for preparing and finishing furniture surfaces. Choose suitable products for surface preparation and the final appearance of your woodwork.",
    image: midoSealerImg,
    options: [
      {
        id: "mido-siller-sanding-sealer",
        name: "Mido Siller (Wood Sanding Sealer)",
        image: midoSealerImg,
        description: "A wood-finishing product used to prepare wooden surfaces before applying a topcoat. Helps seal the surface and create a smoother base for finishing."
      },
      {
        id: "mido-lacer-clear-lacquer",
        name: "Mido Lacer (Clear Wood Finish Lacquer)",
        image: midoLacquerImg,
        description: "A clear wood finish applied over prepared surfaces to give furniture a protective coating and a finished appearance. The final sheen depends on the specific product."
      }
    ]
  },

  // 5. CM Mastish
  {
    id: "cm-mastish-wood-filler",
    name: "CM Mastish (Wood Mastic & Putty Filler)",
    category: "Wood Paints & Finishes",
    featured: true,
    description: "A wood filler used to fill small holes, cracks, and surface imperfections in woodwork before sanding and finishing. Suitable for furniture repairs, cabinetry, and carpentry projects.",
    image: cmMastishImg
  },

  // 6. Cola Wood Glue
  {
    id: "cola-wood-glue-heavy-duty",
    name: "Cola (Carpenter's Heavy-Duty Wood Glue)",
    category: "Wood Paints & Finishes",
    featured: true,
    description: "An adhesive used to join wooden components during furniture making and carpentry. Suitable for common woodworking tasks such as assembling furniture parts and joining wood surfaces. Check the product label for suitable materials and application instructions.",
    image: colaWoodGlueImg
  },

  // 7. Hinges & Sliders
  {
    id: "hinges-sliders",
    name: "Hinges & Drawer Runners",
    category: "Hinges & Sliders",
    featured: true,
    description: "Furniture hardware for installing cabinet doors and building functional drawers. Choose from cabinet hinges and drawer runners for kitchen cabinets, wardrobes, storage units, and other furniture.",
    image: hingeHydraulicImg,
    options: [
      {
        id: "hinge-hydraulic-softclose",
        name: "Concealed Hydraulic Soft-Close Hinge",
        image: hingeHydraulicImg,
        description: "A concealed cabinet hinge with a soft-close mechanism, designed to help cabinet doors close more gently. Suitable for compatible cabinet doors."
      },
      {
        id: "drawer-slide-ballbearing",
        name: "Telescopic Full-Extension Ball Bearing Slides",
        image: drawerSliderImg,
        description: "Drawer runners that allow drawers to slide in and out smoothly. Full-extension models allow the drawer to open farther for easier access to its contents."
      }
    ]
  },

  // 8. Handles & Accessories
  {
    id: "handles",
    name: "Cabinet & Door Handles",
    category: "Handles & Accessories",
    featured: true,
    description: "Furniture handles and fittings for cabinets, drawers, wardrobes, and doors. Available in different designs and finishes to suit different furniture styles.",
    image: drawerHandlesImg,
    options: [
      {
        id: "drawer-handles-modern",
        name: "Modern Cabinet & Drawer Handles",
        image: drawerHandlesImg,
        description: "Handles for kitchen cabinets, wardrobes, and drawers, available in different designs and finishes."
      },
      {
        id: "silver-aluminum-handle",
        name: "Silver Aluminum Edge & Bar Handle",
        image: silverHandleImg,
        description: "A silver-finish aluminum handle for cabinets and drawers, suitable for furniture designs that use a simple, modern appearance."
      },
      {
        id: "handles-architectural-suite",
        name: "Designer Architectural Pulls & Knobs",
        image: handlesCollectionImg,
        description: "A selection of cabinet pulls and knobs in different shapes and finishes for drawers, wardrobes, and kitchen cabinets."
      }
    ]
  },
  //9. Main Gate & door handles
  {
    id: "main-gate-doors",
    name:" Main Gate and Door Handles",
    category:"Main Gate and Door Handles",
    featured:true,
    description: "Premium decorative door handle sets designed for main entrance doors and gates. Featuring long pull handles, matching knobs, and lock hardware in classic antique and metallic finishes. Ideal for wooden entrance doors, combining an elegant appearance with practical everyday use. Available in different designs and finishes, subject to stock availability.",
    image:mainGaitPrimary,
    options:[
      {
        id: "main-gate-handle",
        name: "Main Gate",
        image: mainGate,
        description: "Decorative main gate handle sets designed for entrance doors and gates. Available in classic and ornamental designs with matching pull handles, knobs, and lock components. Built for everyday use, these sets combine a distinctive appearance with practical door access and security. Suitable for residential and commercial entrances."
      },
      {
      id: "internal-main-gate",
      name:"Internal Main Gate Handle",
      image:internalMainGate,
      description: "Practical and decorative handle sets designed for interior doors in bedrooms, bathrooms, offices, and other indoor spaces. Available in different styles and finishes, including lever handles, round knobs, and matching lock components. Suitable for everyday use in residential and commercial interiors.",
      },
      {
      id: "lexi-door-handle",
      name:"Internal Main Gate Handle",
      image:lexiDoorHandleImg,
      description: "Practical and decorative handle sets designed for interior doors in bedrooms, bathrooms, offices, and other indoor spaces. Available in different styles and finishes, including lever handles, round knobs, and matching lock components. Suitable for everyday use in residential and commercial interiors.",
      },
      {
      id: "lexi-door-hanlde2",
      name:"Internal Main Gate Hanlde",
      image:Lexi2,
      description: "Practical and decorative handle sets designed for interior doors in bedrooms, bathrooms, offices, and other indoor spaces. Available in different styles and finishes, including lever handles, round knobs, and matching lock components. Suitable for everyday use in residential and commercial interiors.",
      },
      {
      id: "lexi-door-handle3",
      name:"Internal Main Gate Hanlde",
      image:lexi3,
      description: "Practical and decorative handle sets designed for interior doors in bedrooms, bathrooms, offices, and other indoor spaces. Available in different styles and finishes, including lever handles, round knobs, and matching lock components. Suitable for everyday use in residential and commercial interiors.",
      }
    ]
  },

  // 10. Furniture Accessories & Fittings
  {
    id: "furniture-accessories",
    name: "Furniture Accessories & Fittings",
    category: "Handles & Accessories",
    featured: true,
    description: "Practical fittings and hardware for assembling, installing, and finishing furniture. This category includes shelf supports, wardrobe rails, screws, cabinet fittings, and other useful accessories.",
    image: accessoryLatchesBracketsImg,
    options: [
      {
        id: "accessory-cabinet-legs-doorstoppers-liftup",
        name: "Cabinet Legs, Door Stoppers & Lift-Up Openers",
        image: accessoryShelfPinsImg ,
        description: "Furniture fittings used to support cabinets, stop doors, or assist with opening cabinet doors, depending on the selected accessory"
      },
      {
        id: "accessory-pins-shelf-support-screw-caps",
        name: "Pins, Shelf Supports & Decorative Screw Caps",
        image:accessoryLatchesBracketsImg,
        description: "Small fittings used to support shelves and cover exposed screw heads for a neater furniture finish"
      },
      {
        id: "accessory-wardrobe-rail",
        name: "Wardrobe Oval Hanging Rails & Brackets",
        image: wardrobeOvalRailImg,
        description: "Rails and matching brackets designed for hanging clothes inside wardrobes and closets"
      },
      {
        id: "accessory-wood-screws",
        name: "Woodworking Screws & Fasteners",
        image: woodScrewsImg,
        description: "Fasteners used for joining and assembling suitable wood and furniture components. Select the appropriate screw type and size for the material and application."
      }
    ]
  }
];
