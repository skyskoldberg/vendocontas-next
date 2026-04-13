[17:08, 13/04/2026] Launch Agency: import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vendocontas.com";

  const posts = getAllPosts();

  const postUrls = posts.map((post) => ({
    url: ${baseUrl}/blog/${post.slug},
    lastModified: new Date(),
  }));

  return [
    {
      url: ${baseUrl}/,
      lastModified: new Date(),
    },
    {
      url: ${baseUrl}/blog,
      lastModified: new Date(),
    },

    // categorias (SEO forte)
    {
      url: ${baseUrl}/categoria/instagram,
      lastModified: new Date(),
    },
    {
      url: ${baseUrl}/categoria/bms,
      lastModified: new Date(),
    },
    {
      url: ${baseUrl}/categoria/youtube,
      lastModified: new Date(…
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
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: ${baseUrl}/categoria/tiktok,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: ${baseUrl}/categoria/twitch,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: ${baseUrl}/categoria/twitter,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: ${baseUrl}/categoria/jogos,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: ${baseUrl}/blog/comprar-conta-instagram-10k-gratis,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: ${baseUrl}/blog/comprar-conta-instagram-antiga,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: ${baseUrl}/blog/comprar-conta-instagram-followers,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: ${baseUrl}/blog/comprar-canal-youtube,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: ${baseUrl}/blog/comprar-conta-x-twitter,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: ${baseUrl}/blog/comprar-conta-de-jogos,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}