import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jessica Lima | Especialista em Marketing Digital e Instagram",
  description: "Jessica Lima é especialista em marketing digital, crescimento no Instagram e negócios online. Fundadora do VendoContas.com.",
}

export default function JessicaLima() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "60px 20px", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 32, marginBottom: 40 }}>
        <div style={{
          width: 120, height: 120, borderRadius: "50%",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white", fontSize: 48, fontWeight: "bold", flexShrink: 0
        }}>JL</div>
        <div>
          <h1 style={{ margin: "0 0 8px", fontSize: 32 }}>Jessica Lima</h1>
          <p style={{ margin: "0 0 8px", color: "#666", fontSize: 18 }}>
            Especialista em Marketing Digital e Instagram
          </p>
          <p style={{ margin: 0, color: "#888", fontSize: 14 }}>
            Fundadora do VendoContas.com • Desde 2021
          </p>
        </div>
      </div>

      <section style={{ marginBottom: 40 }}>
        <h2>Sobre a Autora</h2>
        <p>
          Jessica Lima é especialista em marketing digital com mais de 5 anos de experiência
          no mercado de compra e venda de contas do Instagram no Brasil. Fundadora do
          VendoContas.com, o marketplace mais seguro do Brasil para transações de
          perfis do Instagram.
        </p>
        <p>
          Ao longo de sua carreira, Jessica auxiliou centenas de empreendedores,
          influenciadores e lojistas a encontrar contas do Instagram com histórico
          real e engajamento orgânico, acelerando o crescimento de seus negócios online.
        </p>
        <p>
          Especializada em estratégias de crescimento no Instagram, marketing de
          conteúdo e negócios digitais, Jessica escreve regularmente sobre tendências
          do mercado, dicas de segurança na compra de contas e estratégias para
          maximizar o retorno em redes sociais.
        </p>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2>Especialidades</h2>
        <ul style={{ lineHeight: 2 }}>
          <li>Compra e venda segura de contas do Instagram</li>
          <li>Crescimento orgânico no Instagram</li>
          <li>Marketing digital para e-commerce</li>
          <li>Estratégias de monetização em redes sociais</li>
          <li>Avaliação e due diligence de perfis</li>
        </ul>
      </section>

      <section>
        <h2>Publicações Recentes</h2>
        <p>
          Jessica publica regularmente no blog do VendoContas.com sobre os temas mais
          relevantes do mercado de contas do Instagram. Seus artigos são referência
          para empreendedores que buscam expandir sua presença digital de forma segura.
        </p>
        <a href="/blog" style={{
          display: "inline-block", padding: "12px 24px",
          background: "#000", color: "#fff", borderRadius: 8,
          textDecoration: "none", fontWeight: "bold"
        }}>Ver todos os artigos</a>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Jessica Lima",
        "jobTitle": "Especialista em Marketing Digital e Instagram",
        "worksFor": {
          "@type": "Organization",
          "name": "VendoContas",
          "url": "https://vendocontas.com"
        },
        "url": "https://vendocontas.com/autor/jessica-lima",
        "description": "Especialista em compra e venda de contas do Instagram no Brasil. Fundadora do VendoContas.com.",
        "knowsAbout": ["Instagram", "Marketing Digital", "Redes Sociais", "E-commerce"]
      })}} />
    </main>
  )
}
