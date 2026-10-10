import { SITE } from "./site";

/** Operator-confirmed: product deep links accept the affiliate parameters below. */
export const DEEP_LINKS_VERIFIED = true;

/** Provided default affiliate URL (fallback for any CTA). */
export const DEFAULT_AFFILIATE_URL =
  "https://www.jackery.com?utm_source=affiliatly&utm_medium=affiliate&utm_campaign=affiliatelyus&aff=3185";

const AFFILIATE_PARAMS = (() => {
  const u = new URL(DEFAULT_AFFILIATE_URL);
  const out: Record<string, string> = {};
  u.searchParams.forEach((v, k) => {
    out[k] = v;
  });
  return out;
})();

/**
 * Build an affiliate deep link on the merchant origin, preserving the
 * provided affiliate parameters. Falls back to the default affiliate URL.
 * `path` must be a merchant path such as "/products/jackery-explorer-5000-plus".
 */
export function affiliateUrl(path?: string, content?: string): string {
  if (!DEEP_LINKS_VERIFIED || !path || !path.startsWith("/")) return DEFAULT_AFFILIATE_URL;
  try {
    const u = new URL(path, SITE.merchantOrigin);
    for (const [k, v] of Object.entries(AFFILIATE_PARAMS)) u.searchParams.set(k, v);
    if (content) u.searchParams.set("utm_content", content);
    return u.toString();
  } catch {
    return DEFAULT_AFFILIATE_URL;
  }
}
