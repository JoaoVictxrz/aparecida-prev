import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import { PostsProps } from "@/interfaces/interfaces";
import { getData } from "@/services/fetch";
import cheerio, { CheerioAPI } from "cheerio";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Presidência e diretoria executivas",
  };
}

export default async function Equipe() {
  const data: PostsProps = await getData("/pages/2779");
  if (!data || !data.content.rendered) return <PaginaNaoEncontrada />;

  const $: CheerioAPI = cheerio.load(data.content.rendered);
  $("pre").addClass("flex items-center flex-col");
  $("img").removeAttr("class");
  const updatedHTML = $.html();

  return (
    <Container title="Presidência e diretoria executivas">
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="text-cemter flex flex-col items-center"
      />
    </Container>
  );
}
