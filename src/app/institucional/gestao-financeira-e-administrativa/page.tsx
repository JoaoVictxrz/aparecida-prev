import { Metadata } from "next";
import LinkAzul from "../components/links";
import Title from "@/components/title";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Gestão financeira e administrativa",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2 dark:text-white">
      <section className="px-2 container">
        <Title title="Gestão financeira e administrativa" />
        <div className="w-full flex flex-col container gap-5 pb-20">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Gestao-2017-a-2022.pdf"
            text="Relatório de Gestão Financeira e Administrativa 2017 a 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Gestao-2017-a-2021-Atualizado.pdf"
            text="Relatório de Gestão Financeira e Administrativa 2017 a 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/07/gestao.pdf"
            text="Relatório de Gestão Financeira e Administrativa 2009 a 2015"
          />
        </div>
      </section>
    </article>
  );
}
