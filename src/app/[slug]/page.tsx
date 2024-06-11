import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import cheerio, { CheerioAPI } from "cheerio";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Props) {
  try {
    const response = await AxiosInstance.get("/pages?slug=" + params.slug);

    if (response.status !== 200) {
      throw new Error("Erro ao buscar dados da página");
    }

    const contentRendered = response.data[0].content.rendered;

    if (!contentRendered || contentRendered.trim().length === 0) {
      throw new Error("Content is empty");
    }

    const data: PostsProps = response.data[0];

    const $: CheerioAPI = cheerio.load(data.content.rendered);
    $("a").addClass(
      "text-blue-500 hover:text-blue-700 hover:underline break-words",
    );
    $("li").addClass("pl-5");

    const updateHtml = $.html();

    return (
      <Container title={data.title.rendered}>
        <div
          className="space-y-2"
          dangerouslySetInnerHTML={{ __html: updateHtml }}
        />
      </Container>
    );
  } catch (error) {
    return <PaginaNaoEncontrada />;
  }
}
