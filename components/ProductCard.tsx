import Link from "next/link";
import type { ProductItem } from "@/data/products";

type Props = {
  product: ProductItem;
};

export default function ProductCard({ product }: Props) {
  return (
    <div
      style={{
        background: "#111111",
        borderRadius: "20px",
        padding: "20px",
        border: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "260px",
        transition: "0.2s ease"
      }}
    >
      {/* TOPO */}
      <div>
        <div
          style={{
            fontSize: "12px",
            opacity: 0.5,
            marginBottom: "6px",
            textTransform: "uppercase"
          }}
        >
          {product.platform}
        </div>

        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "10px",
            color: "#ffffff"
          }}
        >
          {product.title}
        </h3>

        <p
          style={{
            fontSize: "14px",
            opacity: 0.7,
            marginBottom: "12px",
            lineHeight: 1.5
          }}
        >
          {product.description}
        </p>

        {/* INFO GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            fontSize: "13px",
            opacity: 0.8
          }}
        >
          <div>
            <strong>Nicho:</strong><br /> {product.niche}
          </div>

          <div>
            <strong>Seguidores:</strong><br /> {product.followers}
          </div>

          <div>
            <strong>Engajamento:</strong><br /> {product.engagement}
          </div>

          <div>
            <strong>Modelo:</strong><br /> Conteúdo
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div style={{ marginTop: "16px" }}>
        <div
          style={{
            fontSize: "20px",
            fontWeight: 800,
            color: "#00ff88",
            marginBottom: "10px"
          }}
        >
          {product.price}
        </div>

        <Link
          href={/produto/${product.slug}}
          style={{
            display: "block",
            textAlign: "center",
            padding: "10px",
            borderRadius: "999px",
            background: "#ffffff",
            color: "#000000",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "14px"
          }}
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}