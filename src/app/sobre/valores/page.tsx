import Container from "@/components/container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Valores",
  };
}

export default function Valores() {
  return (
    <Container title="Valores">
      <p className="font-light md:text-xl">
        <span className="font-bold">Respeito Pelo Indivíduo</span> – Respeitamos
        a dignidade de cada pessoa dentro e fora da organização.
      </p>
      <p className="font-light md:text-xl">
        <span className="font-bold">Transparência</span> – Valorizamos a
        transparência na gestão administrativa e financeira do Aparecidaprev.
      </p>
      <p className="font-light md:text-xl">
        <span className="font-bold">Criatividade</span> – Apoiamos a
        criatividade de nossa equipe na resolução de nossos principais desafios.
      </p>
      <p className="font-light md:text-xl">
        <span className="font-bold">Solidariedade</span> – Valorizamos a relação
        solidária entre os integrantes da equipe.
      </p>
    </Container>
  );
}
