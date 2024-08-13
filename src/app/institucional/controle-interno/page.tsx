"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import { CheerioLink } from "@/services/cheerio-link-azuk";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const { pages, error, loading } = useFetchPages("?slug=controle-interno");
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;

  const page = pages[0];
  const updateHtml = CheerioLink(page.content.rendered!);
  return (
    <Container title={page.title.rendered!}>
      <div
        dangerouslySetInnerHTML={{ __html: updateHtml }}
        className="space-y-4"
      />
    </Container>
  );
}
