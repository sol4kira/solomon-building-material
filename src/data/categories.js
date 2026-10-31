/**
 * Solomon Building Materials — Product Categories
 */

import mdfRawBoardImg from '../assets/products/mdf-raw-board.jpg';
import edgeBindingPvcImg from '../assets/products/edge-binding-pvc.jpg';
import mainGate from '../assets/products/maingate-primery.jpg';
import hingeHydraulicImg from '../assets/products/hinge-hydraulic.jpg';
import drawerHandlesImg from '../assets/products/drawer-handles.jpg';
import midoSealerImg from '../assets/products/mido-sealer.jpg'

export const featuredCategories = [
  {
    id: "mdf-wood-boards",
    title: "MDF & Wood Boards",
    slug: "mdf-wood-boards",
    targetFilter: "MDF & Wood Boards",
    description: "Raw MDF, moisture-resistant (MR Green) boards, and commercial plywood sheets ready for fine carpentry.",
    image: mdfRawBoardImg,
    badge: "Core Boards"
  },
  {
    id: "edge-banding",
    title: "Edge Banding (PVC & UV)",
    slug: "edge-banding",
    targetFilter: "Edge Banding (PVC & UV)",
    description: "Standard PVC edge banding and mirror high-gloss UV edge banding color-matched for decorative panels.",
    image: edgeBindingPvcImg,
    badge: "Finishing"
  },
  {
    id: "wood-paints-adhesives",
    title: "Wood Paints, Siller & Cola",
    slug: "wood-paints-adhesives",
    targetFilter: "Wood Paints & Finishes",
    description: "Mido sanding sealer (siller), clear lacquer topcoats, CM Mastish wood filler putty, and strong Cola wood glue.",
    image: midoSealerImg,
    badge: "Paints & Glue"
  },
  {
    id: "hinges-sliders",
    title: "Hinges & Sliders",
    slug: "hinges-sliders",
    targetFilter: "Hinges & Sliders",
    description: "Concealed hydraulic soft-close hinges and heavy-duty telescopic ball-bearing drawer runners.",
    image: hingeHydraulicImg,
    badge: "Motion Hardware"
  },
  {
    id: "handles-accessories",
    title: "Handles & Accessories",
    slug: "handles-accessories",
    targetFilter: "Handles & Accessories",
    description: "Modern drawer handles, Lexi door handles, silver aluminum pulls, and cabinet accessories.",
    image: drawerHandlesImg,
    badge: "Hardware & Trim"
  },
  {
    id: "door-handle",
    title: "Main Gate & Internal Door Handle",
    slug: "door-handle",
    targetFilter: "Main Gate & Internal Door Handles",
    description: "Decorative and quality door handle for both external and internal doors.",
    image: mainGate,
    badge: "Door Handle"
  },
];

export const productCategories = [
  "All",
  "MDF & Wood Boards",
  "Edge Banding (PVC & UV)",
  "Wood Paints & Finishes",
  "Hinges & Sliders",
  "Handles & Accessories",
  "Main Gate & Internal Door Handle"
];
