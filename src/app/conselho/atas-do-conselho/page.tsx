"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";
import cheerio from "cheerio";

export default function Home() {
  const { pages, loading, error } = useFetchPages("?slug=atas-conselho");
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;

  const data = pages[0];

  const $ = cheerio.load(data?.content.rendered!);
  $("a").addClass("pl-5 text-blue-500 hover:text-blue-700 hover:underline");
  $("strong").removeAttr("style");
  $("span").removeAttr("style");
  $("p").each(function (this: any) {
    if ($(this).html()?.trim() === "&nbsp;") {
      $(this).remove();
    }
  });
  $("a").attr("target", "_blank");
  const updateHtml = $.html();

  return (
    <Container title={data?.title.rendered!}>
      <div
        dangerouslySetInnerHTML={{ __html: updateHtml }}
        className="flex flex-col space-y-4"
      />
    </Container>
  );
}
