import Link from "next/link";
import type { ProductItem } from "@/data/products";

type ProductCardProps = {
  product: ProductItem;
};

function getPlatformLabel(platform: ProductItem["platform"]) {
  switch (platform) {
    case "instagram":
      return "Instagram";
    case "tiktok":
      return "TikTok";
    case "youtube":
      return "YouTube";
    case "twitter":
      return "X / Twitter";
    case "bms":
      return "BM / Facebook";
    default:
      return "Ativo digital";
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappLink = `https://wa.me/5583999691629?text=${encodeURIComponent(
    Olá, vim do Google. Quero consultar disponibilidade de: ${product.title}
  )}`;

  return (
    <article
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid rgba(17,17,17,0.08)",
        borderRadius: "24px",
        padding: "24px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "16px",
        }}
      >
        <div>
          <span
            style={{
              display: "inline-block",
              marginBottom: "10px",
              padding: "6px 10px",
              borderRadius: "999px",
              backgroundColor: "#f4f4f5",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "12px",
              color: "#444",
            }}
          >
            {getPlatformLabel(product.platform)}
          </span>

          <h3
            style={{
              margin: 0,
              fontSize: "26px",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {product.title}
          </h3>
        </div>

        <div
          style={{
            whiteSpace: "nowrap",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: "24px",
            fontWeight: 800,
            color: "#111111",
          }}
        >
          {product.price}
        </div>
      </div>

      <p
        style={{
          margin: 0,
          color: "#555",
          fontSize: "17px",
          lineHeight: 1.75,
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
            backgroundColor: "#fafafa",
            borderRadius: "16px",
            padding: "14px",
          }}
        >
          <div
            style={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "12px",
              color: "#666",
              marginBottom: "6px",
            }}
          >
            Nicho
          </div>
          <div style={{ fontWeight: 700 }}>{product.niche}</div>
        </div>

        <div
          style={{
            backgroundColor: "#fafafa",
            borderRadius: "16px",
            padding: "14px",
          }}
        >
          <div
            style={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "12px",
              color: "#666",
              marginBottom: "6px",
            }}
          >
            Seguidores
          </div>
          <div style={{ fontWeight: 700 }}>
            {product.followers || "Sob consulta"}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#fafafa",
            borderRadius: "16px",
            padding: "14px",
          }}
        >
          <div
            style={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "12px",
              color: "#666",
              marginBottom: "6px",
            }}
          >
            Engajamento
          </div>
          <div style={{ fontWeight: 700 }}>
            {product.engagement || "Sob consulta"}
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#fafafa",
            borderRadius: "16px",
            padding: "14px",
          }}
        >
          <div
            style={{
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "12px",
              color: "#666",
              marginBottom: "6px",
            }}
          >
            Modelo
          </div>
          <div style={{ fontWeight: 700 }}>Disponibilidade variável</div>
        </div>
      </div>

      <ul
        style={{
          margin: 0,
          paddingLeft: "18px",
          color: "#333",
          lineHeight: 1.8,
          fontSize: "16px",
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
            textDecoration: "none",
            backgroundColor: "#111111",
            color: "#ffffff",
            padding: "12px 18px",
            borderRadius: "999px",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: "15px",
            fontWeight: 700,
          }}
        >
          Ver detalhes
        </Link>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            border: "1px solid rgba(17,17,17,0.16)",
            color: "#111111",
            padding: "12px 18px",
            borderRadius: "999px",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: "15px",
            fontWeight: 700,
          }}
        >
          Consultar no WhatsApp
        </a>
      </div>
    </article>
  );
}