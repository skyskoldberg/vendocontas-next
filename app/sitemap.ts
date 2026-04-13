[17:13, 13/04/2026] Launch Agency: import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vendocontas.com";
  const now = new Date();

  return [
    {
      url: ${baseUrl}/,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: ${baseUrl}/blog,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: ${baseUrl}/categoria/instagram,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: ${baseUrl}/categoria/bms,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: ${baseUrl}/categoria/youtube,
      lastModified: now,
      change…
[17:20, 13/04/2026] Launch Agency: import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://vendocontas.com",
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://vendocontas.com/blog",
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },

    // CATEGORIAS
    {
      url: "https://vendocontas.com/categoria/instagram",
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: "https://vendocontas.com/categoria/bms",
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://vendocontas.com/categoria/youtube",
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://vendocontas.com/categoria/tiktok",
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://vendocontas.com/categoria/twitch",
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: "https://vendocontas.com/categoria/twitter",
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://vendocontas.com/categoria/jogos",
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },
  ];
}