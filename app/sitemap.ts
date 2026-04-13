import { MetadataRoute } from "next";
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
      lastModified: new Date(),
    },
    {
      url: ${baseUrl}/categoria/tiktok,
      lastModified: new Date(),
    },
    {
      url: ${baseUrl}/categoria/twitch,
      lastModified: new Date(),
    },
    {
      url: ${baseUrl}/categoria/twitter,
      lastModified: new Date(),
    },
    {
      url: ${baseUrl}/categoria/jogos,
      lastModified: new Date(),
    },

    // 🔥 BLOG POSTS (isso faltava)
    ...postUrls,
  ];
}