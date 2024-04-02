import { Metadata } from "next";
import LinkAzul from "../components/links";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Educação previdênciária",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] dark:border-zinc-800 dark:text-zinc-100 pb-2 ">
          educação previdênciária
        </h1>
        <div className="w-full container gap-5 pb-20">
          <div className="w-3/4 md:w-2/4 flex flex-col gap-2 pl-5">
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/PLANO-DE-ACAO-E-CAPACITACAO-PARA-SERVIDORES-DO-RPPS.pdf"
              text="PLANO DE AÇÃO E CAPACITAÇÃO PARA SERVIDORES DO RPPS – 2022"
            />
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/PROGRAMA-DE-ATIVIDADES-DE-EDUCACAO-PREVIDENCIARIA-2022-2.pdf"
              text="PROGRAMA DE ATIVIDADES DE EDUCAÇÃO PREVIDENCIÁRIA – 2022"
            />
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/PLANO-DE-CAPACTACAO-2023-_-APARECIDAPREV.pdf"
              text="PLANO DE CAPACITAÇÃO 2023 "
            />
          </div>
        </div>
      </section>
    </article>
  );
}
