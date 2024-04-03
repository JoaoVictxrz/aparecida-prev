import Title from "@/components/title";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Aposentadoria por idade",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-white pb-2">
      <section className="px-2 container">
        <Title title="Aposentadoria por idade" />
        <div className="w-full container gap-5 pb-20 space-y-4">
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
            <span className="font-bold">II – </span>tempo mínimo de cinco anos
            de efetivo exercício no cargo em que se dará a aposentadoria; e
          </p>
          <p>
            <span className="font-bold">III – </span>sessenta e cinco anos de
            idade, se homem, e sessenta anos de idade, se mulher.
          </p>
          <p>
            <span className="font-bold">Parágrafo único – </span>Para o cálculo
            dos proventos proporcionais será considerado um trinta e cinco avos
            por ano de contribuição, se homem, e um trinta avos, se mulher e
            observado o que dispõem o art. 25.
          </p>
        </div>
      </section>
    </article>
  );
}
