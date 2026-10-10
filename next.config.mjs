/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/jackery",
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.shopify.com", pathname: "/s/files/1/0970/9262/files/**" },
      { protocol: "https", hostname: "www.jackery.com", pathname: "/cdn/shop/**" },
    ],
  },
};
export default nextConfig;
