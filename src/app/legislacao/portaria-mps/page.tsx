"use client";
import Loading from "@/app/loading";
import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import cheerio from "cheerio";

export default function Home() {
  const { pages, error, loading } = useFetchPages("?slug=portaria-mps");

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;

  const data = pages[0];
  const $ = cheerio.load(data.content.rendered);
  $("strong").addClass("font-bold");
  $("a").addClass("text-blue-500 pl-5 font-light hover:text-blue-800");
  $("span").removeAttr("style");
  $("span").addClass("text-black dark:text-white");

  const updatedHTML = $.html();

  return (
    <Container title={data.title.rendered!} className="font-light">
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="flex flex-col space-y-2 dark:text-white"
      />
    </Container>
  );
}
