"use client";
import Loading from "@/app/loading";
import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import cheerio from "cheerio";
export default function Home() {
  const { pages, error, loading } = useFetchPages("?slug=leis-municipais");

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;

  const data = pages[0];
  const $ = cheerio.load(data.content.rendered);
  $("span").addClass("font-light text-black dark:text-white");
  $("span").removeAttr("style");
  $("a").addClass("text-blue-500 font-light pl-5");
  $("a del").removeClass("text-blue-500").addClass("text-red-500");
  $("del a").removeClass("text-blue-500").addClass("text-red-500");
  $("p").addClass("font-base");
  const updatedHTML = $.html();

  return (
    <Container title={data.title.rendered}>
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="flex flex-col space-y-4"
      ></div>
    </Container>
  );
}
