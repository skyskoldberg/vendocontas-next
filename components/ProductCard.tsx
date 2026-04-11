import Link from "next/link";
import type { ProductItem } from "@/data/products";

type Props = {
  product: ProductItem;
};

function getPlatformLabel(platform: ProductItem["platform"]) {
  if (platform === "instagram") return "Instagram";
  if (platform === "tiktok") return "TikTok";
  if (platform === "youtube") return "YouTube";
  if (platform === "twitter") return "X / Twitter";
  return "BM / Facebook";
}

export default function ProductCard({ product }: Props) {
  const platformLabel = getPlatformLabel(product.platform);
  const followersLabel = product.followers || "Sob consulta";
  const engagementLabel = product.engagement || "Sob consulta";
  const highlights = Array.isArray(product.highlights)
    ? product.highlights.slice(0, 3)
    : [];

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        height: "100%",
        padding: "22px",
        borderRadius: "24px",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025))",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 18px 40px rgba(0,0,0,0.22)",
        color: "#F5F7FA"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "12px"
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
              fontWeight: 700
            }}
          >
            {platformLabel}
          </span>

          <h3
            style={{
              margin: 0,
              fontSize: "24px",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#FFFFFF"
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
            color: "#FFFFFF"
          }}
        >
          {product.price}
        </div>
      </div>

      <p
        style={{
          margin: 0,
          color: "#B8C1CC",
          fontSize: "15px",
          lineHeight: 1.8
        }}
      >
        {product.description}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px"
        }}
      >
        <div
          style={{
            padding: "12px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)"
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#8FA0B4",
              marginBottom: "4px"
            }}
          >
            Nicho
          </div>
          <strong style={{ color: "#FFFFFF" }}>{product.niche}</strong>
        </div>

        <div
          style={{
            padding: "12px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)"
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#8FA0B4",
              marginBottom: "4px"
            }}
          >
            Seguidores
          </div>
          <strong style={{ color: "#FFFFFF" }}>{followersLabel}</strong>
        </div>

        <div
          style={{
            padding: "12px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)"
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#8FA0B4",
              marginBottom: "4px"
            }}
          >
            Engajamento
          </div>
          <strong style={{ color: "#FFFFFF" }}>{engagementLabel}</strong>
        </div>

        <div
          style={{
            padding: "12px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)"
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#8FA0B4",
              marginBottom: "4px"
            }}
          >
            Modelo
          </div>
          <strong style={{ color: "#FFFFFF" }}>Ativo digital</strong>
        </div>
      </div>

      {highlights.length > 0 && (
        <ul
          style={{
            margin: 0,
            paddingLeft: "18px",
            color: "#D5DCE5",
            lineHeight: 1.9,
            fontSize: "14px"
          }}
        >
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <div
        style={{
          marginTop: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px"
        }}
      >
        <Link
          href={"/produto/" + product.slug}
          style={{
            display: "inline-block",
            textDecoration: "none",
            background: "#FFFFFF",
            color: "#06070A",
            padding: "12px 18px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 800
          }}
        >
          Ver detalhes
        </Link>

        <a
          href={
            "https://wa.me/5583999691629?text=" +
            encodeURIComponent(
              "Olá, vim do site e quero consultar: " + product.title
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
            background: "rgba(255,255,255,0.03)"
          }}
        >
          WhatsApp
        </a>
      </div>
    </article>
  );
}