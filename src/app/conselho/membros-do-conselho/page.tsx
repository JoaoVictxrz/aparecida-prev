"use client";
import { CheerioLink } from "@/services/cheerio-link-azuk";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const { pages, error, loading } = useFetchPages(
    "?slug=conselho-municipal-de-previdencia",
  );

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  const data = pages![0];

  const updateHtml = CheerioLink(data.content.rendered);

  return (
    <Container title="Membros dos conselhos">
      <div
        dangerouslySetInnerHTML={{ __html: updateHtml }}
        className="flex flex-col space-y-4"
      />
    </Container>
  );
}
