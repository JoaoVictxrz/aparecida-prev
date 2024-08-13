"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import cheerio from "cheerio";
import Loading from "@/app/loading";

export default function Equipe() {
  const { pages, loading, error } = useFetchPages("?slug=equipe");

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;

  const data = pages[0];

  const $ = cheerio.load(data.content.rendered);
  $("pre").addClass("flex items-center flex-col");
  $("img").removeAttr("class");
  const updatedHTML = $.html();

  return (
    <Container title="Presidência e diretoria executivas">
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="text-cemter flex flex-col items-center"
      />
    </Container>
  );
}
