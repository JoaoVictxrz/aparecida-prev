"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import CardsFinanceiro from "../components/cards";
import useFetchPosts from "@/hooks/useFetchPosts";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const { posts, loading, error } = useFetchPosts("?categories=27");
  if (loading) return <Loading />;
  if (error) return <PaginaNaoEncontrada />;

  return (
    <Container
      title="DIPR – Demostrativo de Informações Prev. e Repasse"
      className="grid md:grid-cols-2"
    >
      {posts?.map((post, i) => (
        <CardsFinanceiro
          key={i}
          title={post.title.rendered}
          postadoEm={post.date}
          descrição={post.excerpt.rendered}
          href={post.slug}
          path="dpir-demonstrativo-informacoes-prev-e-repasse"
        />
      ))}
    </Container>
  );
}
