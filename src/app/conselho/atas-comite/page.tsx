import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import { PostsProps } from "@/interfaces/interfaces";
import { getData } from "@/services/fetch";
import cheerio, { CheerioAPI } from "cheerio";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Atas comitê",
  };
}

export default async function Home() {
  try {
    const data: PostsProps = await getData("/pages/553");

    if (!data) return <PaginaNaoEncontrada />;

    const $: CheerioAPI = cheerio.load(data.content.rendered);
    $("a").addClass("pl-5 text-blue-500 hover:text-blue-700 hover:underline");
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
  } catch (error) {
    return <PaginaNaoEncontrada />;
  }
}
