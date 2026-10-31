/**
 * Solomon Building Materials — Product Catalog Data
 * 
 * Uses real product photography from Solomon Building Materials.
 * Products sharing common names/families are grouped with selectable options.
 * Bilingual content structure: { en: "...", am: "..." }
 */

import mdfRawBoardImg from '../assets/products/mdf-raw-board.jpg';
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
    categoryId: "mdf-wood-boards",
    name: {
      en: "MDF Boards",
      am: "MDF Boards" // TODO: translate
    },
    featured: true,
    description: {
      en: "High-density raw and moisture-resistant engineered fiberboards. Smooth, stable, and ready for precision cutting, joinery, and painting.",
      am: "High-density raw and moisture-resistant engineered fiberboards. Smooth, stable, and ready for precision cutting, joinery, and painting." // TODO: translate
    },
    image: mdfRawBoardImg,
    options: [
      {
        id: "mdf-raw-standard",
        name: {
          en: "Standard Raw MDF Board",
          am: "Standard Raw MDF Board" // TODO: translate
        },
        image: mdfRawBoardImg,
        description: {
          en: "High-density raw medium-density fiberboard with a smooth sanded surface. Perfect for CNC cutting, custom carpentry, shelving, and painted furniture projects.",
          am: "High-density raw medium-density fiberboard with a smooth sanded surface. Perfect for CNC cutting, custom carpentry, shelving, and painted furniture projects." // TODO: translate
        }
      }
    ]
  },

  // 2. UV Boards
  {
    id: "uv-boards",
    categoryId: "mdf-wood-boards",
    name: {
      en: "UV Decorative Boards",
      am: "UV Decorative Boards" // TODO: translate
    },
    featured: true,
    description: {
      en: "Ultra-violet cured high-gloss decorative panels for modern luxury kitchens, wardrobes, and accent wall features.",
      am: "Ultra-violet cured high-gloss decorative panels for modern luxury kitchens, wardrobes, and accent wall features." // TODO: translate
    },
    image: uvMarbleBoardImg,
    options: [
      {
        id: "uv-board-calacatta-marble",
        name: {
          en: "White Marble High-Gloss UV Board",
          am: "White Marble High-Gloss UV Board" // TODO: translate
        },
        image: uvMarbleBoardImg,
        description: {
          en: "High-definition Italian marble decorative panel sealed under multiple coats of ultraviolet-cured clear lacquer. Offers exceptional mirror reflection, scratch resistance, and modern luxury.",
          am: "High-definition Italian marble decorative panel sealed under multiple coats of ultraviolet-cured clear lacquer. Offers exceptional mirror reflection, scratch resistance, and modern luxury." // TODO: translate
        }
      },
      {
        id: "uv-board-smoked-woodgrain",
        name: {
          en: "Gloss Woodgrain UV Decorative Board",
          am: "Gloss Woodgrain UV Decorative Board" // TODO: translate
        },
        image: uvMarbleBoardImg,
        description: {
          en: "Combines warm natural wood grain textures with a crystal-clear UV protective shield for high-end showroom cabinets, reception counters, and feature walls.",
          am: "Combines warm natural wood grain textures with a crystal-clear UV protective shield for high-end showroom cabinets, reception counters, and feature walls." // TODO: translate
        }
      }
    ]
  },

  // 3. Edge Banding (PVC & UV)
  {
    id: "edge-banding",
    categoryId: "edge-banding",
    name: {
      en: "Edge Banding (PVC & UV)",
      am: "Edge Banding (PVC & UV)" // TODO: translate
    },
    featured: true,
    description: {
      en: "Edge banding materials used to cover exposed edges of MDF and laminated boards. They give furniture a more finished appearance and help protect board edges during everyday use.",
      am: "Edge banding materials used to cover exposed edges of MDF and laminated boards. They give furniture a more finished appearance and help protect board edges during everyday use." // TODO: translate
    },
    image: edgeBindingPvcImg,
    options: [
      {
        id: "edge-banding-pvc-standard",
        name: {
          en: "Standard PVC Flexible Edge Banding",
          am: "Standard PVC Flexible Edge Banding" // TODO: translate
        },
        image: edgeBindingPvcImg,
        description: {
          en: "Flexible PVC edging for covering exposed board edges. Available in different colors and patterns to match furniture boards.",
          am: "Flexible PVC edging for covering exposed board edges. Available in different colors and patterns to match furniture boards." // TODO: translate
        }
      },
      {
        id: "edge-banding-uv-gloss",
        name: {
          en: "UV High-Gloss Matching Edge Banding",
          am: "UV High-Gloss Matching Edge Banding" // TODO: translate
        },
        image: edgeBindingUvImg,
        description: {
          en: "Glossy edge banding designed to complement high-gloss decorative boards and create a consistent finish around furniture panels.",
          am: "Glossy edge banding designed to complement high-gloss decorative boards and create a consistent finish around furniture panels." // TODO: translate
        }
      }
    ]
  },

  // 4. Wood Paints & Finishes (Siller, Lacquer)
  {
    id: "wood-finishes",
    categoryId: "wood-paints-adhesives",
    name: {
      en: "Wood Paints & Adhesives",
      am: "Wood Paints & Adhesives" // TODO: translate
    },
    featured: true,
    description: {
      en: "Wood finishing products for preparing and finishing furniture surfaces. Choose suitable products for surface preparation and the final appearance of your woodwork.",
      am: "Wood finishing products for preparing and finishing furniture surfaces. Choose suitable products for surface preparation and the final appearance of your woodwork." // TODO: translate
    },
    image: midoSealerImg,
    options: [
      {
        id: "mido-siller-sanding-sealer",
        name: {
          en: "Mido Siller (Wood Sanding Sealer)",
          am: "Mido Siller (Wood Sanding Sealer)" // TODO: translate
        },
        image: midoSealerImg,
        description: {
          en: "A wood-finishing product used to prepare wooden surfaces before applying a topcoat. Helps seal the surface and create a smoother base for finishing.",
          am: "A wood-finishing product used to prepare wooden surfaces before applying a topcoat. Helps seal the surface and create a smoother base for finishing." // TODO: translate
        }
      },
      {
        id: "mido-lacer-clear-lacquer",
        name: {
          en: "Mido Lacer (Clear Wood Finish Lacquer)",
          am: "Mido Lacer (Clear Wood Finish Lacquer)" // TODO: translate
        },
        image: midoLacquerImg,
        description: {
          en: "A clear wood finish applied over prepared surfaces to give furniture a protective coating and a finished appearance. The final sheen depends on the specific product.",
          am: "A clear wood finish applied over prepared surfaces to give furniture a protective coating and a finished appearance. The final sheen depends on the specific product." // TODO: translate
        }
      }
    ]
  },

  // 5. CM Mastish
  {
    id: "adhesive",
    categoryId: "wood-paints-adhesives",
    name: {
      en: "General purpose Adhesive",
      am: "General purpose Adhesive" // TODO: translate
    },
    featured: true,
    description: {
      en: "general purpose adhesive, binding edge binding perfectly to the boards, and other binding usage",
      am: "general purpose adhesive, binding edge binding perfectly to the boards, and other binding usage" // TODO: translate
    },
    image: cmMastishImg
  },

  // 6. Cola Wood Glue
  {
    id: "wood-glue",
    categoryId: "wood-paints-adhesives",
    name: {
      en: "Heavy-Duty Wood Glue",
      am: "Heavy-Duty Wood Glue" // TODO: translate
    },
    featured: true,
    description: {
      en: "An adhesive used to join wooden components during furniture making and carpentry. Suitable for common woodworking tasks such as assembling furniture parts and joining wood surfaces. Check the product label for suitable materials and application instructions.",
      am: "An adhesive used to join wooden components during furniture making and carpentry. Suitable for common woodworking tasks such as assembling furniture parts and joining wood surfaces. Check the product label for suitable materials and application instructions." // TODO: translate
    },
    image: colaWoodGlueImg
  },

  // 7. Hinges & Sliders
  {
    id: "hinges-sliders",
    categoryId: "hinges-sliders",
    name: {
      en: "Hinges & Drawer Runners",
      am: "Hinges & Drawer Runners" // TODO: translate
    },
    featured: true,
    description: {
      en: "Furniture hardware for installing cabinet doors and building functional drawers. Choose from cabinet hinges and drawer runners for kitchen cabinets, wardrobes, storage units, and other furniture.",
      am: "Furniture hardware for installing cabinet doors and building functional drawers. Choose from cabinet hinges and drawer runners for kitchen cabinets, wardrobes, storage units, and other furniture." // TODO: translate
    },
    image: hingeHydraulicImg,
    options: [
      {
        id: "hinge-hydraulic-softclose",
        name: {
          en: "Concealed Hydraulic Soft-Close Hinge",
          am: "Concealed Hydraulic Soft-Close Hinge" // TODO: translate
        },
        image: hingeHydraulicImg,
        description: {
          en: "A concealed cabinet hinge with a soft-close mechanism, designed to help cabinet doors close more gently. Suitable for compatible cabinet doors.",
          am: "A concealed cabinet hinge with a soft-close mechanism, designed to help cabinet doors close more gently. Suitable for compatible cabinet doors." // TODO: translate
        }
      },
      {
        id: "drawer-slide-ballbearing",
        name: {
          en: "Telescopic Full-Extension Ball Bearing Slides",
          am: "Telescopic Full-Extension Ball Bearing Slides" // TODO: translate
        },
        image: drawerSliderImg,
        description: {
          en: "Drawer runners that allow drawers to slide in and out smoothly. Full-extension models allow the drawer to open farther for easier access to its contents.",
          am: "Drawer runners that allow drawers to slide in and out smoothly. Full-extension models allow the drawer to open farther for easier access to its contents." // TODO: translate
        }
      }
    ]
  },

  // 8. Handles & Accessories
  {
    id: "handles",
    categoryId: "handles-accessories",
    name: {
      en: "Cabinet & Door Handles",
      am: "Cabinet & Door Handles" // TODO: translate
    },
    featured: true,
    description: {
      en: "Furniture handles and fittings for cabinets, drawers, wardrobes, and doors. Available in different designs and finishes to suit different furniture styles.",
      am: "Furniture handles and fittings for cabinets, drawers, wardrobes, and doors. Available in different designs and finishes to suit different furniture styles." // TODO: translate
    },
    image: drawerHandlesImg,
    options: [
      {
        id: "drawer-handles-modern",
        name: {
          en: "Modern Cabinet & Drawer Handles",
          am: "Modern Cabinet & Drawer Handles" // TODO: translate
        },
        image: drawerHandlesImg,
        description: {
          en: "Handles for kitchen cabinets, wardrobes, and drawers, available in different designs and finishes.",
          am: "Handles for kitchen cabinets, wardrobes, and drawers, available in different designs and finishes." // TODO: translate
        }
      },
      {
        id: "silver-aluminum-handle",
        name: {
          en: "Silver Aluminum Edge & Bar Handle",
          am: "Silver Aluminum Edge & Bar Handle" // TODO: translate
        },
        image: silverHandleImg,
        description: {
          en: "A silver-finish aluminum handle for cabinets and drawers, suitable for furniture designs that use a simple, modern appearance.",
          am: "A silver-finish aluminum handle for cabinets and drawers, suitable for furniture designs that use a simple, modern appearance." // TODO: translate
        }
      },
      {
        id: "handles-architectural-suite",
        name: {
          en: "Designer Architectural Pulls & Knobs",
          am: "Designer Architectural Pulls & Knobs" // TODO: translate
        },
        image: handlesCollectionImg,
        description: {
          en: "A selection of cabinet pulls and knobs in different shapes and finishes for drawers, wardrobes, and kitchen cabinets.",
          am: "A selection of cabinet pulls and knobs in different shapes and finishes for drawers, wardrobes, and kitchen cabinets." // TODO: translate
        }
      }
    ]
  },

  // 9. Main Gate & Internal Door Handles
  {
    id: "main-gate-doors",
    categoryId: "door-handle",
    name: {
      en: "Main Gate and Door Handles",
      am: "Main Gate and Door Handles" // TODO: translate
    },
    featured: true,
    description: {
      en: "Premium decorative door handle sets designed for main entrance doors and gates. Featuring long pull handles, matching knobs, and lock hardware in classic antique and metallic finishes. Ideal for wooden entrance doors, combining an elegant appearance with practical everyday use. Available in different designs and finishes, subject to stock availability.",
      am: "Premium decorative door handle sets designed for main entrance doors and gates. Featuring long pull handles, matching knobs, and lock hardware in classic antique and metallic finishes. Ideal for wooden entrance doors, combining an elegant appearance with practical everyday use. Available in different designs and finishes, subject to stock availability." // TODO: translate
    },
    image: mainGaitPrimary,
    options: [
      {
        id: "main-gate-handle",
        name: {
          en: "Main Gate",
          am: "Main Gate" // TODO: translate
        },
        image: mainGate,
        description: {
          en: "Decorative main gate handle sets designed for entrance doors and gates. Available in classic and ornamental designs with matching pull handles, knobs, and lock components. Built for everyday use, these sets combine a distinctive appearance with practical door access and security. Suitable for residential and commercial entrances.",
          am: "Decorative main gate handle sets designed for entrance doors and gates. Available in classic and ornamental designs with matching pull handles, knobs, and lock components. Built for everyday use, these sets combine a distinctive appearance with practical door access and security. Suitable for residential and commercial entrances." // TODO: translate
        }
      },
      {
        id: "internal-main-gate",
        name: {
          en: "Internal Main Gate Handle",
          am: "Internal Main Gate Handle" // TODO: translate
        },
        image: internalMainGate,
        description: {
          en: "Practical and decorative handle sets designed for interior doors in bedrooms, bathrooms, offices, and other indoor spaces. Available in different styles and finishes, including lever handles, round knobs, and matching lock components. Suitable for everyday use in residential and commercial interiors.",
          am: "Practical and decorative handle sets designed for interior doors in bedrooms, bathrooms, offices, and other indoor spaces. Available in different styles and finishes, including lever handles, round knobs, and matching lock components. Suitable for everyday use in residential and commercial interiors." // TODO: translate
        }
      },
      {
        id: "lexi-door-handle",
        name: {
          en: "Internal Main Gate Handle",
          am: "Internal Main Gate Handle" // TODO: translate
        },
        image: lexiDoorHandleImg,
        description: {
          en: "Practical and decorative handle sets designed for interior doors in bedrooms, bathrooms, offices, and other indoor spaces. Available in different styles and finishes, including lever handles, round knobs, and matching lock components. Suitable for everyday use in residential and commercial interiors.",
          am: "Practical and decorative handle sets designed for interior doors in bedrooms, bathrooms, offices, and other indoor spaces. Available in different styles and finishes, including lever handles, round knobs, and matching lock components. Suitable for everyday use in residential and commercial interiors." // TODO: translate
        }
      },
      {
        id: "lexi-door-hanlde2",
        name: {
          en: "Internal Main Gate Hanlde",
          am: "Internal Main Gate Hanlde" // TODO: translate
        },
        image: Lexi2,
        description: {
          en: "Practical and decorative handle sets designed for interior doors in bedrooms, bathrooms, offices, and other indoor spaces. Available in different styles and finishes, including lever handles, round knobs, and matching lock components. Suitable for everyday use in residential and commercial interiors.",
          am: "Practical and decorative handle sets designed for interior doors in bedrooms, bathrooms, offices, and other indoor spaces. Available in different styles and finishes, including lever handles, round knobs, and matching lock components. Suitable for everyday use in residential and commercial interiors." // TODO: translate
        }
      },
      {
        id: "lexi-door-handle3",
        name: {
          en: "Internal Main Gate Hanlde",
          am: "Internal Main Gate Hanlde" // TODO: translate
        },
        image: lexi3,
        description: {
          en: "Practical and decorative handle sets designed for interior doors in bedrooms, bathrooms, offices, and other indoor spaces. Available in different styles and finishes, including lever handles, round knobs, and matching lock components. Suitable for everyday use in residential and commercial interiors.",
          am: "Practical and decorative handle sets designed for interior doors in bedrooms, bathrooms, offices, and other indoor spaces. Available in different styles and finishes, including lever handles, round knobs, and matching lock components. Suitable for everyday use in residential and commercial interiors." // TODO: translate
        }
      }
    ]
  },

  // 10. Furniture Accessories & Fittings
  {
    id: "furniture-accessories",
    categoryId: "handles-accessories",
    name: {
      en: "Furniture Accessories & Fittings",
      am: "Furniture Accessories & Fittings" // TODO: translate
    },
    featured: true,
    description: {
      en: "Practical fittings and hardware for assembling, installing, and finishing furniture. This category includes shelf supports, wardrobe rails, screws, cabinet fittings, and other useful accessories.",
      am: "Practical fittings and hardware for assembling, installing, and finishing furniture. This category includes shelf supports, wardrobe rails, screws, cabinet fittings, and other useful accessories." // TODO: translate
    },
    image: accessoryLatchesBracketsImg,
    options: [
      {
        id: "accessory-cabinet-legs-doorstoppers-liftup",
        name: {
          en: "Cabinet Legs, Door Stoppers & Lift-Up Openers",
          am: "Cabinet Legs, Door Stoppers & Lift-Up Openers" // TODO: translate
        },
        image: accessoryShelfPinsImg,
        description: {
          en: "Furniture fittings used to support cabinets, stop doors, or assist with opening cabinet doors, depending on the selected accessory",
          am: "Furniture fittings used to support cabinets, stop doors, or assist with opening cabinet doors, depending on the selected accessory" // TODO: translate
        }
      },
      {
        id: "accessory-pins-shelf-support-screw-caps",
        name: {
          en: "Pins, Shelf Supports & Decorative Screw Caps",
          am: "Pins, Shelf Supports & Decorative Screw Caps" // TODO: translate
        },
        image: accessoryLatchesBracketsImg,
        description: {
          en: "Small fittings used to support shelves and cover exposed screw heads for a neater furniture finish",
          am: "Small fittings used to support shelves and cover exposed screw heads for a neater furniture finish" // TODO: translate
        }
      },
      {
        id: "accessory-wardrobe-rail",
        name: {
          en: "Wardrobe Oval Hanging Rails & Brackets",
          am: "Wardrobe Oval Hanging Rails & Brackets" // TODO: translate
        },
        image: wardrobeOvalRailImg,
        description: {
          en: "Rails and matching brackets designed for hanging clothes inside wardrobes and closets",
          am: "Rails and matching brackets designed for hanging clothes inside wardrobes and closets" // TODO: translate
        }
      },
      {
        id: "accessory-wood-screws",
        name: {
          en: "Woodworking Screws & Fasteners",
          am: "Woodworking Screws & Fasteners" // TODO: translate
        },
        image: woodScrewsImg,
        description: {
          en: "Fasteners used for joining and assembling suitable wood and furniture components. Select the appropriate screw type and size for the material and application.",
          am: "Fasteners used for joining and assembling suitable wood and furniture components. Select the appropriate screw type and size for the material and application." // TODO: translate
        }
      }
    ]
  }
];
