import Link from "next/link";
import type { ProductItem } from "@/data/products";

type ProductCardProps = {
  product: ProductItem;
};

function getPlatformLabel(platform: ProductItem["platform"]) {
  if (platform === "instagram") return "Instagram";
  if (platform === "tiktok") return "TikTok";
  if (platform === "youtube") return "YouTube";
  if (platform === "twitter") return "X / Twitter";
  return "BM / Facebook";
}

export default function ProductCard({ product }: ProductCardProps) {
  const platformLabel = getPlatformLabel(product.platform);

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        height: "100%",
        padding: "24px",
        borderRadius: "28px",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025))",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 16px 40px rgba(0,0,0,0.22)",
        color: "#F5F7FA",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "14px",
        }}
      >
        <div>
          <span
            style={{
              display: "inline-block",
              marginBottom: "10px",
              padding: "6px 10px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              fontSize: "12px",
              color: "#C7D0DB",
              fontWeight: 700,
            }}
          >
            {platformLabel}
          </span>

          <h3
            style={{
              margin: 0,
              fontSize: "26px",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
            }}
          >
            {product.title}
          </h3>
        </div>

        <div
          style={{
            whiteSpace: "nowrap",
            fontSize: "24px",
            fontWeight: 800,
            color: "#FFFFFF",
          }}
        >
          {product.price}
        </div>
      </div>

      <p
        style={{
          margin: 0,
          color: "#B8C1CC",
          fontSize: "16px",
          lineHeight: 1.8,
        }}
      >
        {product.description}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "12px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "18px",
            padding: "14px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#8FA0B4",
              marginBottom: "6px",
            }}
          >
            Nicho
          </div>
          <div style={{ fontWeight: 700, color: "#FFFFFF" }}>{product.niche}</div>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "18px",
            padding: "14px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#8FA0B4",
              marginBottom: "6px",
            }}
          >
            Seguidores
          </div>
          <div style={{ fontWeight: 700, color: "#FFFFFF" }}>
            {product.followers || "Sob consulta"}
          </div>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "18px",
            padding: "14px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#8FA0B4",
              marginBottom: "6px",
            }}
          >
            Engajamento
          </div>
          <div style={{ fontWeight: 700, color: "#FFFFFF" }}>
            {product.engagement || "Sob consulta"}
          </div>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "18px",
            padding: "14px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#8FA0B4",
              marginBottom: "6px",
            }}
          >
            Modelo
          </div>
          <div style={{ fontWeight: 700, color: "#FFFFFF" }}>
            Disponibilidade variável
          </div>
        </div>
      </div>

      <ul
        style={{
          margin: 0,
          paddingLeft: "18px",
          color: "#D5DCE5",
          lineHeight: 1.9,
          fontSize: "15px",
        }}
      >
        {product.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div
        style={{
          marginTop: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          paddingTop: "4px",
        }}
      >
        <Link
          href={/produto/${product.slug}}
          style={{
            display: "inline-block",
            textDecoration: "none",
            background: "#FFFFFF",
            color: "#06070A",
            padding: "12px 18px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 800,
          }}
        >
          Ver detalhes
        </Link>

        <a
          href={
            "https://wa.me/5583999691629?text=" +
            encodeURIComponent(
              "Olá, vim do Google. Quero consultar disponibilidade de: " +
                product.title
            )
          }
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#F5F7FA",
            padding: "12px 18px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 700,
            background: "rgba(255,255,255,0.03)",
          }}
        >
          Consultar no WhatsApp
        </a>
      </div>
    </article>
  );
}