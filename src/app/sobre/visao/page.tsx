import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import { PostsProps } from "@/interfaces/interfaces";
import { getData } from "@/services/fetch";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Visão",
  };
}

export default async function Visão() {
  try {
    const data: PostsProps = await getData("/pages/2778");

    if (!data || !data.content.rendered) return <PaginaNaoEncontrada />;

    return (
      <Container title={data.title.rendered} className="max-w-4xl text-xl">
        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
      </Container>
    );
  } catch (error) {
    return <PaginaNaoEncontrada />;
  }
}
