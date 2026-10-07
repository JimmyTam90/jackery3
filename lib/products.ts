export type Product = {
  slug: string;
  name: string;
  tagline: string;
  path: string;
  image: string;
  imageAlt: string;
  price: string;
  listPrice?: string;
  capacity: string;
  acOutput: string;
  surge: string;
  solar: string;
  lifepo4: string;
  weight: string;
  bestFor: string;
  highlights: string[];
  hero?: boolean;
};

const CDN = "https://cdn.shopify.com/s/files/1/0970/9262/files/";

/**
 * Specs and prices were read from the live Jackery.com product pages/JSON.
 * Prices change; the CTA always leads to the current price on Jackery.com.
 * "See listing" = not confirmed on the page we read; check Jackery.com.
 */
export const PRODUCTS: Product[] = [
  {
    slug: "explorer-2000-v2",
    name: "Jackery Explorer 2000 v2",
    tagline: "Balanced power for RV trips, camping and outages",
    path: "/products/jackery-explorer-2000-v2-portable-power-station",
    image: `${CDN}jackery-explorer-2000-v2-portable-power-station-6702194.webp?v=1787333660`,
    imageAlt: "Jackery Explorer 2000 v2 portable power station",
    price: "$864",
    listPrice: "$999",
    capacity: "2,042 Wh",
    acOutput: "2,200 W",
    surge: "4,400 W",
    solar: "See listing",
    lifepo4: "Yes (LiFePO4, 4,000 cycles to 70%+)",
    weight: "39.5 lbs",
    bestFor: "RV travelers, campers, WFH backup",
    highlights: ["2,200 W rated, 4,400 W surge", "LiFePO4, 4,000 cycles to 70%+", "About 39.5 lbs"],
    hero: true,
  },
  {
    slug: "explorer-5000-plus",
    name: "Jackery Explorer 5000 Plus",
    tagline: "Whole-home essentials and big appliances",
    path: "/products/jackery-explorer-5000-plus",
    image: `${CDN}jackery-explorer-5000-plus-9020015.webp?v=1786503070`,
    imageAlt: "Jackery Explorer 5000 Plus portable power station",
    price: "$2,899",
    listPrice: "$3,499",
    capacity: "5,040 Wh",
    acOutput: "7,200 W max",
    surge: "14,400 W",
    solar: "See listing",
    lifepo4: "Yes (LiFePO4, 4,000 cycles to 70%+)",
    weight: "134.5 lbs",
    bestFor: "Outage-prepared homeowners, off-grid cabins",
    highlights: ["120V/240V outputs", "7,200 W max, 14,400 W surge", "Expandable with battery packs"],
  },
  {
    slug: "homepower-3600-plus",
    name: "Jackery HomePower 3600 Plus",
    tagline: "Expandable home backup system",
    path: "/products/jackery-homepower-3600-plus",
    image: `${CDN}homepower-3600-plus-6329261.webp?v=1791194408`,
    imageAlt: "Jackery HomePower 3600 Plus portable power station",
    price: "$1,554",
    listPrice: "$1,899",
    capacity: "See listing",
    acOutput: "See listing",
    surge: "See listing",
    solar: "See listing",
    lifepo4: "See listing",
    weight: "See listing",
    bestFor: "Home backup, expandable setups",
    highlights: ["Expandable with a battery pack", "Wheels and retractable handle", "NEMA TT-30 AC output"],
  },
  {
    slug: "homepower-1000-plus-v2",
    name: "Jackery HomePower 1000 Plus v2",
    tagline: "Compact, expandable essentials backup",
    path: "/products/jackery-homepower-1000-plus-v2",
    image: `${CDN}jackery-homepower-1000-plus-v2-4771435.webp?v=1787001073`,
    imageAlt: "Jackery HomePower 1000 Plus v2 portable power station",
    price: "$669",
    listPrice: "$749",
    capacity: "1,024 Wh",
    acOutput: "1,800 W",
    surge: "3,600 W peak",
    solar: "Up to 400 W, about 3.3 h",
    lifepo4: "See listing",
    weight: "See listing",
    bestFor: "Weekend camping, WFH backup, UPS-style use",
    highlights: ["Expandable up to 11 kWh", "Under 10 ms UPS switchover", "1,600 W AC wall charging"],
  },
];

export const PANELS = {
  name: "SolarSaga Solar Panels",
  blurb:
    "Foldable, IP68-rated bifacial SolarSaga panels (including the 500 X, 200W and 100-series) pair with Jackery power stations to recharge from the sun.",
  path: "/collections/solar-panels",
  image: `${CDN}jackery-solarsaga-200w-solar-panel-8524590.webp?v=1786503248`,
  imageAlt: "Jackery SolarSaga 200W portable solar panel",
};
