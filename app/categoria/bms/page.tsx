import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function CategoriaBmsPage() {
  const bmsProducts = products.filter((product) => product.platform === "bms");

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
          Início / BMs
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
          Comprar BM:
          <br />
          guia completo para contingência,
          <br />
          estrutura e escala
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
          BMs são ativos estratégicos para operações que exigem redundância,
          contingência e controle publicitário. Esta página reúne os critérios
          essenciais para avaliar uma BM antes da compra e conecta você à vitrine
          de ativos disponíveis.
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
            href="https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20da%20categoria%20BMs%20e%20quero%20consultar%20ativos%20dispon%C3%ADveis."
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
          Palavra-chave principal: comprar BM
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
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#6b7280",
                marginBottom: "8px"
              }}
            >
              Estrutura
            </div>

            <h2
              style={{
                fontSize: "28px",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                margin: "0 0 10px"
              }}
            >
              O que observar antes de comprar uma BM?
            </h2>

            <p
              style={{
                margin: 0,
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: "15px"
              }}
            >
              Histórico de uso, limite, estabilidade, integridade estrutural,
              compatibilidade com a operação e risco de perda são os elementos
              centrais da análise.
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
              Contingência
            </div>

            <h2
              style={{
                fontSize: "28px",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                margin: "0 0 10px"
              }}
            >
              BM não é só reserva: é arquitetura operacional
            </h2>

            <p
              style={{
                margin: 0,
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: "15px"
              }}
            >
              Uma BM bem escolhida reduz fragilidade, ajuda na redundância de
              ativos e melhora o poder de reação da operação.
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
              Conversão
            </div>

            <h2
              style={{
                fontSize: "28px",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                margin: "0 0 10px"
              }}
            >
              Conteúdo técnico + vitrine de ativos
            </h2>

            <p
              style={{
                margin: 0,
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: "15px"
              }}
            >
              Esta categoria combina camada editorial para SEO com cards prontos
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
            Leituras recomendadas sobre compra de BM
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
              Como avaliar uma BM antes da compra
            </h3>

            <p
              style={{
                margin: 0,
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: "15px"
              }}
            >
              Um guia prático para entender estrutura, segurança, estabilidade e
              aplicação operacional do ativo.
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
              BM para contingência: quando faz sentido
            </h3>

            <p
              style={{
                margin: 0,
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: "15px"
              }}
            >
              Um conteúdo importante para operações que dependem de redundância,
              escala e proteção contra paralisação.
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
              infraestrutura de tráfego e ativos digitais.
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
            BMs disponíveis
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

        {bmsProducts.length === 0 ? (
          <div
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "#fafafa",
              border: "1px solid #ececec",
              color: "#111827"
            }}
          >
            Nenhuma BM foi encontrada no momento.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "18px"
            }}
          >
            {bmsProducts.map((product) => (
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
          <h2
            style={{
              fontSize: "36px",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              margin: "0 0 12px"
            }}
          >
            Comprar BM com mais estrutura
          </h2>

          <p
            style={{
              margin: "0 0 12px",
              color: "#4b5563",
              lineHeight: 1.9,
              fontSize: "17px",
              maxWidth: "980px"
            }}
          >
            A VendoContas trabalha com foco em compra de conta Instagram, BMs para
            contingência, canais do YouTube, contas TikTok, Twitch, X/Twitter e
            ativos digitais com potencial operacional. O conteúdo editorial existe
            para educar, reduzir erro e aumentar a precisão da decisão.
          </p>

          <p
            style={{
              margin: 0,
              color: "#6b7280",
              lineHeight: 1.8,
              fontSize: "15px"
            }}
          >
            CNPJ: 42.205.606/0001-03
          </p>
        </div>
      </section>
    </main>
  );
}