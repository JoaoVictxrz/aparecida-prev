"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPosts from "@/hooks/useFetchPosts";
import Container from "@/components/container";
import Loading from "@/app/loading";
import Cards from "@/components/card";

export default function Home() {
  const { error, loading, posts } = useFetchPosts("?categories=22");

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  return (
    <Container
      title="APR – Autorização de Aplicação e Resgate"
      className="grid md:grid-cols-2"
    >
      {posts?.map((post, i) => (
        <Cards
          key={i}
          title={post.title.rendered}
          postadoEm={post.date}
          descrição={post.excerpt.rendered}
          href={`/financeiro/apr-autorizacao-de-aplicacao-e-resgate/${post.slug}`}
        />
      ))}
    </Container>
  );
}
