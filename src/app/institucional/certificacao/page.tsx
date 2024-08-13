"use client";
import { CheerioLink } from "@/services/cheerio-link-azuk";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const { pages, error, loading } = useFetchPages(
    "?slug=certificacao-cpa-10-anbima",
  );
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;
  const page = pages[0];

  const updatedHTML = CheerioLink(page.content.rendered!);

  return (
    <Container title={page.title.rendered}>
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="space-y-2"
      />
    </Container>
  );
}
