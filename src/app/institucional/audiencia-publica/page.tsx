import { Metadata } from "next";
import LinkAzul from "../components/links";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Audiência publica",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 ">
          Audiência publica
        </h1>
        <div className="w-full container gap-5 pb-20">
          <div className="flex flex-col items-start text-center gap-2 pb-5 border-b-[1px]">
            <p className="font-semibold uppercase">
              Audiencia pública n°002/2023
            </p>
            <div className="flex flex-col items-start text-center pl-5 gap-1">
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Edital-de-Convocacao-de-Audiencia-Publica.pdf"
                text="Edital de Convocação AudiÊncia Pública N°002/2023"
              />
              <LinkAzul
                href="/institucional/audiencia-publica/audiencia-publica-2023"
                text="Divulgação da Audiência"
              />
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/ATA-E-LISTA-DE-PRESENCA.pdf"
                text="Ata e Lista de Presença"
              />
              <LinkAzul
                href="/institucional/audiencia-publica/audiencia-publica-de-prestacao-de-contas-2022-e-realizada"
                text="Audiência Pública de Prestação de Contas 2022 é realizada"
              />
            </div>
          </div>
          <div className="flex flex-col items-start text-center gap-2 py-5 border-b-[1px]">
            <p className="font-semibold uppercase">
              Audiencia pública n°001/2023
            </p>
            <div className="flex flex-col items-start text-center pl-5 gap-1">
              <LinkAzul
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/Edital-de-Convocacao-e-Publicacao.pdf"
                text="Edital de Convocação AudiÊncia Pública N°001/2023 Eleição 2023"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}