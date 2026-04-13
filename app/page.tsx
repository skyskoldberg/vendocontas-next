import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title:
    "Comprar conta Instagram, BMs e ativos digitais | VendoContas",
  description:
    "Marketplace para comprar conta Instagram, BMs, canais do YouTube, contas TikTok, Twitch, X/Twitter e ativos digitais com mais critério, estrutura e clareza.",
};

export default function HomePage() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoBlock}>
          <Link href="/" className={styles.logo}>
            VendoContas
          </Link>
          <p className={styles.logoText}>
            Marketplace de ativos digitais para quem busca comprar conta
            Instagram, BMs e outros ativos com mais critério.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Navegação principal">
          <Link href="/">Início</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/categoria/instagram">Instagram</Link>
          <Link href="/categoria/bms">BMs</Link>
          <Link href="/categoria/youtube">YouTube</Link>
          <Link href="/categoria/tiktok">TikTok</Link>
          <Link href="/categoria/twitch">Twitch</Link>
          <Link href="/categoria/twitter">X / Twitter</Link>
          <Link href="/categoria/jogos">Jogos</Link>
        </nav>

        <a
          href="https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20da%20home%20da%20VendoContas%20e%20quero%20entender%20as%20op%C3%A7%C3%B5es%20dispon%C3%ADveis."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappHeader}
        >
          Falar no WhatsApp
        </a>
      </header>

      <section className={styles.hero}>
        <p className={styles.kicker}>Marketplace de ativos digitais</p>

        <h1 className={styles.heroTitle}>
          Comprar conta Instagram com mais segurança, análise e clareza
        </h1>

        <p className={styles.description}>
          A VendoContas organiza contas Instagram, BMs, canais do YouTube,
          contas TikTok, Twitch, X / Twitter e ativos digitais em uma estrutura
          pensada para facilitar análise, comparação e negociação.
        </p>

        <div className={styles.ctaGroup}>
          <Link href="/categoria/instagram" className={styles.primaryBtn}>
            Explorar contas de Instagram
          </Link>

          <a
            href="https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20da%20home%20da%20VendoContas%20e%20quero%20falar%20sobre%20compra%20de%20ativos."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className={styles.heroProof}>
          <div className={styles.proofItem}>
            <strong>Marketplace estruturado</strong>
            <span>categorias, produtos e páginas indexáveis</span>
          </div>
          <div className={styles.proofItem}>
            <strong>Mais clareza na decisão</strong>
            <span>nicho, métricas, contexto e negociação rápida</span>
          </div>
          <div className={styles.proofItem}>
            <strong>Foco em operação</strong>
            <span>ativos para escala, audiência e contingência</span>
          </div>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionKicker}>Categorias principais</p>
          <h2>Explore os principais tipos de ativos digitais</h2>
          <p className={styles.sectionText}>
            Navegue pelas categorias mais buscadas do marketplace e encontre
            ativos voltados para audiência, monetização, contingência e
            posicionamento digital.
          </p>
        </div>

        <div className={styles.grid}>
          <Link href="/categoria/instagram" className={styles.card}>
            <span className={styles.cardKicker}>Categoria principal</span>
            <h3>Comprar conta Instagram</h3>
            <p>
              Hub principal com páginas, produtos e critérios para quem deseja
              comprar conta Instagram com mais segurança e visão estratégica.
            </p>
          </Link>

          <Link href="/categoria/bms" className={styles.card}>
            <span className={styles.cardKicker}>Contingência</span>
            <h3>BMs para Facebook</h3>
            <p>
              Estrutura pensada para contingência, continuidade operacional e
              suporte a operações de tráfego e escala.
            </p>
          </Link>

          <Link href="/categoria/youtube" className={styles.card}>
            <span className={styles.cardKicker}>Audiência</span>
            <h3>Canais do YouTube</h3>
            <p>
              Canais com histórico, público e potencial de monetização para
              projetos de conteúdo, autoridade e distribuição.
            </p>
          </Link>

          <Link href="/categoria/tiktok" className={styles.card}>
            <span className={styles.cardKicker}>Crescimento</span>
            <h3>Contas TikTok</h3>
            <p>
              Perfis com nicho, conteúdo e volume de distribuição para quem
              quer entrar mais rápido no TikTok.
            </p>
          </Link>

          <Link href="/categoria/twitter" className={styles.card}>
            <span className={styles.cardKicker}>Narrativa</span>
            <h3>Contas X / Twitter</h3>
            <p>
              Ativos voltados para posicionamento, influência, opinião,
              política e presença editorial.
            </p>
          </Link>

          <Link href="/categoria/jogos" className={styles.card}>
            <span className={styles.cardKicker}>Mercado gamer</span>
            <h3>Contas de jogos</h3>
            <p>
              Contas gamer com foco em comunidade, progressão, nicho e valor
              percebido em mercados específicos.
            </p>
          </Link>
        </div>
      </section>

      <section className={styles.textSection}>
        <p className={styles.sectionKicker}>Análise estratégica</p>
        <h2>Vale a pena comprar conta Instagram?</h2>

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

      <section className={styles.textSection}>
        <p className={styles.sectionKicker}>Estrutura do site</p>
        <h2>O que você encontra na VendoContas</h2>

        <p>
          O site conecta páginas de categoria, páginas de produto e conteúdos de
          apoio para melhorar navegação, clareza e profundidade temática. Isso
          fortalece a experiência do usuário e também a estrutura semântica do
          projeto para indexação no Google.
        </p>

        <p>
          Se o objetivo é comprar conta Instagram, comprar BM, comprar canal do
          YouTube ou avaliar outros ativos digitais, a plataforma foi desenhada
          para concentrar informação útil e reduzir ruído na tomada de decisão.
        </p>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalCtaBox}>
          <p className={styles.sectionKicker}>Atendimento rápido</p>
          <h2>Quer avançar para negociação agora?</h2>
          <p>
            Fale no WhatsApp e receba direcionamento para a categoria, o ativo
            ou a estrutura que faz mais sentido para sua operação.
          </p>

          <a
            href="https://wa.me/5583999691629?text=Ol%C3%A1%2C%20quero%20avan%C3%A7ar%20na%20an%C3%A1lise%20de%20ativos%20digitais."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            Ir para o WhatsApp
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/5583999691629?text=Ol%C3%A1%2C%20vim%20do%20site%20VendoContas."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappFloat}
      >
        WhatsApp
      </a>
    </main>
  );
}