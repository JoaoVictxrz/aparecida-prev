"use client";
import { CheerioLink } from "@/services/cheerio-link-azuk";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const { pages, error, loading } = useFetchPages("?slug=passivo-judicial");

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;

  const data = pages[0];

  const updatedHTML = CheerioLink(data.content.rendered!);

  return (
    <Container title={data?.title.rendered!}>
      <div dangerouslySetInnerHTML={{ __html: updatedHTML }} />
    </Container>
  );
}
