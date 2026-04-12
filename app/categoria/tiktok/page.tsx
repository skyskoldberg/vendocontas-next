import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function CategoriaTikTokPage() {
  const tiktokProducts = products.filter(
    (product) => product.platform === "tiktok"
  );

  return (
    <main
      style={{
        background: "#ffffff",
        color: "#111111",
        minHeight: "100vh"
      }}
    >
      {/* HERO */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "56px 24px 24px"
        }}
      >
        <div style={{ marginBottom: "18px", color: "#6b7280", fontSize: "14px" }}>
          Início / TikTok
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
          Comprar conta TikTok:
          <br />
          alcance, viralização
          <br />
          e conversão
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
          O TikTok exige velocidade, consistência e leitura de tendência.
          Esta página reúne os critérios essenciais para avaliar uma conta antes
          da compra e conecta você diretamente às opções disponíveis para operação.
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
            href="https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20da%20categoria%20TikTok%20e%20quero%20consultar%20contas%20dispon%C3%ADveis."
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
          Palavra-chave principal: comprar conta TikTok
        </div>
      </section>

      {/* BLOCOS SEO */}
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
              O que observar antes de comprar conta TikTok?
            </h2>

            <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.8 }}>
              Frequência de postagem, histórico de alcance, consistência de nicho,
              retenção e potencial de viralização são fatores críticos.
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
              TikTok é sobre distribuição, não só seguidores
            </h2>

            <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.8 }}>
              O valor real está na capacidade de entrega do conteúdo, não apenas
              no número bruto de seguidores.
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
              Conteúdo + vitrine de contas
            </h2>

            <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.8 }}>
              A página combina conteúdo estratégico com cards prontos para consulta
              e avanço direto para negociação.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 24px 20px"
        }}
      >
        <h2 style={{ fontSize: "48px", marginBottom: "16px" }}>
          Contas TikTok disponíveis
        </h2>

        {tiktokProducts.length === 0 ? (
          <div
            style={{
              padding: "24px",
              borderRadius: "20px",
              background: "#fafafa",
              border: "1px solid #ececec"
            }}
          >
            Nenhuma conta TikTok encontrada.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "18px"
            }}
          >
            {tiktokProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* FINAL SEO */}
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
            Comprar conta TikTok com mais estratégia
          </h2>

          <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.9 }}>
            Trabalhamos com ativos digitais como Instagram, TikTok, YouTube, BMs,
            Twitch e outros formatos. O objetivo é reduzir erro e aumentar a
            precisão da decisão.
          </p>
        </div>
      </section>
    </main>
  );
}