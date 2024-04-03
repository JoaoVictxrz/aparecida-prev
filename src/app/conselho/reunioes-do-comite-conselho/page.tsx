import LinkAzul from "@/app/institucional/components/links";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Local e data das reuniões do comitê/conselho",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] dark:border-zinc-800 dark:text-zinc-100 pb-2 ">
          Local e data das reuniões do comitê/conselho
        </h1>
        <div className="w-full container gap-5 pb-20">
          <div className="flex flex-col w-2/4">
            <p className="font-bold uppercase pb-2">CONSELHO PREVIDENCIÁRIO</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="LOCAL E DATA REUNIÕES DO CONSELHO PREVIDENCIÁRIO ANO 2024"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/LOCAL-E-DATA-DAS-REUNIOES-DO-CONSELHO-PREVIDENCIARIO-ANO-2024.pdf"
              />
              <LinkAzul
                text="LOCAL E DATA REUNIÕES DO CONSELHO PREVIDENCIÁRIO ANO 2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/02/Data-e-Local-Reuniao-Conselho-2023.pdf"
              />
              <LinkAzul
                text="LOCAL E DATA REUNIÕES DO CONSELHO PREVIDENCIÁRIO ANO 2022"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/01/LOCAL-E-DATA-REUNIOES-DO-CONELHO-ANO-2022.pdf"
              />
              <LinkAzul
                text="LOCAL E DATA REUNIÕES DO CONSELHO PREVIDENCIÁRIO ANO 2021"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/02/LOCAL-E-DATA-DAS-REUNIOES-DO-CONSELHO-PREVIDENCIARIO-ANO-2021.pdf"
              />
            </div>
          </div>

          <div className="flex flex-col w-2/4">
            <p className="font-bold uppercase pb-2">COMITÊ DE INVESTIMENTOS</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="LOCAL E DATA DAS REUNIÕES DO COMITÊ DE INVESTIMENTOS ANO 2024"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/LOCAL-E-DATA-DAS-REUNIOES-DO-COMITE-DE-INVESTIMENTOS-ANO-2024.pdf"
              />
              <LinkAzul
                text="LOCAL E DATA DAS REUNIÕES DO COMITÊ DE INVESTIMENTOS ANO 2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/LOCAL-E-DATA-DAS-REUNIOES-DO-COMITE-DE-INVESTIMENTOS-ANO-2023.pdf"
              />
            </div>
          </div>

          <div className="flex flex-col w-2/4">
            <p className="font-bold uppercase pb-2">CONSELHO FISCAL</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="LOCAL E DATA DAS REUNIÕES DO CONSELHO FISCAL ANO 2024"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/LOCAL-E-DATA-DAS-REUNIOES-DO-CONSELHO-FISCAL-ANO-2024.pdf"
              />
              <LinkAzul
                text="LOCAL E DATA DAS REUNIÕES DO CONSELHO FISCAL ANO 2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/LOCAL-E-DATA-DAS-REUNIOES-DO-CONSELHO-FISCAL-ANO-2023.pdf"
              />
              <LinkAzul
                text="LOCAL E DATA DAS REUNIÕES DO CONSELHO FISCAL ANO 2022"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/LOCAL-E-DATA-DAS-REUNIOES-DO-CONSELHO-FISCAL-ANO-2022.pdf"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
