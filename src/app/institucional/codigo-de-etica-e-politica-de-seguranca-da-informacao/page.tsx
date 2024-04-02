import { Metadata } from "next";
import LinkAzul from "../components/links";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Codigo de etica/politica de segurança da informação",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2 dark:text-white">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 dark:text-zinc-100 dark:border-zinc-700">
          Código de etica/politica de segurança da informação
        </h1>
        <div className="w-full container gap-5 pb-20">
          <div>
            <h1 className="upercase font-bold">Código de ética</h1>
            <div className="pl-5 flex flex-col md:w-2/4 pt-2 pb-4">
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/05/Codigo-de-Etica-Aparecida-Prev.pdf"
                text="Código de Ética AparecidaPrev"
              />
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/05/ilovepdf_merged3.pdf"
                text="Portaria n°136 Código de Ética "
              />
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/09/nomeacao-comissao-de-etica.pdf"
                text="Portaria n° 325, 31 de agosto de 2023 (Nomeação da Comissão)"
              />
            </div>
          </div>
          <div>
            <h1 className="upercase font-bold">
              Política de segurança da informação
            </h1>
            <div className="pl-5 flex flex-col md:w-2/4 pt-2 pb-4">
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/12/Politica-de-Seguranca-da-Informacao-com-anexos.pdf"
                text="Política de Segurança da Informação"
              />
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/12/1866.pdf"
                text="Portaria n°137 Política da Segurança da Informação"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
