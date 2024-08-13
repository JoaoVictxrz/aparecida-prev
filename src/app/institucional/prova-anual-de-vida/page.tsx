"use client";
import { CheerioLink } from "@/services/cheerio-link-azuk";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const { pages, loading, error } = useFetchPages("?slug=prova-de-vida-anual");
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;
  const data = pages[0];

  const updateHtml = CheerioLink(data.content.rendered!);
  return (
    <Container title={data.title.rendered!} className="space-y-2">
      <div dangerouslySetInnerHTML={{ __html: updateHtml }} />
    </Container>
  );
}
