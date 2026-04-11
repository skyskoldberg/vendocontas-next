export type ProductItem = {
  slug: string;
  title: string;
  platform:
    | "instagram"
    | "tiktok"
    | "youtube"
    | "twitter"
    | "bms"
    | "twitch"
    | "jogos";
  niche: string;
  followers?: string;
  engagement?: string;
  price: string;
  description: string;
  highlights: string[];
  image: string;
};

export const products: ProductItem[] = [
  {
    slug: "conta-instagram-empreendedorismo-48k",
    title: "Conta Instagram Empreendedorismo 48K",
    platform: "instagram",
    niche: "Empreendedorismo",
    followers: "48K",
    engagement: "4.1%",
    price: "R$ 1.490",
    description:
      "Conta de Instagram no nicho de empreendedorismo, com base de seguidores consolidada e bom potencial para monetizacao, infoprodutos e autoridade.",
    highlights: [
      "Nicho validado",
      "Boa base para infoproduto",
      "Potencial de autoridade"
    ],
    image: "/images/instagram-empreendedorismo.jpg"
  },
  {
    slug: "conta-instagram-politica-62k",
    title: "Conta Instagram Politica 62K",
    platform: "instagram",
    niche: "Politica",
    followers: "62K",
    engagement: "5.2%",
    price: "R$ 2.290",
    description:
      "Conta de Instagram no nicho politico com audiencia segmentada, ideal para projetos editoriais, posicionamento e construcao de presenca publica.",
    highlights: [
      "Audiencia segmentada",
      "Bom potencial editorial",
      "Alta retencao de tema"
    ],
    image: "/images/instagram-politica.jpg"
  },
  {
    slug: "conta-instagram-fitness-52k",
    title: "Conta Instagram Fitness 52K",
    platform: "instagram",
    niche: "Fitness",
    followers: "52K",
    engagement: "4.6%",
    price: "R$ 1.790",
    description:
      "Conta fitness com boa base para afiliados, suplementos, consultoria, trafego e monetizacao recorrente com marcas do setor.",
    highlights: [
      "Bom para afiliados",
      "Nicho comercial forte",
      "Alta demanda"
    ],
    image: "/images/instagram-fitness.jpg"
  },
  {
    slug: "conta-instagram-moda-71k",
    title: "Conta Instagram Moda 71K",
    platform: "instagram",
    niche: "Moda",
    followers: "71K",
    engagement: "3.8%",
    price: "R$ 2.480",
    description:
      "Conta no nicho de moda com bom potencial para collabs, loja propria, dropshipping, looks, estetica e branding feminino.",
    highlights: [
      "Boa para marca propria",
      "Nicho premium",
      "Forte apelo visual"
    ],
    image: "/images/instagram-moda.jpg"
  },
  {
    slug: "conta-instagram-achadinhos-95k",
    title: "Conta Instagram Achadinhos 95K",
    platform: "instagram",
    niche: "Achadinhos",
    followers: "95K",
    engagement: "4.9%",
    price: "R$ 3.200",
    description:
      "Conta no nicho de achadinhos com forte potencial para links, afiliados, produtos virais e monetizacao direta.",
    highlights: [
      "Excelente para afiliados",
      "Nicho de conversao",
      "Otima para reels e carrossel"
    ],
    image: "/images/instagram-achadinhos.jpg"
  },
  {
    slug: "conta-instagram-motivacional-58k",
    title: "Conta Instagram Motivacional 58K",
    platform: "instagram",
    niche: "Motivacional",
    followers: "58K",
    engagement: "4.3%",
    price: "R$ 2.150",
    description:
      "Conta no nicho motivacional ideal para autoridade, conteudo recorrente, venda de ebooks, mentorias e posicionamento pessoal.",
    highlights: [
      "Bom volume de conteudo",
      "Facil de reativar",
      "Boa recorrencia"
    ],
    image: "/images/instagram-motivacional.jpg"
  },

  {
    slug: "bm-antiga-estrutura-estavel",
    title: "BM Antiga Estrutura Estavel",
    platform: "bms",
    niche: "BM antiga",
    followers: "—",
    engagement: "—",
    price: "R$ 1.390",
    description:
      "BM antiga para operacoes que valorizam estrutura mais madura, historico de uso e percepcao de estabilidade para contingencia e escala.",
    highlights: [
      "Estrutura mais madura",
      "Boa para contingencia",
      "Perfil interessante para operacao estavel"
    ],
    image: "/images/bm-antiga.jpg"
  },
  {
    slug: "bm-simples-entrada-rapida",
    title: "BM Simples Entrada Rapida",
    platform: "bms",
    niche: "BM simples",
    followers: "—",
    engagement: "—",
    price: "R$ 890",
    description:
      "BM simples para quem precisa de um ativo mais direto, funcional e objetivo para iniciar uma estrutura de contingencia com menor complexidade.",
    highlights: [
      "Estrutura objetiva",
      "Boa porta de entrada",
      "Aplicacao operacional simples"
    ],
    image: "/images/bm-simples.jpg"
  },
  {
    slug: "bm-ilimitada-escala-operacional",
    title: "BM Ilimitada Escala Operacional",
    platform: "bms",
    niche: "BM ilimitada",
    followers: "—",
    engagement: "—",
    price: "R$ 3.290",
    description:
      "BM ilimitada pensada para operacoes que exigem mais margem de expansao, controle e capacidade de escalar campanhas com mais liberdade estrutural.",
    highlights: [
      "Vocacao para escala",
      "Boa para operacao robusta",
      "Mais margem estrutural"
    ],
    image: "/images/bm-ilimitada.jpg"
  },
  {
    slug: "bm-eua-estrutura-internacional",
    title: "BM EUA Estrutura Internacional",
    platform: "bms",
    niche: "BM EUA",
    followers: "—",
    engagement: "—",
    price: "R$ 2.480",
    description:
      "BM EUA voltada para operacoes que buscam percepcao internacional, flexibilidade estrategica e composicao estrutural para campanhas em mercados diversos.",
    highlights: [
      "Estrutura internacional",
      "Boa para operacoes globais",
      "Valor estrategico de posicionamento"
    ],
    image: "/images/bm-eua.jpg"
  },
  {
    slug: "bm-politica-campanha-e-percepcao",
    title: "BM para Politicos Campanha e Percepcao",
    platform: "bms",
    niche: "BM para politicos",
    followers: "—",
    engagement: "—",
    price: "R$ 2.950",
    description:
      "BM para operacoes politicas, campanhas, posicionamento publico e estruturas que exigem organizacao, contingencia e capacidade de reacao.",
    highlights: [
      "Boa para campanha politica",
      "Estrutura para contingencia",
      "Aplicacao em percepcao publica"
    ],
    image: "/images/bm-politica.jpg"
  },
  {
    slug: "bm-nicho-black-operacao-sensivel",
    title: "BM Nicho Black Operacao Sensivel",
    platform: "bms",
    niche: "BM nicho black",
    followers: "—",
    engagement: "—",
    price: "R$ 3.490",
    description:
      "BM para nichos mais sensiveis, com foco em contingencia, redundancia e sustentacao de estruturas que exigem maior cuidado operacional.",
    highlights: [
      "Boa para operacao sensivel",
      "Perfil de contingencia reforcada",
      "Estrutura pensada para resiliencia"
    ],
    image: "/images/bm-black.jpg"
  },
  {
    slug: "bm-euro-estrutura-premium",
    title: "BM Euro Estrutura Premium",
    platform: "bms",
    niche: "BM euro",
    followers: "—",
    engagement: "—",
    price: "R$ 2.790",
    description:
      "BM euro para operacoes que valorizam percepcao premium, composicao internacional e construcao estrutural mais sofisticada.",
    highlights: [
      "Percepcao premium",
      "Boa composicao internacional",
      "Aplicacao estrategica avancada"
    ],
    image: "/images/bm-euro.jpg"
  },

  {
    slug: "canal-youtube-cortes-84k",
    title: "Canal YouTube Cortes 84K",
    platform: "youtube",
    niche: "Cortes",
    followers: "84K",
    engagement: "5.1%",
    price: "R$ 3.490",
    description:
      "Canal de cortes com base pronta para monetizacao, recorrencia de upload e exploracao de temas quentes com alta retencao.",
    highlights: [
      "Bom para monetizacao",
      "Formato recorrente",
      "Alto potencial de views"
    ],
    image: "/images/youtube-cortes.jpg"
  },
  {
    slug: "canal-youtube-dark-curiosidades-61k",
    title: "Canal YouTube Dark Curiosidades 61K",
    platform: "youtube",
    niche: "Curiosidades",
    followers: "61K",
    engagement: "4.4%",
    price: "R$ 2.980",
    description:
      "Canal dark de curiosidades com historico de conteudo evergreen, boa base para narracao, shorts e videos longos.",
    highlights: [
      "Conteudo evergreen",
      "Boa base para shorts",
      "Facil reativacao"
    ],
    image: "/images/youtube-curiosidades.jpg"
  },
  {
    slug: "canal-youtube-financas-37k",
    title: "Canal YouTube Financas 37K",
    platform: "youtube",
    niche: "Financas",
    followers: "37K",
    engagement: "4.8%",
    price: "R$ 2.390",
    description:
      "Canal de financas com publico qualificado, potencial para afiliacao, consultoria, infoprodutos e publicidade segmentada.",
    highlights: [
      "Nicho valorizado",
      "Boa qualificacao de audiencia",
      "Potencial comercial forte"
    ],
    image: "/images/youtube-financas.jpg"
  },
  {
    slug: "canal-youtube-gamer-92k",
    title: "Canal YouTube Gamer 92K",
    platform: "youtube",
    niche: "Games",
    followers: "92K",
    engagement: "5.3%",
    price: "R$ 4.150",
    description:
      "Canal gamer com forte volume de publico, bom historico de views e potencial para publis, afiliados e patrocinios.",
    highlights: [
      "Nicho com alta demanda",
      "Bom para publis",
      "Escalavel com shorts"
    ],
    image: "/images/youtube-gamer.jpg"
  },

  {
    slug: "conta-tiktok-humor-120k",
    title: "Conta TikTok Humor 120K",
    platform: "tiktok",
    niche: "Humor",
    followers: "120K",
    engagement: "6.1%",
    price: "R$ 3.890",
    description:
      "Conta TikTok de humor com boa recorrencia, potencial viral e base forte para monetizacao por views, publi e afiliacao.",
    highlights: [
      "Nicho viral",
      "Alta recorrencia",
      "Boa monetizacao"
    ],
    image: "/images/tiktok-humor.jpg"
  },
  {
    slug: "conta-tiktok-feminino-88k",
    title: "Conta TikTok Nicho Feminino 88K",
    platform: "tiktok",
    niche: "Feminino",
    followers: "88K",
    engagement: "5.7%",
    price: "R$ 3.250",
    description:
      "Conta TikTok focada em publico feminino, com bom potencial para beleza, moda, lifestyle, afiliados e produtos virais.",
    highlights: [
      "Boa para afiliados",
      "Publico comercial",
      "Alto potencial de viralizacao"
    ],
    image: "/images/tiktok-feminino.jpg"
  },
  {
    slug: "conta-tiktok-loja-54k",
    title: "Conta TikTok Loja 54K",
    platform: "tiktok",
    niche: "Loja",
    followers: "54K",
    engagement: "5.0%",
    price: "R$ 2.180",
    description:
      "Conta TikTok ideal para loja, produtos fisicos, UGC, demonstracao de itens e estrategia de conteudo focada em conversao.",
    highlights: [
      "Boa para ecommerce",
      "Formato visual forte",
      "Potencial de conversao"
    ],
    image: "/images/tiktok-loja.jpg"
  },
  {
    slug: "conta-tiktok-motivacional-73k",
    title: "Conta TikTok Motivacional 73K",
    platform: "tiktok",
    niche: "Motivacional",
    followers: "73K",
    engagement: "5.4%",
    price: "R$ 2.690",
    description:
      "Conta motivacional com boa base para cortes, frases, autoridade pessoal e monetizacao com produtos digitais.",
    highlights: [
      "Boa para autoridade",
      "Conteudo recorrente",
      "Facil reativacao"
    ],
    image: "/images/tiktok-motivacional.jpg"
  },

  {
    slug: "conta-twitch-gamer-fps-31k",
    title: "Conta Twitch Gamer FPS 31K",
    platform: "twitch",
    niche: "FPS",
    followers: "31K",
    engagement: "4.7%",
    price: "R$ 1.980",
    description:
      "Conta Twitch voltada para jogos competitivos FPS, com publico alinhado para lives recorrentes, patrocinio e comunidade.",
    highlights: [
      "Boa base para lives",
      "Nicho competitivo",
      "Potencial de comunidade"
    ],
    image: "/images/twitch-fps.jpg"
  },
  {
    slug: "conta-twitch-rpg-22k",
    title: "Conta Twitch RPG 22K",
    platform: "twitch",
    niche: "RPG",
    followers: "22K",
    engagement: "4.2%",
    price: "R$ 1.490",
    description:
      "Conta Twitch com publico de RPG e games de narrativa, ideal para criadores focados em comunidade e tempo medio de visualizacao.",
    highlights: [
      "Boa retencao em live",
      "Publico nichado",
      "Facil de reativar"
    ],
    image: "/images/twitch-rpg.jpg"
  },
  {
    slug: "conta-twitch-variedades-44k",
    title: "Conta Twitch Variedades 44K",
    platform: "twitch",
    niche: "Variedades",
    followers: "44K",
    engagement: "4.9%",
    price: "R$ 2.280",
    description:
      "Conta Twitch para lives de variedades, react, bate-papo e entretenimento com boa flexibilidade de pauta e monetizacao.",
    highlights: [
      "Formato flexivel",
      "Boa para react",
      "Potencial de comunidade"
    ],
    image: "/images/twitch-variedades.jpg"
  },

  {
    slug: "conta-twitter-politica-41k",
    title: "Conta X Twitter Politica 41K",
    platform: "twitter",
    niche: "Politica",
    followers: "41K",
    engagement: "3.9%",
    price: "R$ 2.590",
    description:
      "Conta de X Twitter no nicho politico, com publico de opiniao, debate e atualidade, boa para projetos editoriais e posicionamento.",
    highlights: [
      "Boa para narrativa",
      "Publico politizado",
      "Potencial de repercussao"
    ],
    image: "/images/twitter-politica.jpg"
  },
  {
    slug: "conta-twitter-futebol-67k",
    title: "Conta X Twitter Futebol 67K",
    platform: "twitter",
    niche: "Futebol",
    followers: "67K",
    engagement: "4.5%",
    price: "R$ 3.180",
    description:
      "Conta X Twitter focada em futebol, comentarios, noticias, humor esportivo e grande potencial de alcance em tempo real.",
    highlights: [
      "Boa para tempo real",
      "Alta recorrencia",
      "Nicho com grande tracao"
    ],
    image: "/images/twitter-futebol.jpg"
  },
  {
    slug: "conta-twitter-negocios-29k",
    title: "Conta X Twitter Negocios 29K",
    platform: "twitter",
    niche: "Negocios",
    followers: "29K",
    engagement: "3.7%",
    price: "R$ 1.790",
    description:
      "Conta X Twitter no nicho de negocios e marketing, ideal para autoridade, distribuicao de ideias, threads e geracao de leads.",
    highlights: [
      "Boa para autoridade",
      "Formato thread forte",
      "Publico comercial"
    ],
    image: "/images/twitter-negocios.jpg"
  },

  {
    slug: "conta-jogos-free-fire-53k",
    title: "Conta Jogos Free Fire 53K",
    platform: "jogos",
    niche: "Free Fire",
    followers: "53K",
    engagement: "5.0%",
    price: "R$ 2.250",
    description:
      "Conta de jogos com forte base ligada a Free Fire, ideal para criadores, comunidades, clipes, pubg de skins e monetizacao em torno do nicho gamer.",
    highlights: [
      "Nicho gamer forte",
      "Boa para comunidade",
      "Potencial para clips e reels"
    ],
    image: "/images/jogos-freefire.jpg"
  },
  {
    slug: "conta-jogos-roblox-47k",
    title: "Conta Jogos Roblox 47K",
    platform: "jogos",
    niche: "Roblox",
    followers: "47K",
    engagement: "4.8%",
    price: "R$ 2.090",
    description:
      "Conta de jogos no nicho Roblox, boa para publico jovem, videos, cortes, comunidade e exploracao de trends recorrentes.",
    highlights: [
      "Publico jovem",
      "Boa recorrencia",
      "Facil reativacao"
    ],
    image: "/images/jogos-roblox.jpg"
  },
  {
    slug: "conta-jogos-fortnite-64k",
    title: "Conta Jogos Fortnite 64K",
    platform: "jogos",
    niche: "Fortnite",
    followers: "64K",
    engagement: "5.2%",
    price: "R$ 2.780",
    description:
      "Conta de jogos focada em Fortnite, ideal para criacao de conteudo, clipes, comunidade gamer e exploracao de patrocinio e afiliados.",
    highlights: [
      "Boa para clips",
      "Alta demanda gamer",
      "Potencial comercial"
    ],
    image: "/images/jogos-fortnite.jpg"
  }
];