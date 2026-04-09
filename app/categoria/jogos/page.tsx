import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprar Conta de Jogos: Guia Completo para Escolher com Critério",
  description:
    "Entenda como comprar conta de jogos com mais segurança. Veja critérios essenciais, progressão, raridade, inventário, histórico e o que realmente importa antes de fechar negócio.",
  keywords: [
    "comprar conta de jogos",
    "comprar conta gamer",
    "conta de jogo pronta",
    "comprar conta com skins",
    "comprar conta com itens raros",
    "comprar conta de game segura",
    "comprar conta upada",
    "conta de jogo com inventário",
  ],
  alternates: {
    canonical: "https://vendocontas.com/categoria/jogos",
  },
  openGraph: {
    title: "Comprar Conta de Jogos: Guia Completo para Escolher com Critério",
    description:
      "Entenda como comprar conta de jogos com mais segurança. Veja critérios essenciais, progressão, raridade, inventário, histórico e o que realmente importa antes de fechar negócio.",
    url: "https://vendocontas.com/categoria/jogos",
    siteName: "VendoContas",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Page() {
  const whatsappLink =
    "https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20do%20Google.%20Quero%20saber%20mais%20sobre%20as%20p%C3%A1ginas%20dispon%C3%ADveis";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Comprar conta de jogos vale a pena?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Comprar conta de jogos pode valer a pena quando o ativo possui progressão real, inventário valioso, histórico coerente e utilidade prática para o objetivo do comprador.",
        },
      },
      {
        "@type": "Question",
        name: "O que observar antes de comprar uma conta de jogo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "É importante avaliar nível, progressão, inventário, itens raros, histórico da conta, tipo de acesso e valor percebido dentro do ecossistema daquele jogo.",
        },
      },
      {
        "@type": "Question",
        name: "Conta com muitos itens é sempre melhor?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não. O valor depende da raridade, utilidade, demanda no mercado e relevância real dos itens dentro do jogo.",
        },
      },
      {
        "@type": "Question",
        name: "Onde falar para saber quais contas de jogos estão disponíveis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O canal mais direto é o WhatsApp da VendoContas, onde você pode receber direcionamento sobre contas, progressão, inventário e categorias mais alinhadas com sua necessidade.",
        },
      },
    ],
  };

  const sectionStyle: React.CSSProperties = {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "48px 24px",
  };

  const contentWidth: React.CSSProperties = {
    maxWidth: "920px",
  };

  const labelStyle: React.CSSProperties = {
    margin: "0 0 12px 0",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: "12px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "rgba(17,17,17,0.55)",
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    border: "1px solid rgba(17,17,17,0.08)",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
  };

  const linkCardStyle: React.CSSProperties = {
    display: "block",
    textDecoration: "none",
    color: "#111111",
    backgroundColor: "#ffffff",
    border: "1px solid rgba(17,17,17,0.08)",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "64px 24px 36px",
        }}
      >
        <nav
          aria-label="Breadcrumb"
          style={{
            marginBottom: "18px",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: "14px",
            color: "rgba(17,17,17,0.58)",
          }}
        >
          <a
            href="/"
            style={{ textDecoration: "none", color: "rgba(17,17,17,0.58)" }}
          >
            Início
          </a>{" "}
          / <span style={{ color: "#111111", fontWeight: 600 }}>Jogos</span>
        </nav>

        <div style={{ maxWidth: "980px" }}>
          <p
            style={{
              margin: "0 0 18px 0",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(17,17,17,0.58)",
            }}
          >
            Categoria de inventário e progressão
          </p>

          <h1
            style={{
              margin: "0 0 22px 0",
              fontSize: "68px",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              maxWidth: "980px",
            }}
          >
            Comprar conta de jogos com mais critério, valor e utilidade real
          </h1>

          <p
            style={{
              margin: "0 0 26px 0",
              maxWidth: "840px",
              fontSize: "24px",
              lineHeight: 1.5,
              color: "rgba(17,17,17,0.78)",
            }}
          >
            Comprar conta de jogos exige mais do que olhar para prints ou itens
            isolados. O valor do ativo depende da progressão, da raridade, do
            inventário, do histórico da conta e da utilidade real dentro do
            ecossistema daquele jogo.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "18px",
            }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                backgroundColor: "#111111",
                color: "#ffffff",
                padding: "14px 22px",
                borderRadius: "999px",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              Falar no WhatsApp
            </a>

            <a
              href="/blog"
              style={{
                textDecoration: "none",
                color: "#111111",
                padding: "14px 22px",
                borderRadius: "999px",
                border: "1px solid rgba(17,17,17,0.14)",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 600,
                fontSize: "15px",
              }}
            >
              Ver artigos do blog
            </a>
          </div>

          <p
            style={{
              margin: 0,
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "14px",
              color: "rgba(17,17,17,0.55)",
            }}
          >
            Palavra-chave principal: comprar conta de jogos
          </p>
        </div>
      </section>

      <section style={sectionStyle}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <p style={labelStyle}>01</p>
            <h2
              style={{
                margin: "0 0 12px 0",
                fontSize: "30px",
                lineHeight: 1.06,
              }}
            >
              Progressão da conta
            </h2>
            <p
              style={{
                margin: 0,
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "rgba(17,17,17,0.72)",
              }}
            >
              Em contas de jogos, o valor muitas vezes está na progressão. Nível,
              desbloqueios, tempo investido e status acumulado mudam totalmente
              a leitura do ativo.
            </p>
          </div>

          <div style={cardStyle}>
            <p style={labelStyle}>02</p>
            <h2
              style={{
                margin: "0 0 12px 0",
                fontSize: "30px",
                lineHeight: 1.06,
              }}
            >
              Inventário e raridade
            </h2>
            <p
              style={{
                margin: 0,
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "rgba(17,17,17,0.72)",
              }}
            >
              Nem todo inventário tem o mesmo peso. O valor de uma conta depende
              da raridade, da utilidade e da demanda real dos itens dentro do
              jogo ou do mercado da comunidade.
            </p>
          </div>

          <div style={cardStyle}>
            <p style={labelStyle}>03</p>
            <h2
              style={{
                margin: "0 0 12px 0",
                fontSize: "30px",
                lineHeight: 1.06,
              }}
            >
              Utilidade prática
            </h2>
            <p
              style={{
                margin: 0,
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "rgba(17,17,17,0.72)",
              }}
            >
              O ativo precisa fazer sentido para o objetivo do comprador. Às
              vezes, uma conta menos vistosa é mais valiosa porque atende melhor
              a uma necessidade real de jogo ou revenda.
            </p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={contentWidth}>
          <p style={labelStyle}>Resposta direta</p>

          <h2
            style={{
              margin: "0 0 16px 0",
              fontSize: "52px",
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
            }}
          >
            Comprar conta de jogos vale a pena?
          </h2>

          <p
            style={{
              margin: "0 0 22px 0",
              fontSize: "24px",
              lineHeight: 1.55,
              color: "rgba(17,17,17,0.78)",
            }}
          >
            Comprar conta de jogos vale a pena quando a conta possui progressão
            real, inventário valioso, itens relevantes e utilidade prática para
            o objetivo do comprador.
          </p>

          <h2
            style={{
              margin: "32px 0 16px 0",
              fontSize: "52px",
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
            }}
          >
            O que observar antes de comprar uma conta?
          </h2>

          <p
            style={{
              margin: "0 0 22px 0",
              fontSize: "24px",
              lineHeight: 1.55,
              color: "rgba(17,17,17,0.78)",
            }}
          >
            É importante avaliar nível, progressão, inventário, itens raros,
            histórico da conta, tipo de acesso e valor percebido dentro daquele
            jogo específico.
          </p>

          <h2
            style={{
              margin: "32px 0 16px 0",
              fontSize: "52px",
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
            }}
          >
            Conta com muitos itens é sempre melhor?
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: "24px",
              lineHeight: 1.55,
              color: "rgba(17,17,17,0.78)",
            }}
          >
            Não. O valor depende da raridade, da utilidade, da demanda e da
            relevância real desses itens dentro do ecossistema do jogo.
          </p>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={contentWidth}>
          <p style={labelStyle}>Análise estratégica</p>

          <h2
            style={{
              margin: "0 0 18px 0",
              fontSize: "52px",
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
            }}
          >
            O que realmente pesa na hora de comprar conta de jogos
          </h2>

          <div
            style={{
              fontSize: "22px",
              lineHeight: 1.65,
              color: "rgba(17,17,17,0.78)",
            }}
          >
            <p style={{ marginTop: 0 }}>
              Quem procura comprar conta de jogos normalmente quer acelerar tempo,
              acessar itens raros ou assumir uma progressão já construída. O erro
              é olhar só para prints bonitos ou promessas genéricas.
            </p>

            <p>
              Contas gamer precisam ser analisadas dentro do contexto do jogo:
              raridade, utilidade, momento do meta, valor de inventário, tipo de
              progressão e demanda real daquela comunidade.
            </p>

            <p>
              Um ativo pode parecer valioso e ainda assim ter pouca liquidez ou
              baixa utilidade prática se os itens não forem relevantes no jogo
              ou no mercado do nicho.
            </p>

            <p style={{ marginBottom: 0 }}>
              Se sua operação também envolve presença social, veja a categoria de{" "}
              <a
                href="/categoria/instagram"
                style={{ color: "#111111", fontWeight: 700 }}
              >
                comprar conta instagram
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={labelStyle}>Interlink estratégico</p>

        <h2
          style={{
            margin: "0 0 20px 0",
            fontSize: "48px",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            maxWidth: "780px",
          }}
        >
          Leituras recomendadas para expandir sua análise
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "20px",
          }}
        >
          <a href="/blog" style={linkCardStyle}>
            <p style={labelStyle}>Biblioteca</p>
            <h3
              style={{
                margin: "0 0 10px 0",
                fontSize: "28px",
                lineHeight: 1.05,
              }}
            >
              Ver todos os artigos do blog
            </h3>
            <p
              style={{
                margin: 0,
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "rgba(17,17,17,0.72)",
              }}
            >
              Use o blog como camada de apoio para leitura mais estratégica.
            </p>
          </a>

          <a href="/categoria/instagram" style={linkCardStyle}>
            <p style={labelStyle}>Instagram</p>
            <h3
              style={{
                margin: "0 0 10px 0",
                fontSize: "28px",
                lineHeight: 1.05,
              }}
            >
              Comprar conta Instagram
            </h3>
            <p
              style={{
                margin: 0,
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "rgba(17,17,17,0.72)",
              }}
            >
              Categoria principal para presença, crescimento e autoridade social.
            </p>
          </a>

          <a href="/categoria/twitter" style={linkCardStyle}>
            <p style={labelStyle}>Autoridade</p>
            <h3
              style={{
                margin: "0 0 10px 0",
                fontSize: "28px",
                lineHeight: 1.05,
              }}
            >
              Comprar conta X/Twitter
            </h3>
            <p
              style={{
                margin: 0,
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "16px",
                lineHeight: 1.7,
                color: "rgba(17,17,17,0.72)",
              }}
            >
              Perfis para narrativa, influência e distribuição social.
            </p>
          </a>
        </div>
      </section>

      <section style={sectionStyle}>
        <p style={labelStyle}>Outros ativos digitais</p>

        <h2
          style={{
            margin: "0 0 20px 0",
            fontSize: "48px",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            maxWidth: "760px",
          }}
        >
          Categorias relacionadas para ampliar sua operação
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "20px",
          }}
        >
          <a href="/categoria/instagram" style={linkCardStyle}>
            <p style={labelStyle}>Principal</p>
            <h3 style={{ margin: "0 0 10px 0", fontSize: "24px" }}>
              Comprar conta Instagram
            </h3>
            <p
              style={{
                margin: 0,
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "rgba(17,17,17,0.72)",
              }}
            >
              Ativos para presença, crescimento e autoridade social.
            </p>
          </a>

          <a href="/categoria/bms" style={linkCardStyle}>
            <p style={labelStyle}>Contingência</p>
            <h3 style={{ margin: "0 0 10px 0", fontSize: "24px" }}>
              Comprar BM Facebook
            </h3>
            <p
              style={{
                margin: 0,
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "rgba(17,17,17,0.72)",
              }}
            >
              Estrutura para contingência e continuidade operacional.
            </p>
          </a>

          <a href="/categoria/tiktok" style={linkCardStyle}>
            <p style={labelStyle}>Crescimento</p>
            <h3 style={{ margin: "0 0 10px 0", fontSize: "24px" }}>
              Comprar conta TikTok
            </h3>
            <p
              style={{
                margin: 0,
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "rgba(17,17,17,0.72)",
              }}
            >
              Ativos focados em distribuição, alcance e velocidade de resposta.
            </p>
          </a>

          <a href="/categoria/youtube" style={linkCardStyle}>
            <p style={labelStyle}>Audiência</p>
            <h3 style={{ margin: "0 0 10px 0", fontSize: "24px" }}>
              Comprar canal YouTube
            </h3>
            <p
              style={{
                margin: 0,
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "rgba(17,17,17,0.72)",
              }}
            >
              Canais com base, histórico e potencial de monetização.
            </p>
          </a>
        </div>
      </section>

      <section style={sectionStyle}>
        <div
          style={{
            backgroundColor: "#111111",
            color: "#f7f7f2",
            borderRadius: "28px",
            padding: "40px",
          }}
        >
          <p
            style={{
              margin: "0 0 12px 0",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: 0.72,
            }}
          >
            Conversão
          </p>

          <h2
            style={{
              margin: "0 0 14px 0",
              fontSize: "46px",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              maxWidth: "780px",
            }}
          >
            Quer saber quais contas de jogos estão disponíveis agora?
          </h2>

          <p
            style={{
              margin: "0 0 24px 0",
              maxWidth: "720px",
              fontSize: "22px",
              lineHeight: 1.5,
              color: "rgba(247,247,242,0.82)",
            }}
          >
            Fale no WhatsApp e receba direcionamento sobre contas, progressão,
            inventário, itens e categorias mais compatíveis com sua necessidade.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              textDecoration: "none",
              backgroundColor: "#25D366",
              color: "#ffffff",
              padding: "14px 22px",
              borderRadius: "999px",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "15px",
              fontWeight: 700,
            }}
          >
            Falar com a VendoContas
          </a>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={contentWidth}>
          <p style={labelStyle}>Perguntas frequentes</p>

          <h2
            style={{
              margin: "0 0 20px 0",
              fontSize: "46px",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}
          >
            FAQ sobre comprar conta de jogos
          </h2>

          <div
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            <div style={cardStyle}>
              <h3
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "26px",
                  lineHeight: 1.1,
                }}
              >
                Comprar conta de jogos vale a pena?
              </h3>
              <p
                style={{
                  margin: 0,
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "rgba(17,17,17,0.72)",
                }}
              >
                Vale a pena quando a conta possui progressão real, inventário
                valioso e utilidade prática para o objetivo do comprador.
              </p>
            </div>

            <div style={cardStyle}>
              <h3
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "26px",
                  lineHeight: 1.1,
                }}
              >
                O que observar antes de comprar uma conta?
              </h3>
              <p
                style={{
                  margin: 0,
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "rgba(17,17,17,0.72)",
                }}
              >
                Nível, progressão, inventário, itens raros, histórico da conta,
                tipo de acesso e valor percebido dentro daquele jogo.
              </p>
            </div>

            <div style={cardStyle}>
              <h3
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "26px",
                  lineHeight: 1.1,
                }}
              >
                Conta com muitos itens é sempre melhor?
              </h3>
              <p
                style={{
                  margin: 0,
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "rgba(17,17,17,0.72)",
                }}
              >
                Não. O valor depende da raridade, da utilidade e da demanda real
                desses itens dentro do ecossistema do jogo.
              </p>
            </div>

            <div style={cardStyle}>
              <h3
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "26px",
                  lineHeight: 1.1,
                }}
              >
                Onde falar para saber quais contas estão disponíveis?
              </h3>
              <p
                style={{
                  margin: 0,
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "rgba(17,17,17,0.72)",
                }}
              >
                O canal mais direto é o WhatsApp da VendoContas, onde você pode
                receber direcionamento sobre contas e categorias disponíveis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}