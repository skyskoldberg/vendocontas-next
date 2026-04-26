import type { Metadata } from "next";
import Link from "next/link";

// ─── Metadata ────────────────────────────────────────────────────────────────
// ESTRATÉGIA: homepage não compete com /comprar-conta-instagram
// Serve intenção de descoberta/marca + vendedores
// "Comprar Conta Instagram" fica APENAS na página de produto
export const metadata: Metadata = {
  title: "VendoContas — Marketplace de Ativos Digitais no Brasil",
  description:
    "Marketplace especializado em ativos digitais: contas Instagram com procedência verificada, BMs para contingência, canais YouTube, TikTok e mais. Transferência acompanhada e garantia real.",
  alternates: {
    canonical: "https://vendocontas.com",
  },
  openGraph: {
    title: "VendoContas — Marketplace de Ativos Digitais no Brasil",
    description:
      "Marketplace especializado em ativos digitais: contas Instagram com procedência verificada, BMs para contingência, canais YouTube, TikTok e mais.",
    url: "https://vendocontas.com",
    type: "website",
    siteName: "VendoContas",
    locale: "pt_BR",
  },
};

// ─── Schemas ─────────────────────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VendoContas",
  url: "https://vendocontas.com",
  logo: "https://vendocontas.com/logo.png",
  description:
    "Marketplace especializado em compra e venda de ativos digitais no Brasil: contas Instagram, BMs, canais YouTube, contas TikTok e outros ativos de redes sociais.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Portuguese",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  foundingDate: "2022",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VendoContas",
  url: "https://vendocontas.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://vendocontas.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const WA =
  "https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20do%20site.%20Quero%20saber%20mais%20sobre%20os%20ativos%20dispon%C3%ADveis";

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .hp { max-width: 1240px; margin: 0 auto; padding: 0 24px; }

            /* HERO */
            .hp-hero { padding: 72px 0 80px; border-bottom: 1px solid rgba(17,17,17,0.08); }
            .hp-hero__tag { display: inline-block; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(17,17,17,0.5); margin-bottom: 20px; }
            .hp-hero__h1 { font-size: clamp(36px, 6vw, 68px); line-height: 1.04; letter-spacing: -0.04em; margin: 0 0 24px; max-width: 820px; }
            .hp-hero__sub { font-size: clamp(17px, 2vw, 20px); line-height: 1.65; color: rgba(17,17,17,0.65); max-width: 580px; margin: 0 0 40px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
            .hp-hero__actions { display: flex; gap: 14px; flex-wrap: wrap; }
            .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: #25d366; color: #fff; text-decoration: none; padding: 16px 28px; border-radius: 999px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 16px; font-weight: 700; }
            .btn-secondary { display: inline-flex; align-items: center; gap: 8px; background: #111; color: #fff; text-decoration: none; padding: 16px 28px; border-radius: 999px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 16px; font-weight: 700; }
            .btn-ghost { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: #111; text-decoration: none; padding: 16px 28px; border-radius: 999px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 16px; font-weight: 600; border: 1px solid rgba(17,17,17,0.15); }

            /* STATS */
            .hp-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(17,17,17,0.08); border-top: 1px solid rgba(17,17,17,0.08); border-bottom: 1px solid rgba(17,17,17,0.08); }
            .hp-stat { background: #f5f5f1; padding: 32px 24px; }
            .hp-stat__num { font-size: 36px; letter-spacing: -0.03em; font-weight: 700; margin: 0 0 6px; }
            .hp-stat__label { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 14px; color: rgba(17,17,17,0.55); margin: 0; }

            /* CATEGORIES */
            .hp-section { padding: 72px 0; }
            .hp-section__head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 32px; gap: 16px; }
            .hp-section__title { font-size: clamp(24px, 3.5vw, 36px); letter-spacing: -0.025em; margin: 0; }
            .hp-section__link { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 15px; color: rgba(17,17,17,0.55); text-decoration: none; white-space: nowrap; }
            .hp-cats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; }
            .hp-cat { display: block; text-decoration: none; color: #111; background: #fff; border: 1px solid rgba(17,17,17,0.08); border-radius: 12px; padding: 22px 22px 18px; transition: border-color 0.15s; }
            .hp-cat:hover { border-color: rgba(17,17,17,0.2); }
            .hp-cat__icon { font-size: 26px; margin-bottom: 12px; }
            .hp-cat__name { font-size: 16px; font-weight: 500; margin: 0 0 6px; }
            .hp-cat__desc { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; color: rgba(17,17,17,0.55); margin: 0; line-height: 1.5; }

            /* HOW IT WORKS */
            .hp-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; }
            .hp-step { }
            .hp-step__num { font-size: 42px; font-weight: 700; letter-spacing: -0.04em; color: rgba(17,17,17,0.12); margin: 0 0 16px; }
            .hp-step__title { font-size: 18px; font-weight: 500; margin: 0 0 8px; }
            .hp-step__desc { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 15px; color: rgba(17,17,17,0.62); margin: 0; line-height: 1.65; }

            /* WHY */
            .hp-why { background: #111; color: #fff; border-radius: 20px; padding: 64px 56px; margin: 0 0 80px; }
            .hp-why__title { font-size: clamp(26px, 4vw, 44px); letter-spacing: -0.03em; margin: 0 0 12px; color: #fff; }
            .hp-why__sub { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 17px; color: rgba(255,255,255,0.6); margin: 0 0 48px; }
            .hp-why__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; }
            .hp-why__item__title { font-size: 16px; font-weight: 500; margin: 0 0 8px; color: #fff; }
            .hp-why__item__desc { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 14px; color: rgba(255,255,255,0.55); margin: 0; line-height: 1.6; }

            /* GUIDES */
            .hp-guides { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px; }
            .hp-guide { display: block; text-decoration: none; color: #111; background: #fff; border: 1px solid rgba(17,17,17,0.08); border-radius: 10px; padding: 18px 20px; }
            .hp-guide:hover { border-color: rgba(17,17,17,0.2); }
            .hp-guide__cat { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 11px; letter-spacing: 0.05em; text-transform: uppercase; color: rgba(17,17,17,0.45); margin: 0 0 6px; }
            .hp-guide__title { font-size: 15px; font-weight: 500; margin: 0; line-height: 1.4; }

            /* CTA */
            .hp-cta { background: #f0f0ea; border-radius: 16px; padding: 56px 48px; text-align: center; margin-bottom: 80px; }
            .hp-cta__title { font-size: clamp(24px, 4vw, 40px); letter-spacing: -0.025em; margin: 0 0 12px; }
            .hp-cta__sub { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 17px; color: rgba(17,17,17,0.62); margin: 0 0 32px; }

            @media (max-width: 900px) {
              .hp-stats { grid-template-columns: repeat(2, 1fr); }
              .hp-why { padding: 40px 28px; }
            }
            @media (max-width: 600px) {
              .hp { padding: 0 16px; }
              .hp-hero { padding: 44px 0 52px; }
              .hp-stats { grid-template-columns: repeat(2, 1fr); }
              .hp-section { padding: 52px 0; }
              .hp-cta { padding: 36px 24px; }
              .hp-why { padding: 36px 24px; }
              .hp-hero__actions { flex-direction: column; }
              .btn-primary, .btn-secondary, .btn-ghost { justify-content: center; }
            }
          `,
        }}
      />

      <div className="hp">

        {/* ── HERO ── */}
        <section className="hp-hero">
          <p className="hp-hero__tag">Marketplace de ativos digitais</p>
          <h1 className="hp-hero__h1">
            Compre e venda contas de redes sociais com segurança real
          </h1>
          <p className="hp-hero__sub">
            Contas Instagram, BMs para contingência, canais YouTube, TikTok e
            mais — todos com procedência verificada, histórico analisado e
            transferência acompanhada. Sem risco de recuperação. Sem seguidores
            falsos.
          </p>
          <div className="hp-hero__actions">
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary">
              Ver ativos disponíveis
            </a>
            <Link href="/comprar-conta-instagram" className="btn-secondary">
              Comprar conta Instagram
            </Link>
            <Link href="/blog" className="btn-ghost">
              Ler guias gratuitos
            </Link>
          </div>
        </section>

        {/* ── STATS ── */}
        <div className="hp-stats">
          <div className="hp-stat">
            <p className="hp-stat__num">+3 anos</p>
            <p className="hp-stat__label">de mercado ativo no Brasil</p>
          </div>
          <div className="hp-stat">
            <p className="hp-stat__num">E-mail OG</p>
            <p className="hp-stat__label">entregue em toda transferência</p>
          </div>
          <div className="hp-stat">
            <p className="hp-stat__num">R$ 150–2k</p>
            <p className="hp-stat__label">faixa de preço real e verificado</p>
          </div>
          <div className="hp-stat">
            <p className="hp-stat__num">Zero bots</p>
            <p className="hp-stat__label">audiência verificada antes de listar</p>
          </div>
        </div>

        {/* ── CATEGORIAS ── */}
        <section className="hp-section">
          <div className="hp-section__head">
            <h2 className="hp-section__title">Ativos disponíveis</h2>
            <a href={WA} target="_blank" rel="noreferrer" className="hp-section__link">
              Ver todos →
            </a>
          </div>
          <div className="hp-cats">
            <Link href="/comprar-conta-instagram" className="hp-cat">
              <div className="hp-cat__icon">📸</div>
              <p className="hp-cat__name">Contas Instagram</p>
              <p className="hp-cat__desc">
                Antigas, femininas, de nicho, verificadas e monetizadas. Com
                histórico real e transferência segura.
              </p>
            </Link>
            <Link href="/categoria/bms" className="hp-cat">
              <div className="hp-cat__icon">📊</div>
              <p className="hp-cat__name">BMs Facebook</p>
              <p className="hp-cat__desc">
                Business Managers para contingência de tráfego pago. Histórico
                verificado antes de entregar.
              </p>
            </Link>
            <Link href="/categoria/youtube" className="hp-cat">
              <div className="hp-cat__icon">▶️</div>
              <p className="hp-cat__name">Canais YouTube</p>
              <p className="hp-cat__desc">
                Canais monetizados com programa de parceiros ativo e audiência
                orgânica verificada.
              </p>
            </Link>
            <Link href="/categoria/tiktok" className="hp-cat">
              <div className="hp-cat__icon">🎵</div>
              <p className="hp-cat__name">Contas TikTok</p>
              <p className="hp-cat__desc">
                Perfis com histórico de engajamento real. Opções monetizadas
                disponíveis por nicho.
              </p>
            </Link>
            <Link href="/categoria/twitter" className="hp-cat">
              <div className="hp-cat__icon">𝕏</div>
              <p className="hp-cat__name">Contas X/Twitter</p>
              <p className="hp-cat__desc">
                Perfis com audiência estabelecida e histórico de comportamento
                consistente.
              </p>
            </Link>
            <Link href="/categoria/jogos" className="hp-cat">
              <div className="hp-cat__icon">🎮</div>
              <p className="hp-cat__name">Contas de Jogos</p>
              <p className="hp-cat__desc">
                Contas com progressão verificada e itens raros. Transferência
                segura com suporte.
              </p>
            </Link>
          </div>
        </section>

        {/* ── COMO FUNCIONA ── */}
        <section className="hp-section" style={{ paddingTop: 0 }}>
          <div className="hp-section__head">
            <h2 className="hp-section__title">Como funciona</h2>
          </div>
          <div className="hp-steps">
            <div className="hp-step">
              <p className="hp-step__num">01</p>
              <p className="hp-step__title">Você escolhe o ativo</p>
              <p className="hp-step__desc">
                Fale pelo WhatsApp ou navegue pelas categorias. Mostramos os
                ativos disponíveis com histórico real, nicho e métricas
                verificadas.
              </p>
            </div>
            <div className="hp-step">
              <p className="hp-step__num">02</p>
              <p className="hp-step__title">Analisamos a procedência</p>
              <p className="hp-step__desc">
                Cada ativo passa por verificação de histórico de crescimento,
                engajamento real e ausência de penalizações antes de ser
                listado.
              </p>
            </div>
            <div className="hp-step">
              <p className="hp-step__num">03</p>
              <p className="hp-step__title">Transferência acompanhada</p>
              <p className="hp-step__desc">
                O e-mail de criação original (OG Email) é entregue
                simultaneamente ao pagamento. Todos os vínculos do antigo dono
                são removidos antes da conclusão.
              </p>
            </div>
            <div className="hp-step">
              <p className="hp-step__num">04</p>
              <p className="hp-step__title">Suporte no período crítico</p>
              <p className="hp-step__desc">
                As primeiras duas semanas são as mais sensíveis. Ficamos
                disponíveis para resolver qualquer questão técnica na transição.
              </p>
            </div>
          </div>
        </section>

        {/* ── POR QUE A VENDOCONTAS ── */}
        <div className="hp-why">
          <h2 className="hp-why__title">Por que a VendoContas</h2>
          <p className="hp-why__sub">
            A maioria das transações nesse mercado acontece sem verificação.
            Nós existimos para criar método onde existe improviso.
          </p>
          <div className="hp-why__grid">
            <div>
              <p className="hp-why__item__title">Verificação de procedência</p>
              <p className="hp-why__item__desc">
                Nenhum ativo é listado sem análise de histórico real. Crescimento
                artificial, penalizações e vínculos problemáticos são
                identificados antes de você ver a oferta.
              </p>
            </div>
            <div>
              <p className="hp-why__item__title">E-mail original entregue</p>
              <p className="hp-why__item__desc">
                O OG Email é o mecanismo de controle definitivo de qualquer
                conta. Sem ele, a compra é temporária. Com ele, o controle é
                real. Entregamos em todas as transações.
              </p>
            </div>
            <div>
              <p className="hp-why__item__title">Sem seguidores falsos</p>
              <p className="hp-why__item__desc">
                Auditamos engajamento, histórico de crescimento e qualidade da
                audiência antes de listar. O número que aparece no perfil
                precisa corresponder a audiência real.
              </p>
            </div>
            <div>
              <p className="hp-why__item__title">CNPJ e operação formal</p>
              <p className="hp-why__item__desc">
                CNPJ 42.205.606/0001-03. Operamos formalmente há mais de 3 anos
                no mercado brasileiro de ativos digitais.
              </p>
            </div>
          </div>
        </div>

        {/* ── GUIAS ── */}
        <section className="hp-section" style={{ paddingTop: 0 }}>
          <div className="hp-section__head">
            <h2 className="hp-section__title">Guias para comprar com critério</h2>
            <Link href="/blog" className="hp-section__link">Ver todos →</Link>
          </div>
          <div className="hp-guides">
            <Link href="/blog/comprar-conta-instagram" className="hp-guide">
              <p className="hp-guide__cat">Instagram</p>
              <p className="hp-guide__title">Guia completo para comprar conta Instagram sem errar</p>
            </Link>
            <Link href="/blog/comprar-conta-instagram-como-nao-cair-em-golpes" className="hp-guide">
              <p className="hp-guide__cat">Segurança</p>
              <p className="hp-guide__title">Como não cair em golpes ao comprar conta Instagram</p>
            </Link>
            <Link href="/blog/como-analisar-conta-instagram-antes-comprar" className="hp-guide">
              <p className="hp-guide__cat">Análise</p>
              <p className="hp-guide__title">Como analisar uma conta Instagram antes de comprar</p>
            </Link>
            <Link href="/blog/identificar-conta-instagram-manipulada" className="hp-guide">
              <p className="hp-guide__cat">Identificação</p>
              <p className="hp-guide__title">Como identificar uma conta Instagram manipulada</p>
            </Link>
            <Link href="/blog/comprar-conta-instagram-antiga" className="hp-guide">
              <p className="hp-guide__cat">Instagram</p>
              <p className="hp-guide__title">Comprar conta Instagram antiga: vantagens e riscos reais</p>
            </Link>
            <Link href="/blog/comprar-bm-do-facebook" className="hp-guide">
              <p className="hp-guide__cat">Facebook</p>
              <p className="hp-guide__title">Comprar BM do Facebook: vale a pena em 2026?</p>
            </Link>
          </div>
        </section>

        {/* ── VENDER CTA ── */}
        <section className="hp-section" style={{ paddingTop: 0 }}>
          <div className="hp-cta">
            <h2 className="hp-cta__title">Quer vender seu ativo?</h2>
            <p className="hp-cta__sub">
              Se você tem uma conta Instagram, canal YouTube, BM ou outro ativo
              digital para vender, entre em contato. Analisamos gratuitamente e
              conectamos com compradores verificados.
            </p>
            <a href={WA} target="_blank" rel="noreferrer" className="btn-secondary">
              Quero vender meu ativo
            </a>
          </div>
        </section>

      </div>
    </>
  );
}
