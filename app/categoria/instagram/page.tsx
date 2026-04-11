import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function CategoriaInstagramPage() {
  const instagramProducts = products.filter(
    (product) => product.platform === "instagram"
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
          Início / Instagram
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
          Comprar conta Instagram:
          <br />
          guia completo para escolher
          <br />
          com segurança
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
          Comprar conta Instagram pode acelerar uma operação digital, mas a decisão
          errada destrói alcance, credibilidade e resultado. Esta página concentra
          os critérios mais importantes para analisar um ativo antes da compra e
          conecta você aos conteúdos que sustentam essa decisão com mais profundidade.
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
            href="https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20da%20categoria%20Instagram%20e%20quero%20consultar%20contas%20dispon%C3%ADveis."
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
          Palavra-chave principal: comprar conta instagram
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
              Análise
            </div>

            <h2
              style={{
                fontSize: "28px",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                margin: "0 0 10px"
              }}
            >
              O que observar antes de comprar conta Instagram?
            </h2>

            <p
              style={{
                margin: 0,
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: "15px"
              }}
            >
              Histórico, engajamento, nicho, consistência da audiência,
              compatibilidade com a operação, risco de recuperação e valor real do
              ativo são os pilares principais.
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

            <h2
              style={{
                fontSize: "28px",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                margin: "0 0 10px"
              }}
            >
              Comprar conta pronta não substitui critério
            </h2>

            <p
              style={{
                margin: 0,
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: "15px"
              }}
            >
              O objetivo não é só comprar um número. É comprar um ativo coerente
              com a sua operação, com vocação comercial e contexto real de uso.
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
              Conteúdo editorial + vitrine de ativos
            </h2>

            <p
              style={{
                margin: 0,
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: "15px"
              }}
            >
              Esta categoria funciona como camada de SEO e também como vitrine para
              consulta, comparação e avanço para o WhatsApp.
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
            Leituras recomendadas sobre compra de conta Instagram
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
              Como analisar uma conta Instagram antes de comprar
            </h3>

            <p
              style={{
                margin: 0,
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: "15px"
              }}
            >
              Um dos conteúdos mais importantes para filtrar risco, entender
              histórico e evitar compra impulsiva.
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
              Comprar conta Instagram: critérios antes de fechar negócio
            </h3>

            <p
              style={{
                margin: 0,
                color: "#4b5563",
                lineHeight: 1.8,
                fontSize: "15px"
              }}
            >
              Um complemento estratégico para quem quer comprar conta Instagram com
              foco em operação e não só em aparência.
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
              Use o blog como camada de decisão para qualquer escolha mais sensível
              envolvendo ativos digitais.
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
            Contas de Instagram disponíveis
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
            Abaixo estão algumas opções organizadas por nicho, preço e sinais
            iniciais de tração. Essa camada transforma a categoria em uma página
            híbrida: conteúdo para SEO e cards para conversão.
          </p>
        </div>

        {instagramProducts.length === 0 ? (
          <div
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "#fafafa",
              border: "1px solid #ececec",
              color: "#111827"
            }}
          >
            Nenhum produto de Instagram foi encontrado no momento.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "18px"
            }}
          >
            {instagramProducts.map((product) => (
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
            Comprar conta Instagram com mais critério
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
            A VendoContas atua com foco em compra de conta Instagram, além de BMs
            para contingência, canais do YouTube, contas TikTok, Twitch, X/Twitter
            e contas de jogos. O blog existe para educar, filtrar riscos e aumentar
            a precisão de cada decisão.
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