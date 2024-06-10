import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import cheerio, { CheerioAPI } from "cheerio";
import { Metadata } from "next";
import { getData } from "@/services/fetch";

export const metadata: Metadata = {
  title: "Edital",
};

export default async function Home() {
  try {
    const data = await getData("/pages/6983");

    const $: CheerioAPI = cheerio.load(data.content.rendered);
    $("a").addClass(
      " pl-5 text-blue-500 hover:text-blue-700 hover:underline break-words",
    );
    $("a").attr("target", "_blank");
    $("strong").contents().unwrap();
    $("li").addClass("flex flex-col");
    $("ul").addClass("w-full");
    const updatedHTML = $.html();

    return (
      <Container title={data?.title.rendered!} className="max-auto">
        <div
          dangerouslySetInnerHTML={{ __html: updatedHTML }}
          className="overflow-wrap"
        />
      </Container>
    );
  } catch (error) {
    return <PaginaNaoEncontrada />;
  }
}
