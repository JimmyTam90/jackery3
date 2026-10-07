export const SITE = {
  name: "PrimeGearLab",
  domain: "primegearlab.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://primegearlab.com",
  email: "daniaengracia26377@gmail.com",
  merchantName: "Jackery",
  merchantOrigin: "https://www.jackery.com",
  locale: "en_US",
  title: "Jackery Portable Power Stations & Solar Generators | PrimeGearLab",
  description:
    "Compare Jackery portable power stations and SolarSaga solar panels for camping, RV trips, home backup and remote work. Independent affiliate guide with specs and current prices on Jackery.com.",
  footerLine:
    "© 2026 PrimeGearLab. All rights reserved. Managed & Operated in partnership with authorized media agency partners.",
  commissionDisclaimer:
    "We may receive a commission if you make a purchase through links on this page at no extra cost to you.",
} as const;

export const NAV = [
  { href: "#picks", label: "Top Picks" },
  { href: "#compare", label: "Compare" },
  { href: "#why", label: "Why Jackery" },
  { href: "#faq", label: "FAQ" },
] as const;

export const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/contact", label: "Contact Us" },
] as const;
