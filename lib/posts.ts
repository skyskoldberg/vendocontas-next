import postsData from "@/data/posts.json";

export type Post = {
  id?: string;
  slug: string;
  title: string;
  date?: string;
  category?: string;
  excerpt?: string;
  content: string;
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

function createExcerpt(content: string, maxLength = 180): string {
  const text = stripHtml(content);

  if (text.length <= maxLength) return text;

  return text.slice(0, maxLength).trim() + "...";
}

function parseDate(value?: string): number {
  if (!value) return 0;

  const raw = value.trim();

  // ISO / YYYY-MM-DD
  const iso = Date.parse(raw);
  if (!Number.isNaN(iso)) return iso;

  // DD/MM/YYYY
  const brMatch = raw.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (brMatch) {
    const [, dd, mm, yyyy] = brMatch;
    return new Date(Number(yyyy), Number(mm) - 1, Number(dd)).getTime();
  }

  // "12 de Janeiro de 2026"
  const months: Record<string, number> = {
    janeiro: 0,
    fevereiro: 1,
    março: 2,
    marco: 2,
    abril: 3,
    maio: 4,
    junho: 5,
    julho: 6,
    agosto: 7,
    setembro: 8,
    outubro: 9,
    novembro: 10,
    dezembro: 11,
  };

  const longPt = raw
    .toLowerCase()
    .match(/^(\d{1,2})\s+de\s+([a-zçãôéí]+)\s+de\s+(\d{4})$/i);

  if (longPt) {
    const [, dd, monthName, yyyy] = longPt;
    const monthIndex = months[monthName];
    if (monthIndex !== undefined) {
      return new Date(Number(yyyy), monthIndex, Number(dd)).getTime();
    }
  }

  return 0;
}

function normalizePosts(raw: any): Post[] {
  const source = Array.isArray(raw)
    ? raw
    : Array.isArray(raw?.posts)
    ? raw.posts
    : Array.isArray(raw?.items)
    ? raw.items
    : [];

  return source
    .filter((item: any) => item?.slug && item?.title)
    .map((item: any, index: number) => ({
      id: item.id ?? String(index + 1),
      slug: String(item.slug),
      title: String(item.title),
      date: item.date ? String(item.date) : "",
      category: item.category ? String(item.category) : "",
      excerpt: item.excerpt
        ? String(item.excerpt)
        : createExcerpt(String(item.content ?? "")),
      content: String(item.content ?? ""),
    }))
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));
}

export function getAllPosts(): Post[] {
  return normalizePosts(postsData);
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}