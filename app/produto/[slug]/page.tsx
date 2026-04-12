import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";

type ProdutoPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProdutoPage({ params }: ProdutoPageProps) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main
      style={{
        background: "#0f172a",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "56px 24px",
        }}
      >
        <div
          style={{
            color: "#94a3b8",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          <Link href="/">Início</Link>
          {" / "}
          <Link href={/categoria/${product.platform}}>{product.platform}</Link>
          {" / "}
          {product.title}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "32px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "12px",
                color: "#94a3b8",
                marginBottom: "10px",
                textTransform: "uppercase",
              }}
            >
              Marketplace de ativos digitais
            </div>

            <h1
              style={{
                fontSize: "52px",
                lineHeight: 1.05,
                marginBottom: "18px",
              }}
            >
              {product.title}
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "18px",
                lineHeight: 1.8,
                marginBottom: "24px",
              }}
            >
              {product.description}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <Metric title="Seguidores" value={product.followers} />
              <Metric title="Engajamento" value={product.engagement} />
              <Metric title="Nicho" value={product.niche} />
            </div>

            <ul
              style={{
                paddingLeft: "20px",
                lineHeight: 1.8,
                color: "#cbd5e1",
                margin: 0,
              }}
            >
              {product.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div
            style={{
              background: "#020617",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "24px",
              padding: "28px",
              height: "fit-content",
            }}
          >
            <div
              style={{
                fontSize: "40px",
                fontWeight: 800,
                marginBottom: "20px",
              }}
            >
              {product.price}
            </div>

            <a
              href={`https://wa.me/5583999691629?text=${encodeURIComponent(
                Quero comprar ${product.title}
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "#22c55e",
                color: "#000000",
                textAlign: "center",
                padding: "16px",
                borderRadius: "999px",
                fontWeight: 800,
                textDecoration: "none",
                marginBottom: "12px",
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
                color: "#ffffff",
              }}
            >
              Ver mais contas
            </Link>

            <div
              style={{
                marginTop: "18px",
                fontSize: "13px",
                color: "#64748b",
                textAlign: "center",
              }}
            >
              Atendimento rápido • Entrega segura
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px 80px",
          color: "#cbd5e1",
          lineHeight: 1.9,
        }}
      >
        <h2 style={{ fontSize: "30px", marginBottom: "16px" }}>
          Vale a pena comprar conta {product.platform}?
        </h2>

        <p>
          A compra de contas {product.platform} pode acelerar resultados digitais,
          desde que o ativo seja analisado com critério. Elementos como
          engajamento real, consistência de audiência e aderência ao nicho são
          determinantes.
        </p>

        <p>
          Esta página apresenta os dados essenciais para uma decisão mais segura,
          conectando você diretamente ao ativo disponível e ao atendimento para
          negociação.
        </p>
      </section>
    </main>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value?: string;
}) {
  return (
    <div
      style={{
        background: "#020617",
        padding: "14px",
        borderRadius: "14px",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ fontSize: "12px", color: "#64748b" }}>{title}</div>
      <div style={{ fontSize: "18px", fontWeight: 700 }}>{value || "-"}</div>
    </div>
  );
}