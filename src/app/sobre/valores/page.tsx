"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Valores() {
  const { error, loading, pages } = useFetchPages("?slug=valores");
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;

  const data = pages[0];
  return (
    <Container title="Valores">
      <div
        dangerouslySetInnerHTML={{ __html: data.content.rendered }}
        className="space-y-4"
      />
    </Container>
  );
}
