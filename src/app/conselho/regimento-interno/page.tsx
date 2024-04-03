import LinkAzul from "@/app/institucional/components/links";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Regimento Interno",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] dark:border-zinc-800 dark:text-zinc-100 pb-2 ">
          Regimento Interno
        </h1>
        <div className="w-full container gap-5 pb-20">
          <div className="flex flex-col">
            <p className="font-bold uppercase pb-2">CONSELHO FISCAL</p>
            <div className="pl-5 flex pb-3 flex-col md:flex-row ">
              <LinkAzul
                text="Regimento do Conselho Fiscal"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Regimento-do-Conselho-Fiscal.pdf"
              />
              <span>
                &nbsp;– Remete-se as atribuições da Lei 010/2005, art. 88 §1.
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-bold uppercase pb-2">CONSELHO DE PREVIDÊNCIA</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="Resolução CMP Nº 001-2010 Diárias"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/Resolucao-CMP-No-001-2010-Diarias.pdf"
              />
              <LinkAzul
                text="Regimento Interno Conselho de Previdência"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/09/Regimento-Interno-Conselho-de-Previdencia.pdf"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-bold uppercase pb-2">
              REGIMENTO PARA ELEIÇÃO CONSELHEIROS
            </p>
            <p className="font-bold uppercase pb-2">2023</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="Regimento Assembleia Eleição dos Conselhos e Publicação"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/Regimento-e-Publicacao.pdf"
              />
              <LinkAzul
                text="Declaração de interesse"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/Declaracao-de-interesse.pdf"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <p className="font-bold uppercase pb-2">
              REGIMENTO PARA ELEIÇÃO CONSELHEIROS
            </p>
            <p className="font-bold uppercase pb-2">2022</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="Regimento Assembleia Eleição Conselho – específico para Conselho Fiscal e Previdenciário (representante inativos)"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/05/Regimento-Assembleia-Eleicao-Conselho.pdf"
              />
              <LinkAzul
                text="Declaração de Interesse (Inscrição)"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/06/Declaracao-de-Interesse.docx"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
