import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import { getData } from "@/services/fetch";

export const metadata = {
  title: "Organograma",
};

export default async function Organograma() {
  try {
    const data = await getData("/pages/6609");
    return (
      <Container title={data?.title.rendered!} className="flex justify-center">
        <div dangerouslySetInnerHTML={{ __html: data?.content.rendered! }} />
      </Container>
    );
  } catch (error) {
    return <PaginaNaoEncontrada />;
  }
}
