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
  description: "A trusted family-owned shop providing MDF boards, UV decorative panels, PVC and UV edge banding, wood paints (siller, lacquer, cola, mastish), and furniture hardware.",

  // Contact Details
  phones: [
    { number: "0991445050", display: "0991 44 50 50", raw: "0991445050" },
    { number: "0911210767", display: "0911 21 07 67", raw: "0911210767" }
  ],
  phone: "0991445050",
  phoneDisplay: "0991 44 50 50",
  secondaryPhone: "0911210767",
  secondaryPhoneDisplay: "0911 21 07 67",

  // Messaging (Direct account links without template messages)
  whatsappNumber: "251991445050",
  whatsappDisplay: "+251 99 144 5050",
  getWhatsAppUrl: () => "https://wa.me/251991445050",

  telegramNumber: "251991445050",
  telegramDisplay: "+251 99 144 5050",
  getTelegramUrl: () => "https://t.me/+251991445050",

  email: "contact@solomonbuildingmaterials.com",

  // Physical Location
  address: {
    street: "Building Materials Commercial Zone",
    cityStateZip: "Main Showroom Row, Addis Ababa",
    country: "Ethiopia",
    note: "Visitors welcome. Call or message us before visiting to confirm stock availability.",
    googleMapsUrl: "https://maps.google.com/?q=Solomon+Building+Materials+Addis+Ababa",
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
