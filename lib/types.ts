export type Availability = "in_stock" | "unavailable" | "unknown";
export type AffiliateStatus = "VERIFIED" | "PLAUSIBLE" | "UNKNOWN";
export type UseCase = "camping" | "home";

export interface ProductSpecs {
  capacity: string;
  acOutput: string;
  surge: string;
  chemistry: string;
  fastCharge: string;
  weight: string;
  solarInput: string;
}

/** One entry of the PRODUCT DATA MANIFEST: the single source of truth for every UI component. */
export interface Product {
  id: string;
  name: string;
  tagline: string;
  /** Merchant path, e.g. /products/jackery-explorer-1000-v2 */
  path: string;
  /** Verified product page on the merchant site. */
  productUrl: string;
  affiliateStatus: AffiliateStatus;
  availability: Availability;
  price: string;
  priceNote: string;
  currency: "USD";
  image: string;
  imageAlt: string;
  imageSource: string;
  specs: ProductSpecs;
  useCases: UseCase[];
  bestFor: string;
  highlights: string[];
  sourcePage: string;
  lastVerified: string;
  hero?: boolean;
}
