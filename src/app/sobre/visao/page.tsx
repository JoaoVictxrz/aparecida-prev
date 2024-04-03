import Title from "@/components/title";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Visão",
  };
}

export default function Visão() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2">
      <section className="px-2 container">
        <Title title="Visão" />
        <div className="w-full container gap-5 pb-20 dark:text-white">
          <p className="font-semibold text-xl text-center">
            Pretendemos nos tornar um Instituto de previdência referência no
            país pela qualidade dos serviços que prestamos, realizando um
            trabalho de maneira eficaz, seguro e responsável, respeitando os
            nossos segurados, a nossa equipe e o interesse público.
          </p>
        </div>
      </section>
    </article>
  );
}
