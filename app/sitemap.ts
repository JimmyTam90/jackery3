import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ["", "/privacy", "/terms", "/affiliate-disclosure", "/contact"].map((p) => ({
    url: absoluteUrl(p),
    lastModified: now,
    changeFrequency: p === "" ? "weekly" : "yearly",
    priority: p === "" ? 1 : 0.3,
  }));
}
