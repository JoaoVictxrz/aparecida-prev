"use client";
import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Loading from "@/app/loading";
import cheerio from "cheerio";

export default function Home() {
  const { pages, error, loading } = useFetchPages("?slug=concurso");
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  const data = pages![0];

  const $ = cheerio.load(data.content.rendered);
  $("a").addClass(
    "pl-5 text-blue-500 hover:text-blue-700 hover:underline break-words",
  );
  $("a[href='https://aparecidaprev.go.gov.br/anexos/']").attr(
    "href",
    "/concurso/anexos",
  );
  $("a[href='https://aparecidaprev.go.gov.br/edital-n001-2017/']").attr(
    "href",
    "/concurso/edital",
  );
  $(
    "a[href='https://aparecidaprev.go.gov.br/edital-convocacao-concurso-n001-2017/']",
  ).attr("href", "/concurso/editais-de-convocacao");
  $("a[href='https://aparecidaprev.go.gov.br/gabaritos/']").attr(
    "href",
    "/concurso/gabaritos",
  );
  $("a[href='https://aparecidaprev.go.gov.br/resultado-final/']").attr(
    "href",
    "/concurso/resultado-final",
  );
  $("a").removeAttr("target");

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
