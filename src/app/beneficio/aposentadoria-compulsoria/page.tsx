import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import { getData } from "@/services/fetch";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Aposentadoria compulsória",
  };
}

export default async function Home() {
  try {
    const data = await getData("/pages/2783");
    return (
      <Container title="Aposentadoria Compulsoria">
        <div
          dangerouslySetInnerHTML={{ __html: data?.content.rendered! }}
          className="flex flex-col space-y-2"
        />
      </Container>
    );
  } catch (error) {
    return <PaginaNaoEncontrada />;
  }
}
