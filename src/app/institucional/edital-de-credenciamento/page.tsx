import { Metadata } from "next";
import LinkAzul from "../components/links";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Edital de credenciamento",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] dark:border-zinc-800 dark:text-zinc-100 pb-2 ">
          Edital de credenciamento
        </h1>
        <div className="w-full container gap-5 pb-20">
          <p className="font-bold">EDITAL DE CREDENCIAMENTO 2024</p>
          <div className="flex flex-col gap-2 pl-5 py-2 w-3/4 md:w-1/4">
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/03/Edital-de-Credenciamento-n%C2%B0-0012024.pdf"
              text="Edital de Credenciamento n° 001/2024"
            />
          </div>
          <p className="font-bold">EDITAL DE CREDENCIAMENTO 2023</p>
          <div className="flex flex-col gap-2 pl-5 py-2 w-3/4 md:w-1/4">
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/230804055754.pdf"
              text="Edital de Credenciamento nº 001-2023"
            />
          </div>
          <p className="font-bold">EDITAL DE CREDENCIAMENTO 2022</p>
          <div className="flex flex-col gap-2 pl-5 py-2 w-3/4 md:w-1/4">
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/09/Edital-de-Credenciamento-n%C2%B0-001-2022.pdf"
              text="Edital de Credenciamento n° 001-2022"
            />
          </div>
          <p className="font-bold">- INSTITUIÇÕES CREDENCIADAS</p>
          <div className="flex flex-col gap-2 pl-5 py-2 w-3/4 md:w-1/4">
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/Credenciamento-BB.pdf"
              text="Credenciamento BB"
            />
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/Credenciamento-Caixa.pdf"
              text="Credenciamento Caixa"
            />
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/BANCO-BRADESCO-1.pdf"
              text="Credenciamento Bradesco"
            />
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/BANCO-BTG-PACTUAL.pdf"
              text="Credenciamento BTG Pactual"
            />
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/BANCO-ITAU.pdf"
              text="Credenciamento Itaú"
            />
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/BANCO-SAFRA.pdf"
              text="Credenciamento Safra"
            />
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/BANCO-SANTANDER.pdf"
              text="Credenciamento Santander"
            />
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/PLANNER.pdf"
              text="Credenciamento Planner"
            />
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/XP-INVESTIMENTOS.pdf"
              text="Credenciamento XP Investimentos"
            />
          </div>
          <p className="font-bold">EDITAL DE CREDENCIAMENTO CUSTÓDIA 2022</p>
          <div className="flex flex-col gap-2 pl-5 py-2 w-3/4 md:w-1/4">
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/09/Edital-de-Credenciamento-002-2022-Custodia.pdf"
              text="Edital de Credenciamento 002 2022 Custódia"
            />
          </div>
        </div>
      </section>
    </article>
  );
}