"use client";
import cheerio from "cheerio";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const { pages, error, loading } = useFetchPages("?slug=audiencia-publica");

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;

  const page = pages[0];

  const $ = cheerio.load(page.content.rendered!);
  $("a").addClass("pl-5 text-blue-500 hover:underline hover:text-blue-700");
  $("a").attr("target", "_blank");
  const selector = {
    1: 'a[href="https://aparecidaprev.go.gov.br/audiencia-publica-de-prestacao-de-contas-2022-e-realizada/"]',
    2: 'a[href="https://aparecidaprev.go.gov.br/audiencia-publica-2023/"]',
  };
  const newHref = {
    1: "/institucional/audiencia-publica/audiencia-publica-de-prestacao-de-contas-2022-e-realizada",
    2: "/institucional/audiencia-publica/audiencia-publica-2023",
  };

  $(selector[1]).attr("href", newHref[1]);
  $(selector[2]).attr("href", newHref[2]);
  $("strong").wrap("<p></p>");
  const updateHtml = $.html();

  return (
    <Container title={page?.title.rendered}>
      <div
        dangerouslySetInnerHTML={{ __html: updateHtml }}
        className="space-y-4"
      />
    </Container>
  );
}
