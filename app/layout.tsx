import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vendocontas.com"),
  title: {
    default: "VendoContas | Comprar Conta Instagram, BMs e Ativos Digitais",
    template: "%s | VendoContas",
  },
  description:
    "Marketplace de ativos digitais com foco em comprar conta Instagram, BMs para contingência, canais do YouTube, contas TikTok, Twitch, X/Twitter e contas de jogos.",
  alternates: {
    canonical: "https://vendocontas.com",
  },
  openGraph: {
    title: "VendoContas | Comprar Conta Instagram, BMs e Ativos Digitais",
    description:
      "Marketplace de ativos digitais com foco em comprar conta Instagram, BMs para contingência, canais do YouTube, contas TikTok, Twitch, X/Twitter e contas de jogos.",
    url: "https://vendocontas.com",
    siteName: "VendoContas",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const whatsappLink =
    "https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20do%20Google.%20Quero%20saber%20mais%20sobre%20as%20p%C3%A1ginas%20dispon%C3%ADveis";

  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          backgroundColor: "#f5f5f1",
          color: "#111111",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            backgroundColor: "#f5f5f1",
            borderBottom: "1px solid rgba(17,17,17,0.08)",
          }}
        >
          <div
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "22px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "#111111",
                display: "block",
                minWidth: "230px",
              }}
            >
              <div
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "24px",
                  fontWeight: 800,
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                VendoContas
              </div>

              <div
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "14px",
                  color: "rgba(17,17,17,0.58)",
                }}
              >
                Comprar conta Instagram, BMs e ativos digitais
              </div>
            </a>

            <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#111111",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                Início
              </a>

              <a
                href="/blog"
                style={{
                  textDecoration: "none",
                  color: "#111111",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                Blog
              </a>

              <a
                href="/categoria/instagram"
                style={{
                  textDecoration: "none",
                  color: "#111111",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                Instagram
              </a>

              <a
                href="/categoria/bms"
                style={{
                  textDecoration: "none",
                  color: "#111111",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                BMs
              </a>

              <a
                href="/categoria/youtube"
                style={{
                  textDecoration: "none",
                  color: "#111111",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                YouTube
              </a>

              <a
                href="/categoria/tiktok"
                style={{
                  textDecoration: "none",
                  color: "#111111",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                TikTok
              </a>

              <a
                href="/categoria/twitch"
                style={{
                  textDecoration: "none",
                  color: "#111111",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                Twitch
              </a>

              <a
                href="/categoria/twitter"
                style={{
                  textDecoration: "none",
                  color: "#111111",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                X/Twitter
              </a>

              <a
                href="/categoria/jogos"
                style={{
                  textDecoration: "none",
                  color: "#111111",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                Jogos
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#111111",
                  color: "#ffffff",
                  padding: "14px 20px",
                  borderRadius: "999px",
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                }}
              >
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer
          style={{
            marginTop: "72px",
            borderTop: "1px solid rgba(17,17,17,0.08)",
            backgroundColor: "#f7f7f3",
          }}
        >
          <div
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "56px 24px 28px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.3fr 0.8fr 1fr 0.8fr",
                gap: "32px",
              }}
            >
              <div>
                <h2
                  style={{
                    margin: "0 0 18px 0",
                    fontSize: "28px",
                    lineHeight: 1.05,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Comprar conta Instagram com mais critério.
                </h2>

                <p
                  style={{
                    margin: "0 0 18px 0",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: "16px",
                    lineHeight: 1.7,
                    color: "rgba(17,17,17,0.72)",
                    maxWidth: "420px",
                  }}
                >
                  A VendoContas atua com foco em compra de conta Instagram, além
                  de BMs para contingência, canais do YouTube, contas TikTok,
                  Twitch, X/Twitter e contas de jogos. O blog existe para
                  educar, filtrar riscos e aumentar a precisão de cada decisão.
                </p>

                <p
                  style={{
                    margin: 0,
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: "16px",
                    color: "rgba(17,17,17,0.62)",
                  }}
                >
                  CNPJ: 42.205.606/0001-03
                </p>
              </div>

              <div>
                <h3
                  style={{
                    margin: "0 0 18px 0",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(17,17,17,0.55)",
                  }}
                >
                  Navegação
                </h3>

                <div
                  style={{
                    display: "grid",
                    gap: "14px",
                  }}
                >
                  <a href="/" style={{ textDecoration: "none", color: "#111111" }}>
                    Início
                  </a>
                  <a href="/blog" style={{ textDecoration: "none", color: "#111111" }}>
                    Blog
                  </a>
                </div>
              </div>

              <div>
                <h3
                  style={{
                    margin: "0 0 18px 0",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(17,17,17,0.55)",
                  }}
                >
                  Categorias
                </h3>

                <div
                  style={{
                    display: "grid",
                    gap: "14px",
                  }}
                >
                  <a href="/categoria/instagram" style={{ textDecoration: "none", color: "#111111" }}>
                    Contas de Instagram
                  </a>
                  <a href="/categoria/bms" style={{ textDecoration: "none", color: "#111111" }}>
                    BMs para contingência
                  </a>
                  <a href="/categoria/youtube" style={{ textDecoration: "none", color: "#111111" }}>
                    Canais do YouTube
                  </a>
                  <a href="/categoria/tiktok" style={{ textDecoration: "none", color: "#111111" }}>
                    Contas TikTok
                  </a>
                  <a href="/categoria/twitch" style={{ textDecoration: "none", color: "#111111" }}>
                    Contas Twitch
                  </a>
                  <a href="/categoria/twitter" style={{ textDecoration: "none", color: "#111111" }}>
                    Contas X/Twitter
                  </a>
                  <a href="/categoria/jogos" style={{ textDecoration: "none", color: "#111111" }}>
                    Contas de jogos
                  </a>
                </div>
              </div>

              <div>
                <h3
                  style={{
                    margin: "0 0 18px 0",
                    fontFamily:
                      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "rgba(17,17,17,0.55)",
                  }}
                >
                  Contato
                </h3>

                <div
                  style={{
                    display: "grid",
                    gap: "14px",
                  }}
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "#111111" }}
                  >
                    WhatsApp
                  </a>

                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "#111111" }}
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "40px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(17,17,17,0.08)",
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
                flexWrap: "wrap",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "15px",
                color: "rgba(17,17,17,0.62)",
              }}
            >
              <div>© 2022 VendoContas. Todos os direitos reservados.</div>
            </div>
          </div>
        </footer>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
            zIndex: 120,
            textDecoration: "none",
            backgroundColor: "#25D366",
            color: "#ffffff",
            padding: "14px 22px",
            borderRadius: "999px",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: "15px",
            fontWeight: 700,
            boxShadow: "0 10px 30px rgba(0,0,0,0.16)",
          }}
        >
          WhatsApp
        </a>
      </body>
    </html>
  );
}