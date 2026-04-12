import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProdutoPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    <main
      style={{
        background: "#0f172a",
        color: "#ffffff",
        minHeight: "100vh"
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "56px 24px"
        }}
      >
        {/* Breadcrumb */}
        <div
          style={{
            color: "#94a3b8",
            fontSize: "14px",
            marginBottom: "20px"
          }}
        >
          <Link href="/">Início</Link> /{" "}
          <Link href={/categoria/${product.platform}}>
            {product.platform}
          </Link>{" "}
          / {product.title}
        </div>

        {/* GRID PRINCIPAL */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "32px"
          }}
        >
          {/* ESQUERDA */}
          <div>
            <div
              style={{
                fontSize: "12px",
                color: "#94a3b8",
                marginBottom: "10px",
                textTransform: "uppercase"
              }}
            >
              Marketplace de ativos digitais
            </div>

            <h1
              style={{
                fontSize: "56px",
                lineHeight: 1,
                marginBottom: "18px"
              }}
            >
              {product.title}
            </h1>

            <p
              style={{
                color: "#cbd5f5",
                fontSize: "18px",
                lineHeight: 1.8,
                marginBottom: "24px"
              }}
            >
              {product.description}
            </p>

            {/* MÉTRICAS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                marginBottom: "24px"
              }}
            >
              <Metric title="Seguidores" value={product.followers} />
              <Metric title="Engajamento" value={product.engagement} />
              <Metric title="Nicho" value={product.niche} />
            </div>

            {/* HIGHLIGHTS */}
            <ul
              style={{
                paddingLeft: "20px",
                lineHeight: 1.8,
                color: "#cbd5f5"
              }}
            >
              {product.highlights?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* DIREITA (CARD DE VENDA) */}
          <div
            style={{
              background: "#020617",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "24px",
              padding: "28px",
              height: "fit-content"
            }}
          >
            <div
              style={{
                fontSize: "40px",
                fontWeight: 800,
                marginBottom: "20px"
              }}
            >
              {product.price}
            </div>

            <a
              href={`https://wa.me/5583999691629?text=Quero%20comprar%20${encodeURIComponent(
                product.title
              )}`}
              target="_blank"
              style={{
                display: "block",
                background: "#22c55e",
                color: "#000",
                textAlign: "center",
                padding: "16px",
                borderRadius: "999px",
                fontWeight: 800,
                textDecoration: "none",
                marginBottom: "12px"
              }}
            >
              Comprar pelo WhatsApp
            </a>

            <Link
              href={/categoria/${product.platform}}
              style={{
                display: "block",
                textAlign: "center",
                border: "1px solid #334155",
                padding: "14px",
                borderRadius: "999px",
                textDecoration: "none",
                color: "#fff"
              }}
            >
              Ver mais contas
            </Link>

            <div
              style={{
                marginTop: "18px",
                fontSize: "13px",
                color: "#64748b",
                textAlign: "center"
              }}
            >
              Atendimento rápido • Entrega segura
            </div>
          </div>
        </div>
      </section>

      {/* SEO TEXTO */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px 80px",
          color: "#cbd5f5",
          lineHeight: 1.9
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
          Vale a pena comprar {product.platform}?
        </h2>

        <p>
          A compra de ativos digitais como contas {product.platform} pode acelerar
          resultados, desde que a análise seja feita corretamente. Elementos como
          engajamento real, consistência de audiência e aderência ao nicho são
          determinantes para o sucesso da operação.
        </p>

        <p>
          Esta página foi estruturada para apresentar dados claros e facilitar a
          tomada de decisão, conectando você diretamente com a oportunidade mais
          adequada ao seu objetivo.
        </p>
      </section>
    </main>
  );
}

/* COMPONENTE DE MÉTRICA */
function Metric({ title, value }: { title: string; value?: string }) {
  return (
    <div
      style={{
        background: "#020617",
        padding: "14px",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.06)"
      }}
    >
      <div style={{ fontSize: "12px", color: "#64748b" }}>{title}</div>
      <div style={{ fontSize: "18px", fontWeight: 700 }}>
        {value || "-"}
      </div>
    </div>
  );
}