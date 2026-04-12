import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function CategoriaTwitterPage() {
  const twitterProducts = products.filter(
    (product) => product.platform === "twitter"
  );

  return (
    <main
      style={{
        background: "#ffffff",
        color: "#111111",
        minHeight: "100vh"
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "56px 24px 24px"
        }}
      >
        <div style={{ marginBottom: "18px", color: "#6b7280", fontSize: "14px" }}>
          Início / X / Twitter
        </div>

        <div
          style={{
            display: "inline-block",
            marginBottom: "18px",
            padding: "6px 10px",
            borderRadius: "999px",
            background: "#f3f4f6",
            color: "#4b5563",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase"
          }}
        >
          Categoria principal
        </div>

        <h1
          style={{
            fontSize: "64px",
            lineHeight: 0.96,
            letterSpacing: "-0.06em",
            margin: "0 0 24px",
            maxWidth: "900px"
          }}
        >
          Comprar conta X / Twitter:
          <br />
          narrativa, audiência
          <br />
          e presença editorial
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.9,
            color: "#4b5563",
            maxWidth: "920px",
            margin: "0 0 26px"
          }}
        >
          Perfis de X / Twitter exigem leitura de contexto, histórico de postagens,
          qualidade da audiência e aderência temática. Esta página reúne os critérios
          essenciais para analisar uma conta antes da compra e conecta você às
          opções disponíveis.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            marginBottom: "18px"
          }}
        >
          <a
            href="https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20da%20categoria%20Twitter%20e%20quero%20consultar%20contas%20dispon%C3%ADveis."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              textDecoration: "none",
              background: "#111111",
              color: "#ffffff",
              padding: "14px 22px",
              borderRadius: "999px",
              fontWeight: 800,
              fontSize: "14px"
            }}
          >
            Falar no WhatsApp
          </a>

          <Link
            href="/blog"
            style={{
              display: "inline-block",
              textDecoration: "none",
              background: "#ffffff",
              color: "#111111",
              padding: "14px 22px",
              borderRadius: "999px",
              border: "1px solid #e5e7eb",
              fontWeight: 700,
              fontSize: "14px"
            }}
          >
            Ver artigos do blog
          </Link>
        </div>

        <div
          style={{
            fontSize: "14px",
            color: "#6b7280"
          }}
        >
          Palavra-chave principal: comprar conta twitter
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px"
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px"
          }}
        >
          <div
            style={{
              background: "#fafafa",
              border: "1px solid #ececec",
              borderRadius: "24px",
              padding: "22px"
            }}
          >
            <div style={{ fontSize: "11px", color: "#6b7280", marginBottom: "8px" }}>
              Análise
            </div>

            <h2 style={{ fontSize: "28px", margin: "0 0 10px" }}>
              O que observar antes de comprar conta Twitter?
            </h2>

            <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.8 }}>
              Histórico de tweets, coerência editorial, reputação, qualidade da
              audiência e risco de recuperação são pontos centrais na avaliação.
            </p>
          </div>

          <div
            style={{
              background: "#fafafa",
              border: "1px solid #ececec",
              borderRadius: "24px",
              padding: "22px"
            }}
          >
            <div style={{ fontSize: "11px", color: "#6b7280", marginBottom: "8px" }}>
              Estratégia
            </div>

            <h2 style={{ fontSize: "28px", margin: "0 0 10px" }}>
              X / Twitter é ritmo, pauta e percepção pública
            </h2>

            <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.8 }}>
              O valor de um perfil está na capacidade de circular narrativa, entrar
              em pauta e sustentar presença editorial com velocidade.
            </p>
          </div>

          <div
            style={{
              background: "#fafafa",
              border: "1px solid #ececec",
              borderRadius: "24px",
              padding: "22px"
            }}
          >
            <div style={{ fontSize: "11px", color: "#6b7280", marginBottom: "8px" }}>
              Conversão
            </div>

            <h2 style={{ fontSize: "28px", margin: "0 0 10px" }}>
              Conteúdo analítico + vitrine de perfis
            </h2>

            <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.8 }}>
              A categoria combina conteúdo estratégico para SEO com cards prontos
              para consulta e avanço comercial.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "28px 24px 18px"
        }}
      >
        <div style={{ marginBottom: "18px" }}>
          <div
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#6b7280",
              marginBottom: "8px"
            }}
          >
            Interlink estratégico
          </div>

          <h2
            style={{
              fontSize: "50px",
              lineHeight: 0.98,
              letterSpacing: "-0.05em",
              margin: "0 0 14px",
              maxWidth: "900px"
            }}
          >
            Leituras recomendadas sobre compra de conta Twitter
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px"
          }}
        >
          <div
            style={{
              background: "#fafafa",
              border: "1px solid #ececec",
              borderRadius: "24px",
              padding: "22px"
            }}
          >
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#6b7280",
                marginBottom: "8px"
              }}
            >
              Análise
            </div>

            <h3
              style={{
                fontSize: "24px",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                margin: "0 0 10px"
              }}
            >
              Como avaliar uma conta antiga antes da compra
            </h3>

            <p
              style={{
                margin: 0,
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: "15px"
              }}
            >
              Um guia para entender reputação, padrão de postagens, histórico de
              posicionamento e compatibilidade temática.
            </p>
          </div>

          <div
            style={{
              background: "#fafafa",
              border: "1px solid #ececec",
              borderRadius: "24px",
              padding: "22px"
            }}
          >
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#6b7280",
                marginBottom: "8px"
              }}
            >
              Estratégia
            </div>

            <h3
              style={{
                fontSize: "24px",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                margin: "0 0 10px"
              }}
            >
              Conta politica, antiga ou nichada: qual faz mais sentido?
            </h3>

            <p
              style={{
                margin: 0,
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: "15px"
              }}
            >
              Cada perfil atende um objetivo diferente: narrativa, autoridade,
              repercussão, segmentação ou valor histórico.
            </p>
          </div>

          <div
            style={{
              background: "#fafafa",
              border: "1px solid #ececec",
              borderRadius: "24px",
              padding: "22px"
            }}
          >
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#6b7280",
                marginBottom: "8px"
              }}
            >
              Biblioteca
            </div>

            <h3
              style={{
                fontSize: "24px",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                margin: "0 0 10px"
              }}
            >
              Ver todos os artigos do blog
            </h3>

            <p
              style={{
                margin: "0 0 14px",
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: "15px"
              }}
            >
              Use o blog como camada de decisão para qualquer escolha envolvendo
              perfis editoriais e ativos digitais.
            </p>

            <Link
              href="/blog"
              style={{
                color: "#111111",
                fontWeight: 700,
                textDecoration: "underline"
              }}
            >
              Ir para o blog
            </Link>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 24px 20px"
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#6b7280",
              marginBottom: "8px"
            }}
          >
            Vitrine de ativos
          </div>

          <h2
            style={{
              fontSize: "50px",
              lineHeight: 0.98,
              letterSpacing: "-0.05em",
              margin: "0 0 12px",
              maxWidth: "900px"
            }}
          >
            Contas X / Twitter disponíveis
          </h2>

          <p
            style={{
              margin: 0,
              color: "#4b5563",
              lineHeight: 1.8,
              fontSize: "17px",
              maxWidth: "860px"
            }}
          >
            Abaixo estão algumas opções organizadas para consulta, comparação e
            avanço comercial. A ideia é unir SEO editorial e conversão prática na
            mesma página.
          </p>
        </div>

        {twitterProducts.length === 0 ? (
          <div
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "#fafafa",
              border: "1px solid #ececec"
            }}
          >
            Nenhuma conta X / Twitter encontrada.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "18px"
            }}
          >
            {twitterProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </section>

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "28px 24px 72px"
        }}
      >
        <div
          style={{
            background: "#fafafa",
            border: "1px solid #ececec",
            borderRadius: "24px",
            padding: "24px"
          }}
        >
          <h2 style={{ fontSize: "36px", marginBottom: "12px" }}>
            Comprar conta Twitter com mais critério
          </h2>

          <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.9 }}>
            Trabalhamos com ativos digitais como Instagram, TikTok, YouTube, BMs,
            Twitch, X / Twitter e outros formatos. O objetivo é reduzir erro e
            aumentar a precisão da decisão.
          </p>
        </div>
      </section>
    </main>
  );
}