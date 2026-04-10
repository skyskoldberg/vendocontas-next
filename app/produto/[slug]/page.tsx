import Link from "next/link";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

export default function HomePage() {
  const categoryStats = {
    instagram: products.filter((p) => p.platform === "instagram").length,
    bms: products.filter((p) => p.platform === "bms").length,
    tiktok: products.filter((p) => p.platform === "tiktok").length,
    youtube: products.filter((p) => p.platform === "youtube").length,
    twitter: products.filter((p) => p.platform === "twitter").length,
  };

  const articles = [
    {
      title: "Vale a pena comprar conta Instagram em 2026?",
      href: "/blog",
      description:
        "Entenda quando faz sentido comprar uma conta pronta, quais riscos analisar e o que observar antes da negociação.",
    },
    {
      title: "Como analisar BM para contingência com mais segurança",
      href: "/categoria/bms",
      description:
        "Veja os principais pontos técnicos e operacionais que devem ser avaliados antes de usar uma BM em escala.",
    },
    {
      title: "Comprar conta TikTok, YouTube ou X/Twitter: qual faz mais sentido?",
      href: "/blog",
      description:
        "Compare objetivos, formato de conteúdo, tempo de monetização e aderência com cada tipo de ativo digital.",
    },
  ];

  const categoryCardStyle: React.CSSProperties = {
    borderRadius: "28px",
    border: "1px solid rgba(255,255,255,0.08)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
    boxShadow: "0 18px 50px rgba(0,0,0,0.22)",
    padding: "24px",
    color: "#F5F7FA",
    textDecoration: "none",
    display: "block",
    backdropFilter: "blur(10px)",
  };

  return (
    <main
      style={{
        background:
          "radial-gradient(circle at top, rgba(59,130,246,0.10), transparent 22%), linear-gradient(180deg, #06070A 0%, #090B10 100%)",
        minHeight: "100vh",
        color: "#F5F7FA",
      }}
    >
      <section
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "42px 24px 24px",
        }}
      >
        <div
          style={{
            borderRadius: "36px",
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))",
            boxShadow: "0 30px 80px rgba(0,0,0,0.28)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.2fr) minmax(340px, 460px)",
              gap: "28px",
              padding: "42px 34px",
            }}
          >
            <div>
              <span
                style={{
                  display: "inline-block",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#D5DBE4",
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "18px",
                }}
              >
                Marketplace editorial de ativos digitais
              </span>

              <h1
                style={{
                  fontSize: "64px",
                  lineHeight: 0.98,
                  letterSpacing: "-0.05em",
                  margin: "0 0 22px",
                  maxWidth: "860px",
                  color: "#FFFFFF",
                }}
              >
                Comprar contas de Instagram, BMs e ativos digitais com mais critério
              </h1>

              <p
                style={{
                  fontSize: "21px",
                  lineHeight: 1.9,
                  color: "#B8C1CC",
                  maxWidth: "820px",
                  margin: "0 0 28px",
                }}
              >
                Estrutura pensada para quem quer analisar contas de Instagram,
                BMs para contingência, contas TikTok, canais de YouTube, perfis de
                X/Twitter e outros ativos digitais com foco em percepção, potencial
                comercial, entrada mais rápida no mercado e escala de operação.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px",
                  marginBottom: "28px",
                }}
              >
                <a
                  href="https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20do%20Google.%20Quero%20consultar%20ativos%20digitais%20dispon%C3%ADveis."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    background: "#22C55E",
                    color: "#04110A",
                    padding: "15px 22px",
                    borderRadius: "999px",
                    fontWeight: 800,
                    fontSize: "15px",
                    boxShadow: "0 14px 34px rgba(34,197,94,0.28)",
                  }}
                >
                  Consultar ativos no WhatsApp
                </a>

                <Link
                  href="/categoria/instagram"
                  style={{
                    textDecoration: "none",
                    background: "rgba(255,255,255,0.05)",
                    color: "#F5F7FA",
                    padding: "15px 22px",
                    borderRadius: "999px",
                    fontWeight: 700,
                    fontSize: "15px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  Explorar contas de Instagram
                </Link>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    borderRadius: "22px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "18px",
                  }}
                >
                  <div style={{ fontSize: "12px", color: "#93A0B0", marginBottom: "6px" }}>
                    Foco
                  </div>
                  <strong style={{ fontSize: "20px", color: "#FFF" }}>
                    Instagram, BMs e escala
                  </strong>
                </div>

                <div
                  style={{
                    borderRadius: "22px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "18px",
                  }}
                >
                  <div style={{ fontSize: "12px", color: "#93A0B0", marginBottom: "6px" }}>
                    Abordagem
                  </div>
                  <strong style={{ fontSize: "20px", color: "#FFF" }}>
                    Análise + conversão
                  </strong>
                </div>

                <div
                  style={{
                    borderRadius: "22px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    padding: "18px",
                  }}
                >
                  <div style={{ fontSize: "12px", color: "#93A0B0", marginBottom: "6px" }}>
                    Estrutura
                  </div>
                  <strong style={{ fontSize: "20px", color: "#FFF" }}>
                    SEO + marketplace
                  </strong>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gap: "16px",
                alignSelf: "stretch",
              }}
            >
              <div
                style={{
                  borderRadius: "28px",
                  padding: "22px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.20)",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    background: "rgba(34,197,94,0.12)",
                    color: "#7BF1A8",
                    fontSize: "12px",
                    fontWeight: 700,
                    marginBottom: "12px",
                  }}
                >
                  Destaque
                </div>

                <h2
                  style={{
                    fontSize: "30px",
                    lineHeight: 1.05,
                    letterSpacing: "-0.04em",
                    margin: "0 0 10px",
                    color: "#FFF",
                  }}
                >
                  Conta Instagram Fitness 52K
                </h2>

                <p
                  style={{
                    color: "#B8C1CC",
                    lineHeight: 1.75,
                    fontSize: "16px",
                    margin: "0 0 18px",
                  }}
                >
                  Nicho comercial forte, bom potencial para afiliados, consultoria,
                  tráfego e monetização recorrente.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: "10px",
                    marginBottom: "18px",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.04)",
                      padding: "12px",
                    }}
                  >
                    <div style={{ fontSize: "11px", color: "#93A0B0" }}>Seguidores</div>
                    <strong style={{ color: "#FFF" }}>52K</strong>
                  </div>

                  <div
                    style={{
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.04)",
                      padding: "12px",
                    }}
                  >
                    <div style={{ fontSize: "11px", color: "#93A0B0" }}>Engajamento</div>
                    <strong style={{ color: "#FFF" }}>4.6%</strong>
                  </div>

                  <div
                    style={{
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.04)",
                      padding: "12px",
                    }}
                  >
                    <div style={{ fontSize: "11px", color: "#93A0B0" }}>Preço</div>
                    <strong style={{ color: "#FFF" }}>R$ 1.790</strong>
                  </div>
                </div>

                <Link
                  href="/produto/conta-instagram-fitness-52k"
                  style={{
                    textDecoration: "none",
                    display: "inline-block",
                    background: "#FFFFFF",
                    color: "#06070A",
                    padding: "13px 18px",
                    borderRadius: "999px",
                    fontWeight: 800,
                    fontSize: "14px",
                  }}
                >
                  Ver página do ativo
                </Link>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    borderRadius: "24px",
                    padding: "20px",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      padding: "6px 10px",
                      borderRadius: "999px",
                      background: "rgba(59,130,246,0.14)",
                      color: "#8BC1FF",
                      fontSize: "11px",
                      fontWeight: 700,
                      marginBottom: "10px",
                    }}
                  >
                    BM
                  </div>

                  <h3
                    style={{
                      fontSize: "22px",
                      lineHeight: 1.08,
                      margin: "0 0 8px",
                      color: "#FFF",
                    }}
                  >
                    BM para contingência
                  </h3>

                  <p
                    style={{
                      color: "#B8C1CC",
                      lineHeight: 1.7,
                      fontSize: "14px",
                      margin: 0,
                    }}
                  >
                    Estrutura pensada para operação de mídia, estabilidade e escala.
                  </p>
                </div>

                <div
                  style={{
                    borderRadius: "24px",
                    padding: "20px",
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      padding: "6px 10px",
                      borderRadius: "999px",
                      background: "rgba(168,85,247,0.14)",
                      color: "#D6A7FF",
                      fontSize: "11px",
                      fontWeight: 700,
                      marginBottom: "10px",
                    }}
                  >
                    Política
                  </div>

                  <h3
                    style={{
                      fontSize: "22px",
                      lineHeight: 1.08,
                      margin: "0 0 8px",
                      color: "#FFF",
                    }}
                  >
                    Conta Instagram Política 62K
                  </h3>

                  <p
                    style={{
                      color: "#B8C1CC",
                      lineHeight: 1.7,
                      fontSize: "14px",
                      margin: 0,
                    }}
                  >
                    Boa para editorial, autoridade, opinião e público segmentado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "34px 24px 14px",
        }}
      >
        <div
          style={{
            marginBottom: "22px",
          }}
        >
          <h2
            style={{
              fontSize: "46px",
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              margin: "0 0 12px",
              color: "#FFF",
            }}
          >
            Categorias principais
          </h2>

          <p
            style={{
              maxWidth: "900px",
              color: "#B8C1CC",
              fontSize: "18px",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            Explore contas de Instagram, BMs para contingência, contas TikTok,
            canais de YouTube, perfis de X/Twitter e outros ativos digitais
            organizados por categoria, nicho e potencial comercial.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px",
          }}
        >
          <Link href="/categoria/instagram" style={categoryCardStyle}>
            <div style={{ fontSize: "12px", color: "#8FA0B4", marginBottom: "8px" }}>
              Categoria
            </div>
            <h3
              style={{
                fontSize: "28px",
                lineHeight: 1.05,
                margin: "0 0 10px",
                color: "#FFF",
              }}
            >
              Instagram
            </h3>
            <p
              style={{
                margin: "0 0 16px",
                color: "#B8C1CC",
                lineHeight: 1.75,
                fontSize: "15px",
              }}
            >
              Contas para empreendedorismo, política, moda, fitness, achadinhos,
              motivação, imobiliário e outros nichos.
            </p>
            <strong style={{ color: "#FFF" }}>
              {categoryStats.instagram} ofertas em destaque
            </strong>
          </Link>

          <Link href="/categoria/bms" style={categoryCardStyle}>
            <div style={{ fontSize: "12px", color: "#8FA0B4", marginBottom: "8px" }}>
              Categoria
            </div>
            <h3
              style={{
                fontSize: "28px",
                lineHeight: 1.05,
                margin: "0 0 10px",
                color: "#FFF",
              }}
            >
              BMs
            </h3>
            <p
              style={{
                margin: "0 0 16px",
                color: "#B8C1CC",
                lineHeight: 1.75,
                fontSize: "15px",
              }}
            >
              Estruturas voltadas para contingência, operação de mídia, estabilidade
              e escala no Facebook Ads.
            </p>
            <strong style={{ color: "#FFF" }}>
              {categoryStats.bms} ofertas em destaque
            </strong>
          </Link>

          <Link href="/categoria/tiktok" style={categoryCardStyle}>
            <div style={{ fontSize: "12px", color: "#8FA0B4", marginBottom: "8px" }}>
              Categoria
            </div>
            <h3
              style={{
                fontSize: "28px",
                lineHeight: 1.05,
                margin: "0 0 10px",
                color: "#FFF",
              }}
            >
              TikTok
            </h3>
            <p
              style={{
                margin: "0 0 16px",
                color: "#B8C1CC",
                lineHeight: 1.75,
                fontSize: "15px",
              }}
            >
              Contas com potencial de viralização, distribuição rápida e forte
              alcance em conteúdo curto.
            </p>
            <strong style={{ color: "#FFF" }}>
              {categoryStats.tiktok} ofertas em destaque
            </strong>
          </Link>

          <Link href="/categoria/youtube" style={categoryCardStyle}>
            <div style={{ fontSize: "12px", color: "#8FA0B4", marginBottom: "8px" }}>
              Categoria
            </div>
            <h3
              style={{
                fontSize: "28px",
                lineHeight: 1.05,
                margin: "0 0 10px",
                color: "#FFF",
              }}
            >
              YouTube
            </h3>
            <p
              style={{
                margin: "0 0 16px",
                color: "#B8C1CC",
                lineHeight: 1.75,
                fontSize: "15px",
              }}
            >
              Canais para autoridade, conteúdo evergreen, monetização ampliada e
              construção de percepção de marca.
            </p>
            <strong style={{ color: "#FFF" }}>
              {categoryStats.youtube} ofertas em destaque
            </strong>
          </Link>

          <Link href="/categoria/twitter" style={categoryCardStyle}>
            <div style={{ fontSize: "12px", color: "#8FA0B4", marginBottom: "8px" }}>
              Categoria
            </div>
            <h3
              style={{
                fontSize: "28px",
                lineHeight: 1.05,
                margin: "0 0 10px",
                color: "#FFF",
              }}
            >
              X / Twitter
            </h3>
            <p
              style={{
                margin: "0 0 16px",
                color: "#B8C1CC",
                lineHeight: 1.75,
                fontSize: "15px",
              }}
            >
              Perfis com vocação editorial, opinião, audiência segmentada e
              distribuição de pauta.
            </p>
            <strong style={{ color: "#FFF" }}>
              {categoryStats.twitter} ofertas em destaque
            </strong>
          </Link>

          <Link href="/categoria/jogos" style={categoryCardStyle}>
            <div style={{ fontSize: "12px", color: "#8FA0B4", marginBottom: "8px" }}>
              Categoria
            </div>
            <h3
              style={{
                fontSize: "28px",
                lineHeight: 1.05,
                margin: "0 0 10px",
                color: "#FFF",
              }}
            >
              Jogos
            </h3>
            <p
              style={{
                margin: "0 0 16px",
                color: "#B8C1CC",
                lineHeight: 1.75,
                fontSize: "15px",
              }}
            >
              Espaço para contas e ativos gamer, com potencial para comunidade,
              engajamento e monetização de público específico.
            </p>
            <strong style={{ color: "#FFF" }}>Categoria estratégica</strong>
          </Link>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "28px 24px 18px",
        }}
      >
        <div
          style={{
            borderRadius: "34px",
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
            padding: "34px",
          }}
        >
          <ProductGrid
            title="Ofertas em destaque"
            description="Seleção de ativos digitais organizados por nicho, plataforma e potencial comercial. Use esta vitrine como camada de consulta, análise e conversão."
          />
        </div>
      </section>

      <section
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "28px 24px 18px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
            gap: "20px",
          }}
        >
          <div
            style={{
              borderRadius: "30px",
              padding: "30px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2
              style={{
                fontSize: "40px",
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
                margin: "0 0 14px",
                color: "#FFF",
              }}
            >
              O que observar antes de comprar uma conta digital
            </h2>

            <p
              style={{
                color: "#B8C1CC",
                lineHeight: 1.9,
                fontSize: "18px",
                margin: "0 0 18px",
              }}
            >
              Antes de comprar conta Instagram, BM para contingência, conta TikTok,
              canal de YouTube ou perfil de X/Twitter, o ponto central não é só o
              número aparente. É preciso analisar coerência temática, base de público,
              potencial comercial, contexto de uso, estabilidade e aderência com sua
              estratégia.
            </p>

            <p
              style={{
                color: "#B8C1CC",
                lineHeight: 1.9,
                fontSize: "18px",
                margin: 0,
              }}
            >
              Um bom marketplace de ativos digitais não deveria funcionar só como
              vitrine. Ele deve funcionar como camada de leitura estratégica. É isso
              que aumenta percepção de autoridade, melhora retenção e fortalece SEO
              semântico.
            </p>
          </div>

          <div
            style={{
              borderRadius: "30px",
              padding: "30px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2
              style={{
                fontSize: "40px",
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
                margin: "0 0 14px",
                color: "#FFF",
              }}
            >
              Perguntas frequentes
            </h2>

            <div style={{ display: "grid", gap: "16px" }}>
              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: "21px", color: "#FFF" }}>
                  Vale a pena comprar conta Instagram pronta?
                </h3>
                <p style={{ margin: 0, color: "#B8C1CC", lineHeight: 1.8 }}>
                  Em muitos casos, sim. Isso pode acelerar percepção, entrada em nicho
                  validado e monetização, desde que a análise seja feita com critério.
                </p>
              </div>

              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: "21px", color: "#FFF" }}>
                  BM para contingência realmente ajuda na escala?
                </h3>
                <p style={{ margin: 0, color: "#B8C1CC", lineHeight: 1.8 }}>
                  Sim, quando integrada a uma operação organizada. O ponto principal é
                  estrutura, estabilidade e uso técnico coerente.
                </p>
              </div>

              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: "21px", color: "#FFF" }}>
                  Posso usar esse tipo de ativo para monetização rápida?
                </h3>
                <p style={{ margin: 0, color: "#B8C1CC", lineHeight: 1.8 }}>
                  Dependendo do nicho, sim. Fitness, achadinhos, empreendedorismo e
                  moda costumam ter vocação comercial forte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "28px 24px 30px",
        }}
      >
        <div
          style={{
            borderRadius: "30px",
            padding: "30px",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <h2
              style={{
                fontSize: "42px",
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
                margin: "0 0 10px",
                color: "#FFF",
              }}
            >
              Conteúdo estratégico para análise e decisão
            </h2>

            <p
              style={{
                color: "#B8C1CC",
                fontSize: "18px",
                lineHeight: 1.85,
                margin: 0,
                maxWidth: "860px",
              }}
            >
              Além da vitrine de ofertas, o projeto precisa funcionar como hub
              editorial. É isso que fortalece o domínio, amplia contexto semântico e
              ajuda o Google a entender o site como referência no tema.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "18px",
            }}
          >
            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                style={{
                  textDecoration: "none",
                  borderRadius: "24px",
                  padding: "22px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#F5F7FA",
                  display: "block",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: "#8FA0B4",
                    marginBottom: "8px",
                  }}
                >
                  Leitura recomendada
                </div>

                <h3
                  style={{
                    fontSize: "24px",
                    lineHeight: 1.15,
                    margin: "0 0 10px",
                    color: "#FFF",
                  }}
                >
                  {article.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#B8C1CC",
                    lineHeight: 1.8,
                    fontSize: "15px",
                  }}
                >
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "16px 24px 72px",
        }}
      >
        <div
          style={{
            borderRadius: "34px",
            padding: "34px",
            background:
              "linear-gradient(180deg, rgba(34,197,94,0.12), rgba(255,255,255,0.03))",
            border: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "48px",
              lineHeight: 1,
              letterSpacing: "-0.05em",
              margin: "0 0 14px",
              color: "#FFF",
            }}
          >
            Quer analisar opções com mais profundidade?
          </h2>

          <p
            style={{
              maxWidth: "840px",
              margin: "0 auto 22px",
              color: "#D6DEE8",
              fontSize: "18px",
              lineHeight: 1.85,
            }}
          >
            Use a vitrine para explorar categorias, comparar perfis e entender
            possibilidades. Para consulta direta, disponibilidade e detalhes de
            operação, o próximo passo é falar no WhatsApp.
          </p>

          <a
            href="https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20quero%20analisar%20ativos%20digitais%20dispon%C3%ADveis."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              display: "inline-block",
              background: "#FFFFFF",
              color: "#06070A",
              padding: "16px 24px",
              borderRadius: "999px",
              fontWeight: 800,
              fontSize: "15px",
              boxShadow: "0 18px 40px rgba(255,255,255,0.10)",
            }}
          >
            Falar no WhatsApp agora
          </a>
        </div>
      </section>
    </main>
  );
}