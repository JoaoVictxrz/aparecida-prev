"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Visão() {
  const { pages, loading, error } = useFetchPages("?slug=visao");

  if (error) return <PaginaNaoEncontrada />;

  if (loading) return <Loading />;
  if (!pages) return;

  const data = pages[0];

  return (
    <Container title={data.title.rendered} className="max-w-4xl text-xl">
      <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
    </Container>
  );
}
