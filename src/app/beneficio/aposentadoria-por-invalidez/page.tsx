"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";
export default function Home() {
  const { pages, error, loading } = useFetchPages(
    "?slug=aposentadoria-por-invalidez",
  );

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  const data = pages![0];

  return (
    <Container title={data.title.rendered} className="space-y-4">
      <div
        dangerouslySetInnerHTML={{ __html: data?.content.rendered! }}
        className="flex flex-col space-y-2"
      />
    </Container>
  );
}
