import { NextResponse } from "next/server"
import postsData from "@/data/posts.json"

export async function GET() {
  const base = "https://vendocontas.com"
  const posts = (postsData as any).posts || []

  const dois_dias_atras = new Date()
  dois_dias_atras.setDate(dois_dias_atras.getDate() - 2)

  const recentes = posts.filter((p: any) => {
    return new Date(p.date) >= dois_dias_atras
  }).slice(0, 50)

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${recentes.map((p: any) => `  <url>
    <loc>${base}/blog/${p.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>VendoContas</news:name>
        <news:language>pt</news:language>
      </news:publication>
      <news:publication_date>${p.date}T09:00:00-03:00</news:publication_date>
      <news:title>${p.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</news:title>
    </news:news>
  </url>`).join("\n")}
</urlset>`

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" }
  })
}
