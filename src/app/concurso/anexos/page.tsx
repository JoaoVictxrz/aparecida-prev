import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import cheerio, { CheerioAPI } from "cheerio";
import { Metadata } from "next";
import { getData } from "@/services/fetch";

export const metadata: Metadata = {
  title: "Anexos",
};

export default async function Home() {
  try {
    const data = await getData("/pages/6961");

    const $: CheerioAPI = cheerio.load(data.content.rendered);
    $("a").addClass(
      "text-blue-500 hover:text-blue-700 hover:underline pl-5 break-words",
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
