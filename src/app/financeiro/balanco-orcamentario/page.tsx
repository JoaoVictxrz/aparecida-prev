"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "@/app/loading";
import Cards from "@/components/card";
import useFetchPosts from "@/hooks/useFetchPosts";

export default function Home() {
  const { posts, loading, error } = useFetchPosts("?categories=17");

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  return (
    <Container title="Balanço Orcamentário" className="grid md:grid-cols-2">
      {posts?.map((post, i) => (
        <Cards
          key={i}
          title={post.title.rendered}
          postadoEm={post.date}
          descrição={post.excerpt.rendered}
          href={`/financeiro/balanco-orcamentario/${post.slug}`}
        />
      ))}
    </Container>
  );
}
