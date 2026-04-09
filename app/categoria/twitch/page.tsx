import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprar Conta Twitch: Guia Completo para Crescimento e Monetização",
  description:
    "Entenda como comprar conta Twitch com mais segurança. Veja critérios essenciais, audiência, engajamento, monetização e o que realmente importa antes de fechar negócio.",
  keywords: [
    "comprar conta twitch",
    "comprar canal twitch",
    "conta twitch pronta",
    "comprar twitch com seguidores",
    "comprar conta twitch segura",
    "canal twitch monetizado",
    "comprar conta streamer",
    "conta twitch com audiência",
  ],
  alternates: {
    canonical: "https://vendocontas.com/categoria/twitch",
  },
  openGraph: {
    title: "Comprar Conta Twitch: Guia Completo para Crescimento e Monetização",
    description:
      "Entenda como comprar conta Twitch com mais segurança. Veja critérios essenciais, audiência, engajamento, monetização e o que realmente importa antes de fechar negócio.",
    url: "https://vendocontas.com/categoria/twitch",
    siteName: "VendoContas",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Page() {
  const whatsappLink =
    "https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20do%20Google.%20Quero%20saber%20mais%20sobre%20as%20p%C3%A1ginas%20dispon%C3%ADveis";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Comprar conta Twitch vale a pena?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Comprar conta Twitch pode valer a pena quando o canal possui base ativa, histórico de transmissões, audiência real e potencial de continuidade.",
        },
      },
      {
        "@type": "Question",
        name: "O que observar antes de comprar uma conta Twitch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "É importante analisar frequência de lives, média de espectadores, engajamento no chat, histórico do canal e potencial de monetização.",
        },
      },
      {
        "@type": "Question",
        name: "Conta Twitch com seguidores é suficiente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Não. O mais importante é a audiência ativa. Seguidores sem presença em lives não sustentam crescimento ou monetização.",
        },
      },
      {
        "@type": "Question",
        name: "Onde falar para saber quais contas Twitch estão disponíveis?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O canal mais direto é o WhatsApp da VendoContas, onde você pode receber direcionamento sobre contas disponíveis e nichos ativos.",
        },
      },
    ],
  };

  const sectionStyle: React.CSSProperties = {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "48px 24px",
  };

  const contentWidth: React.CSSProperties = {
    maxWidth: "920px",
  };

  const labelStyle: React.CSSProperties = {
    margin: "0 0 12px 0",
    fontSize: "12px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "rgba(17,17,17,0.55)",
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#ffffff",
    border: "1px solid rgba(17,17,17,0.08)",
    borderRadius: "20px",
    padding: "24px",
  };

  const linkCardStyle: React.CSSProperties = {
    display: "block",
    textDecoration: "none",
    color: "#111111",
    backgroundColor: "#ffffff",
    border: "1px solid rgba(17,17,17,0.08)",
    borderRadius: "20px",
    padding: "24px",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section style={{ maxWidth: "1180px", margin: "0 auto", padding: "64px 24px" }}>
        <h1 style={{ fontSize: "64px", lineHeight: 1 }}>
          Comprar conta Twitch com audiência real e potencial de monetização
        </h1>

        <p style={{ fontSize: "22px", marginTop: "20px", maxWidth: "800px" }}>
          Comprar conta Twitch pode acelerar crescimento, mas o valor está na audiência ativa.
          Frequência de lives, retenção e interação no chat definem o potencial real do canal.
        </p>

        <div style={{ marginTop: "20px" }}>
          <a href={whatsappLink} target="_blank">
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* CARDS */}
      <section style={sectionStyle}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
          <div style={cardStyle}>
            <h2>Audiência ativa</h2>
            <p>Na Twitch, espectadores simultâneos valem mais do que seguidores.</p>
          </div>

          <div style={cardStyle}>
            <h2>Frequência de lives</h2>
            <p>Histórico consistente indica maior chance de continuidade.</p>
          </div>

          <div style={cardStyle}>
            <h2>Engajamento real</h2>
            <p>Chat ativo e interação mostram valor real do canal.</p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section style={sectionStyle}>
        <div style={contentWidth}>
          <h2>Comprar conta Twitch vale a pena?</h2>
          <p>
            Vale a pena quando existe audiência ativa, histórico consistente e potencial de continuidade.
          </p>

          <h2>O que observar antes de comprar?</h2>
          <p>
            Frequência de lives, média de espectadores, engajamento e histórico do canal.
          </p>
        </div>
      </section>

      {/* INTERLINK */}
      <section style={sectionStyle}>
        <h2>Explore outras categorias</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
          <a href="/categoria/instagram" style={linkCardStyle}>Instagram</a>
          <a href="/categoria/youtube" style={linkCardStyle}>YouTube</a>
          <a href="/categoria/tiktok" style={linkCardStyle}>TikTok</a>
          <a href="/categoria/bms" style={linkCardStyle}>BMs</a>
        </div>
      </section>

      {/* CTA */}
      <section style={sectionStyle}>
        <h2>Quer saber quais contas Twitch estão disponíveis?</h2>

        <a href={whatsappLink} target="_blank">
          Falar com a VendoContas
        </a>
      </section>
    </main>
  );
}