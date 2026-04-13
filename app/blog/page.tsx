import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description:
    "Conteúdos estratégicos sobre comprar conta Instagram, BMs, canais do YouTube, contas TikTok, Twitch, X/Twitter e ativos digitais.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="vc-blog-page">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .vc-blog-page {
              max-width: 1180px;
              margin: 0 auto;
              padding: 56px 24px 96px;
            }

            .vc-blog-hero {
              max-width: 920px;
              margin-bottom: 40px;
            }

            .vc-blog-kicker {
              margin: 0 0 12px 0;
              font-size: 12px;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              color: rgba(17,17,17,0.55);
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            }

            .vc-blog-title {
              margin: 0 0 18px 0;
              font-size: 64px;
              line-height: 0.95;
              letter-spacing: -0.04em;
              color: #111111;
            }

            .vc-blog-description {
              margin: 0;
              font-size: 24px;
              line-height: 1.55;
              color: rgba(17,17,17,0.78);
              max-width: 820px;
            }

            .vc-blog-empty {
              background: #ffffff;
              border: 1px solid rgba(17,17,17,0.08);
              border-radius: 20px;
              padding: 24px;
            }

            .vc-blog-empty p {
              margin: 0;
              font-size: 18px;
            }

            .vc-blog-grid {
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 22px;
            }

            .vc-blog-card {
              background: #ffffff;
              border: 1px solid rgba(17,17,17,0.08);
              border-radius: 24px;
              padding: 28px;
              box-shadow: 0 8px 24px rgba(0,0,0,0.04);
              min-width: 0;
              overflow: hidden;
            }

            .vc-blog-card-category {
              margin: 0 0 12px 0;
              font-size: 12px;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              color: rgba(17,17,17,0.55);
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            }

            .vc-blog-card-title {
              margin: 0 0 14px 0;
              font-size: 34px;
              line-height: 1.02;
              letter-spacing: -0.03em;
              word-break: break-word;
              overflow-wrap: anywhere;
            }

            .vc-blog-card-title a {
              text-decoration: none;
              color: #111111;
            }

            .vc-blog-card-date {
              margin: 0 0 16px 0;
              font-size: 14px;
              color: rgba(17,17,17,0.58);
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            }

            .vc-blog-card-excerpt {
              margin: 0 0 18px 0;
              font-size: 18px;
              line-height: 1.75;
              color: rgba(17,17,17,0.75);
              word-break: break-word;
              overflow-wrap: anywhere;
            }

            .vc-blog-card-link {
              text-decoration: none;
              color: #111111;
              font-weight: 700;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            }

            @media (max-width: 1024px) {
              .vc-blog-page {
                padding: 44px 20px 88px;
              }

              .vc-blog-title {
                font-size: 52px;
              }

              .vc-blog-description {
                font-size: 21px;
              }

              .vc-blog-grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
              }

              .vc-blog-card-title {
                font-size: 28px;
              }

              .vc-blog-card-excerpt {
                font-size: 17px;
              }
            }

            @media (max-width: 700px) {
              .vc-blog-page {
                padding: 32px 16px 88px;
                overflow-x: hidden;
              }

              .vc-blog-hero {
                margin-bottom: 28px;
              }

              .vc-blog-kicker {
                font-size: 11px;
              }

              .vc-blog-title {
                font-size: 40px;
                line-height: 0.98;
                margin-bottom: 14px;
              }

              .vc-blog-description {
                font-size: 18px;
                line-height: 1.6;
              }

              .vc-blog-grid {
                grid-template-columns: 1fr;
                gap: 16px;
              }

              .vc-blog-card {
                padding: 22px;
                border-radius: 20px;
              }

              .vc-blog-card-title {
                font-size: 24px;
                line-height: 1.06;
                margin-bottom: 12px;
              }

              .vc-blog-card-date {
                margin-bottom: 14px;
              }

              .vc-blog-card-excerpt {
                font-size: 16px;
                line-height: 1.7;
                margin-bottom: 16px;
              }
            }
          `,
        }}
      />

      <div className="vc-blog-hero">
        <p className="vc-blog-kicker">Blog</p>

        <h1 className="vc-blog-title">Blog VendoContas</h1>

        <p className="vc-blog-description">
          Conteúdos estratégicos sobre comprar conta Instagram, BMs para
          contingência, canais do YouTube, contas TikTok, Twitch, X/Twitter e
          ativos digitais em geral.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="vc-blog-empty">
          <p>Nenhum post encontrado.</p>
        </div>
      ) : (
        <div className="vc-blog-grid">
          {posts.map((post) => (
            <article key={post.slug} className="vc-blog-card">
              {post.category ? (
                <p className="vc-blog-card-category">{post.category}</p>
              ) : null}

              <h2 className="vc-blog-card-title">
                <Link href={/blog/${post.slug}}>{post.title}</Link>
              </h2>

              {post.date ? (
                <p className="vc-blog-card-date">{post.date}</p>
              ) : null}

              <p className="vc-blog-card-excerpt">{post.excerpt}</p>

              <Link href={/blog/${post.slug}} className="vc-blog-card-link">
                Ler artigo completo
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}