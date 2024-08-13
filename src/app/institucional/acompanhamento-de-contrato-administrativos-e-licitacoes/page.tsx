"use client";
import { CheerioLink } from "@/services/cheerio-link-azuk";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const { error, pages, loading } = useFetchPages(
    "?slug=acompanhamento-de-contrato-administrativos-e-licitacoes",
  );
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return <PaginaNaoEncontrada />;

  const page = pages[0];
  const updateHtml = CheerioLink(page.content.rendered!);
  return (
    <Container title={page.title.rendered as string}>
      <div
        dangerouslySetInnerHTML={{ __html: updateHtml }}
        className="space-y-4"
      />
    </Container>
  );
}
