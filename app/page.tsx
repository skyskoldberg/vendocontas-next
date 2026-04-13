import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Comprar conta Instagram | VendoContas",
  description:
    "Comprar conta Instagram, BMs, canais do YouTube e ativos digitais com análise, critérios e mais segurança na VendoContas.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Vale a pena comprar conta Instagram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pode valer a pena quando a conta tem nicho coerente, histórico consistente, audiência real e aderência comercial. A decisão depende de análise, não apenas de números soltos.",
      },
    },
    {
      "@type": "Question",
      name: "O que avaliar antes de comprar conta Instagram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "É essencial avaliar nicho, engajamento, histórico de conteúdo, consistência da audiência, risco de recuperação, potencial comercial e compatibilidade com a operação.",
      },
    },
    {
      "@type": "Question",
      name: "A VendoContas trabalha apenas com Instagram?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A plataforma também organiza BMs, canais do YouTube, contas TikTok, contas X/Twitter, Twitch e outras categorias de ativos digitais.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className={styles.hero}>
        <p className={styles.kicker}>Marketplace de ativos digitais</p>

        <h1 className={styles.title}>
          Comprar conta Instagram com mais critério, análise e segurança
        </h1>

        <p className={styles.description}>
          A VendoContas organiza contas Instagram, BMs, canais do YouTube,
          contas TikTok e outros ativos digitais em uma estrutura pensada para
          facilitar análise, comparação e negociação.
        </p>

        <div className={styles.actions}>
          <Link href="/categoria/instagram" className={styles.primaryButton}>
            Explorar contas de Instagram
          </Link>

          <a
            href="https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20da%20VendoContas%20e%20quero%20entender%20as%20op%C3%A7%C3%B5es%20dispon%C3%ADveis."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <section className={styles.benefits}>
        <article className={styles.benefitCard}>
          <h2>Análise mais clara</h2>
          <p>
            Nicho, contexto, estrutura e aderência comercial importam mais do
            que números soltos.
          </p>
        </article>

        <article className={styles.benefitCard}>
          <h2>Decisão menos impulsiva</h2>
          <p>
            A navegação foi pensada para reduzir ruído e facilitar comparação
            entre categorias e ativos.
          </p>
        </article>

        <article className={styles.benefitCard}>
          <h2>Foco em operação</h2>
          <p>
            Ativos voltados para crescimento, monetização, contingência,
            audiência e posicionamento.
          </p>
        </article>
      </section>

      <section className={styles.section}>
        <p className={styles.sectionKicker}>Categorias principais</p>
        <h2 className={styles.sectionTitle}>
          Explore os principais tipos de ativos digitais
        </h2>
        <p className={styles.sectionDescription}>
          Navegue pelas categorias centrais da plataforma e encontre estruturas
          voltadas para monetização, audiência, contingência e presença digital.
        </p>

        <div className={styles.categoryGrid}>
          <Link href="/categoria/instagram" className={styles.categoryCard}>
            <h3>Contas de Instagram</h3>
            <p>
              Perfis voltados para crescimento, autoridade, venda e
              monetização.
            </p>
          </Link>

          <Link href="/categoria/bms" className={styles.categoryCard}>
            <h3>BMs para contingência</h3>
            <p>
              Estruturas úteis para continuidade operacional e campanhas de
              tráfego.
            </p>
          </Link>

          <Link href="/categoria/youtube" className={styles.categoryCard}>
            <h3>Canais do YouTube</h3>
            <p>
              Canais com histórico, audiência e potencial comercial para
              conteúdo e distribuição.
            </p>
          </Link>

          <Link href="/categoria/tiktok" className={styles.categoryCard}>
            <h3>Contas TikTok</h3>
            <p>
              Perfis com nicho, conteúdo e potencial de alcance para entrada
              mais rápida na plataforma.
            </p>
          </Link>

          <Link href="/categoria/twitter" className={styles.categoryCard}>
            <h3>Contas X / Twitter</h3>
            <p>
              Ativos úteis para influência, opinião, narrativa e presença
              pública.
            </p>
          </Link>

          <Link href="/categoria/jogos" className={styles.categoryCard}>
            <h3>Contas de jogos</h3>
            <p>
              Contas gamer com comunidade, progressão e valor percebido em
              nichos específicos.
            </p>
          </Link>
        </div>
      </section>

      <section className={styles.textBlock}>
        <p className={styles.sectionKicker}>Análise estratégica</p>
        <h2 className={styles.sectionTitle}>Vale a pena comprar conta Instagram?</h2>

        <p>
          Comprar conta Instagram pode acelerar uma operação digital, mas a
          decisão certa depende de análise. Nicho, engajamento, histórico,
          consistência da audiência, risco de recuperação e aderência comercial
          precisam ser avaliados antes da negociação.
        </p>

        <p>
          A plataforma foi organizada para concentrar informação útil e reduzir
          decisões impulsivas. Em vez de olhar apenas para seguidores, o foco
          precisa estar na qualidade do ativo e no encaixe com a estratégia.
        </p>
      </section>

      <section className={styles.textBlock}>
        <p className={styles.sectionKicker}>Intenção de busca</p>
        <h2 className={styles.sectionTitle}>
          O que avaliar antes de comprar conta Instagram
        </h2>

        <ul className={styles.list}>
          <li>Nicho e coerência da audiência</li>
          <li>Engajamento real e histórico de conteúdo</li>
          <li>Potencial comercial do ativo</li>
          <li>Risco de recuperação e estabilidade</li>
          <li>Compatibilidade com a sua operação</li>
        </ul>
      </section>

      <section className={styles.faqSection}>
        <p className={styles.sectionKicker}>Perguntas frequentes</p>
        <h2 className={styles.sectionTitle}>Dúvidas comuns sobre compra de ativos</h2>

        <div className={styles.faqGrid}>
          <article className={styles.faqCard}>
            <h3>Vale a pena comprar conta Instagram?</h3>
            <p>
              Pode valer a pena quando há aderência entre ativo, nicho,
              audiência e operação. O ponto central é análise, não impulso.
            </p>
          </article>

          <article className={styles.faqCard}>
            <h3>O que pesa mais na análise?</h3>
            <p>
              Contexto do perfil, histórico, recorrência, audiência, potencial
              de monetização e estabilidade do ativo.
            </p>
          </article>

          <article className={styles.faqCard}>
            <h3>A plataforma tem outras categorias?</h3>
            <p>
              Sim. Além de Instagram, a VendoContas também organiza BMs, canais
              do YouTube, TikTok, X/Twitter, Twitch e jogos.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalCtaBox}>
          <p className={styles.sectionKicker}>Atendimento rápido</p>
          <h2 className={styles.sectionTitle}>Quer avançar para negociação agora?</h2>

          <p>
            Fale no WhatsApp e receba direcionamento para a categoria, o ativo
            ou a estrutura que faz mais sentido para sua operação.
          </p>

          <a
            href="https://wa.me/5583999691629?text=Ol%C3%A1%2C%20quero%20avan%C3%A7ar%20na%20an%C3%A1lise%20de%20ativos%20digitais."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            Ir para o WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}