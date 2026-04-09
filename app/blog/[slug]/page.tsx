import { getAllPosts, getPostBySlug } from "../../../lib/posts";
import { notFound } from "next/navigation";

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <main
      style={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "56px 24px 80px",
        lineHeight: 1.8,
      }}
    >
      <a
        href="/blog"
        style={{
          display: "inline-block",
          marginBottom: "24px",
          textDecoration: "none",
        }}
      >
        ← Voltar para o blog
      </a>

      {post.category && (
        <p
          style={{
            marginBottom: "8px",
            fontSize: "14px",
            opacity: 0.7,
          }}
        >
          {post.category}
        </p>
      )}

      <h1
        style={{
          fontSize: "48px",
          lineHeight: 1.1,
          marginBottom: "16px",
        }}
      >
        {post.title}
      </h1>

      {post.date && (
        <p
          style={{
            marginBottom: "32px",
            fontSize: "15px",
            opacity: 0.7,
          }}
        >
          {post.date}
        </p>
      )}

      <article
        style={{ fontSize: "20px" }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}