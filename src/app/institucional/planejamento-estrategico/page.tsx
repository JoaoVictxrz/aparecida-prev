import { Metadata } from "next";
import LinkAzul from "../components/links";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Planejamento estratégico",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] dark:border-zinc-800 dark:text-zinc-100 pb-2 ">
          Planejamento estratégico
        </h1>
        <div className="w-full container gap-5 pb-20">
          <div className="gap-2 border-b-[1px] dark:border-zinc-800">
            <p className="font-bold uppercase">planejamento</p>
            <div className="flex flex-col pl-5 gap-1 pt-2 pb-2">
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/PLANEJAMENTO-ESTRATEGICO-APARECIDAPREV-2019-2023.pdf"
                text="PLANEJAMENTO ESTRATÉGICO APARECIDAPREV – 2019-2023"
              />
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/PLANEJAMENTO-ESTRATEGICO-APARECIDAPREV-2019-2023.pdf"
                text="PLANEJAMENTO ESTRATÉGICO APARECIDAPREV – 2018"
              />
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2015/07/Planejamento-Estrat%C3%A9gico-do-AparecidaPrev-2015.pdf"
                text="PLANEJAMENTO ESTRATÉGICO APARECIDAPREV – 2015"
              />
            </div>
          </div>
          <div className="gap-2 pt-2">
            <p className="font-bold uppercase">plano de ação</p>
            <div className="flex flex-col pl-5 gap-1 pt-2">
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Plano-de-Acao-Anual-2023.pdf"
                text="PLANO DE AÇÃO ANUAL – 2023"
              />
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/PLANO-DE-ACAO-ANUAL-2022.pdf"
                text="PLANO DE AÇÃO ANUAL – 2022"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
