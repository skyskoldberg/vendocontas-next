import ProductCard from "@/components/ProductCard";
import { products, type ProductItem } from "@/data/products";

type ProductGridProps = {
  platform?: ProductItem["platform"];
  title?: string;
  description?: string;
};

export default function ProductGrid({
  platform,
  title = "Ofertas em destaque",
  description = "Vitrine estratégica com ativos digitais organizados por nicho, categoria e potencial comercial.",
}: ProductGridProps) {
  const filteredProducts = platform
    ? products.filter((product) => product.platform === platform)
    : products;

  if (filteredProducts.length === 0) {
    return (
      <section style={{ marginTop: "48px" }}>
        <div style={{ marginBottom: "20px" }}>
          <h2
            style={{
              margin: "0 0 10px 0",
              fontSize: "40px",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </h2>

          <p
            style={{
              margin: 0,
              color: "#555",
              fontSize: "18px",
              lineHeight: 1.75,
              maxWidth: "760px",
            }}
          >
            {description}
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid rgba(17,17,17,0.08)",
            borderRadius: "24px",
            padding: "24px",
            color: "#444",
            fontSize: "18px",
            lineHeight: 1.7,
          }}
        >
          Nenhuma oferta encontrada nesta categoria no momento.
        </div>
      </section>
    );
  }

  return (
    <section style={{ marginTop: "48px" }}>
      <div style={{ marginBottom: "22px" }}>
        <h2
          style={{
            margin: "0 0 10px 0",
            fontSize: "40px",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            margin: 0,
            color: "#555",
            fontSize: "18px",
            lineHeight: 1.75,
            maxWidth: "760px",
          }}
        >
          {description}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "18px",
          alignItems: "stretch",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}