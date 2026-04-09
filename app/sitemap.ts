import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vendocontas.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: ${baseUrl}/,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: ${baseUrl}/blog,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: ${baseUrl}/categoria/instagram,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: ${baseUrl}/categoria/bm-facebook,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: ${baseUrl}/categoria/youtube,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: ${baseUrl}/categoria/tiktok,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: ${baseUrl}/categoria/twitch,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: ${baseUrl}/categoria/x-twitter,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: ${baseUrl}/categoria/jogos,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  const posts = getAllPosts();
  const safePosts = Array.isArray(posts) ? posts : [];

  const blogPages: MetadataRoute.Sitemap = safePosts.map((post) => ({
    url: ${baseUrl}/blog/${post.slug},
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages];
}