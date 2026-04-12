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
  const followersText = product.followers
    ? product.followers + " seguidores"
    : "ativo digital disponível";
  const engagementText = product.engagement
    ? product.engagement + " de engajamento"
    : "com análise estratégica";

  return {
    title: product.title + " | Comprar conta " + platformLabel,
    description:
      product.title +
      ". " +
      followersText +
      ", " +
      engagementText +
      ". Veja detalhes, nicho, métricas e fale no WhatsApp para negociar.",
    openGraph: {
      title: product.title + " | VendoContas",
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

  const cleanPrice = product.price.replace(/[^\d,]/g, "").replace(",", ".");

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
      price: cleanPrice,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: "/produto/" + product.slug,
    },
  };

  return (
    <main className="produto-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <section className="produto-container produto-topo">
        <div className="breadcrumb">
          <Link href="/" className="breadcrumb-link">
            Início
          </Link>

          <span>/</span>

          <Link href={categoryHref} className="breadcrumb-link">
            {platformLabel}
          </Link>

          <span>/</span>

          <span>{product.title}</span>
        </div>

        <div className="produto-grid">
          <div className="produto-main">
            <div className="produto-badge">Marketplace de ativos digitais</div>

            <h1 className="produto-title">{product.title}</h1>

            <p className="produto-description">{product.description}</p>

            {product.image ? (
              <div className="produto-image-wrap">
                <img
                  src={product.image}
                  alt={
                    "Comprar " +
                    product.title +
                    " com " +
                    (product.followers || "métricas estratégicas")
                  }
                  loading="lazy"
                  className="produto-image"
                />
              </div>
            ) : null}

            <div className="metrics-grid">
              <Metric title="Seguidores" value={product.followers || "-"} />
              <Metric title="Engajamento" value={product.engagement || "-"} />
              <Metric title="Nicho" value={product.niche || "-"} />
            </div>

            <div className="info-card">
              <h2 className="section-title">Destaques do ativo</h2>

              <ul className="highlights-list">
                {product.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="produto-sidebar">
            <div className="sidebar-label">Valor do ativo</div>

            <div className="sidebar-price">{product.price}</div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              Comprar pelo WhatsApp
            </a>

            <Link href={categoryHref} className="cta-secondary">
              Ver mais contas
            </Link>

            <div className="miniinfo-grid">
              <MiniInfo label="Plataforma" value={platformLabel} />
              <MiniInfo
                label="Seguidores"
                value={product.followers || "Sob consulta"}
              />
              <MiniInfo
                label="Engajamento"
                value={product.engagement || "Sob consulta"}
              />
            </div>

            <div className="sidebar-note">
              Atendimento rápido • Entrega segura
            </div>
          </aside>
        </div>
      </section>

      <section className="produto-container produto-seo">
        <h2 className="seo-title">
          Vale a pena comprar conta {platformLabel}?
        </h2>

        <p className="seo-text">
          Comprar conta {platformLabel} pode acelerar resultados digitais, desde
          que o ativo seja analisado com critério. Engajamento real,
          consistência de audiência, aderência ao nicho e potencial comercial
          são fatores decisivos.
        </p>

        <p className="seo-text">
          Esta página reúne os dados essenciais para uma decisão mais segura e
          conecta você diretamente ao ativo disponível para negociação.
        </p>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="produto-container produto-related">
          <div className="related-head">
            <div className="related-kicker">Interlink estratégico</div>
            <h2 className="related-title">
              Outras contas de {platformLabel}
            </h2>
          </div>

          <div className="related-grid">
            {relatedProducts.map((item) => (
              <Link
                key={item.slug}
                href={"/produto/" + item.slug}
                className="related-card"
              >
                <div className="related-platform">
                  {getPlatformLabel(item.platform)}
                </div>

                <h3 className="related-card-title">{item.title}</h3>

                <p className="related-card-text">{item.description}</p>

                <div className="related-card-price">{item.price}</div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <style jsx>{`
        .produto-page {
          background: #0f172a;
          color: #ffffff;
          min-height: 100vh;
        }

        .produto-container {
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        .produto-topo {
          padding-top: 56px;
          padding-bottom: 40px;
        }

        .breadcrumb {
          color: #94a3b8;
          font-size: 14px;
          margin-bottom: 24px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }

        .breadcrumb-link {
          color: #94a3b8;
          text-decoration: none;
        }

        .produto-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
          gap: 32px;
          align-items: start;
        }

        .produto-badge {
          display: inline-block;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          color: #cbd5e1;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .produto-title {
          font-size: 52px;
          line-height: 1.04;
          letter-spacing: -0.04em;
          margin: 0 0 18px 0;
          max-width: 900px;
        }

        .produto-description {
          color: #cbd5e1;
          font-size: 18px;
          line-height: 1.8;
          margin: 0 0 24px 0;
          max-width: 860px;
        }

        .produto-image-wrap {
          margin-bottom: 24px;
          background: #020617;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
        }

        .produto-image {
          display: block;
          width: 100%;
          height: auto;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-bottom: 24px;
        }

        .info-card {
          background: #020617;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 22px;
          margin-bottom: 24px;
        }

        .section-title {
          margin: 0 0 12px 0;
          font-size: 24px;
        }

        .highlights-list {
          margin: 0;
          padding-left: 20px;
          color: #cbd5e1;
          line-height: 1.8;
        }

        .produto-sidebar {
          background: #020617;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 28px;
          height: fit-content;
          position: sticky;
          top: 24px;
        }

        .sidebar-label {
          font-size: 13px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 10px;
        }

        .sidebar-price {
          font-size: 40px;
          font-weight: 800;
          line-height: 1.05;
          margin-bottom: 20px;
        }

        .cta-primary {
          display: block;
          background: #22c55e;
          color: #000000;
          padding: 16px;
          border-radius: 999px;
          text-align: center;
          font-weight: 800;
          text-decoration: none;
          margin-bottom: 12px;
          font-size: 16px;
        }

        .cta-secondary {
          display: block;
          border: 1px solid #334155;
          padding: 14px;
          border-radius: 999px;
          text-align: center;
          color: #ffffff;
          text-decoration: none;
          margin-bottom: 18px;
        }

        .miniinfo-grid {
          display: grid;
          gap: 10px;
        }

        .sidebar-note {
          margin-top: 18px;
          font-size: 13px;
          color: #64748b;
          text-align: center;
        }

        .produto-seo {
          max-width: 900px;
          padding-bottom: 36px;
          color: #cbd5e1;
        }

        .seo-title {
          font-size: 28px;
          margin: 0 0 12px 0;
        }

        .seo-text {
          line-height: 1.9;
          margin: 0 0 16px 0;
        }

        .produto-related {
          padding-bottom: 80px;
        }

        .related-head {
          margin-bottom: 18px;
        }

        .related-kicker {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #94a3b8;
          margin-bottom: 8px;
        }

        .related-title {
          font-size: 36px;
          line-height: 1.04;
          margin: 0;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
        }

        .related-card {
          display: block;
          background: #020617;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 20px;
          color: #ffffff;
          text-decoration: none;
        }

        .related-platform {
          font-size: 12px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 10px;
        }

        .related-card-title {
          margin: 0 0 10px 0;
          font-size: 22px;
          line-height: 1.1;
        }

        .related-card-text {
          margin: 0 0 14px 0;
          color: #cbd5e1;
          line-height: 1.7;
          font-size: 15px;
        }

        .related-card-price {
          font-size: 24px;
          font-weight: 800;
        }

        @media (max-width: 980px) {
          .produto-grid {
            grid-template-columns: 1fr;
          }

          .produto-sidebar {
            position: static;
          }
        }

        @media (max-width: 700px) {
          .produto-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .produto-topo {
            padding-top: 32px;
            padding-bottom: 28px;
          }

          .produto-title {
            font-size: 34px;
            line-height: 1.06;
          }

          .produto-description {
            font-size: 16px;
            line-height: 1.75;
          }

          .metrics-grid {
            grid-template-columns: 1fr;
          }

          .sidebar-price {
            font-size: 32px;
          }

          .related-title {
            font-size: 28px;
          }

          .section-title {
            font-size: 22px;
          }

          .seo-title {
            font-size: 24px;
          }
        }
      `}</style>
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
    <div className="metric-card">
      <div className="metric-title">{title}</div>
      <div className="metric-value">{value}</div>

      <style jsx>{`
        .metric-card {
          background: #020617;
          padding: 14px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .metric-title {
          font-size: 12px;
          color: #64748b;
          margin-bottom: 6px;
        }

        .metric-value {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
        }
      `}</style>
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
    <div className="miniinfo-card">
      <div className="miniinfo-label">{label}</div>
      <div className="miniinfo-value">{value}</div>

      <style jsx>{`
        .miniinfo-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 12px 14px;
        }

        .miniinfo-label {
          font-size: 11px;
          color: #64748b;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .miniinfo-value {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
        }
      `}</style>
    </div>
  );
}