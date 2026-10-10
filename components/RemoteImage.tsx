"use client";

import Image, { type ImageLoaderProps, type ImageProps } from "next/image";

/**
 * Loads Shopify-hosted merchant images straight from the CDN (it resizes via ?width=),
 * bypassing the /_next/image optimizer. The optimizer endpoint breaks when the site is
 * served under a basePath behind a Vercel rewrite, which left the images blank.
 */
function shopifyLoader({ src, width }: ImageLoaderProps): string {
  const sep = src.includes("?") ? "&" : "?";
  return `${src}${sep}width=${width}`;
}

export default function RemoteImage(props: Omit<ImageProps, "loader" | "unoptimized">) {
  // eslint-disable-next-line jsx-a11y/alt-text -- alt is passed through props by callers
  return <Image {...props} loader={shopifyLoader} />;
}
