import { Metadata } from "next";
import { getData } from "@/services/fetch";
import cheerio, { CheerioAPI } from "cheerio";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Valores",
  };
}

export default async function Valores() {
  try {
    const data = await getData("/pages/2776");
    if (!data || !data.content.rendered) return <PaginaNaoEncontrada />;

    const $: CheerioAPI = cheerio.load(data.content.rendered);
    $("ul").addClass("space-y-2");
    const updatedHTML = $.html();

    return (
      <Container title="Valores">
        <div dangerouslySetInnerHTML={{ __html: updatedHTML }} />
      </Container>
    );
  } catch (error) {
    return <PaginaNaoEncontrada />;
  }
}
