"use client";
import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Loading from "../loading";

export default function Contato() {
  const { pages, error, loading } = useFetchPages("?slug=contato");

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;
  const page = pages[0];

  return (
    <Container title={page.title.rendered}>
      <div
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        className="space-y-4"
      />
    </Container>
  );
}
