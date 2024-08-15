"use client";
import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import Loading from "../loading";
import { CheerioLink } from "@/services/cheerio-link-azuk";

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  const { pages, error, loading } = useFetchPages("?slug=" + params.slug);
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  const data = pages![0];

  const updateHtml = CheerioLink(data.content.rendered);

  return (
    <Container title={data.title.rendered}>
      <div
        className="space-y-2"
        dangerouslySetInnerHTML={{ __html: updateHtml }}
      />
    </Container>
  );
}
