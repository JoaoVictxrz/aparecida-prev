"use client";
import cheerio from "cheerio";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const { pages, error, loading } = useFetchPages(
    "?slug=certificado-de-regularidade-previdenciaria-crp",
  );
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;
  const page = pages[0];
  const $ = cheerio.load(page.content.rendered);
  $("a").addClass("text-blue-500 hover:underline hover:text-blue-700");
  $("a[href='https://l1nk.dev/3Sbba']").attr("href", "/");
  $("strong").contents();
  $("ul").addClass("pl-5");
  const updatedHTML = $.html();

  return (
    <Container title={page.title.rendered} className="flex flex-col">
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="space-y-4"
      />
    </Container>
  );
}
