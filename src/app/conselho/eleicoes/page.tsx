"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import cheerio from "cheerio";
import Container from "@/components/container";
import Loading from "@/app/loading";
import { CheerioLink } from "@/services/cheerio-link-azuk";

export default function Home() {
  const { pages, loading, error } = useFetchPages("?slug=eleicoes");

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  const data = pages![0];

  const updateHtml = CheerioLink(data.content.rendered);

  return (
    <Container title={data?.title.rendered!}>
      <div
        dangerouslySetInnerHTML={{ __html: updateHtml }}
        className="space-y-4"
      />
    </Container>
  );
}
