"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import useFetchPages from "@/hooks/useFetchPages";
import Loading from "@/app/loading";
import { CheerioLink } from "@/services/cheerio-link-azuk";

export default function Home() {
  const { pages, loading, error } = useFetchPages("?slug=anexos");
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  const data = pages![0];
  const updatedHTML = CheerioLink(data.content.rendered);

  return (
    <Container title={data?.title.rendered!}>
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="space-y-2"
      />
    </Container>
  );
}
