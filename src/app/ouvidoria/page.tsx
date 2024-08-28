"use client";
import Container from "@/components/container";
import useFetchPages from "@/hooks/useFetchPages";
import Loading from "../loading";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import cheerio from "cheerio";

export default function Ouvidoria() {
  const { error, loading, pages } = useFetchPages("?slug=ouvidoria");
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  const page = pages![0];

  const $ = cheerio.load(page.content.rendered);
  // div
  $(".col-sm-6").removeClass().addClass("w-full md:w-1/2 md:pr-4");
  $(".row").addClass("flex flex-col md:flex-row space-y-4");
  // Formulário
  $("input").addClass(
    "border-b-[1px] border-r-[1px] bg-transparent shadow-sm outline-none dark:border-zinc-800 h-10 w-full p-2 my-2",
  );
  $("textarea").addClass(
    "border-b-[1px] border-r-[1px] bg-transparent shadow-sm outline-none dark:border-zinc-800 w-full p-2 my-2",
  );
  $(".wpcf7-submit")
    .removeClass()
    .addClass("bg-blue-500 h-10 rounded-sm w-3/12");
  // fonte
  $("p").addClass("font-light");
  $("strong").addClass("font-semibold");
  //mapa
  $("iframe").addClass("w-full max-w-5xl");
  const updateHTML = $.html();

  return (
    <Container title={page.title.rendered} className="flex flex-col space-y-2">
      <div
        dangerouslySetInnerHTML={{ __html: updateHTML }}
        className="flex flex-col space-y-2"
      />
    </Container>
  );
}
