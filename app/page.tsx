import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Comprar conta Instagram | VendoContas",
  description:
    "Comprar conta Instagram, BMs e ativos digitais com mais critério, análise e clareza na VendoContas.",
};

export default function HomePage() {
  return (
    <main className={styles.page}>
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
            href="https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20do%20site%20VendoContas%20e%20quero%20analisar%20as%20op%C3%A7%C3%B5es%20dispon%C3%ADveis."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <section className={styles.proofGrid}>
        <article className={styles.proofCard}>
          <h2>Estrutura organizada</h2>
          <p>categorias e páginas indexáveis</p>
        </article>

        <article className={styles.proofCard}>
          <h2>Mais clareza</h2>
          <p>nicho, métricas e contexto</p>
        </article>

        <article className={styles.proofCard}>
          <h2>Foco em operação</h2>
          <p>ativos para escala e audiência</p>
        </article>
      </section>

      <section className={styles.section}>
        <p className={styles.sectionKicker}>Categorias principais</p>
        <h2 className={styles.sectionTitle}>
          Principais categorias de ativos digitais
        </h2>

        <div className={styles.categoryGrid}>
          <Link href="/categoria/instagram" className={styles.categoryCard}>
            <h3>Contas de Instagram</h3>
            <p>Perfis prontos para crescimento e monetização.</p>
          </Link>

          <Link href="/categoria/bms" className={styles.categoryCard}>
            <h3>BMs para contingência</h3>
            <p>Estrutura para continuidade operacional.</p>
          </Link>

          <Link href="/categoria/youtube" className={styles.categoryCard}>
            <h3>Canais do YouTube</h3>
            <p>Histórico, audiência e monetização.</p>
          </Link>

          <Link href="/categoria/tiktok" className={styles.categoryCard}>
            <h3>Contas TikTok</h3>
            <p>Distribuição rápida e alcance orgânico.</p>
          </Link>

          <Link href="/categoria/twitter" className={styles.categoryCard}>
            <h3>Contas X / Twitter</h3>
            <p>Posicionamento, influência e narrativa.</p>
          </Link>

          <Link href="/categoria/jogos" className={styles.categoryCard}>
            <h3>Contas de jogos</h3>
            <p>Mercado gamer, progressão e comunidade.</p>
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
          Por isso, a VendoContas foi organizada para facilitar leitura de
          categorias, produtos e critérios relevantes para quem quer comprar
          ativos digitais com mais objetividade.
        </p>
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