import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{ maxWidth: "1180px", margin: "0 auto", padding: "64px 24px" }}>
      <div style={{ maxWidth: "920px", marginBottom: "48px" }}>
        <p
          style={{
            margin: "0 0 12px 0",
            fontSize: "12px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(17,17,17,0.55)",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          Blog
        </p>

        <h1
          style={{
            margin: "0 0 18px 0",
            fontSize: "64px",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          Blog VendoContas
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: "24px",
            lineHeight: 1.55,
            color: "rgba(17,17,17,0.78)",
            maxWidth: "820px",
          }}
        >
          Conteúdos estratégicos sobre comprar conta Instagram, BMs para
          contingência, canais do YouTube, contas TikTok, Twitch, X/Twitter e
          ativos digitais em geral.
        </p>
      </div>

      {posts.length === 0 ? (
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid rgba(17,17,17,0.08)",
            borderRadius: "20px",
            padding: "24px",
          }}
        >
          <p style={{ margin: 0, fontSize: "18px" }}>Nenhum post encontrado.</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "22px",
          }}
        >
          {posts.map((post) => (
            <article
              key={post.slug}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(17,17,17,0.08)",
                borderRadius: "24px",
                padding: "28px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
              }}
            >
              {post.category ? (
                <p
                  style={{
                    margin: "0 0 12px 0",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(17,17,17,0.55)",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  }}
                >
                  {post.category}
                </p>
              ) : null}

              <h2
                style={{
                  margin: "0 0 14px 0",
                  fontSize: "34px",
                  lineHeight: 1.02,
                  letterSpacing: "-0.03em",
                }}
              >
                <a
                  href={`/blog/${post.slug}`}
                  style={{
                    textDecoration: "none",
                    color: "#111111",
                  }}
                >
                  {post.title}
                </a>
              </h2>

              {post.date ? (
                <p
                  style={{
                    margin: "0 0 16px 0",
                    fontSize: "14px",
                    color: "rgba(17,17,17,0.58)",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  }}
                >
                  {post.date}
                </p>
              ) : null}

              <p
                style={{
                  margin: "0 0 18px 0",
                  fontSize: "18px",
                  lineHeight: 1.75,
                  color: "rgba(17,17,17,0.75)",
                }}
              >
                {post.excerpt}
              </p>

              <a
                href={`/blog/${post.slug}`}
                style={{
                  textDecoration: "none",
                  color: "#111111",
                  fontWeight: 700,
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                Ler artigo completo
              </a>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}