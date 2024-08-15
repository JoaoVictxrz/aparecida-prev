"use client";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "../loading";
import cheerio from "cheerio";
import Link from "next/link";

export default function Home() {
  const { pages, error, loading } = useFetchPages("?slug=concurso-2");
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  const data = pages![0];
  const $ = cheerio.load(data.content.rendered);

  $("a").addClass("text-blue-500 hover:text-blue-700 hover:underline");
  $("a").attr("href", "/concurso/concurso-publico");
  $("a").attr("target", "");
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
