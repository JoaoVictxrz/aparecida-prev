import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import { PostsProps } from "@/interfaces/interfaces";
import { getData } from "@/services/fetch";
import cheerio, { CheerioAPI } from "cheerio";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Leis municipais",
  };
}

export default async function Home() {
  try {
    const data: PostsProps = await getData("/pages/2780");

    if (!data || !data.content.rendered) return <PaginaNaoEncontrada />;

    const $: CheerioAPI = cheerio.load(data.content.rendered);
    $("span").addClass("font-light text-black dark:text-white");
    $("span").removeAttr("style");
    $("a").addClass("text-blue-500 font-light");
    $("a del").removeClass("text-blue-500").addClass("text-red-500");
    $("del a").removeClass("text-blue-500").addClass("text-red-500");
    $("p").addClass("font-base");
    const updatedHTML = $.html();

    return (
      <Container title={data.title.rendered}>
        <div
          dangerouslySetInnerHTML={{ __html: updatedHTML }}
          className="flex flex-col space-y-4"
        ></div>
      </Container>
    );
  } catch (error) {
    console.log(error);
    return <PaginaNaoEncontrada />;
  }
}
