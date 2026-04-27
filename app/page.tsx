import type { Metadata } from "next";
import Link from "next/link";

const WA = "https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20do%20Google.%20Quero%20saber%20mais%20sobre%20as%20contas%20dispon%C3%ADveis";

export const metadata: Metadata = {
  title: "Comprar Conta Instagram Segura Desde 2021 | VendoContas",
  description:
    "Comprar conta Instagram com segurança desde 2021. Procedência verificada, e-mail original entregue e transferência acompanhada. Contas Twitter e BMs Facebook disponíveis.",
  alternates: { canonical: "https://vendocontas.com" },
  openGraph: {
    title: "Comprar Conta Instagram Segura Desde 2021 | VendoContas",
    description:
      "Comprar conta Instagram com segurança desde 2021. E-mail original entregue em toda transferência.",
    url: "https://vendocontas.com",
    type: "website",
    siteName: "VendoContas",
    locale: "pt_BR",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VendoContas",
  url: "https://vendocontas.com",
  logo: "https://vendocontas.com/logo.png",
  description:
    "Marketplace especializado em compra e venda de contas Instagram, Twitter e BMs Facebook no Brasil desde 2021.",
  foundingDate: "2021",
  areaServed: { "@type": "Country", name: "Brasil" },
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

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VendoContas",
  url: "https://vendocontas.com",
  foundingDate: "2021",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Marcos Oliveira" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Comprei uma conta Instagram feminina de nicho fitness. Tudo veio certinho com o e-mail original. Conta funcionando perfeitamente até hoje.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Fernanda Costa" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Já comprei três BMs aqui para contingência de tráfego pago. Todas sem restrição e com histórico limpo. Recomendo muito.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Rafael Mendes" },
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      reviewBody:
        "Conta Twitter com boa audiência, transferência foi super tranquila. E-mail OG entregue no ato.",
    },
  ],
};

const testimonials = [
  {
    name: "Marcos O.",
    role: "Gestor de Tráfego",
    text: "Comprei conta Instagram para rodar anúncios. Sem nenhuma restrição, histórico limpo e e-mail original entregue no ato. Virei cliente fixo.",
    stars: 5,
    avatar: "M",
    color: "#6366F1",
  },
  {
    name: "Fernanda C.",
    role: "Empreendedora Digital",
    text: "Já é a terceira BM que compro aqui para contingência. Cada uma veio verificada, sem flags. Atendimento rápido e profissional.",
    stars: 5,
    avatar: "F",
    color: "#EC4899",
  },
  {
    name: "Rafael M.",
    role: "Criador de Conteúdo",
    text: "Conta Twitter com audiência real no nicho certo. Transferência tranquila, recebi o e-mail original junto com o pagamento. Exatamente o que precisava.",
    stars: 5,
    avatar: "R",
    color: "#0EA5E9",
  },
  {
    name: "Camila S.",
    role: "Agência de Marketing",
    text: "Preciso de contas Instagram com histórico para clientes. A VendoContas é a única que garante o e-mail OG. Não compro em outro lugar.",
    stars: 5,
    avatar: "C",
    color: "#10B981",
  },
];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .hp { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

        /* HERO */
        .hp-hero { padding: 72px 0 64px; border-bottom: 1px solid rgba(17,17,17,0.07); position: relative; overflow: hidden; }
        .hp-hero::before { content: ""; position: absolute; top: -120px; right: -180px; width: 560px; height: 560px; background: radial-gradient(circle, rgba(17,17,17,0.03) 0%, transparent 70%); pointer-events: none; }
        .hp-tag { display: inline-flex; align-items: center; gap: 7px; font-family: -apple-system, sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: rgba(17,17,17,0.45); background: rgba(17,17,17,0.04); border: 1px solid rgba(17,17,17,0.08); padding: 5px 14px; border-radius: 99px; margin-bottom: 24px; }
        .hp-h1 { font-size: clamp(34px, 5.5vw, 64px); line-height: 1.05; letter-spacing: -0.04em; margin: 0 0 22px; max-width: 780px; }
        .hp-h1 em { font-style: normal; position: relative; }
        .hp-h1 em::after { content: ""; position: absolute; left: 0; bottom: 2px; width: 100%; height: 3px; background: #111; border-radius: 2px; opacity: 0.15; }
        .hp-sub { font-size: 18px; line-height: 1.7; color: rgba(17,17,17,0.6); max-width: 560px; margin: 0 0 36px; font-family: -apple-system, sans-serif; }
        .hp-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 52px; }
        .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: #111; color: #fff; text-decoration: none; padding: 15px 28px; border-radius: 999px; font-family: -apple-system, sans-serif; font-size: 15px; font-weight: 700; transition: all 0.2s; }
        .btn-primary:hover { background: #333; transform: translateY(-1px); }
        .btn-wa { background: #25D366; }
        .btn-wa:hover { background: #1FB855; }
        .btn-ghost { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: #111; text-decoration: none; padding: 15px 28px; border-radius: 999px; font-family: -apple-system, sans-serif; font-size: 15px; font-weight: 600; border: 1px solid rgba(17,17,17,0.15); transition: all 0.2s; }
        .btn-ghost:hover { border-color: rgba(17,17,17,0.3); }

        /* STATS */
        .hp-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(17,17,17,0.07); border: 1px solid rgba(17,17,17,0.07); border-radius: 14px; overflow: hidden; }
        .hp-stat { background: #f8f8f5; padding: 22px 20px; }
        .hp-stat-num { font-size: 26px; font-weight: 700; letter-spacing: -0.03em; margin-bottom: 4px; }
        .hp-stat-lbl { font-family: -apple-system, sans-serif; font-size: 13px; color: rgba(17,17,17,0.5); }

        /* FOCUS PRODUCTS */
        .hp-section { padding: 72px 0; }
        .hp-section-sm { padding: 0 0 72px; }
        .hp-section-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 32px; gap: 16px; }
        .hp-section-head h2 { font-size: clamp(22px, 3vw, 36px); letter-spacing: -0.025em; margin: 0; }
        .hp-section-head a { font-family: -apple-system, sans-serif; font-size: 14px; color: rgba(17,17,17,0.5); text-decoration: none; white-space: nowrap; }
        .hp-section-head a:hover { color: #111; }

        /* PRODUCT CARDS — 3 focused */
        .hp-products { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .hp-product { display: block; text-decoration: none; border-radius: 14px; padding: 28px 24px 24px; border: 1px solid rgba(17,17,17,0.08); background: #fff; transition: all 0.2s; position: relative; overflow: hidden; }
        .hp-product:hover { border-color: rgba(17,17,17,0.18); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(17,17,17,0.06); }
        .hp-product.primary { background: #111; border-color: #111; }
        .hp-product.primary:hover { background: #222; }
        .hp-product-icon { font-size: 32px; margin-bottom: 16px; display: block; }
        .hp-product-name { font-size: 18px; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 8px; color: #111; }
        .hp-product.primary .hp-product-name { color: #fff; }
        .hp-product-desc { font-family: -apple-system, sans-serif; font-size: 14px; color: rgba(17,17,17,0.55); margin: 0 0 20px; line-height: 1.55; }
        .hp-product.primary .hp-product-desc { color: rgba(255,255,255,0.55); }
        .hp-product-cta { font-family: -apple-system, sans-serif; font-size: 13px; font-weight: 600; color: #111; }
        .hp-product.primary .hp-product-cta { color: rgba(255,255,255,0.7); }

        /* WHY */
        .hp-why { background: #111; color: #fff; border-radius: 18px; padding: 56px 52px; margin-bottom: 72px; }
        .hp-why h2 { font-size: clamp(24px, 3.5vw, 40px); letter-spacing: -0.03em; margin: 0 0 10px; color: #fff; }
        .hp-why-sub { font-family: -apple-system, sans-serif; font-size: 16px; color: rgba(255,255,255,0.5); margin: 0 0 44px; }
        .hp-why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 36px; }
        .hp-why-item-title { font-family: -apple-system, sans-serif; font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 6px; }
        .hp-why-item-desc { font-family: -apple-system, sans-serif; font-size: 14px; color: rgba(255,255,255,0.45); margin: 0; line-height: 1.6; }

        /* TESTIMONIALS */
        .hp-testimonials { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .hp-testi { background: #fff; border: 1px solid rgba(17,17,17,0.08); border-radius: 14px; padding: 22px; }
        .hp-testi-stars { display: flex; gap: 2px; margin-bottom: 12px; }
        .hp-testi-star { color: #F59E0B; font-size: 14px; }
        .hp-testi-text { font-family: -apple-system, sans-serif; font-size: 14px; color: rgba(17,17,17,0.75); line-height: 1.65; margin: 0 0 16px; }
        .hp-testi-author { display: flex; align-items: center; gap: 10px; }
        .hp-testi-avatar { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; color: #fff; flex-shrink: 0; }
        .hp-testi-name { font-family: -apple-system, sans-serif; font-size: 13px; font-weight: 600; color: #111; }
        .hp-testi-role { font-family: -apple-system, sans-serif; font-size: 11px; color: rgba(17,17,17,0.45); }
        .hp-rating-bar { display: flex; align-items: center; gap: 12px; margin-bottom: 28px; }
        .hp-rating-num { font-size: 48px; font-weight: 700; letter-spacing: -0.04em; }
        .hp-rating-detail { font-family: -apple-system, sans-serif; font-size: 13px; color: rgba(17,17,17,0.5); line-height: 1.6; }

        /* BLOG */
        .hp-guides { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .hp-guide { display: block; text-decoration: none; color: #111; background: #fff; border: 1px solid rgba(17,17,17,0.08); border-radius: 10px; padding: 18px 20px; transition: border-color 0.15s; }
        .hp-guide:hover { border-color: rgba(17,17,17,0.18); }
        .hp-guide-cat { font-family: -apple-system, sans-serif; font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: rgba(17,17,17,0.4); margin-bottom: 6px; }
        .hp-guide-title { font-size: 14px; font-weight: 500; margin: 0; line-height: 1.4; color: rgba(17,17,17,0.85); }

        /* CTA */
        .hp-cta { background: #f5f5f0; border-radius: 16px; padding: 52px 44px; text-align: center; margin-bottom: 80px; }
        .hp-cta h2 { font-size: clamp(22px, 3.5vw, 36px); letter-spacing: -0.025em; margin: 0 0 10px; }
        .hp-cta-sub { font-family: -apple-system, sans-serif; font-size: 16px; color: rgba(17,17,17,0.55); margin: 0 0 28px; }

        @media (max-width: 900px) {
          .hp-stats { grid-template-columns: repeat(2, 1fr); }
          .hp-products { grid-template-columns: 1fr; }
          .hp-why { padding: 36px 28px; }
          .hp-why-grid { grid-template-columns: 1fr; gap: 24px; }
          .hp-testimonials { grid-template-columns: 1fr; }
          .hp-guides { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .hp { padding: 0 16px; }
          .hp-hero { padding: 48px 0 48px; }
          .hp-stats { grid-template-columns: 1fr 1fr; }
          .hp-actions { flex-direction: column; }
          .btn-primary, .btn-ghost { justify-content: center; text-align: center; }
          .hp-cta { padding: 36px 20px; }
          .hp-guides { grid-template-columns: 1fr; }
        }
      ` }} />

      <div className="hp">

        {/* ── HERO ── */}
        <section className="hp-hero">
          <div className="hp-tag">⚡ Desde 2021 no mercado</div>
          <h1 className="hp-h1">
            Comprar conta Instagram,<br />
            <em>Twitter e BM</em> com segurança
          </h1>
          <p className="hp-sub">
            Marketplace especializado desde 2021. Contas com procedência
            verificada, e-mail original entregue e transferência acompanhada.
            Sem risco de recuperação. Sem seguidores falsos.
          </p>
          <div className="hp-actions">
            <a href={WA} target="_blank" rel="noreferrer" className="btn-primary btn-wa">
              💬 Ver contas disponíveis
            </a>
            <Link href="/comprar-conta-instagram" className="btn-primary">
              Comprar conta Instagram
            </Link>
            <Link href="/blog" className="btn-ghost">
              Ler guias gratuitos →
            </Link>
          </div>

          {/* Trust stats */}
          <div className="hp-stats">
            <div className="hp-stat">
              <div className="hp-stat-num">2021</div>
              <div className="hp-stat-lbl">ano de fundação</div>
            </div>
            <div className="hp-stat">
              <div className="hp-stat-num">E-mail OG</div>
              <div className="hp-stat-lbl">entregue em toda compra</div>
            </div>
            <div className="hp-stat">
              <div className="hp-stat-num">4.9★</div>
              <div className="hp-stat-lbl">avaliação média</div>
            </div>
            <div className="hp-stat">
              <div className="hp-stat-num">Zero bots</div>
              <div className="hp-stat-lbl">audiência verificada</div>
            </div>
          </div>
        </section>

        {/* ── PRODUTOS FOCADOS ── */}
        <section className="hp-section">
          <div className="hp-section-head">
            <h2>O que você pode comprar</h2>
            <a href={WA} target="_blank" rel="noreferrer">Ver disponíveis →</a>
          </div>
          <div className="hp-products">
            <Link href="/comprar-conta-instagram" className="hp-product primary">
              <span className="hp-product-icon">📸</span>
              <p className="hp-product-name">Conta Instagram</p>
              <p className="hp-product-desc">
                Contas antigas, femininas, de nicho, verificadas e monetizadas.
                Todas com e-mail original e histórico verificado.
              </p>
              <span className="hp-product-cta">Ver contas disponíveis →</span>
            </Link>
            <Link href="/categoria/twitter" className="hp-product">
              <span className="hp-product-icon">𝕏</span>
              <p className="hp-product-name">Conta Twitter / X</p>
              <p className="hp-product-desc">
                Perfis com histórico limpo, sem suspensões e audiência real.
                Transferência com e-mail original garantida.
              </p>
              <span className="hp-product-cta">Ver contas disponíveis →</span>
            </Link>
            <Link href="/categoria/bms" className="hp-product">
              <span className="hp-product-icon">📊</span>
              <p className="hp-product-name">BM Facebook</p>
              <p className="hp-product-desc">
                Business Managers sem restrição para contingência de tráfego
                pago. Histórico verificado antes de entregar.
              </p>
              <span className="hp-product-cta">Ver BMs disponíveis →</span>
            </Link>
          </div>
        </section>

        {/* ── POR QUE A VENDOCONTAS ── */}
        <div className="hp-why">
          <h2>Por que a VendoContas</h2>
          <p className="hp-why-sub">
            Operamos desde 2021. A maioria das negociações nesse mercado
            acontece sem verificação. Criamos método onde existe improviso.
          </p>
          <div className="hp-why-grid">
            <div>
              <p className="hp-why-item-title">E-mail original em toda transação</p>
              <p className="hp-why-item-desc">
                O OG Email é o controle definitivo de qualquer conta. Sem ele,
                a compra é temporária. Entregamos em todas as negociações —
                sem exceção.
              </p>
            </div>
            <div>
              <p className="hp-why-item-title">Verificação de procedência real</p>
              <p className="hp-why-item-desc">
                Nenhuma conta é listada sem análise de histórico. Crescimento
                artificial, penalizações e vínculos problemáticos são
                identificados antes de você ver a oferta.
              </p>
            </div>
            <div>
              <p className="hp-why-item-title">CNPJ 42.205.606/0001-03</p>
              <p className="hp-why-item-desc">
                Operamos formalmente no mercado brasileiro desde 2021.
                Empresa registrada, atendimento rastreável e histórico
                verificável.
              </p>
            </div>
            <div>
              <p className="hp-why-item-title">Suporte no período crítico</p>
              <p className="hp-why-item-desc">
                As primeiras duas semanas são as mais sensíveis. Ficamos
                disponíveis para resolver qualquer questão técnica na
                transição da conta.
              </p>
            </div>
          </div>
        </div>

        {/* ── DEPOIMENTOS ── */}
        <section className="hp-section-sm">
          <div className="hp-section-head">
            <h2>O que nossos clientes dizem</h2>
          </div>
          <div className="hp-rating-bar">
            <div className="hp-rating-num">4.9</div>
            <div>
              <div style={{ display: "flex", gap: "2px", marginBottom: "4px" }}>
                {[1,2,3,4,5].map(s => <span key={s} className="hp-testi-star">★</span>)}
              </div>
              <div className="hp-rating-detail">Avaliação média · 127+ clientes atendidos desde 2021</div>
            </div>
          </div>
          <div className="hp-testimonials">
            {testimonials.map((t, i) => (
              <div key={i} className="hp-testi">
                <div className="hp-testi-stars">
                  {Array(t.stars).fill(0).map((_, s) => (
                    <span key={s} className="hp-testi-star">★</span>
                  ))}
                </div>
                <p className="hp-testi-text">"{t.text}"</p>
                <div className="hp-testi-author">
                  <div
                    className="hp-testi-avatar"
                    style={{ background: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="hp-testi-name">{t.name}</div>
                    <div className="hp-testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GUIAS ── */}
        <section className="hp-section-sm">
          <div className="hp-section-head">
            <h2>Guias para comprar com critério</h2>
            <Link href="/blog">Ver todos →</Link>
          </div>
          <div className="hp-guides">
            <Link href="/blog/comprar-conta-instagram" className="hp-guide">
              <p className="hp-guide-cat">Instagram</p>
              <p className="hp-guide-title">Guia completo para comprar conta Instagram sem errar</p>
            </Link>
            <Link href="/blog/comprar-conta-instagram-banimento" className="hp-guide">
              <p className="hp-guide-cat">Segurança</p>
              <p className="hp-guide-title">Como comprar conta Instagram sem risco de bloqueio</p>
            </Link>
            <Link href="/blog/comprar-conta-instagram-antiga" className="hp-guide">
              <p className="hp-guide-cat">Instagram</p>
              <p className="hp-guide-title">Comprar conta Instagram antiga: vantagens e riscos</p>
            </Link>
            <Link href="/blog/comprar-conta-instagram-feminina" className="hp-guide">
              <p className="hp-guide-cat">Instagram</p>
              <p className="hp-guide-title">Comprar conta Instagram feminina: o que avaliar</p>
            </Link>
            <Link href="/blog/comprar-bm-do-facebook" className="hp-guide">
              <p className="hp-guide-cat">Facebook BM</p>
              <p className="hp-guide-title">Comprar BM Facebook: vale a pena em 2026?</p>
            </Link>
            <Link href="/blog/comprar-conta-instagram-mercado-livre" className="hp-guide">
              <p className="hp-guide-cat">Análise</p>
              <p className="hp-guide-title">Comprar conta Instagram no Mercado Livre: riscos reais</p>
            </Link>
          </div>
        </section>

        {/* ── CTA VENDEDOR ── */}
        <div className="hp-cta">
          <h2>Quer vender sua conta?</h2>
          <p className="hp-cta-sub">
            Compramos contas Instagram, Twitter e BMs com histórico limpo.
            Avaliação gratuita, pagamento seguro.
          </p>
          <a href={WA} target="_blank" rel="noreferrer" className="btn-primary btn-wa">
            💬 Quero vender minha conta
          </a>
        </div>

      </div>
    </>
  );
}
