export default function HomePage() {
  const whatsappLink =
    "https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20do%20Google.%20Quero%20saber%20mais%20sobre%20as%20p%C3%A1ginas%20dispon%C3%ADveis";

  const categoryCardStyle: React.CSSProperties = {
    display: "block",
    textDecoration: "none",
    color: "#111111",
    backgroundColor: "#ffffff",
    border: "1px solid rgba(17,17,17,0.08)",
    borderRadius: "20px",
    padding: "24px",
    minHeight: "180px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
  };

  const smallLabelStyle: React.CSSProperties = {
    margin: "0 0 10px 0",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize: "12px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "rgba(17,17,17,0.55)",
  };

  return (
    <main>
      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "72px 24px 48px",
        }}
      >
        <div
          style={{
            maxWidth: "860px",
          }}
        >
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
            Marketplace de ativos digitais
          </p>

          <h1
            style={{
              margin: "0 0 20px 0",
              fontSize: "72px",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              maxWidth: "980px",
            }}
          >
            Comprar conta Instagram com mais critério, segurança e estratégia.
          </h1>

          <p
            style={{
              margin: "0 0 28px 0",
              maxWidth: "760px",
              fontSize: "24px",
              lineHeight: 1.45,
              color: "rgba(17,17,17,0.78)",
            }}
          >
            A VendoContas reúne estrutura, conteúdo e direcionamento para quem
            quer comprar conta Instagram, operar com BMs para contingência,
            adquirir canais do YouTube, contas TikTok, Twitch, X/Twitter e
            contas de jogos sem tomar decisões cegas.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "22px",
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
              Ler o blog
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
            CNPJ 42.205.606/0001-03
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "20px 24px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "20px",
          }}
        >
          <a href="/categoria/instagram" style={categoryCardStyle}>
            <p style={smallLabelStyle}>Categoria principal</p>
            <h2
              style={{
                margin: "0 0 12px 0",
                fontSize: "34px",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              Comprar conta Instagram
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
              Hub principal com conteúdo, critérios de compra, análise de risco
              e interlinkagem para os artigos mais estratégicos do site.
            </p>
          </a>

          <a href="/categoria/bm-facebook" style={categoryCardStyle}>
            <p style={smallLabelStyle}>Contingência</p>
            <h2
              style={{
                margin: "0 0 12px 0",
                fontSize: "34px",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              BMs para Facebook
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
              Estrutura voltada para contingência, continuidade operacional e
              estabilidade em operações que exigem múltiplos ativos.
            </p>
          </a>

          <a href="/categoria/youtube" style={categoryCardStyle}>
            <p style={smallLabelStyle}>Audiência</p>
            <h2
              style={{
                margin: "0 0 12px 0",
                fontSize: "34px",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              Canais do YouTube
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
              Canais, histórico de audiência, monetização e critérios de
              avaliação para quem busca ativos digitais com mais profundidade.
            </p>
          </a>

          <a href="/categoria/tiktok" style={categoryCardStyle}>
            <p style={smallLabelStyle}>Crescimento</p>
            <h2
              style={{
                margin: "0 0 12px 0",
                fontSize: "34px",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              Contas TikTok
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
              Páginas com foco em alcance, nicho, retenção e capacidade real de
              distribuição dentro de uma plataforma mais volátil.
            </p>
          </a>

          <a href="/categoria/twitch" style={categoryCardStyle}>
            <p style={smallLabelStyle}>Live</p>
            <h2
              style={{
                margin: "0 0 12px 0",
                fontSize: "34px",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              Contas Twitch
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
              Avaliação de comunidade, base recorrente e potencial de
              monetização para operações focadas em transmissão ao vivo.
            </p>
          </a>

          <a href="/categoria/x-twitter" style={categoryCardStyle}>
            <p style={smallLabelStyle}>Autoridade</p>
            <h2
              style={{
                margin: "0 0 12px 0",
                fontSize: "34px",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              Contas X/Twitter
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
              Perfis voltados para influência, distribuição de opinião, marca
              pessoal e ecossistemas que dependem de autoridade social.
            </p>
          </a>

          <a href="/categoria/jogos" style={categoryCardStyle}>
            <p style={smallLabelStyle}>Inventário</p>
            <h2
              style={{
                margin: "0 0 12px 0",
                fontSize: "34px",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              Contas de Jogos
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
              Ativos para múltiplos jogos e ecossistemas, com foco em conta,
              progressão, inventário, raridade e valor percebido.
            </p>
          </a>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "40px 24px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "920px",
          }}
        >
          <p style={smallLabelStyle}>Critério antes da compra</p>

          <h2
            style={{
              margin: "0 0 18px 0",
              fontSize: "56px",
              lineHeight: 0.98,
              letterSpacing: "-0.04em",
              maxWidth: "820px",
            }}
          >
            O problema não é só comprar uma conta. É comprar errado.
          </h2>

          <p
            style={{
              margin: "0 0 18px 0",
              fontSize: "24px",
              lineHeight: 1.5,
              color: "rgba(17,17,17,0.78)",
              maxWidth: "860px",
            }}
          >
            Boa parte das perdas nesse mercado não acontece por falta de oferta,
            mas por falta de leitura estratégica. Histórico artificial,
            engajamento inflado, base sem consistência, ativos frágeis e
            contas incompatíveis com a operação destroem resultado.
          </p>

          <p
            style={{
              margin: 0,
              fontSize: "22px",
              lineHeight: 1.55,
              color: "rgba(17,17,17,0.78)",
              maxWidth: "860px",
            }}
          >
            A proposta da VendoContas é reduzir ruído, organizar a decisão e
            conectar o usuário ao ativo mais coerente com o objetivo dele.
          </p>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "52px 24px 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(17,17,17,0.08)",
              borderRadius: "20px",
              padding: "24px",
            }}
          >
            <p style={smallLabelStyle}>01</p>
            <h3
              style={{
                margin: "0 0 12px 0",
                fontSize: "30px",
                lineHeight: 1.06,
              }}
            >
              Histórico e estabilidade
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
              O tempo de vida do ativo, a coerência da evolução e a origem da
              audiência dizem mais do que números soltos no print.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(17,17,17,0.08)",
              borderRadius: "20px",
              padding: "24px",
            }}
          >
            <p style={smallLabelStyle}>02</p>
            <h3
              style={{
                margin: "0 0 12px 0",
                fontSize: "30px",
                lineHeight: 1.06,
              }}
            >
              Compatibilidade operacional
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
              Uma conta pode ser grande e ainda assim inútil para a operação
              errada. O ativo precisa combinar com nicho, objetivo e modelo de
              monetização.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(17,17,17,0.08)",
              borderRadius: "20px",
              padding: "24px",
            }}
          >
            <p style={smallLabelStyle}>03</p>
            <h3
              style={{
                margin: "0 0 12px 0",
                fontSize: "30px",
                lineHeight: 1.06,
              }}
            >
              Risco invisível
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
              Recuperação, base fraca, contingência ruim e dependência de
              atalhos são fatores que comprometem o valor real do ativo.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "56px 24px 24px",
        }}
      >
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
              fontSize: "48px",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              maxWidth: "780px",
            }}
          >
            Quer saber quais páginas estão disponíveis agora?
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
            Fale direto no WhatsApp e receba direcionamento sobre ativos
            disponíveis, categorias e possibilidades de operação.
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

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "56px 24px 32px",
        }}
      >
        <p style={smallLabelStyle}>Leitura estratégica</p>

        <h2
          style={{
            margin: "0 0 20px 0",
            fontSize: "52px",
            lineHeight: 0.98,
            letterSpacing: "-0.04em",
            maxWidth: "760px",
          }}
        >
          O blog existe para apoiar decisão, não para encher página.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "20px",
          }}
        >
          <a href="/blog" style={categoryCardStyle}>
            <p style={smallLabelStyle}>Conteúdo</p>
            <h3
              style={{
                margin: "0 0 10px 0",
                fontSize: "30px",
                lineHeight: 1.05,
              }}
            >
              Ver todos os artigos
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
              Acesse os conteúdos já publicados e use o blog como camada de
              análise antes de qualquer decisão comercial.
            </p>
          </a>

          <a href="/categoria/instagram" style={categoryCardStyle}>
            <p style={smallLabelStyle}>Hub principal</p>
            <h3
              style={{
                margin: "0 0 10px 0",
                fontSize: "30px",
                lineHeight: 1.05,
              }}
            >
              Conteúdo sobre Instagram
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
              Concentre as leituras mais estratégicas sobre compra, análise,
              risco, histórico e valor real de uma conta Instagram.
            </p>
          </a>

          <a href="/categoria/bm-facebook" style={categoryCardStyle}>
            <p style={smallLabelStyle}>Operação</p>
            <h3
              style={{
                margin: "0 0 10px 0",
                fontSize: "30px",
                lineHeight: 1.05,
              }}
            >
              Conteúdo sobre BMs
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
              Use a seção de BMs para sustentar termos ligados a contingência,
              estrutura, estabilidade e continuidade operacional.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}