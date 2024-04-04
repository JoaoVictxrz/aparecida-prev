import Container from "@/components/container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Aposentadoria por idade",
  };
}

export default function Home() {
  return (
    <Container title="Aposentadoria por idade" className="space-y-4">
      <p>
        <span className="font-bold">Art. 19 – </span>O segurado fará jus à
        aposentadoria por idade, com proventos proporcionais ao tempo de
        contribuição, desde que preencha, cumulativamente, os seguintes
        requisitos:
      </p>
      <p>
        <span className="font-bold">I – </span>tempo mínimo de dez anos de
        exercício no serviço público;
      </p>
      <p>
        <span className="font-bold">II – </span>tempo mínimo de cinco anos de
        efetivo exercício no cargo em que se dará a aposentadoria; e
      </p>
      <p>
        <span className="font-bold">III – </span>sessenta e cinco anos de idade,
        se homem, e sessenta anos de idade, se mulher.
      </p>
      <p>
        <span className="font-bold">Parágrafo único – </span>Para o cálculo dos
        proventos proporcionais será considerado um trinta e cinco avos por ano
        de contribuição, se homem, e um trinta avos, se mulher e observado o que
        dispõem o art. 25.
      </p>
    </Container>
  );
}
