import type { MetadataRoute } from "next";
import { projects, siteUpdatedAt, siteUrl } from "@/data/site";

// Fixed dates (not `new Date()`) keep this route static, so it is prerendered at
// build time and search engines only see a change when the content really changed.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified: project.updatedAt,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
