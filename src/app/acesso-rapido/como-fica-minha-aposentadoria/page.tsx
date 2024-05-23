import { PostsProps } from "@/interfaces/interfaces";
import { getData } from "@/services/fetch";
import { Metadata } from "next";
import cheerio, { CheerioAPI } from "cheerio";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Como fica minha aposentadoria",
  };
}

export default async function Home() {
  try {
    const data: PostsProps = await getData("/pages/127");

    if (!data || !data.content.rendered) return <PaginaNaoEncontrada />;

    const $: CheerioAPI = cheerio.load(data.content.rendered);

    const updatedHTML = $.html();

    return (
      <Container title={data.title.rendered}>
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
