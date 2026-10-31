/**
 * Solomon Building Materials — Product Categories
 */

import mdfRawBoardImg from '../assets/products/mdf-raw-board.jpg';
import edgeBindingPvcImg from '../assets/products/edge-binding-pvc.jpg';
import mainGate from '../assets/products/maingate-primery.jpg';
import hingeHydraulicImg from '../assets/products/hinge-hydraulic.jpg';
import drawerHandlesImg from '../assets/products/drawer-handles.jpg';
import midoSealerImg from '../assets/products/mido-sealer.jpg';

export const featuredCategories = [
  {
    id: "mdf-wood-boards",
    slug: "mdf-wood-boards",
    title: {
      en: "MDF & Wood Boards",
      am: "MDF & Wood Boards" // TODO: translate
    },
    description: {
      en: "Raw MDF, laminated and different thickness",
      am: "Raw MDF, laminated and different thickness" // TODO: translate
    },
    image: mdfRawBoardImg,
    badge: {
      en: "Core Boards",
      am: "Core Boards" // TODO: translate
    }
  },
  {
    id: "edge-banding",
    slug: "edge-banding",
    title: {
      en: "Edge Banding (PVC & UV)",
      am: "Edge Banding (PVC & UV)" // TODO: translate
    },
    description: {
      en: "Standard PVC edge banding and mirror high-gloss UV edge banding color-matched for decorative panels.",
      am: "Standard PVC edge banding and mirror high-gloss UV edge banding color-matched for decorative panels." // TODO: translate
    },
    image: edgeBindingPvcImg,
    badge: {
      en: "Finishing",
      am: "Finishing" // TODO: translate
    }
  },
  {
    id: "wood-paints-adhesives",
    slug: "wood-paints-adhesives",
    title: {
      en: "Wood Paints & Adhesives",
      am: "Wood Paints & Adhesives" // TODO: translate
    },
    description: {
      en: "Adhesives, Wood Glues, and Wood Paints",
      am: "Adhesives, Wood Glues, and Wood Paints" // TODO: translate
    },
    image: midoSealerImg,
    badge: {
      en: "Paints & Glue",
      am: "Paints & Glue" // TODO: translate
    }
  },
  {
    id: "hinges-sliders",
    slug: "hinges-sliders",
    title: {
      en: "Hinges & Sliders",
      am: "Hinges & Sliders" // TODO: translate
    },
    description: {
      en: "Concealed hydraulic soft-close hinges and heavy-duty telescopic ball-bearing drawer runners.",
      am: "Concealed hydraulic soft-close hinges and heavy-duty telescopic ball-bearing drawer runners." // TODO: translate
    },
    image: hingeHydraulicImg,
    badge: {
      en: "Motion Hardware",
      am: "Motion Hardware" // TODO: translate
    }
  },
  {
    id: "handles-accessories",
    slug: "handles-accessories",
    title: {
      en: "Handles & Accessories",
      am: "Handles & Accessories" // TODO: translate
    },
    description: {
      en: "Modern drawer handles, silver aluminum pulls, and cabinet accessories.",
      am: "Modern drawer handles, silver aluminum pulls, and cabinet accessories." // TODO: translate
    },
    image: drawerHandlesImg,
    badge: {
      en: "Hardware & Trim",
      am: "Hardware & Trim" // TODO: translate
    }
  },
  {
    id: "door-handle",
    slug: "door-handle",
    title: {
      en: "Main Gate & Internal Door Handles",
      am: "Main Gate & Internal Door Handles" // TODO: translate
    },
    description: {
      en: "Decorative and quality door handle for both external and internal doors.",
      am: "Decorative and quality door handle for both external and internal doors." // TODO: translate
    },
    image: mainGate,
    badge: {
      en: "Door Handle",
      am: "Door Handle" // TODO: translate
    }
  }
];

export const productCategories = [
  {
    id: "all",
    slug: "all",
    name: {
      en: "All",
      am: "All" // TODO: translate
    }
  },
  {
    id: "mdf-wood-boards",
    slug: "mdf-wood-boards",
    name: {
      en: "MDF & Wood Boards",
      am: "MDF & Wood Boards" // TODO: translate
    }
  },
  {
    id: "edge-banding",
    slug: "edge-banding",
    name: {
      en: "Edge Banding (PVC & UV)",
      am: "Edge Banding (PVC & UV)" // TODO: translate
    }
  },
  {
    id: "wood-paints-adhesives",
    slug: "wood-paints-adhesives",
    name: {
      en: "Wood Paints & Adhesives",
      am: "Wood Paints & Adhesives" // TODO: translate
    }
  },
  {
    id: "hinges-sliders",
    slug: "hinges-sliders",
    name: {
      en: "Hinges & Sliders",
      am: "Hinges & Sliders" // TODO: translate
    }
  },
  {
    id: "handles-accessories",
    slug: "handles-accessories",
    name: {
      en: "Handles & Accessories",
      am: "Handles & Accessories" // TODO: translate
    }
  },
  {
    id: "door-handle",
    slug: "door-handle",
    name: {
      en: "Main Gate & Internal Door Handles",
      am: "Main Gate & Internal Door Handles" // TODO: translate
    }
  }
];
