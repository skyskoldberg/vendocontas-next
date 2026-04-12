import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getPlatformLabel(platform: string) {
  if (platform === "instagram") return "Instagram";
  if (platform === "tiktok") return "TikTok";
  if (platform === "youtube") return "YouTube";
  if (platform === "twitter") return "X / Twitter";
  if (platform === "bms") return "BM / Facebook";
  if (platform === "twitch") return "Twitch";
  if (platform === "jogos") return "Jogos";
  return platform;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const product = products.find((item) => item.slug === resolvedParams.slug);

  if (!product) {
    return {
      title: "Produto não encontrado | VendoContas",
      description: "O ativo solicitado não foi encontrado.",
    };
  }

  const platformLabel = getPlatformLabel(product.platform);
  const followersText = product.followers ? ${product.followers} seguidores : "ativo digital disponível";
  const engagementText = product.engagement ? ${product.engagement} de engajamento : "com análise estratégica";

  return {
    title: ${product.title} | Comprar conta ${platformLabel},
    description: ${product.title}. ${followersText}, ${engagementText}. Veja detalhes, nicho, métricas e fale no WhatsApp para negociar.,
    openGraph: {
      title: ${product.title} | VendoContas,
      description: product.description,
      type: "website",
    },
  };
}

export default async function ProdutoPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const platformLabel = getPlatformLabel(product.platform);
  const categoryHref = "/categoria/" + product.platform;
  const whatsappText = "Olá, quero comprar " + product.title;
  const whatsappHref =
    "https://wa.me/5583999691629?text=" + encodeURIComponent(whatsappText);

  const relatedProducts = products
    .filter(
      (item) =>
        item.platform === product.platform && item.slug !== product.slug
    )
    .slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    category: platformLabel,
    brand: {
      "@type": "Brand",
      name: "VendoContas",
    },
    offers: {
      "@type": "Offer",
      price: product.price.replace(/[^\d,]/g, "").replace(",", "."),
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: "/produto/" + product.slug,
    },
  };

  return (
    <main
      style={{
        backgroundColor: "#0f172a",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "56px 24px 40px 24px",
        }}
      >
        <div
          style={{
            color: "#94a3b8",
            fontSize: "14px",
            marginBottom: "24px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#94a3b8",
              textDecoration: "none",
            }}
          >
            Início
          </Link>

          <span>/</span>

          <Link
            href={categoryHref}
            style={{
              color: "#94a3b8",
              textDecoration: "none",
            }}
          >
            {platformLabel}
          </Link>

          <span>/</span>

          <span>{product.title}</span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(320px, 0.85fr)",
            gap: "32px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "7px 12px",
                borderRadius: "999px",
                backgroundColor: "rgba(255,255,255,0.06)",
                color: "#cbd5e1",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Marketplace de ativos digitais
            </div>

            <h1
              style={{
                fontSize: "52px",
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
                margin: "0 0 18px 0",
                maxWidth: "900px",
              }}
            >
              {product.title}
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                fontSize: "18px",
                lineHeight: 1.8,
                margin: "0 0 24px 0",
                maxWidth: "860px",
              }}
            >
              {product.description}
            </p>

            {product.image ? (
              <div
                style={{
                  marginBottom: "24px",
                  backgroundColor: "#020617",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={product.image}
                  alt={Comprar ${product.title} com ${product.followers || "métricas estratégicas"}}
                  loading="lazy"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            ) : null}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <Metric title="Seguidores" value={product.followers || "-"} />
              <Metric title="Engajamento" value={product.engagement || "-"} />
              <Metric title="Nicho" value={product.niche || "-"} />
            </div>

            <div
              style={{
                backgroundColor: "#020617",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "22px",
                marginBottom: "24px",
              }}
            >
              <h2
                style={{
                  margin: "0 0 12px 0",
                  fontSize: "24px",
                }}
              >
                Destaques do ativo
              </h2>

              <ul
                style={{
                  margin: 0,
                  paddingLeft: "20px",
                  color: "#cbd5e1",
                  lineHeight: 1.8,
                }}
              >
                {product.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside
            style={{
              backgroundColor: "#020617",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "28px",
              height: "fit-content",
              position: "sticky",
              top: "24px",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                color: "#94a3b8",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "10px",
              }}
            >
              Valor do ativo
            </div>

            <div
              style={{
                fontSize: "40px",
                fontWeight: 800,
                lineHeight: 1.05,
                marginBottom: "20px",
              }}
            >
              {product.price}
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                backgroundColor: "#22c55e",
                color: "#000000",
                padding: "16px",
                borderRadius: "999px",
                textAlign: "center",
                fontWeight: 800,
                textDecoration: "none",
                marginBottom: "12px",
              }}
            >
              Comprar pelo WhatsApp
            </a>

            <Link
              href={categoryHref}
              style={{
                display: "block",
                border: "1px solid #334155",
                padding: "14px",
                borderRadius: "999px",
                textAlign: "center",
                color: "#ffffff",
                textDecoration: "none",
                marginBottom: "18px",
              }}
            >
              Ver mais contas
            </Link>

            <div
              style={{
                display: "grid",
                gap: "10px",
              }}
            >
              <MiniInfo
                label="Plataforma"
                value={platformLabel}
              />
              <MiniInfo
                label="Seguidores"
                value={product.followers || "Sob consulta"}
              />
              <MiniInfo
                label="Engajamento"
                value={product.engagement || "Sob consulta"}
              />
            </div>

            <div
              style={{
                marginTop: "18px",
                fontSize: "13px",
                color: "#64748b",
                textAlign: "center",
              }}
            >
              Atendimento rápido • Entrega segura
            </div>
          </aside>
        </div>
      </section>

      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px 36px 24px",
          color: "#cbd5e1",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            margin: "0 0 12px 0",
          }}
        >
          Vale a pena comprar conta {platformLabel}?
        </h2>

        <p
          style={{
            lineHeight: 1.9,
            margin: "0 0 16px 0",
          }}
        >
          Comprar conta {platformLabel} pode acelerar resultados digitais, desde
          que o ativo seja analisado com critério. Engajamento real,
          consistência de audiência, aderência ao nicho e potencial comercial
          são fatores decisivos.
        </p>

        <p
          style={{
            lineHeight: 1.9,
            margin: 0,
          }}
        >
          Esta página reúne os dados essenciais para uma decisão mais segura e
          conecta você diretamente ao ativo disponível para negociação.
        </p>
      </section>

      {relatedProducts.length > 0 ? (
        <section
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px 80px 24px",
          }}
        >
          <div
            style={{
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#94a3b8",
                marginBottom: "8px",
              }}
            >
              Interlink estratégico
            </div>

            <h2
              style={{
                fontSize: "36px",
                lineHeight: 1.04,
                margin: 0,
              }}
            >
              Outras contas de {platformLabel}
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
            }}
          >
            {relatedProducts.map((item) => (
              <Link
                key={item.slug}
                href={"/produto/" + item.slug}
                style={{
                  display: "block",
                  backgroundColor: "#020617",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  padding: "20px",
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: "#94a3b8",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "10px",
                  }}
                >
                  {getPlatformLabel(item.platform)}
                </div>

                <h3
                  style={{
                    margin: "0 0 10px 0",
                    fontSize: "22px",
                    lineHeight: 1.1,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: "0 0 14px 0",
                    color: "#cbd5e1",
                    lineHeight: 1.7,
                    fontSize: "15px",
                  }}
                >
                  {item.description}
                </p>

                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: 800,
                  }}
                >
                  {item.price}
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "#020617",
        padding: "14px",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          fontSize: "12px",
          color: "#64748b",
          marginBottom: "6px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "18px",
          fontWeight: 700,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function MiniInfo({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "14px",
        padding: "12px 14px",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          color: "#64748b",
          marginBottom: "4px",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: "15px",
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        {value}
      </div>
    </div>
  );
}