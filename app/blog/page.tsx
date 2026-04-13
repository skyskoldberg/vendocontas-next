import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "48px 20px",
      }}
    >
      {/* HEADER */}
      <div style={{ maxWidth: "820px", marginBottom: "40px" }}>
        <p
          style={{
            margin: "0 0 10px 0",
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
            margin: "0 0 14px 0",
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          Blog VendoContas
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: "clamp(16px, 2.5vw, 22px)",
            lineHeight: 1.6,
            color: "rgba(17,17,17,0.75)",
          }}
        >
          Conteúdos estratégicos sobre comprar conta Instagram, BMs para
          contingência, canais do YouTube, contas TikTok, Twitch, X/Twitter e
          ativos digitais.
        </p>
      </div>

      {/* LISTA */}
      {posts.length === 0 ? (
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid rgba(17,17,17,0.08)",
            borderRadius: "16px",
            padding: "20px",
          }}
        >
          <p style={{ margin: 0 }}>Nenhum post encontrado.</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {posts.map((post) => (
            <article
              key={post.slug}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid rgba(17,17,17,0.08)",
                borderRadius: "20px",
                padding: "22px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.04)",
              }}
            >
              {/* categoria */}
              {post.category && (
                <p
                  style={{
                    margin: "0 0 10px 0",
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(17,17,17,0.55)",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  }}
                >
                  {post.category}
                </p>
              )}

              {/* título */}
              <h2
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "clamp(22px, 4vw, 30px)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
              >
                <Link
                  href={"/blog/" + post.slug}
                  style={{
                    textDecoration: "none",
                    color: "#111111",
                  }}
                >
                  {post.title}
                </Link>
              </h2>

              {/* data */}
              {post.date && (
                <p
                  style={{
                    margin: "0 0 12px 0",
                    fontSize: "13px",
                    color: "rgba(17,17,17,0.55)",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  }}
                >
                  {post.date}
                </p>
              )}

              {/* resumo */}
              <p
                style={{
                  margin: "0 0 16px 0",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "rgba(17,17,17,0.75)",
                }}
              >
                {post.excerpt}
              </p>

              {/* link */}
              <Link
                href={"/blog/" + post.slug}
                style={{
                  textDecoration: "none",
                  color: "#111111",
                  fontWeight: 700,
                  fontSize: "14px",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                }}
              >
                Ler artigo completo
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}