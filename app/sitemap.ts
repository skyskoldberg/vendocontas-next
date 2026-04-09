import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vendocontas.com",
      lastModified: new Date(),
    },
    {
      url: "https://vendocontas.com/blog",
      lastModified: new Date(),
    },
    {
      url: "https://vendocontas.com/categoria/instagram",
      lastModified: new Date(),
    },
    {
      url: "https://vendocontas.com/categoria/bm-facebook",
      lastModified: new Date(),
    },
    {
      url: "https://vendocontas.com/categoria/youtube",
      lastModified: new Date(),
    },
    {
      url: "https://vendocontas.com/categoria/tiktok",
      lastModified: new Date(),
    },
    {
      url: "https://vendocontas.com/categoria/twitch",
      lastModified: new Date(),
    },
    {
      url: "https://vendocontas.com/categoria/x-twitter",
      lastModified: new Date(),
    },
    {
      url: "https://vendocontas.com/categoria/jogos",
      lastModified: new Date(),
    },
  ];
}