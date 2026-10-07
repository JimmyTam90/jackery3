type Win = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
};

/** Fire click events only when a configured tracker is present. No-op otherwise. */
export function trackCtaClick(label: string, location: string): void {
  if (typeof window === "undefined") return;
  const w = window as Win;
  try {
    if (typeof w.gtag === "function") {
      w.gtag("event", "affiliate_click", { event_category: "cta", event_label: label, cta_location: location });
    }
    if (typeof w.fbq === "function") {
      w.fbq("trackCustom", "AffiliateClick", { label, location });
    }
  } catch {
    /* tracking must never block navigation */
  }
}

export const TRACKING = {
  ga4: process.env.NEXT_PUBLIC_GA4_ID || "",
  googleAds: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  metaPixel: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
};
