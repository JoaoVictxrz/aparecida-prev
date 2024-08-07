import PaginaNaoEncontrada from "./pagina-nao-encontrada";
import Container from "./container";
import Loading from "@/app/loading";
import cheerio from "cheerio";
import { PostsProps } from "@/interfaces/interfaces";

interface Props {
  data: PostsProps[] | null;
  loading: boolean;
  error: boolean;
}

export default function PaginaSlug({ data, loading, error }: Props) {
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  if (!data || data.length === 0) return <Loading />;

  const $ = cheerio.load(data[0].content.rendered);
  const hasStrong = $("strong").length > 0;
  $("a")
    .addClass('pl-5 text-blue-500 hover:text-blue-700 hover:underline"')
    .attr("target", "_blank");
  if (hasStrong) {
    $("strong").contents().unwrap();
  }
  const updatedHtml = $.html();

  return (
    <Container title={data[0].title.rendered}>
      <div dangerouslySetInnerHTML={{ __html: updatedHtml }} />
    </Container>
  );
}
