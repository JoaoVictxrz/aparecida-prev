"use client";
import { CheerioLink } from "@/services/cheerio-link-azuk";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const { pages, error, loading } = useFetchPages(
    "?slug=lei-organica-do-municipio",
  );

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;

  const updatedHTML = CheerioLink(pages[0].content.rendered);
  return (
    <Container title={pages[0].title.rendered}>
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="flex flex-col space-y-2"
      />
    </Container>
  );
}
