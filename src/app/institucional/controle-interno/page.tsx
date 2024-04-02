import { Metadata } from "next";
import LinkAzul from "../components/links";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Controle Interno",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2 dark:text-white">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 dark:text-zinc-100 dark:border-zinc-700">
          Controle Interno
        </h1>
        <div className="w-full container gap-5 pb-20">
          <div>
            <h1 className="upercase font-bold">2023</h1>
            <div className="pl-5 flex flex-col md:w-2/4 pt-2 pb-4">
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/09/Relatorio-de-Controle-Interno-2o-Trimestre-2023-Assinado.pdf"
                text="RELATÓRIO CONTROLE INTERNO – 2° TRIMESTRE DE 2023"
              />
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Relatorio-1o-Trimestre-2023-Assinado.pdf"
                text="RELATÓRIO CONTROLE INTERNO – 1º TRIMESTRE DE 2023"
              />
            </div>
          </div>
          <div>
            <h1 className="upercase font-bold">2022</h1>
            <div className="pl-5 flex flex-col md:w-2/4 pt-2 pb-4">
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/RELATORIO-CONTROLE-INTERNO-4o-TRIMESTRE-DE-2022.pdf"
                text="RELATÓRIO CONTROLE INTERNO – 4º TRIMESTRE DE 2022"
              />
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/RELATORIO-CONTROLE-INTERNO-3o-TRIMESTRE-2022.pdf"
                text="RELATÓRIO CONTROLE INTERNO – 3º TRIMESTRE DE 2022"
              />
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/RELATORIO-CONTROLE-INTERNO-2o-TRIMESTRE-DE-2022.pdf"
                text="RELATÓRIO CONTROLE INTERNO – 2º TRIMESTRE DE 2022"
              />
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/RELATORIO-CONTROLE-INTERNO-1o-TRIMESTRE-DE-2022.pdf"
                text="RELATÓRIO CONTROLE INTERNO – 1º TRIMESTRE DE 2022"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
