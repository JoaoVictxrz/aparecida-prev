import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import { getData } from "@/services/fetch";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Aposentadoria por invalidez",
  };
}

export default async function Home() {
  try {
    const data = await getData("/pages/278");

    return (
      <Container title="Aposentadoria por invalidez" className="space-y-4">
        <div
          dangerouslySetInnerHTML={{ __html: data?.content.rendered! }}
          className="flex flex-col space-y-2"
        />
      </Container>
    );
  } catch (error) {
    console.log(error);
    return <PaginaNaoEncontrada />;
  }
}
