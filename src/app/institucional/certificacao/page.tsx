import { PostsProps } from "@/interfaces/interfaces";
import { Metadata } from "next";
import { getData } from "@/services/fetch";
import cheerio, { CheerioAPI } from "cheerio";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Certificação",
  };
}

export default async function Home() {
  try {
    const data: PostsProps = await getData("/pages/555");

    if (!data || !data.content.rendered) return <PaginaNaoEncontrada />;

    const $: CheerioAPI = cheerio.load(data.content.rendered);
    $("a").addClass("pl-5 text-blue-500 hover:underline");
    const updatedHTML = $.html();

    return (
      <Container title={data.title.rendered}>
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
