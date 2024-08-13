"use client";
import Loading from "@/app/loading";
import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";

export default function Organograma() {
  const { pages, error, loading } = useFetchPages("?slug=organograma");

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;
  const data = pages[0];
  return (
    <Container title={data?.title.rendered!} className="flex justify-center">
      <div dangerouslySetInnerHTML={{ __html: data.content.rendered! }} />
    </Container>
  );
}
