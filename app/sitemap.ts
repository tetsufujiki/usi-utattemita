import type { MetadataRoute } from "next";

const siteUrl = "https://utattemita.united-studio.com/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-08-31T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
