import type { MetadataRoute } from "next";
import { NAV, SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV.map((item) => ({
    url: `${SITE.url}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
