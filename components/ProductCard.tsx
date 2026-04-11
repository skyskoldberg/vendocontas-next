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
        padding: "18px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        height: "100%",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          display: "inline-block",
          alignSelf: "flex-start",
          padding: "5px 10px",
          borderRadius: "999px",
          backgroundColor: "rgba(255,255,255,0.06)",
          fontSize: "11px",
          fontWeight: 700,
          color: "#d1d5db",
          lineHeight: 1
        }}
      >
        {platformLabel}
      </div>

      <h3
        style={{
          margin: 0,
          fontSize: "19px",
          lineHeight: 1.15,
          color: "#ffffff",
          letterSpacing: "-0.02em"
        }}
      >
        {product.title}
      </h3>

      <p
        style={{
          margin: 0,
          fontSize: "14px",
          lineHeight: 1.6,
          color: "#cbd5e1"
        }}
      >
        {product.description}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px"
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderRadius: "12px",
            padding: "10px"
          }}
        >
          <div
            style={{
              fontSize: "11px",
              color: "#94a3b8",
              marginBottom: "4px",
              lineHeight: 1.2
            }}
          >
            Nicho
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: 1.25
            }}
          >
            {product.niche}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderRadius: "12px",
            padding: "10px"
          }}
        >
          <div
            style={{
              fontSize: "11px",
              color: "#94a3b8",
              marginBottom: "4px",
              lineHeight: 1.2
            }}
          >
            Seguidores
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: 1.25
            }}
          >
            {followersLabel}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderRadius: "12px",
            padding: "10px"
          }}
        >
          <div
            style={{
              fontSize: "11px",
              color: "#94a3b8",
              marginBottom: "4px",
              lineHeight: 1.2
            }}
          >
            Engajamento
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: 1.25
            }}
          >
            {engagementLabel}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.04)",
            borderRadius: "12px",
            padding: "10px"
          }}
        >
          <div
            style={{
              fontSize: "11px",
              color: "#94a3b8",
              marginBottom: "4px",
              lineHeight: 1.2
            }}
          >
            Modelo
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: "15px",
              lineHeight: 1.25
            }}
          >
            Ativo digital
          </div>
        </div>
      </div>

      {highlights.length > 0 ? (
        <ul
          style={{
            margin: 0,
            paddingLeft: "18px",
            color: "#cbd5e1",
            lineHeight: 1.6,
            fontSize: "14px"
          }}
        >
          {highlights.map((item) => (
            <li key={item} style={{ marginBottom: "4px" }}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}

      <div
        style={{
          marginTop: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}
      >
        <div
          style={{
            fontSize: "22px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1
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
            padding: "11px 14px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 800,
            lineHeight: 1.2
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
            padding: "11px 14px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.12)",
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: 1.2
          }}
        >
          Consultar no WhatsApp
        </a>
      </div>
    </article>
  );
}