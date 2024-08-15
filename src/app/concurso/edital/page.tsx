"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import useFetchPages from "@/hooks/useFetchPages";
import Loading from "@/app/loading";
import cheerio from "cheerio";

export default function Home() {
  const { pages, error, loading } = useFetchPages("?slug=edital-n001-2017");
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  const data = pages![0];

  const $ = cheerio.load(data.content.rendered);
  $("a").addClass(
    " pl-5 text-blue-500 hover:text-blue-700 hover:underline break-words",
  );
  $("a").attr("target", "_blank");
  $("a").removeAttr("style");
  $("li").addClass("flex flex-col");
  $("ul").addClass("w-full");
  const updatedHTML = $.html();

  return (
    <Container title={data?.title.rendered!} className="max-auto">
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="overflow-wrap"
      />
    </Container>
  );
}
