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
  const followersLabel = product.followers ? product.followers : "Sob consulta";
  const engagementLabel = product.engagement ? product.engagement : "Sob consulta";
  const highlights = Array.isArray(product.highlights)
    ? product.highlights.slice(0, 3)
    : [];

  return (
    <article
      style={{
        backgroundColor: "#111111",
        color: "#ffffff",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        minHeight: "100%"
      }}
    >
      <div
        style={{
          display: "inline-block",
          alignSelf: "flex-start",
          padding: "6px 10px",
          borderRadius: "999px",
          backgroundColor: "rgba(255,255,255,0.06)",
          fontSize: "12px",
          fontWeight: 700,
          color: "#d1d5db"
        }}
      >
        {platformLabel}
      </div>

      <h3
        style={{
          margin: 0,
          fontSize: "22px",
          lineHeight: 1.15,
          color: "#ffffff"
        }}
      >
        {product.title}
      </h3>

      <p
        style={{
          margin: 0,
          fontSize: "15px",
          lineHeight: 1.7,
          color: "#cbd5e1"
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
            backgroundColor: "rgba(255,255,255,0.04)",
            borderRadius: "14px",
            padding: "12px"
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#94a3b8",
              marginBottom: "4px"
            }}
          >
            Nicho
          </div>
          <div style={{ fontWeight: 700 }}>{product.niche}</div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderRadius: "14px",
            padding: "12px"
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#94a3b8",
              marginBottom: "4px"
            }}
          >
            Seguidores
          </div>
          <div style={{ fontWeight: 700 }}>{followersLabel}</div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderRadius: "14px",
            padding: "12px"
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#94a3b8",
              marginBottom: "4px"
            }}
          >
            Engajamento
          </div>
          <div style={{ fontWeight: 700 }}>{engagementLabel}</div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderRadius: "14px",
            padding: "12px"
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#94a3b8",
              marginBottom: "4px"
            }}
          >
            Modelo
          </div>
          <div style={{ fontWeight: 700 }}>Ativo digital</div>
        </div>
      </div>

      {highlights.length > 0 ? (
        <ul
          style={{
            margin: 0,
            paddingLeft: "18px",
            color: "#cbd5e1",
            lineHeight: 1.8,
            fontSize: "14px"
          }}
        >
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      <div
        style={{
          marginTop: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >
        <div
          style={{
            fontSize: "28px",
            fontWeight: 800,
            color: "#ffffff"
          }}
        >
          {product.price}
        </div>

        <Link
          href={"/produto/" + product.slug}
          style={{
            display: "block",
            textAlign: "center",
            textDecoration: "none",
            backgroundColor: "#ffffff",
            color: "#111111",
            padding: "12px 16px",
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
            display: "block",
            textAlign: "center",
            textDecoration: "none",
            backgroundColor: "transparent",
            color: "#ffffff",
            padding: "12px 16px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.12)",
            fontSize: "14px",
            fontWeight: 700
          }}
        >
          Consultar no WhatsApp
        </a>
      </div>
    </article>
  );
}