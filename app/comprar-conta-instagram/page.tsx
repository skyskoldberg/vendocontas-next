import type { Metadata } from "next";
import Link from "next/link";

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Comprar Conta Instagram com Segurança | VendoContas",
  description:
    "Compre conta Instagram com procedência verificada, transferência segura e acompanhamento pós-venda. Contas antigas, femininas, com seguidores reais e engajamento. Fale no WhatsApp.",
  alternates: {
    canonical: "https://vendocontas.com/comprar-conta-instagram",
  },
  openGraph: {
    title: "Comprar Conta Instagram com Segurança | VendoContas",
    description:
      "Compre conta Instagram com procedência verificada, transferência segura e acompanhamento pós-venda.",
    url: "https://vendocontas.com/comprar-conta-instagram",
    type: "website",
  },
};

// ─── JSON-LD Schemas ─────────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://vendocontas.com" },
    { "@type": "ListItem", position: 2, name: "Comprar conta Instagram", item: "https://vendocontas.com/comprar-conta-instagram" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Comprar conta Instagram",
  description: "Serviço de intermediação para compra segura de contas Instagram com procedência verificada, análise de histórico e acompanhamento na transferência.",
  provider: {
    "@type": "Organization",
    name: "VendoContas",
    url: "https://vendocontas.com",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
  serviceType: "Compra e venda de ativos digitais",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "BRL",
    lowPrice: "150",
    highPrice: "2000",
    offerCount: "50",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Comprar conta Instagram é seguro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pode ser seguro quando feito com verificação de procedência, entrega do e-mail original e acompanhamento na transferência. O risco aumenta em negociações diretas sem intermediação. Na VendoContas, cada conta passa por análise de histórico antes de ser disponibilizada.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto custa comprar uma conta Instagram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Os preços variam entre R$ 150 e R$ 2.000 dependendo do tamanho, nicho, engajamento e qualidade da audiência. Contas de nicho ativo com histórico limpo custam mais. Contas abaixo de R$ 50 quase sempre têm algum problema de qualidade ou segurança.",
      },
    },
    {
      "@type": "Question",
      name: "Posso perder a conta depois de comprar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, se a transferência não incluir o e-mail de criação original. Esse é o risco mais comum. A forma de mitigar é exigir entrega completa de todos os mecanismos de recuperação e usar intermediação verificada.",
      },
    },
    {
      "@type": "Question",
      name: "Conta Instagram antiga vale mais?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contas mais antigas com histórico ativo têm vantagens em trust score e resistência a bloqueios. Mas conta antiga e inativa tem valor limitado — o algoritmo observa atividade recente, não apenas data de criação.",
      },
    },
    {
      "@type": "Question",
      name: "O que verificar antes de comprar conta Instagram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Verifique a taxa de engajamento (mínimo 1-3%), a qualidade dos comentários (devem ter contexto real), o histórico de crescimento (picos abruptos indicam seguidores comprados), a coerência de nicho e a segurança da transferência. Exija acesso ao e-mail de criação original.",
      },
    },
    {
      "@type": "Question",
      name: "Qual a diferença entre seguidores reais e falsos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seguidores reais interagem com o conteúdo — curtem, comentam com contexto, salvam e compartilham. Seguidores falsos ou comprados inflam o número mas não geram engajamento. O algoritmo do Instagram distribui conteúdo com base no comportamento da audiência, não no número de seguidores.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona a transferência de uma conta Instagram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A transferência segura inclui: entrega do login e senha, transferência do e-mail de criação original, remoção de todos os mecanismos de recuperação antigos (telefone, e-mail de recuperação) e acompanhamento durante o período de adaptação pós-compra.",
      },
    },
    {
      "@type": "Question",
      name: "Comprar conta Instagram no Mercado Livre é seguro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O Mercado Livre não oferece verificação de procedência nem garante o tipo de transferência necessária para uma compra segura. O e-mail de criação original raramente é entregue, o que deixa brecha para recuperação pelo antigo dono. Para compras com objetivo comercial, plataformas especializadas oferecem mais segurança.",
      },
    },
  ],
};

// ─── WhatsApp link ────────────────────────────────────────────────────────────
const WA =
  "https://wa.me/5583999691629?text=Ol%C3%A1%2C%20quero%20comprar%20uma%20conta%20Instagram.%20Pode%20me%20ajudar%3F";

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ComprarContaInstagram() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .ci-page { max-width: 860px; margin: 0 auto; padding: 0 24px 80px; }
            .ci-hero { padding: 56px 0 48px; border-bottom: 1px solid rgba(17,17,17,0.08); }
            .ci-hero h1 { font-size: clamp(32px, 5vw, 52px); line-height: 1.08; letter-spacing: -0.03em; margin: 0 0 20px; }
            .ci-hero p { font-size: 18px; line-height: 1.7; color: rgba(17,17,17,0.68); margin: 0 0 32px; max-width: 640px; }
            .ci-cta { display: inline-flex; align-items: center; gap: 10px; background: #25d366; color: #fff; text-decoration: none; padding: 16px 28px; border-radius: 999px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 16px; font-weight: 700; }
            .ci-cta:hover { background: #1eb356; }
            .ci-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 40px 0; }
            .ci-card { background: #ffffff; border: 1px solid rgba(17,17,17,0.08); border-radius: 12px; padding: 20px 22px; }
            .ci-card__num { font-family: Georgia, serif; font-size: 28px; font-weight: bold; color: #111; margin: 0 0 6px; }
            .ci-card__label { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 14px; color: rgba(17,17,17,0.6); margin: 0; }
            .ci-section { margin: 56px 0 0; }
            .ci-section h2 { font-size: clamp(22px, 3.5vw, 32px); letter-spacing: -0.02em; margin: 0 0 16px; }
            .ci-section p, .ci-section li { font-size: 17px; line-height: 1.75; color: rgba(17,17,17,0.78); }
            .ci-section ul { padding-left: 20px; margin: 12px 0; }
            .ci-section li { margin-bottom: 8px; }
            .ci-steps { counter-reset: step; list-style: none; padding: 0; margin: 24px 0; }
            .ci-steps li { counter-increment: step; display: flex; gap: 18px; align-items: flex-start; margin-bottom: 24px; }
            .ci-steps li::before { content: counter(step); display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; min-width: 32px; background: #111; color: #fff; border-radius: 50%; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 14px; font-weight: 700; margin-top: 2px; }
            .ci-steps li div { font-size: 17px; line-height: 1.7; color: rgba(17,17,17,0.78); }
            .ci-steps li strong { display: block; color: #111; margin-bottom: 2px; }
            .ci-types { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin: 24px 0; }
            .ci-type { border: 1px solid rgba(17,17,17,0.08); border-radius: 10px; padding: 16px 18px; background: #fff; }
            .ci-type__name { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 14px; font-weight: 600; color: #111; margin: 0 0 6px; }
            .ci-type__desc { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 13px; color: rgba(17,17,17,0.6); margin: 0; line-height: 1.5; }
            .ci-faq { margin: 56px 0 0; }
            .ci-faq h2 { font-size: clamp(22px, 3.5vw, 32px); letter-spacing: -0.02em; margin: 0 0 8px; }
            .ci-faq__sub { font-size: 16px; color: rgba(17,17,17,0.6); margin: 0 0 32px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
            .ci-faq__item { border-top: 1px solid rgba(17,17,17,0.08); padding: 22px 0; }
            .ci-faq__item:last-child { border-bottom: 1px solid rgba(17,17,17,0.08); }
            .ci-faq__q { font-size: 17px; font-weight: 500; margin: 0 0 10px; color: #111; }
            .ci-faq__a { font-size: 16px; line-height: 1.75; color: rgba(17,17,17,0.72); margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
            .ci-cta-block { margin: 64px 0 0; background: #111; color: #fff; border-radius: 16px; padding: 48px 40px; text-align: center; }
            .ci-cta-block h2 { font-size: clamp(24px, 4vw, 36px); letter-spacing: -0.02em; color: #fff; margin: 0 0 12px; }
            .ci-cta-block p { color: rgba(255,255,255,0.7); font-size: 17px; margin: 0 0 28px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
            .ci-infographic { width: 100%; border-radius: 12px; margin: 32px 0; overflow: hidden; }
            .ci-related { margin: 56px 0 0; padding-top: 40px; border-top: 1px solid rgba(17,17,17,0.08); }
            .ci-related h2 { font-size: 20px; letter-spacing: -0.01em; margin: 0 0 20px; }
            .ci-related__grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; }
            .ci-related__link { display: block; padding: 14px 16px; border: 1px solid rgba(17,17,17,0.08); border-radius: 8px; text-decoration: none; color: #111; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 14px; line-height: 1.4; background: #fff; }
            .ci-related__link:hover { border-color: rgba(17,17,17,0.2); background: #f9f9f7; }
            @media (max-width: 600px) {
              .ci-page { padding: 0 16px 60px; }
              .ci-hero { padding: 36px 0 32px; }
              .ci-cta-block { padding: 32px 20px; }
            }
          `,
        }}
      />

      <div className="ci-page">
        {/* ── HERO ── */}
        <section className="ci-hero">
          <h1>Comprar conta Instagram</h1>
          <p>
            Contas com procedência verificada, análise de histórico e
            transferência acompanhada. Sem risco de recuperação pelo antigo
            dono, sem seguidores falsos, sem surpresas.
          </p>
          <a href={WA} target="_blank" rel="noreferrer" className="ci-cta">
            Ver contas disponíveis no WhatsApp
          </a>

          {/* Trust signals */}
          <div className="ci-grid">
            <div className="ci-card">
              <p className="ci-card__num">+3 anos</p>
              <p className="ci-card__label">de mercado ativo</p>
            </div>
            <div className="ci-card">
              <p className="ci-card__num">R$ 150–2k</p>
              <p className="ci-card__label">faixa de preço real</p>
            </div>
            <div className="ci-card">
              <p className="ci-card__num">E-mail OG</p>
              <p className="ci-card__label">entregue na transferência</p>
            </div>
            <div className="ci-card">
              <p className="ci-card__num">Sem bots</p>
              <p className="ci-card__label">audiência verificada</p>
            </div>
          </div>
        </section>

        {/* ── OCR Infographic 1: Checklist ── */}
        {/* Este SVG é indexado pelo Google Images. O texto é lido por OCR. */}
        <section className="ci-section">
          <h2>O que verificar antes de comprar conta Instagram</h2>
          <p>
            A maioria dos compradores perde dinheiro por não checar esses cinco
            pontos antes do pagamento. São sinais que qualquer conta de valor
            real consegue apresentar sem problema.
          </p>

          <svg
            className="ci-infographic"
            viewBox="0 0 680 320"
            role="img"
            aria-label="Checklist: 5 pontos para verificar antes de comprar conta Instagram"
          >
            <title>Checklist: o que verificar antes de comprar conta Instagram</title>
            <desc>
              Infográfico com os 5 critérios de verificação: taxa de
              engajamento, qualidade dos comentários, histórico de crescimento,
              coerência de nicho e segurança da transferência.
            </desc>
            <rect width="680" height="320" fill="#f5f5f1" rx="12" />
            <text
              x="340"
              y="36"
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="16"
              fontWeight="bold"
              fill="#111"
            >
              Checklist: o que verificar antes de comprar conta Instagram
            </text>

            {/* Item 1 */}
            <rect x="24" y="56" width="300" height="56" rx="8" fill="#fff" />
            <rect x="24" y="56" width="4" height="56" rx="2" fill="#1D9E75" />
            <text x="38" y="78" fontFamily="Georgia,serif" fontSize="13" fontWeight="bold" fill="#111">01. Taxa de engajamento</text>
            <text x="38" y="98" fontFamily="Georgia,serif" fontSize="12" fill="#555">Mínimo 1–3% de curtidas + comentários por post</text>

            {/* Item 2 */}
            <rect x="356" y="56" width="300" height="56" rx="8" fill="#fff" />
            <rect x="356" y="56" width="4" height="56" rx="2" fill="#1D9E75" />
            <text x="370" y="78" fontFamily="Georgia,serif" fontSize="13" fontWeight="bold" fill="#111">02. Qualidade dos comentários</text>
            <text x="370" y="98" fontFamily="Georgia,serif" fontSize="12" fill="#555">Comentários devem ter contexto real, não só emojis</text>

            {/* Item 3 */}
            <rect x="24" y="128" width="300" height="56" rx="8" fill="#fff" />
            <rect x="24" y="128" width="4" height="56" rx="2" fill="#534AB7" />
            <text x="38" y="150" fontFamily="Georgia,serif" fontSize="13" fontWeight="bold" fill="#111">03. Histórico de crescimento</text>
            <text x="38" y="170" fontFamily="Georgia,serif" fontSize="12" fill="#555">Picos abruptos = seguidores comprados. Exija SocialBlade.</text>

            {/* Item 4 */}
            <rect x="356" y="128" width="300" height="56" rx="8" fill="#fff" />
            <rect x="356" y="128" width="4" height="56" rx="2" fill="#534AB7" />
            <text x="370" y="150" fontFamily="Georgia,serif" fontSize="13" fontWeight="bold" fill="#111">04. Coerência de nicho</text>
            <text x="370" y="170" fontFamily="Georgia,serif" fontSize="12" fill="#555">Nicho da conta deve combinar com seu objetivo</text>

            {/* Item 5 */}
            <rect x="190" y="200" width="300" height="56" rx="8" fill="#fff" />
            <rect x="190" y="200" width="4" height="56" rx="2" fill="#E24B4A" />
            <text x="204" y="222" fontFamily="Georgia,serif" fontSize="13" fontWeight="bold" fill="#111">05. Transferência segura</text>
            <text x="204" y="242" fontFamily="Georgia,serif" fontSize="12" fill="#555">Exija e-mail original (OG Email) + remoção de vínculos antigos</text>

            <text x="340" y="296" textAnchor="middle" fontFamily="Georgia,serif" fontSize="11" fill="#999">
              VendoContas.com — comprar conta Instagram com segurança
            </text>
          </svg>

          <ol className="ci-steps">
            <li>
              <div>
                <strong>Taxa de engajamento mínima de 1–3%</strong>
                Divida a soma de curtidas e comentários dos últimos 10 posts
                pelo número de seguidores e multiplique por 100. Abaixo de 1%
                é sinal de audiência morta. Acima de 3% em contas menores é o
                ideal.
              </div>
            </li>
            <li>
              <div>
                <strong>Comentários com contexto real</strong>
                Comentários de audiência genuína dialogam com o conteúdo.
                Emojis isolados, frases repetidas e respostas sem relação com
                o post são indicadores claros de automação ou compra de
                engajamento.
              </div>
            </li>
            <li>
              <div>
                <strong>Crescimento progressivo no histórico</strong>
                Ferramentas como SocialBlade mostram o histórico de crescimento
                com datas. Saltos verticais de 10k ou 20k seguidores em dias
                seguidos de estagnação total indicam compra artificial de
                seguidores.
              </div>
            </li>
            <li>
              <div>
                <strong>Nicho compatível com seu objetivo</strong>
                O algoritmo do Instagram distribui conteúdo para a audiência
                que a conta formou. Uma conta de entretenimento não converte
                para produto financeiro. A coerência de nicho é o que
                determina se a audiência vai responder ao seu conteúdo.
              </div>
            </li>
            <li>
              <div>
                <strong>Transferência com e-mail de criação original</strong>
                Este é o ponto mais ignorado e o mais crítico. O vendedor
                deve entregar o e-mail usado na criação da conta (OG Email),
                não apenas login e senha. Sem isso, a conta pode ser
                recuperada a qualquer momento.
              </div>
            </li>
          </ol>
        </section>

        {/* ── Tipos de conta ── */}
        <section className="ci-section">
          <h2>Tipos de conta Instagram disponíveis</h2>
          <p>
            Cada tipo de conta atende um objetivo diferente. O critério de
            escolha é sempre a compatibilidade entre o histórico da conta e o
            que você pretende fazer com ela.
          </p>

          <div className="ci-types">
            <div className="ci-type">
              <p className="ci-type__name">Conta antiga (aged)</p>
              <p className="ci-type__desc">
                2 a 5+ anos de histórico. Maior trust score e resistência a
                bloqueios em anúncios.
              </p>
            </div>
            <div className="ci-type">
              <p className="ci-type__name">Conta feminina</p>
              <p className="ci-type__desc">
                Audiência predominantemente feminina. Alta demanda em nichos de
                moda, beleza e lifestyle.
              </p>
            </div>
            <div className="ci-type">
              <p className="ci-type__name">Conta 10k+</p>
              <p className="ci-type__desc">
                Base inicial de audiência. Ideal para quem quer acelerar
                autoridade sem construir do zero.
              </p>
            </div>
            <div className="ci-type">
              <p className="ci-type__name">Conta monetizada</p>
              <p className="ci-type__desc">
                Já aprovada no programa de monetização. Começa a gerar receita
                imediatamente.
              </p>
            </div>
            <div className="ci-type">
              <p className="ci-type__name">Conta verificada</p>
              <p className="ci-type__desc">
                Selo azul legítimo. Transmite confiança imediata e protege
                contra cópias do perfil.
              </p>
            </div>
            <div className="ci-type">
              <p className="ci-type__name">Conta de nicho</p>
              <p className="ci-type__desc">
                Audiência segmentada em tema específico: fitness, finanças,
                culinária, pets e outros.
              </p>
            </div>
          </div>
        </section>

        {/* ── OCR Infographic 2: How it works ── */}
        <section className="ci-section">
          <h2>Como funciona a compra na VendoContas</h2>
          <p>
            O processo foi desenhado para eliminar os dois maiores riscos do
            mercado: recuperação pelo antigo dono e contas com seguidores
            falsos.
          </p>

          <svg
            className="ci-infographic"
            viewBox="0 0 680 180"
            role="img"
            aria-label="Como funciona comprar conta Instagram na VendoContas: 4 etapas"
          >
            <title>Como funciona: comprar conta Instagram na VendoContas</title>
            <desc>
              Quatro etapas: análise de procedência, verificação de engajamento,
              transferência com e-mail original, acompanhamento pós-venda.
            </desc>
            <rect width="680" height="180" fill="#f5f5f1" rx="12" />

            <text x="340" y="28" textAnchor="middle" fontFamily="Georgia,serif" fontSize="14" fontWeight="bold" fill="#111">
              Como funciona: comprar conta Instagram na VendoContas
            </text>

            {/* Step 1 */}
            <rect x="20" y="44" width="140" height="90" rx="8" fill="#E1F5EE" />
            <text x="90" y="70" textAnchor="middle" fontFamily="Georgia,serif" fontSize="22" fontWeight="bold" fill="#0F6E56">1</text>
            <text x="90" y="92" textAnchor="middle" fontFamily="Georgia,serif" fontSize="11" fontWeight="bold" fill="#085041">Análise de</text>
            <text x="90" y="108" textAnchor="middle" fontFamily="Georgia,serif" fontSize="11" fontWeight="bold" fill="#085041">procedência</text>
            <text x="90" y="126" textAnchor="middle" fontFamily="Georgia,serif" fontSize="10" fill="#0F6E56">histórico verificado</text>

            {/* Arrow 1-2 */}
            <path d="M162 89 L178 89" stroke="#111" strokeWidth="1" fill="none" markerEnd="url(#arr)" />

            {/* Step 2 */}
            <rect x="180" y="44" width="140" height="90" rx="8" fill="#E1F5EE" />
            <text x="250" y="70" textAnchor="middle" fontFamily="Georgia,serif" fontSize="22" fontWeight="bold" fill="#0F6E56">2</text>
            <text x="250" y="92" textAnchor="middle" fontFamily="Georgia,serif" fontSize="11" fontWeight="bold" fill="#085041">Verificação de</text>
            <text x="250" y="108" textAnchor="middle" fontFamily="Georgia,serif" fontSize="11" fontWeight="bold" fill="#085041">engajamento</text>
            <text x="250" y="126" textAnchor="middle" fontFamily="Georgia,serif" fontSize="10" fill="#0F6E56">sem seguidores falsos</text>

            {/* Arrow 2-3 */}
            <path d="M322 89 L338 89" stroke="#111" strokeWidth="1" fill="none" />
            <polygon points="338,85 346,89 338,93" fill="#111" />

            {/* Step 3 */}
            <rect x="348" y="44" width="140" height="90" rx="8" fill="#EEEDFE" />
            <text x="418" y="70" textAnchor="middle" fontFamily="Georgia,serif" fontSize="22" fontWeight="bold" fill="#3C3489">3</text>
            <text x="418" y="92" textAnchor="middle" fontFamily="Georgia,serif" fontSize="11" fontWeight="bold" fill="#3C3489">Transferência</text>
            <text x="418" y="108" textAnchor="middle" fontFamily="Georgia,serif" fontSize="11" fontWeight="bold" fill="#3C3489">com e-mail OG</text>
            <text x="418" y="126" textAnchor="middle" fontFamily="Georgia,serif" fontSize="10" fill="#534AB7">controle total garantido</text>

            {/* Arrow 3-4 */}
            <path d="M490 89 L506 89" stroke="#111" strokeWidth="1" fill="none" />
            <polygon points="506,85 514,89 506,93" fill="#111" />

            {/* Step 4 */}
            <rect x="516" y="44" width="144" height="90" rx="8" fill="#EEEDFE" />
            <text x="588" y="70" textAnchor="middle" fontFamily="Georgia,serif" fontSize="22" fontWeight="bold" fill="#3C3489">4</text>
            <text x="588" y="92" textAnchor="middle" fontFamily="Georgia,serif" fontSize="11" fontWeight="bold" fill="#3C3489">Acompanhamento</text>
            <text x="588" y="108" textAnchor="middle" fontFamily="Georgia,serif" fontSize="11" fontWeight="bold" fill="#3C3489">pós-compra</text>
            <text x="588" y="126" textAnchor="middle" fontFamily="Georgia,serif" fontSize="10" fill="#534AB7">suporte na transição</text>

            <text x="340" y="162" textAnchor="middle" fontFamily="Georgia,serif" fontSize="10" fill="#999">
              VendoContas.com — comprar conta Instagram com segurança e garantia
            </text>
          </svg>
        </section>

        {/* ── Preços ── */}
        <section className="ci-section">
          <h2>Quanto custa comprar uma conta Instagram?</h2>
          <p>
            Os preços variam conforme nicho, tamanho, engajamento e qualidade
            do histórico. Contas abaixo de R$ 50 quase sempre têm algum
            problema estrutural — seguidores falsos, histórico comprometido ou
            transferência insegura.
          </p>
          <ul>
            <li>
              <strong>Contas básicas sem nicho definido:</strong> R$ 100 a R$ 300
            </li>
            <li>
              <strong>Contas de nicho com engajamento ativo:</strong> R$ 300 a R$ 800
            </li>
            <li>
              <strong>Contas antigas (3 a 5 anos) com audiência segmentada:</strong> R$ 500 a R$ 1.500
            </li>
            <li>
              <strong>Contas verificadas ou monetizadas:</strong> R$ 800 a R$ 2.000+
            </li>
          </ul>
          <p>
            O custo de recuperar uma conta mal comprada — ou de reconstruir
            uma audiência morta — costuma superar o valor da diferença de preço
            entre uma conta ruim e uma boa.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section className="ci-faq">
          <h2>Perguntas frequentes sobre comprar conta Instagram</h2>
          <p className="ci-faq__sub">
            As dúvidas mais comuns — respondidas de forma direta.
          </p>

          {faqSchema.mainEntity.map((item, i) => (
            <div className="ci-faq__item" key={i}>
              <p className="ci-faq__q">{item.name}</p>
              <p className="ci-faq__a">{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </section>

        {/* ── Related posts ── */}
        <section className="ci-related">
          <h2>Guias relacionados</h2>
          <div className="ci-related__grid">
            <Link href="/blog/comprar-conta-instagram-10k-gratis" className="ci-related__link">
              Comprar conta Instagram 10k: o que avaliar
            </Link>
            <Link href="/blog/comprar-conta-instagram-feminina" className="ci-related__link">
              Comprar conta Instagram feminina
            </Link>
            <Link href="/blog/comprar-conta-instagram-antiga" className="ci-related__link">
              Comprar conta Instagram antiga
            </Link>
            <Link href="/blog/comprar-conta-instagram-mercado-livre" className="ci-related__link">
              Comprar no Mercado Livre: os riscos
            </Link>
            <Link href="/blog/como-analisar-conta-instagram-antes-comprar" className="ci-related__link">
              Como analisar uma conta antes de comprar
            </Link>
            <Link href="/blog/identificar-conta-instagram-manipulada" className="ci-related__link">
              Como identificar conta manipulada
            </Link>
          </div>
        </section>

        {/* ── CTA final ── */}
        <div className="ci-cta-block">
          <h2>Pronto para comprar conta Instagram?</h2>
          <p>
            Fale com a gente pelo WhatsApp. Mostramos as opções disponíveis,
            explicamos o histórico de cada conta e acompanhamos a transferência
            até você ter controle total.
          </p>
          <a href={WA} target="_blank" rel="noreferrer" className="ci-cta">
            Falar no WhatsApp agora
          </a>
        </div>
      </div>
    </>
  );
}
