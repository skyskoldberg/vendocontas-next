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
        borderRadius: "20px",
        background: "#0f172a",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "#ffffff",
        transition: "all 0.2s ease",
      }}
    >
      {/* TÍTULO SEO */}
      <h3 style={{ fontSize: "18px", fontWeight: 700 }}>
        {product.title}
      </h3>

      {/* META INFO */}
      <div style={{ fontSize: "13px", opacity: 0.8 }}>
        {product.category} • {product.followers}
      </div>

      {/* DESCRIÇÃO SEO */}
      <p style={{ fontSize: "14px", opacity: 0.9 }}>
        {product.description}
      </p>

      {/* PREÇO */}
      <div style={{ fontSize: "20px", fontWeight: 700 }}>
        {product.price}
      </div>

      {/* BOTÃO CORRIGIDO */}
      <Link
        href={/produto/${product.slug}}
        style={{
          display: "inline-block",
          marginTop: "12px",
          padding: "12px 16px",
          borderRadius: "10px",
          background: "#22c55e",
          color: "#000000",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "14px",
        }}
      >
        Ver detalhes
      </Link>
    </article>
  );
}