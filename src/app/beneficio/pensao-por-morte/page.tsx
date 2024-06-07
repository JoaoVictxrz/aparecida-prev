import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import { Metadata } from "next";
import { getData } from "@/services/fetch";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pensão por Morte",
  };
}

export default async function Home() {
  try {
    const data = await getData("/pages/6517");

    return (
      <Container title={data?.title.rendered!} className="space-y-4">
        <div
          dangerouslySetInnerHTML={{ __html: data?.content.rendered! }}
          className="space-y-2"
        />
      </Container>
    );
  } catch (error) {
    return <PaginaNaoEncontrada />;
  }
}
