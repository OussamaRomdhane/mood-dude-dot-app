import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mooddude.app";

  return [
    {
      url: baseUrl,
      lastModified: "2024-12-06",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: "2024-12-06",
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
