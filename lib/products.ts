import type { Product } from "./types";

const CDN = "https://cdn.shopify.com/s/files/1/0970/9262/files/";
const MERCHANT = "https://www.jackery.com";
const VERIFIED_ON = "2026-10-09";

/**
 * PRODUCT DATA MANIFEST. Facts were read from Jackery.com product pages / product JSON on 2026-10-09.
 * "See listing" = not confirmed on the page we read; check the product page on Jackery.com.
 * Prices and stock change; every CTA opens the live product page.
 */
export const PRODUCTS: Product[] = [
  {
    id: "explorer-1000-v2",
    name: "Jackery Explorer 1000 v2",
    tagline: "Compact LiFePO4 power for camping, vanlife and outages",
    path: "/products/jackery-explorer-1000-v2",
    productUrl: `${MERCHANT}/products/jackery-explorer-1000-v2`,
    affiliateStatus: "VERIFIED",
    availability: "in_stock",
    price: "$589",
    priceNote: "Starting price on Jackery.com at time of writing",
    currency: "USD",
    image: `${CDN}E1000_v2.webp?v=1788767551`,
    imageAlt: "Jackery Explorer 1000 v2 portable power station",
    imageSource: "Jackery.com product JSON (featured_image)",
    specs: {
      capacity: "1,070 Wh",
      acOutput: "1,500 W",
      surge: "3,000 W",
      chemistry: "LiFePO4 (4,000 cycles to 70%+)",
      fastCharge: "1.58 h (AC adapter)",
      weight: "23.8 lbs",
      solarInput: "400 W max DC input",
    },
    useCases: ["camping", "home"],
    bestFor: "Campers, vanlife, short outages",
    highlights: [
      "ChargeShield 2.0 protection (per Jackery)",
      "Listed at 30 dB noise level",
      "7.5 h solar charge with one SolarSaga 200W",
    ],
    sourcePage: `${MERCHANT}/products/jackery-explorer-1000-v2`,
    lastVerified: VERIFIED_ON,
    hero: true,
  },
  {
    id: "solar-generator-1000-v2",
    name: "Jackery Solar Generator 1000 v2",
    tagline: "Explorer 1000 v2 bundled with a SolarSaga 200W panel",
    path: "/products/jackery-solar-generator-1000-v2",
    productUrl: `${MERCHANT}/products/jackery-solar-generator-1000-v2`,
    affiliateStatus: "VERIFIED",
    availability: "in_stock",
    price: "$879",
    priceNote: "Black + SolarSaga 200W bundle at time of writing; power station alone from $559",
    currency: "USD",
    image: `${CDN}E1000_v2_SolarSaga_200W.webp?v=1788767551`,
    imageAlt: "Jackery Solar Generator 1000 v2 with SolarSaga 200W solar panel",
    imageSource: "Jackery.com product JSON (featured_image)",
    specs: {
      capacity: "1,070 Wh",
      acOutput: "1,500 W",
      surge: "3,000 W",
      chemistry: "LiFePO4 (4,000 cycles to 70%+)",
      fastCharge: "1.58 h (AC adapter)",
      weight: "23.8 lbs (station only)",
      solarInput: "400 W max DC input",
    },
    useCases: ["camping", "home"],
    bestFor: "Off-grid trips and solar recharging",
    highlights: [
      "Includes one SolarSaga 200W (14.3 lbs)",
      "7.5 h solar charge with the 200W panel",
      "Two-unit bundle also listed on the page",
    ],
    sourcePage: `${MERCHANT}/products/jackery-solar-generator-1000-v2`,
    lastVerified: VERIFIED_ON,
  },
  {
    id: "explorer-2000-v2",
    name: "Jackery Explorer 2000 v2",
    tagline: "Balanced power for RV trips and home essentials",
    path: "/products/jackery-explorer-2000-v2-portable-power-station",
    productUrl: `${MERCHANT}/products/jackery-explorer-2000-v2-portable-power-station`,
    affiliateStatus: "VERIFIED",
    availability: "in_stock",
    price: "$999",
    priceNote: "Power station only, at time of writing",
    currency: "USD",
    image: `${CDN}jackery-explorer-2000-v2-portable-power-station-6702194.webp?v=1787333660`,
    imageAlt: "Jackery Explorer 2000 v2 portable power station",
    imageSource: "Jackery.com product JSON (featured_image)",
    specs: {
      capacity: "2,042 Wh",
      acOutput: "2,200 W",
      surge: "4,400 W",
      chemistry: "LiFePO4 (4,000 cycles to 70%+)",
      fastCharge: "See listing",
      weight: "39.5 lbs",
      solarInput: "See listing",
    },
    useCases: ["camping", "home"],
    bestFor: "RV travelers, work-from-home backup",
    highlights: ["2,200 W rated, 4,400 W surge", "3 AC outlets", "Kit options with SolarSaga panels"],
    sourcePage: `${MERCHANT}/products/jackery-explorer-2000-v2-portable-power-station`,
    lastVerified: VERIFIED_ON,
  },
  {
    id: "explorer-5000-plus",
    name: "Jackery Explorer 5000 Plus",
    tagline: "Big-appliance and home backup power",
    path: "/products/jackery-explorer-5000-plus",
    productUrl: `${MERCHANT}/products/jackery-explorer-5000-plus`,
    affiliateStatus: "VERIFIED",
    availability: "in_stock",
    price: "$3,499",
    priceNote: "Power station only, at time of writing",
    currency: "USD",
    image: `${CDN}jackery-explorer-5000-plus-9020015.webp?v=1786503070`,
    imageAlt: "Jackery Explorer 5000 Plus portable power station",
    imageSource: "Jackery.com product JSON (featured_image)",
    specs: {
      capacity: "5,040 Wh",
      acOutput: "7,200 W max",
      surge: "14,400 W",
      chemistry: "LiFePO4 (4,000 cycles to 70%+)",
      fastCharge: "See listing",
      weight: "134.5 lbs",
      solarInput: "See listing",
    },
    useCases: ["home"],
    bestFor: "Outage-prepared homeowners, cabins",
    highlights: ["120V/240V outputs", "7,200 W max, 14,400 W surge", "Kits with transfer switch listed"],
    sourcePage: `${MERCHANT}/products/jackery-explorer-5000-plus`,
    lastVerified: VERIFIED_ON,
  },
];

/** Products checked and rejected by the availability / purchasability gate. */
export const REJECTED = [
  { name: "Explorer 300 Plus / 300 v2", reason: "Page showed Sold Out when checked on 2026-10-09." },
  { name: "Explorer 2000 Plus", reason: "No standalone new unit listed; only refurbished kits and a battery pack." },
] as const;

export const PANELS = {
  name: "SolarSaga Solar Panels",
  blurb:
    "Foldable, IP68-rated bifacial SolarSaga panels (including the 500 X, 200W and 100-series) pair with Jackery power stations to recharge from the sun.",
  path: "/collections/solar-panels",
  image: `${CDN}jackery-solarsaga-200w-solar-panel-8524590.webp?v=1786503248`,
  imageAlt: "Jackery SolarSaga 200W portable solar panel",
};
