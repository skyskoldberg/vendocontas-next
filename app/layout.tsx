import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vendocontas.com"),
  title: {
    default: "Comprar Conta Instagram Segura Desde 2021 | VendoContas",
    template: "%s | VendoContas",
  },
  description:
    "Comprar conta Instagram com segurança desde 2021. Procedência verificada, e-mail original entregue e transferência acompanhada. Contas Twitter e BMs Facebook disponíveis.",
  alternates: {
    canonical: "https://vendocontas.com",
  },
  openGraph: {
    title: "Comprar Conta Instagram Segura Desde 2021 | VendoContas",
    description:
      "Comprar conta Instagram com segurança desde 2021. Procedência verificada, e-mail original entregue e transferência acompanhada.",
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
      <body className="vc-body">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              * {
                box-sizing: border-box;
              }

              html {
                -webkit-text-size-adjust: 100%;
                scroll-behavior: smooth;
              }

              body.vc-body {
                margin: 0;
                background: #f5f5f1;
                color: #111111;
                font-family: Georgia, "Times New Roman", serif;
              }

              .vc-header {
                position: sticky;
                top: 0;
                z-index: 100;
                background: rgba(245, 245, 241, 0.96);
                backdrop-filter: blur(10px);
                border-bottom: 1px solid rgba(17, 17, 17, 0.08);
              }

              .vc-header__inner,
              .vc-footer__inner {
                max-width: 1240px;
                margin: 0 auto;
                padding-left: 24px;
                padding-right: 24px;
              }

              .vc-header__inner {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 24px;
                padding-top: 22px;
                padding-bottom: 22px;
              }

              .vc-brand {
                text-decoration: none;
                color: #111111;
                display: block;
                min-width: 230px;
                flex-shrink: 0;
              }

              .vc-brand__title {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-size: 24px;
                font-weight: 800;
                line-height: 1;
                margin: 0 0 8px 0;
              }

              .vc-brand__subtitle {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-size: 14px;
                line-height: 1.45;
                color: rgba(17, 17, 17, 0.58);
              }

              .vc-nav {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 28px;
                flex-wrap: wrap;
                flex: 1;
              }

              .vc-nav a {
                text-decoration: none;
                color: #111111;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-size: 15px;
                font-weight: 600;
                white-space: nowrap;
              }

              .vc-header__cta,
              .vc-float {
                text-decoration: none;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-weight: 700;
                border-radius: 999px;
              }

              .vc-header__cta {
                background: #111111;
                color: #ffffff;
                padding: 14px 20px;
                font-size: 15px;
                flex-shrink: 0;
                white-space: nowrap;
              }

              .vc-main {
                width: 100%;
              }

              .vc-footer {
                margin-top: 72px;
                border-top: 1px solid rgba(17, 17, 17, 0.08);
                background: #f7f7f3;
              }

              .vc-footer__inner {
                padding-top: 56px;
                padding-bottom: 28px;
              }

              .vc-footer__grid {
                display: grid;
                grid-template-columns: 1.3fr 0.8fr 1fr 0.8fr;
                gap: 32px;
              }

              .vc-footer__title {
                margin: 0 0 18px 0;
                font-size: 28px;
                line-height: 1.05;
                letter-spacing: -0.03em;
              }

              .vc-footer__text,
              .vc-footer__cnpj,
              .vc-footer__bottom {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              }

              .vc-footer__text {
                margin: 0 0 12px 0;
                font-size: 16px;
                line-height: 1.7;
                color: rgba(17, 17, 17, 0.72);
                max-width: 420px;
              }

              .vc-footer__cnpj {
                margin: 0 0 6px 0;
                font-size: 15px;
                color: rgba(17, 17, 17, 0.55);
              }

              .vc-footer__since {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-size: 15px;
                color: rgba(17, 17, 17, 0.55);
              }

              .vc-footer__heading {
                margin: 0 0 18px 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-size: 13px;
                letter-spacing: 0.08em;
                text-transform: uppercase;
                color: rgba(17, 17, 17, 0.55);
              }

              .vc-footer__links {
                display: grid;
                gap: 14px;
              }

              .vc-footer__links a {
                text-decoration: none;
                color: #111111;
                line-height: 1.4;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                font-size: 15px;
              }

              .vc-footer__bottom {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px solid rgba(17, 17, 17, 0.08);
                display: flex;
                justify-content: space-between;
                gap: 16px;
                flex-wrap: wrap;
                font-size: 15px;
                color: rgba(17, 17, 17, 0.62);
              }

              .vc-float {
                position: fixed;
                right: 20px;
                bottom: 20px;
                z-index: 120;
                background: #25d366;
                color: #ffffff;
                padding: 14px 22px;
                font-size: 15px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.16);
              }

              @media (max-width: 1024px) {
                .vc-header__inner {
                  align-items: flex-start;
                  flex-direction: column;
                }

                .vc-brand {
                  min-width: 0;
                  width: 100%;
                }

                .vc-nav {
                  width: 100%;
                  justify-content: flex-start;
                  gap: 18px;
                }

                .vc-header__cta {
                  align-self: flex-start;
                }

                .vc-footer__grid {
                  grid-template-columns: 1fr 1fr;
                }
              }

              @media (max-width: 700px) {
                .vc-header__inner,
                .vc-footer__inner {
                  padding-left: 16px;
                  padding-right: 16px;
                }

                .vc-header__inner {
                  padding-top: 16px;
                  padding-bottom: 16px;
                  gap: 16px;
                }

                .vc-brand__title {
                  font-size: 22px;
                  margin-bottom: 6px;
                }

                .vc-brand__subtitle {
                  font-size: 13px;
                }

                .vc-nav {
                  display: flex;
                  flex-wrap: nowrap;
                  overflow-x: auto;
                  gap: 12px;
                  padding-bottom: 4px;
                  scrollbar-width: none;
                  -ms-overflow-style: none;
                }

                .vc-nav::-webkit-scrollbar {
                  display: none;
                }

                .vc-nav a {
                  flex: 0 0 auto;
                  font-size: 14px;
                  padding: 10px 14px;
                  border: 1px solid rgba(17, 17, 17, 0.08);
                  border-radius: 999px;
                  background: #ffffff;
                }

                .vc-header__cta {
                  width: 100%;
                  text-align: center;
                  padding: 14px 18px;
                }

                .vc-footer {
                  margin-top: 56px;
                }

                .vc-footer__inner {
                  padding-top: 40px;
                  padding-bottom: 24px;
                }

                .vc-footer__grid {
                  grid-template-columns: 1fr;
                  gap: 28px;
                }

                .vc-footer__title {
                  font-size: 24px;
                }

                .vc-float {
                  right: 14px;
                  bottom: calc(84px + env(safe-area-inset-bottom));
                  padding: 12px 18px;
                  font-size: 14px;
                }
              }
            `,
          }}
        />

        {/* ── HEADER ── */}
        <header className="vc-header">
          <div className="vc-header__inner">
            <Link href="/" className="vc-brand">
              <div className="vc-brand__title">VendoContas</div>
              <p className="vc-brand__subtitle">
                Comprar conta Instagram, Twitter e BMs — desde 2021
              </p>
            </Link>

            <nav className="vc-nav" aria-label="Navegação principal">
              <Link href="/">Início</Link>
              <Link href="/comprar-conta-instagram">Instagram</Link>
              <Link href="/categoria/twitter">Twitter</Link>
              <Link href="/categoria/bms">BMs Facebook</Link>
              <Link href="/blog">Blog</Link>
            </nav>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="vc-header__cta"
            >
              Falar no WhatsApp
            </a>
          </div>
        </header>

        <main className="vc-main">{children}</main>

        {/* ── FOOTER ── */}
        <footer className="vc-footer">
          <div className="vc-footer__inner">
            <div className="vc-footer__grid">

              {/* Col 1 — Sobre */}
              <div>
                <h2 className="vc-footer__title">
                  Comprar conta Instagram com segurança.
                </h2>
                <p className="vc-footer__text">
                  A VendoContas é especializada em compra e venda de contas
                  Instagram, contas Twitter/X e BMs Facebook no Brasil. Atuamos
                  desde 2021 com procedência verificada e e-mail original
                  entregue em toda transação.
                </p>
                <p className="vc-footer__cnpj">CNPJ: 42.205.606/0001-03</p>
                <p className="vc-footer__since">No mercado desde 2021</p>
              </div>

              {/* Col 2 — Navegação */}
              <div>
                <h3 className="vc-footer__heading">Navegação</h3>
                <div className="vc-footer__links">
                  <Link href="/">Início</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/comprar-conta-instagram">Comprar conta Instagram</Link>
                </div>
              </div>

              {/* Col 3 — Produtos */}
              <div>
                <h3 className="vc-footer__heading">O que compramos</h3>
                <div className="vc-footer__links">
                  <Link href="/comprar-conta-instagram">Contas Instagram</Link>
                  <Link href="/categoria/twitter">Contas Twitter / X</Link>
                  <Link href="/categoria/bms">BMs Facebook</Link>
                </div>
              </div>

              {/* Col 4 — Contato */}
              <div>
                <h3 className="vc-footer__heading">Contato</h3>
                <div className="vc-footer__links">
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                </div>
              </div>

            </div>

            <div className="vc-footer__bottom">
              <div>© 2021 VendoContas. Todos os direitos reservados.</div>
              <div>Marketplace de ativos digitais — Brasil</div>
            </div>
          </div>
        </footer>

        {/* ── WhatsApp float ── */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="vc-float"
        >
          WhatsApp
        </a>
      </body>
    </html>
  );
}
