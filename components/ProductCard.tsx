import Link from "next/link";

type ProductItem = {
  slug: string;
  title: string;
  description: string;
  price: string;
  platform: string;
};

type Props = {
  product: ProductItem;
};

export default function ProductCard({ product }: Props) {
  return (
    <article
      style={{
        padding: "20px",
        borderRadius: "16px",
        background: "#111",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}
    >
      <span style={{ fontSize: "12px", opacity: 0.7 }}>
        {product.platform}
      </span>

      <h3 style={{ margin: 0 }}>{product.title}</h3>

      <p style={{ margin: 0, opacity: 0.8 }}>
        {product.description}
      </p>

      <strong>{product.price}</strong>

      <Link href={/produto/${product.slug}}>
        Ver detalhes
      </Link>
    </article>
  );
}