import Link from "next/link";
import type { ProductItem } from "@/data/products";

type ProductCardProps = {
  product: ProductItem;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      style={{
        padding: "24px",
        borderRadius: "24px",
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "#ffffff",
      }}
    >
      <h3 style={{ marginTop: 0 }}>{product.title}</h3>

      <p style={{ color: "#cccccc", lineHeight: 1.7 }}>
        {product.description}
      </p>

      <p>
        <strong>{product.price}</strong>
      </p>

      <Link
        href={/produto/${product.slug}}
        style={{
          display: "inline-block",
          marginTop: "12px",
          padding: "10px 16px",
          borderRadius: "999px",
          textDecoration: "none",
          background: "#ffffff",
          color: "#111111",
          fontWeight: 700,
        }}
      >
        Ver detalhes
      </Link>
    </article>
  );
}