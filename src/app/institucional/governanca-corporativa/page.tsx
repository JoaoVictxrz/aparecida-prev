import { Metadata } from "next";
import LinkAzul from "../components/links";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Governança corporativa",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 ">
          GOVERNANÇA CORPORATIVA
        </h1>
        <div className="w-full flex flex-col container gap-5 pb-20">
          <span className="font-bold uppercase">
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Relatorio-de-Governanca-Corporativa-01-2023-Assinado-1.pdf"
              text="RELATÓRIO DE GOVERNANÇA CORPORATIVA 1º SEMESTRE DE 2023"
            />
          </span>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Ata-de-novembro-APROVACAO-DO-RELATORIO-GOVERNANCA.pdf"
            text="Ata Novembro 2023 – Conselho Previdência"
          />
          <span className="font-bold uppercase">
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/2.1.3-RELATORIO-DE-GOVERNANCA-CORPORATIVA-2o-SEMESTRE-DE-2022.pdf"
              text="RELATÓRIO DE GOVERNANÇA CORPORATIVA 2º SEMESTRE DE 2022"
            />
          </span>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Resolucao-n%C2%B0-001-2023-Conselho-Fiscal.pdf"
            text="Resolução n° 001-2023 – Conselho Fiscal"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Resolucao-n%C2%B0-001-2023-Conselho-Previdencia.pdf"
            text="Resolução n° 001-2023 Conselho Previdência"
          />
          <span className="font-bold uppercase">
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/2.1.2-RELATORIO-DE-GOVERNANCA-CORPORATIVA-1o-SEMESTRE-DE-2022.pdf"
              text="RELATÓRIO DE GOVERNANÇA CORPORATIVA 1º SEMESTRE DE 2022"
            />
          </span>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Resolucao-n%C2%B0-001-2022-Conselho-Fiscal.pdf"
            text="Resolução n° 001-2022 – Conselho Fiscal"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Resolucao-n%C2%B0-004-2022-Conselho-de-Previdencia.pdf"
            text="Resolução n° 004-2022 – Conselho de Previdência"
          />
          <span className="font-bold uppercase">
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/2.1.1-RELATORIO-DE-GOVERNANCA-CORPORATIVA-2017-A-2021.pdf"
              text="RELATÓRIO DE GOVERNANÇA CORPORATIVA – 2017 A 2021"
            />
          </span>
        </div>
      </section>
    </article>
  );
}
