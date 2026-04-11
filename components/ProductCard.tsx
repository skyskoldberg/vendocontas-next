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
        padding: "20px",
        borderRadius: "20px",
        background: "#111",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "#fff"
      }}
    >
      <span style={{ fontSize: "12px", opacity: 0.7 }}>
        {product.platform}
      </span>

      <h3 style={{ margin: 0, fontSize: "20px" }}>
        {product.title}
      </h3>

      <p style={{ margin: 0, fontSize: "14px", opacity: 0.8 }}>
        {product.description}
      </p>

      <strong style={{ fontSize: "22px" }}>
        {product.price}
      </strong>

      <Link href={/produto/${product.slug}}>
        Ver detalhes
      </Link>
    </article>
  );
}