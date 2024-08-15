"use client";
import { CheerioLink } from "@/services/cheerio-link-azuk";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const { error, loading, pages } = useFetchPages(
    "?slug=taxa-de-administracao",
  );
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  const data = pages![0];

  const updateHtml = CheerioLink(data.content.rendered!);
  return (
    <Container title={data?.title.rendered!}>
      <div dangerouslySetInnerHTML={{ __html: updateHtml }} />
    </Container>
  );
}
