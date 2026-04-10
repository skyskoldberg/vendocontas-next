import Link from "next/link";
import type { ProductItem } from "@/data/products";

type ProductCardProps = {
  product: ProductItem;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        height: "100%",
        padding: "24px",
        borderRadius: "24px",
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "6px 10px",
          borderRadius: "999px",
          background: "rgba(255,255,255,0.08)",
          fontSize: "12px",
          marginBottom: "8px",
        }}
      >
        {product.platform}
      </div>

      <h3
        style={{
          margin: 0,
          fontSize: "24px",
          lineHeight: 1.2,
          color: "#ffffff",
        }}
      >
        {product.title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "#d1d5db",
          lineHeight: 1.7,
          fontSize: "15px",
        }}
      >
        {product.description}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
        }}
      >
        <div
          style={{
            padding: "12px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#9ca3af",
              marginBottom: "4px",
            }}
          >
            Nicho
          </div>
          <strong>{product.niche}</strong>
        </div>

        <div
          style={{
            padding: "12px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#9ca3af",
              marginBottom: "4px",
            }}
          >
            Seguidores
          </div>
          <strong>{product.followers || "Sob consulta"}</strong>
        </div>
      </div>

      <div
        style={{
          fontSize: "28px",
          fontWeight: 800,
          color: "#ffffff",
        }}
      >
        {product.price}
      </div>

      <Link
        href={/produto/${product.slug}}
        style={{
          display: "inline-block",
          textDecoration: "none",
          marginTop: "12px",
          padding: "12px 18px",
          borderRadius: "999px",
          background: "#ffffff",
          color: "#111111",
          fontWeight: 700,
          fontSize: "14px",
        }}
      >
        Ver detalhes
      </Link>
    </article>
  );
}