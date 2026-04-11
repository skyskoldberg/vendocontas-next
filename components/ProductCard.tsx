import Link from "next/link"

type Props = {
  product: {
    slug: string
    title: string
    description: string
    price: string
    platform: string
  }
}

export default function ProductCard({ product }: Props) {
  return (
    <article>
      <div>{product.platform}</div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <strong>{product.price}</strong>
      <Link href={"/produto/" + product.slug}>Ver detalhes</Link>
    </article>
  )
}