import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import { getData } from "@/services/fetch";
import cheerio, { CheerioAPI } from "cheerio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editais de convocação",
};

export default async function Home() {
  try {
    const data = await getData("/pages/6560");

    const $: CheerioAPI = cheerio.load(data.content.rendered);
    $("a").addClass(
      "text-blue-500 hover:text-blue-700 hover:underline break-words",
    );
    const updatedHTML = $.html();

    return (
      <Container title={data?.title.rendered!}>
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
