"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";
import cheerio from "cheerio";

export default function Historico() {
  const { pages, loading, error } = useFetchPages("?slug=historico");

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;
  const data = pages[0];

  const $ = cheerio.load(data.content.rendered);
  $("b").addClass("font-semibold");
  $("span").removeAttr("style");
  const updatedHTML = $.html();

  return (
    <Container title="Histórico" className="flex flex-col gap-5 font-light">
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="flex flex-col space-y-2"
      />
    </Container>
  );
}
