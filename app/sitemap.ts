import { MetadataRoute } from 'next';
import posts from '@/data/posts.json';
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vendocontas.com';
  const blog = posts.map(p => ({ url: `${baseUrl}/blog/${p.slug}`, lastModified: new Date(), priority: 0.9 }));
  return [{ url: baseUrl, lastModified: new Date(), priority: 1.0 }, ...blog];
}
