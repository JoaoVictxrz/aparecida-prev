"use client";
import Loading from "@/app/loading";
import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import { PostsProps } from "@/interfaces/interfaces";
import cheerio from "cheerio";

export default function Home() {
  const { pages, loading, error } = useFetchPages("?slug=atas-comiteconselho");
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;
  const data = pages[0];

  const $ = cheerio.load(data.content.rendered);
  $("a").addClass("text-blue-500 hover:text-blue-700 hover:underline");
  $("li").addClass("pl-5");
  $("h2").addClass("font-bold");

  $("p").each((_, element) => {
    if ($(element).html()?.trim() === "&nbsp;") {
      $(element).remove();
    }
  });
  const updatedHTML = $.html();

  return (
    <Container title={data.title.rendered}>
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="space-y-4"
      />
    </Container>
  );
}
