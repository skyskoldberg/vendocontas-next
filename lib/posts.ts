import postsData from "@/data/posts.json";

export type PostImage = {
  url: string;
  alt?: string;
};

export type Post = {
  id?: string;
  slug: string;
  title: string;
  date?: string;
  category?: string;
  excerpt?: string;
  content: string;
  images?: PostImage[];
};

function stripHtml(html: string): string {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizePost(post: any): Post {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    date: post.date,
    category: post.category,
    content: post.content || "",
    excerpt: post.excerpt || stripHtml(post.content || "").slice(0, 180),
    images: Array.isArray(post.images) ? post.images : [],
  };
}

export function getAllPosts(): Post[] {
  const rawPosts = Array.isArray((postsData as any).posts)
    ? (postsData as any).posts
    : [];

  return rawPosts
    .map(normalizePost)
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}