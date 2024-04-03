import Title from "@/components/title";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Valores",
  };
}

export default function Valores() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2">
      <section className="px-2 container">
        <Title title="Valores" />
        <div className="w-full flex flex-col container gap-5 pb-20 dark:text-white">
          <p className="md:text-xl">
            <span className="font-bold">Respeito Pelo Indivíduo</span> –
            Respeitamos a dignidade de cada pessoa dentro e fora da organização.
          </p>
          <p className="md:text-xl">
            <span className="font-bold">Transparência</span> – Valorizamos a
            transparência na gestão administrativa e financeira do
            Aparecidaprev.
          </p>
          <p className="md:text-xl">
            <span className="font-bold">Criatividade</span> – Apoiamos a
            criatividade de nossa equipe na resolução de nossos principais
            desafios.
          </p>
          <p className="md:text-xl">
            <span className="font-bold">Solidariedade</span> – Valorizamos a
            relação solidária entre os integrantes da equipe.
          </p>
        </div>
      </section>
    </article>
  );
}
