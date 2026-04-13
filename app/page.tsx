import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Comprar conta Instagram | Marketplace de ativos digitais",
  description:
    "Comprar conta Instagram, BMs, canais YouTube, TikTok e ativos digitais com mais critério, estrutura e análise.",
};

export default function HomePage() {
  return (
    <main className={styles.container}>
      
      {/* HEADER LIMPO */}
      <header className={styles.header}>
        <div className={styles.logoBlock}>
          <Link href="/" className={styles.logo}>
            VendoContas
          </Link>

          <p className={styles.logoText}>
            Marketplace de ativos digitais
          </p>
        </div>

        <a
          href="https://wa.me/5583999691629"
          target="_blank"
          className={styles.whatsappHeader}
        >
          Falar no WhatsApp
        </a>
      </header>

      {/* HERO ÚNICO (SEM DUPLICAÇÃO) */}
      <section className={styles.hero}>
        <p className={styles.kicker}>Marketplace de ativos digitais</p>

        <h1 className={styles.heroTitle}>
          Comprar conta Instagram: marketplace com análise e mais segurança
        </h1>

        <p className={styles.description}>
          Encontre contas Instagram, BMs, canais do YouTube e ativos digitais
          organizados para facilitar análise, comparação e tomada de decisão.
        </p>

        <div className={styles.ctaGroup}>
          <Link href="/categoria/instagram" className={styles.primaryBtn}>
            Explorar contas de Instagram
          </Link>
        </div>
      </section>

      {/* PROVAS */}
      <section className={styles.proofSection}>
        <div className={styles.proofItem}>
          <strong>Estrutura organizada</strong>
          <span>categorias e páginas indexáveis</span>
        </div>

        <div className={styles.proofItem}>
          <strong>Mais clareza</strong>
          <span>nicho, métricas e contexto</span>
        </div>

        <div className={styles.proofItem}>
          <strong>Foco em operação</strong>
          <span>ativos para escala e audiência</span>
        </div>
      </section>

      {/* GRID */}
      <section className={styles.gridSection}>
        <h2 className={styles.sectionTitle}>
          Principais categorias de ativos digitais
        </h2>

        <div className={styles.grid}>
          <Link href="/categoria/instagram" className={styles.card}>
            <h3>Contas de Instagram</h3>
            <p>Perfis prontos para crescimento e monetização.</p>
          </Link>

          <Link href="/categoria/bms" className={styles.card}>
            <h3>BMs para contingência</h3>
            <p>Estrutura para continuidade operacional.</p>
          </Link>

          <Link href="/categoria/youtube" className={styles.card}>
            <h3>Canais do YouTube</h3>
            <p>Histórico, audiência e monetização.</p>
          </Link>

          <Link href="/categoria/tiktok" className={styles.card}>
            <h3>Contas TikTok</h3>
            <p>Distribuição rápida e alcance orgânico.</p>
          </Link>

          <Link href="/categoria/twitter" className={styles.card}>
            <h3>Contas X / Twitter</h3>
            <p>Posicionamento e influência.</p>
          </Link>

          <Link href="/categoria/jogos" className={styles.card}>
            <h3>Contas de jogos</h3>
            <p>Mercado gamer e comunidade.</p>
          </Link>
        </div>
      </section>

      {/* SEO TEXTO */}
      <section className={styles.textSection}>
        <h2>Vale a pena comprar conta Instagram?</h2>

        <p>
          Comprar conta Instagram pode acelerar um projeto digital, mas exige
          análise de nicho, engajamento e histórico. A VendoContas organiza esses
          ativos para facilitar essa avaliação.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className={styles.finalCta}>
        <h2>Quer avançar para negociação?</h2>

        <a
          href="https://wa.me/5583999691629"
          target="_blank"
          className={styles.primaryBtn}
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* BOTÃO FLUTUANTE AJUSTADO */}
      <a
        href="https://wa.me/5583999691629"
        target="_blank"
        className={styles.whatsappFloat}
      >
        WhatsApp
      </a>
    </main>
  );
}