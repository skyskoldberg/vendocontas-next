export type ProductItem = {
  slug: string;
  title: string;
  platform: "instagram" | "tiktok" | "youtube" | "twitter" | "bms";
  niche: string;
  followers?: string;
  engagement?: string;
  price: string;
  description: string;
  highlights: string[];
  image?: string;
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
      "Conta de Instagram no nicho de empreendedorismo, com base de seguidores consolidada e bom potencial para monetização, infoprodutos e autoridade.",
    highlights: [
      "Nicho validado",
      "Boa base para infoproduto",
      "Potencial de autoridade",
    ],
  },
  {
    slug: "conta-instagram-politica-62k",
    title: "Conta Instagram Política 62K",
    platform: "instagram",
    niche: "Política",
    followers: "62K",
    engagement: "3.8%",
    price: "R$ 2.290",
    description:
      "Conta de Instagram no nicho político com audiência já segmentada, ideal para projetos editoriais, posicionamento e construção de presença pública.",
    highlights: [
      "Audiência segmentada",
      "Bom potencial editorial",
      "Alta retenção de tema",
    ],
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
      "Conta fitness com boa base para monetização com suplementos, consultoria, treinos, afiliados e marcas do setor.",
    highlights: [
      "Bom para afiliados",
      "Nicho comercial forte",
      "Alta demanda",
    ],
  },
  {
    slug: "conta-instagram-moda-71k",
    title: "Conta Instagram Moda 71K",
    platform: "instagram",
    niche: "Moda",
    followers: "71K",
    engagement: "3.9%",
    price: "R$ 2.480",
    description:
      "Conta no nicho de moda com bom potencial para collabs, loja própria, dropshipping, looks, estética e branding feminino.",
    highlights: [
      "Boa para marca própria",
      "Nicho premium",
      "Forte apelo visual",
    ],
  },
  {
    slug: "conta-instagram-achadinhos-95k",
    title: "Conta Instagram Achadinhos 95K",
    platform: "instagram",
    niche: "Achadinhos",
    followers: "95K",
    engagement: "4.4%",
    price: "R$ 3.200",
    description:
      "Conta no nicho de achadinhos com forte potencial para links, afiliados, produtos virais e monetização direta.",
    highlights: [
      "Excelente para afiliados",
      "Nicho de conversão",
      "Ótima para reels e carrossel",
    ],
  },
  {
    slug: "conta-instagram-motivacao-83k",
    title: "Conta Instagram Motivação 83K",
    platform: "instagram",
    niche: "Motivação",
    followers: "83K",
    engagement: "3.7%",
    price: "R$ 2.150",
    description:
      "Conta no nicho motivacional ideal para autoridade, conteúdo recorrente, venda de ebooks, mentorias e posicionamento pessoal.",
    highlights: [
      "Bom volume de conteúdo",
      "Fácil de reativar",
      "Boa recorrência",
    ],
  },
  {
    slug: "conta-instagram-imobiliario-37k",
    title: "Conta Instagram Imobiliário 37K",
    platform: "instagram",
    niche: "Imobiliário",
    followers: "37K",
    engagement: "3.5%",
    price: "R$ 1.390",
    description:
      "Conta segmentada para mercado imobiliário, indicada para corretores, imobiliárias e projetos de captação local.",
    highlights: [
      "Nicho localizável",
      "Boa para tráfego",
      "Potencial de lead",
    ],
  },
  {
    slug: "conta-tiktok-fitness-120k",
    title: "Conta TikTok Fitness 120K",
    platform: "tiktok",
    niche: "Fitness",
    followers: "120K",
    engagement: "Alta",
    price: "R$ 2.950",
    description:
      "Conta TikTok no nicho fitness com potencial de viralização, alcance e distribuição rápida de conteúdo curto.",
    highlights: [
      "Boa para viral",
      "Excelente alcance",
      "Alta frequência de consumo",
    ],
  },
  {
    slug: "conta-twitter-politica-28k",
    title: "Conta X/Twitter Política 28K",
    platform: "twitter",
    niche: "Política",
    followers: "28K",
    engagement: "Boa",
    price: "R$ 1.480",
    description:
      "Conta X/Twitter em nicho político, ideal para distribuição de opinião, acompanhamento de pauta e audiência editorial.",
    highlights: [
      "Bom para pauta quente",
      "Audiência temática",
      "Boa resposta em threads",
    ],
  },
  {
    slug: "canal-youtube-empreendedorismo-18k",
    title: "Canal YouTube Empreendedorismo 18K",
    platform: "youtube",
    niche: "Empreendedorismo",
    followers: "18K inscritos",
    engagement: "Boa",
    price: "R$ 2.900",
    description:
      "Canal de YouTube no nicho de empreendedorismo com potencial para conteúdo evergreen, autoridade e funis longos.",
    highlights: [
      "Bom para evergreen",
      "Alta confiança",
      "Monetização ampliada",
    ],
  },
  {
    slug: "bm-facebook-contingencia-verificada",
    title: "BM Facebook para Contingência",
    platform: "bms",
    niche: "Facebook Ads",
    price: "R$ 2.490",
    description:
      "BM para contingência com foco em estrutura operacional, estabilidade e suporte a operações de mídia paga.",
    highlights: [
      "Estrutura operacional",
      "Indicada para contingência",
      "Boa para escalar operação",
    ],
  },
];