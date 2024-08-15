"use client";
import Loading from "@/app/loading";
import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import { CheerioLink } from "@/services/cheerio-link-azuk";
export default function Home() {
  const { pages, error, loading } = useFetchPages(
    "?slug=edital-convocacao-concurso-n001-2017",
  );
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  const data = pages![0];
  const updatedHTML = CheerioLink(data.content.rendered);

  return (
    <Container title={data?.title.rendered!}>
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="space-y-4"
      />
    </Container>
  );
}
