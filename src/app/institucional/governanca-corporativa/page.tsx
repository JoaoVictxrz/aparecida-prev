"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";
import { CheerioLink } from "@/services/cheerio-link-azuk";

export default function Home() {
  const { pages, error, loading } = useFetchPages(
    "?slug=governanca-corporativa",
  );
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;
  const page = pages[0];

  const updateHtml = CheerioLink(page.content.rendered!);
  return (
    <Container title={page.title.rendered!} className="flex flex-col pl-5">
      <div dangerouslySetInnerHTML={{ __html: updateHtml }} />
    </Container>
  );
}
