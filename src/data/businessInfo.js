/**
 * Solomon Building Materials — Business Configuration
 * 
 * Official contact numbers:
 * Phone: 0991445050 / 0911210767
 * WhatsApp: 251991445050
 * Telegram: +251991445050
 */

export const businessInfo = {
  // Business Identity
  name: "Solomon Building Materials",
  shortName: "Solomon",
  tagline: "BUILDING MATERIALS",
  subtitle: "Furniture Boards, UV Panels, Edge Banding, Wood Paints & Hardware",
  description: "A trusted family-owned shop providing MDF boards, UV decorative panels, PVC and UV edge banding, wood paints, adhesives and furniture hardware and accessories.",

  // Contact Details
  phones: [
    { number: "0940094545", display: "0940 09 45 45", raw: "0940094545" },
    { number: "0911210767", display: "0911 21 07 67", raw: "0911210767" }
  ],
  phone: "0911210767",
  phoneDisplay: "0911 21 07 67",
  secondaryPhone: "0940094545",
  secondaryPhoneDisplay: "0940 09 45 47",

  // Messaging (Direct account links without template messages)
  whatsappNumber: "251911210767",
  whatsappDisplay: "+251 91 121 0767",
  getWhatsAppUrl: () => "https://wa.me/251911210767",

  telegramNumber: "251911210767",
  telegramDisplay: "+251 91 121 0767",
  getTelegramUrl: () => "https://t.me/+251911210767",

  email: "contact@solomonbuildingmaterials.com",

  // Physical Location
  address: {
    street: "Mundy St ",
    cityStateZip: "Main Showroom Row, Addis Ababa",
    city:"Adiss Abeba",
    country: "Ethiopia",
    note: "Visitors welcome. Call or message for any inquiry",
    googleMapsUrl: "https://www.google.com/maps/place/Solomon+Building+Materials/@9.027201,38.6121344,12z/data=!4m10!1m2!2m1!1ssolomon+building+materials!3m6!1s0x164b85006d93969d:0xf970781a75213a3c!8m2!3d9.027201!4d38.75633!15sChpzb2xvbW9uIGJ1aWxkaW5nIG1hdGVyaWFsc5IBGGJ1aWxkaW5nX21hdGVyaWFsc19zdG9yZeABAA!16s%2Fg%2F11z_36c2l5",
  },

  // Operating Hours
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "8:30 AM – 5:00 PM" },
    { days: "Sunday", time: "Closed" }
  ],

  hasWhatsApp: () => true,
  hasTelegram: () => true,
  hasPhone: () => true,
  hasAddress: () => true
};
