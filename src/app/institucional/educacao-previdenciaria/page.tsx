"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "@/app/loading";
import useFetchPages from "@/hooks/useFetchPages";
import { CheerioLink } from "@/services/cheerio-link-azuk";

export default function Home() {
  const { pages, error, loading } = useFetchPages(
    "?slug=educacao-previdenciaria",
  );
  if (!pages) return;
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  const page = pages[0];

  const updatedHTML = CheerioLink(page.content.rendered!);

  return (
    <Container title={page.title.rendered!} className="space-y-2">
      <div dangerouslySetInnerHTML={{ __html: updatedHTML }} />
    </Container>
  );
}
