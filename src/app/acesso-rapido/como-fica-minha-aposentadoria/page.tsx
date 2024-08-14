"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const { pages, error, loading } = useFetchPages(
    "?slug=como-fica-minha-aposentadoreia",
  );

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  const data = pages![0];

  return (
    <Container title={data.title.rendered}>
      <div
        dangerouslySetInnerHTML={{ __html: data.content.rendered }}
        className="space-y-2"
      />
    </Container>
  );
}
