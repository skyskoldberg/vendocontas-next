import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "../../../lib/posts";
import { notFound } from "next/navigation";

type Params = { slug: string };

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Extrai texto puro do HTML para gerar description */
function stripHtml(html: string, maxLen = 155): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLen);
}

/** Remove um eventual <h1> inicial do conteúdo para evitar H1 duplicado */
function removeLeadingH1(html: string): string {
  return html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>\s*/i, "");
}

/** Extrai pares Q&A de H3 seguidos de parágrafo — para FAQPage schema */
function extractFAQs(html: string): { q: string; a: string }[] {
  const pairs: { q: string; a: string }[] = [];
  const regex = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const q = stripHtml(match[1]).trim();
    const a = stripHtml(match[2], 300).trim();
    if (q && a) pairs.push({ q, a });
  }
  return pairs;
}

// ─── Static params ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Post não encontrado" };

  const description =
    post.excerpt?.slice(0, 155) ||
    stripHtml(post.content, 155);

  const firstImage = post.images?.[0]?.url;
  const ogImage = firstImage
    ? firstImage.startsWith("http")
      ? firstImage
      : `https://vendocontas.com${firstImage}`
    : "https://vendocontas.com/og-default.jpg";

  return {
    title: post.title,
    description,
    alternates: {
      canonical: `https://vendocontas.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      url: `https://vendocontas.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      siteName: "VendoContas",
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [ogImage],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return notFound();

  const description =
    post.excerpt?.slice(0, 155) || stripHtml(post.content, 155);

  const firstImage = post.images?.[0]?.url;
  const ogImage = firstImage
    ? firstImage.startsWith("http")
      ? firstImage
      : `https://vendocontas.com${firstImage}`
    : null;

  const faqs = extractFAQs(post.content);
  const cleanContent = removeLeadingH1(post.content);

  // ── JSON-LD schemas ──────────────────────────────────────────────────────

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://vendocontas.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://vendocontas.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://vendocontas.com/blog/${slug}`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://vendocontas.com/blog/${slug}`,
    image: ogImage || undefined,
    author: {
      "@type": "Organization",
      name: "VendoContas",
      url: "https://vendocontas.com",
    },
    publisher: {
      "@type": "Organization",
      name: "VendoContas",
      url: "https://vendocontas.com",
      logo: {
        "@type": "ImageObject",
        url: "https://vendocontas.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://vendocontas.com/blog/${slug}`,
    },
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }
      : null;

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Schemas ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ── Article styles ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .vc-post { max-width: 860px; margin: 0 auto; padding: 56px 24px 80px; }
            .vc-post__back { display: inline-block; margin-bottom: 28px; text-decoration: none; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 15px; color: rgba(17,17,17,0.55); }
            .vc-post__back:hover { color: #111; }
            .vc-post__cat { margin: 0 0 10px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(17,17,17,0.5); }
            .vc-post__h1 { font-size: clamp(28px, 5vw, 48px); line-height: 1.1; letter-spacing: -0.03em; margin: 0 0 16px; }
            .vc-post__date { margin: 0 0 36px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 14px; color: rgba(17,17,17,0.5); }
            .vc-post__img-grid { margin-bottom: 44px; display: grid; gap: 16px; }
            .vc-post__img-grid img { width: 100%; height: auto; border-radius: 14px; display: block; }
            .vc-post__body { font-size: 19px; line-height: 1.8; }
            .vc-post__body h1 { font-size: clamp(24px, 4vw, 40px); line-height: 1.1; letter-spacing: -0.02em; margin: 48px 0 18px; }
            .vc-post__body h2 { font-size: clamp(20px, 3vw, 30px); line-height: 1.2; letter-spacing: -0.02em; margin: 48px 0 16px; }
            .vc-post__body h3 { font-size: clamp(17px, 2.5vw, 22px); line-height: 1.3; letter-spacing: -0.01em; margin: 36px 0 12px; }
            .vc-post__body p { margin: 0 0 20px; color: rgba(17,17,17,0.82); }
            .vc-post__body ul, .vc-post__body ol { padding-left: 22px; margin: 16px 0 24px; }
            .vc-post__body li { margin-bottom: 10px; color: rgba(17,17,17,0.82); }
            .vc-post__body strong, .vc-post__body b { font-weight: 600; color: #111; }
            .vc-post__body a { color: #111; text-underline-offset: 3px; }
            .vc-post__body a:hover { opacity: 0.7; }
            .vc-post__body iframe { border-radius: 12px; margin: 8px 0 28px; }
            .vc-post__body table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 16px; }
            .vc-post__body th { text-align: left; padding: 10px 14px; background: rgba(17,17,17,0.05); border-bottom: 1px solid rgba(17,17,17,0.08); font-weight: 600; }
            .vc-post__body td { padding: 10px 14px; border-bottom: 1px solid rgba(17,17,17,0.06); }
            .vc-post__body blockquote { margin: 28px 0; padding: 20px 24px; border-left: 3px solid rgba(17,17,17,0.15); font-style: italic; color: rgba(17,17,17,0.65); }
            .vc-post__body svg { max-width: 100%; height: auto; border-radius: 12px; margin: 12px 0 28px; }
            @media (max-width: 600px) {
              .vc-post { padding: 36px 16px 60px; }
              .vc-post__body { font-size: 17px; }
            }
          `,
        }}
      />

      <main className="vc-post">
        {/* Back */}
        <a href="/blog" className="vc-post__back">← Voltar para o blog</a>

        {/* Category */}
        {post.category && (
          <p className="vc-post__cat">{post.category}</p>
        )}

        {/* H1 — único e autoritativo */}
        <h1 className="vc-post__h1">{post.title}</h1>

        {/* Date */}
        {post.date && (
          <p className="vc-post__date">
            {new Date(post.date + "T12:00:00").toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        )}

        {/* Images — só a primeira, lazy, com prioridade de carregamento */}
        {post.images && post.images.length > 0 && (
          <div className="vc-post__img-grid">
            {post.images.slice(0, 1).map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt || post.title}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            ))}
          </div>
        )}

        {/* Article body — H1 do content removido para evitar duplicata */}
        <article
          className="vc-post__body"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      </main>
    </>
  );
}
