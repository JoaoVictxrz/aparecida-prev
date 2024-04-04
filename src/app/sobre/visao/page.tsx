import Container from "@/components/container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Visão",
  };
}

export default function Visão() {
  return (
    <Container title="Visão">
      <p className="font-semibold text-xl text-center">
        Pretendemos nos tornar um Instituto de previdência referência no país
        pela qualidade dos serviços que prestamos, realizando um trabalho de
        maneira eficaz, seguro e responsável, respeitando os nossos segurados, a
        nossa equipe e o interesse público.
      </p>
    </Container>
  );
}
