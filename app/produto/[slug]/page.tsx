import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function getPlatformLabel(platform: string) {
  if (platform === "instagram") return "Instagram";
  if (platform === "tiktok") return "TikTok";
  if (platform === "youtube") return "YouTube";
  if (platform === "twitter") return "X/Twitter";
  return "BM/Facebook";
}

function getCategoryHref(platform: string) {
  if (platform === "instagram") return "/categoria/instagram";
  if (platform === "tiktok") return "/categoria/tiktok";
  if (platform === "youtube") return "/categoria/youtube";
  if (platform === "twitter") return "/categoria/twitter";
  return "/categoria/bms";
}

function getCategoryLabel(platform: string) {
  if (platform === "instagram") return "Ver mais contas de Instagram";
  if (platform === "tiktok") return "Ver mais contas de TikTok";
  if (platform === "youtube") return "Ver mais canais de YouTube";
  if (platform === "twitter") return "Ver mais contas de X / Twitter";
  return "Ver mais BMs";
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return {
      title: "Produto não encontrado | VendoContas",
      description: "Produto não encontrado.",
    };
  }

  const platformLabel = getPlatformLabel(product.platform);

  const followersText = product.followers
    ? " com " + product.followers
    : "";

  const title = product.title + " | VendoContas";
  const description =
    "Comprar conta " +
    platformLabel +
    " no nicho " +
    product.niche +
    followersText +
    ". " +
    product.description;

  return {
    title,
    description,
    alternates: {
      canonical: "https://vendocontas.com/produto/" + product.slug,
    },
    openGraph: {
      title,
      description,
      url: "https://vendocontas.com/produto/" + product.slug,
      type: "website",
      siteName: "VendoContas",
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: Props) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

  if (!product) return notFound();

  const platformLabel = getPlatformLabel(product.platform);
  const categoryHref = getCategoryHref(product.platform);
  const categoryLabel = getCategoryLabel(product.platform);

  const cleanPrice = product.price.replace(/[^\d,]/g, "").replace(",", ".");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    category: platformLabel + " - " + product.niche,
    brand: {
      "@type": "Brand",
      name: "VendoContas",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: cleanPrice,
      availability: "https://schema.org/InStock",
      url: "https://vendocontas.com/produto/" + product.slug,
      seller: {
        "@type": "Organization",
        name: "VendoContas",
      },
    },
  };

  return (
    <main
      style={{
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "56px 24px 80px",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.4fr) minmax(320px, 420px)",
          gap: "28px",
          alignItems: "start",
        }}
      >
        <div>
          <span
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "#f3f4f6",
              fontSize: "13px",
              fontWeight: 600,
              marginBottom: "18px",
            }}
          >
            Ativo digital em destaque
          </span>

          <h1
            style={{
              fontSize: "56px",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              margin: "0 0 18px",
              maxWidth: "900px",
            }}
          >
            {product.title}
          </h1>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "24px",
            }}
          >
            <span
              style={{
                padding: "10px 14px",
                borderRadius: "999px",
                background: "#fafafa",
                border: "1px solid #e5e7eb",
                fontSize: "14px",
              }}
            >
              Plataforma: <strong>{platformLabel}</strong>
            </span>

            <span
              style={{
                padding: "10px 14px",
                borderRadius: "999px",
                background: "#fafafa",
                border: "1px solid #e5e7eb",
                fontSize: "14px",
              }}
            >
              Nicho: <strong>{product.niche}</strong>
            </span>

            {product.followers && (
              <span
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "#fafafa",
                  border: "1px solid #e5e7eb",
                  fontSize: "14px",
                }}
              >
                Seguidores: <strong>{product.followers}</strong>
              </span>
            )}

            {product.engagement && (
              <span
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "#fafafa",
                  border: "1px solid #e5e7eb",
                  fontSize: "14px",
                }}
              >
                Engajamento: <strong>{product.engagement}</strong>
              </span>
            )}
          </div>

          <p
            style={{
              fontSize: "21px",
              lineHeight: 1.8,
              color: "#444",
              maxWidth: "820px",
              margin: "0 0 30px",
            }}
          >
            {product.description}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              marginBottom: "34px",
            }}
          >
            <div
              style={{
                padding: "18px",
                borderRadius: "18px",
                background: "#fafafa",
                border: "1px solid #ececec",
              }}
            >
              <div style={{ fontSize: "12px", color: "#666", marginBottom: "6px" }}>
                Plataforma
              </div>
              <strong style={{ fontSize: "20px" }}>{platformLabel}</strong>
            </div>

            <div
              style={{
                padding: "18px",
                borderRadius: "18px",
                background: "#fafafa",
                border: "1px solid #ececec",
              }}
            >
              <div style={{ fontSize: "12px", color: "#666", marginBottom: "6px" }}>
                Modelo
              </div>
              <strong style={{ fontSize: "20px" }}>Disponibilidade variável</strong>
            </div>

            <div
              style={{
                padding: "18px",
                borderRadius: "18px",
                background: "#fafafa",
                border: "1px solid #ececec",
              }}
            >
              <div style={{ fontSize: "12px", color: "#666", marginBottom: "6px" }}>
                Faixa de preço
              </div>
              <strong style={{ fontSize: "20px" }}>{product.price}</strong>
            </div>
          </div>

          <section
            style={{
              padding: "28px",
              borderRadius: "24px",
              background: "#fcfcfc",
              border: "1px solid #ececec",
              marginBottom: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                margin: "0 0 14px",
              }}
            >
              Destaques da oferta
            </h2>

            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
                lineHeight: 2,
                fontSize: "18px",
                color: "#333",
              }}
            >
              {product.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section
            style={{
              padding: "28px",
              borderRadius: "24px",
              background: "#111",
              color: "#fff",
              marginBottom: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                margin: "0 0 12px",
              }}
            >
              Comprar conta {platformLabel} vale a pena?
            </h2>

            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.82)",
                fontSize: "18px",
                lineHeight: 1.8,
                maxWidth: "780px",
              }}
            >
              Comprar conta {platformLabel} no nicho {product.niche} é uma estratégia
              usada para acelerar crescimento, reduzir o tempo de construção orgânica
              e entrar em mercados já validados com mais força de percepção.
            </p>
          </section>

          <section
            style={{
              padding: "28px",
              borderRadius: "24px",
              background: "#fcfcfc",
              border: "1px solid #ececec",
              marginBottom: "24px",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                margin: "0 0 14px",
              }}
            >
              Perguntas frequentes
            </h2>

            <div style={{ display: "grid", gap: "18px" }}>
              <div>
                <h3 style={{ margin: "0 0 8px", fontSize: "22px" }}>
                  É seguro comprar conta {platformLabel}?
                </h3>
                <p style={{ margin: 0, color: "#444", lineHeight: 1.8, fontSize: "17px" }}>
                  Sim, desde que a análise do ativo seja feita com critério e a
                  negociação siga boas práticas operacionais.
                </p>
              </div>

              <div>
                <h3 style={{ margin: "0 0 8px", fontSize: "22px" }}>
                  Posso monetizar rapidamente?
                </h3>
                <p style={{ margin: 0, color: "#444", lineHeight: 1.8, fontSize: "17px" }}>
                  Em muitos casos, sim. Contas já estruturadas reduzem a fase inicial
                  de construção e podem acelerar monetização, autoridade e aquisição.
                </p>
              </div>

              <div>
                <h3 style={{ margin: "0 0 8px", fontSize: "22px" }}>
                  Essa conta ainda pode crescer?
                </h3>
                <p style={{ margin: 0, color: "#444", lineHeight: 1.8, fontSize: "17px" }}>
                  Sim. Um ativo bem aproveitado pode continuar crescendo com conteúdo,
                  posicionamento e tráfego estratégico.
                </p>
              </div>
            </div>
          </section>

          <section
            style={{
              padding: "28px",
              borderRadius: "24px",
              background: "#fcfcfc",
              border: "1px solid #ececec",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                margin: "0 0 14px",
              }}
            >
              Análise estratégica do ativo
            </h2>

            <p
              style={{
                margin: "0 0 16px",
                color: "#444",
                lineHeight: 1.9,
                fontSize: "18px",
              }}
            >
              Esta página foi estruturada para facilitar a análise de um ativo digital
              no nicho {product.niche}, com foco em potencial comercial, entrada mais
              rápida no mercado e leitura objetiva de valor.
            </p>

            <p
              style={{
                margin: 0,
                color: "#444",
                lineHeight: 1.9,
                fontSize: "18px",
              }}
            >
              Ao comprar conta {platformLabel}, é importante observar contexto, coerência
              temática, qualidade da base, estabilidade e aderência com sua estratégia.
              O objetivo não é só comprar um perfil, mas adquirir tempo, percepção e
              vantagem competitiva.
            </p>

            <div style={{ marginTop: "24px" }}>
              <Link
                href={categoryHref}
                style={{
                  textDecoration: "none",
                  color: "#111",
                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                {categoryLabel}
              </Link>
            </div>
          </section>
        </div>

        <aside
          style={{
            position: "sticky",
            top: "24px",
          }}
        >
          <div
            style={{
              borderRadius: "28px",
              background: "#fff",
              border: "1px solid #e5e7eb",
              boxShadow: "0 14px 40px rgba(0,0,0,0.06)",
              padding: "26px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: "#666",
                marginBottom: "10px",
              }}
            >
              Consulta de disponibilidade
            </div>

            <div
              style={{
                fontSize: "42px",
                fontWeight: 800,
                lineHeight: 1,
                marginBottom: "18px",
              }}
            >
              {product.price}
            </div>

            <div
              style={{
                display: "grid",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  padding: "14px",
                  borderRadius: "16px",
                  background: "#fafafa",
                  border: "1px solid #ececec",
                  fontSize: "15px",
                }}
              >
                Nicho: <strong>{product.niche}</strong>
              </div>

              <div
                style={{
                  padding: "14px",
                  borderRadius: "16px",
                  background: "#fafafa",
                  border: "1px solid #ececec",
                  fontSize: "15px",
                }}
              >
                Seguidores: <strong>{product.followers || "Sob consulta"}</strong>
              </div>

              <div
                style={{
                  padding: "14px",
                  borderRadius: "16px",
                  background: "#fafafa",
                  border: "1px solid #ececec",
                  fontSize: "15px",
                }}
              >
                Engajamento: <strong>{product.engagement || "Sob consulta"}</strong>
              </div>
            </div>

            <a
              href={
                "https://wa.me/5583999691629?text=" +
                encodeURIComponent(
                  "Olá, vim do Google. Quero consultar disponibilidade de: " + product.title
                )
              }
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                textAlign: "center",
                textDecoration: "none",
                background: "#111",
                color: "#fff",
                padding: "16px 20px",
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: "16px",
                marginBottom: "12px",
              }}
            >
              Consultar no WhatsApp
            </a>

            <div
              style={{
                textAlign: "center",
                fontSize: "13px",
                color: "#666",
                lineHeight: 1.6,
              }}
            >
              Disponibilidade, preço final e detalhes operacionais podem variar
              conforme análise e momento da consulta.
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}