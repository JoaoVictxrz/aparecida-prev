import { PostsProps } from "@/interfaces/interfaces";
import { Metadata } from "next";
import { getData } from "@/services/fetch";
import cheerio, { CheerioAPI } from "cheerio";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Portaria MPS",
  };
}

export default async function Home() {
  const data: PostsProps = await getData("/pages/663");

  if (!data || !data.content.rendered) return <PaginaNaoEncontrada />;

  const $: CheerioAPI = cheerio.load(data.content.rendered);
  $("strong").addClass("font-bold");
  $("a").addClass("text-blue-500 pl-5 font-light hover:text-blue-800");
  $("span").removeAttr("style");
  $("span").addClass("text-black dark:text-white");

  const updatedHTML = $.html();

  return (
    <Container title={data?.title.rendered!} className="font-light">
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="flex flex-col space-y-2 dark:text-white"
      />
    </Container>
  );
}
