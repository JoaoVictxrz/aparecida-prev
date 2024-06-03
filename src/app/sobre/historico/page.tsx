import { PostsProps } from "@/interfaces/interfaces";
import { Metadata } from "next";
import { getData } from "@/services/fetch";
import cheerio, { CheerioAPI } from "cheerio";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Histórico",
  };
}

export default async function Historico() {
  try {
    const data: PostsProps = await getData("/pages/2775");

    if (!data || !data.content.rendered) return <PaginaNaoEncontrada />;

    const $: CheerioAPI = cheerio.load(data.content.rendered);
    $("b").addClass("font-semibold");
    $("span").removeAttr("style");
    const updatedHTML = $.html();

    return (
      <Container title="Histórico" className="flex flex-col gap-5 font-light">
        <div
          dangerouslySetInnerHTML={{ __html: updatedHTML }}
          className="flex flex-col space-y-2"
        />
      </Container>
    );
  } catch (error) {
    return <PaginaNaoEncontrada />;
  }
}
