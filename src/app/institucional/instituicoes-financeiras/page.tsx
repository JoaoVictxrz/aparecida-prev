"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPosts from "@/hooks/useFetchPosts";
import Container from "@/components/container";
import Loading from "@/app/loading";
import Cards from "@/components/card";

export default function Home() {
  const { posts, loading, error } = useFetchPosts("?categories=15");

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  return (
    <Container
      title="Instituições Financeiras Credenciadas"
      className="grid md:grid-cols-2"
    >
      {posts?.map((post, i) => (
        <Cards
          key={i}
          title={post.title.rendered}
          postadoEm={post.date}
          descrição={post.excerpt.rendered}
          href={`/institucional/instituicoes-financeiras/${post.slug}`}
        />
      ))}
    </Container>
  );
}
