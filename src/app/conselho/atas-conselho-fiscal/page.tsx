"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import cheerio from "cheerio";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const { pages, loading, error } = useFetchPages(
    "?slug=atas-conselho-fiscal-2",
  );

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;
  const data = pages[0];
  const $ = cheerio.load(data.content.rendered!);

  $("span").removeAttr("style");
  $("strong").removeAttr("style");
  $("a").addClass("pl-5 text-blue-500 hover:text-blue-700 hover:underline");
  $("p").each(function (this: any) {
    if ($(this).html()?.trim() === "&nbsp;") {
      $(this).remove();
    }
  });
  const updateHtml = $.html();

  return (
    <Container title={data.title.rendered!}>
      <div
        dangerouslySetInnerHTML={{ __html: updateHtml }}
        className="flex flex-col space-y-4"
      />
    </Container>
  );
}
