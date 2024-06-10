import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import { Metadata } from "next";
import { getData } from "@/services/fetch";
import cheerio, { CheerioAPI } from "cheerio";

export const metadata: Metadata = {
  title: "Gabaritos",
};

export default async function Home() {
  try {
    const data = await getData("/pages/6988");

    const $: CheerioAPI = cheerio.load(data.content.rendered);
    $("a").addClass(
      " pl-5 text-blue-500 hover:text-blue-700 hover:underline break-words",
    );
    $("a").attr("target", "_blank");
    $("strong").contents().unwrap();
    const updatedHTML = $.html();

    return (
      <Container title={data?.title.rendered!}>
        <div
          dangerouslySetInnerHTML={{ __html: updatedHTML }}
          className="space-y-2"
        />
      </Container>
    );
  } catch (error) {
    return <PaginaNaoEncontrada />;
  }
}
