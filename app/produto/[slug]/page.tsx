import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProdutoPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const whatsappText = "Olá, quero comprar " + product.title;
  const whatsappHref =
    "https://wa.me/5583999691629?text=" + encodeURIComponent(whatsappText);

  const categoryHref = "/categoria/" + product.platform;

  return (
    <main
      style={{
        backgroundColor: "#0f172a",
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
            marginBottom: "24px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#94a3b8",
              textDecoration: "none",
            }}
          >
            Início
          </Link>

          <span>/</span>

          <Link
            href={categoryHref}
            style={{
              color: "#94a3b8",
              textDecoration: "none",
            }}
          >
            {product.platform}
          </Link>

          <span>/</span>

          <span>{product.title}</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.2fr) minmax(320px, 0.8fr)",
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
                letterSpacing: "0.08em",
              }}
            >
              Marketplace de ativos digitais
            </div>

            <h1
              style={{
                fontSize: "52px",
                lineHeight: 1.05,
                margin: "0 0 16px 0",
              }}
            >
              {product.title}
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "18px",
                lineHeight: 1.8,
                margin: "0 0 24px 0",
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
              <Metric title="Seguidores" value={product.followers || "-"} />
              <Metric title="Engajamento" value={product.engagement || "-"} />
              <Metric title="Nicho" value={product.niche || "-"} />
            </div>

            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
                color: "#cbd5e1",
                lineHeight: 1.8,
              }}
            >
              {product.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside
            style={{
              backgroundColor: "#020617",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
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
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                backgroundColor: "#22c55e",
                color: "#000000",
                padding: "16px",
                borderRadius: "999px",
                textAlign: "center",
                fontWeight: 700,
                textDecoration: "none",
                marginBottom: "12px",
              }}
            >
              Comprar pelo WhatsApp
            </a>

            <Link
              href={categoryHref}
              style={{
                display: "block",
                border: "1px solid #334155",
                padding: "14px",
                borderRadius: "999px",
                textAlign: "center",
                color: "#ffffff",
                textDecoration: "none",
              }}
            >
              Ver mais contas
            </Link>

            <div
              style={{
                marginTop: "16px",
                fontSize: "13px",
                color: "#64748b",
                textAlign: "center",
              }}
            >
              Atendimento rápido • Entrega segura
            </div>
          </aside>
        </div>
      </section>

      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px 80px 24px",
          color: "#cbd5e1",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            margin: "0 0 12px 0",
          }}
        >
          Vale a pena comprar conta {product.platform}?
        </h2>

        <p
          style={{
            lineHeight: 1.9,
            margin: "0 0 16px 0",
          }}
        >
          Comprar conta {product.platform} pode acelerar resultados digitais,
          desde que o ativo seja analisado com critério. Engajamento real,
          consistência de audiência e aderência ao nicho são fatores críticos.
        </p>

        <p
          style={{
            lineHeight: 1.9,
            margin: 0,
          }}
        >
          Esta página reúne os dados essenciais para uma decisão mais segura e
          conecta você diretamente ao ativo disponível para negociação.
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
  value: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "#020617",
        padding: "14px",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          color: "#64748b",
          marginBottom: "6px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "18px",
          fontWeight: 700,
        }}
      >
        {value}
      </div>
    </div>
  );
}