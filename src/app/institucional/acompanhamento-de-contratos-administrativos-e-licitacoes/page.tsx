import { Metadata } from "next";
import Link from "next/link";
import LinkAzul from "../components/links";
import Title from "@/components/title";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Acompanhamento de contratos administrativos e licitações",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2 dark:text-white">
      <section className="px-2 container">
        <Title title="Acompanhamento de contratos administrativos e licitações" />
        <div className="w-full container gap-5 pb-20">
          <div className="flex flex-col items-center text-center gap-2 pb-2 border-b-[1px] dark:border-zinc-800">
            <p>
              Acesso aos contratos pertinentes ao AparecidaPrev clique no link
              abaixo, na sequência inserir o código 7 no campo
              <span className="font-semibold">&nbsp;Gestão&nbsp;</span>e depois
              <span className="font-semibold">&nbsp;Pesquisar:</span>
            </p>
            <LinkAzul
              text="Portal da Transparência – Relação de Contratos"
              href="https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/contratos/"
            />
          </div>
          <div className="flex flex-col items-center text-center gap-2 py-2 border-b-[1px] dark:border-zinc-800">
            <p>
              Acesso as licitações do município e do AparecidaPrev, clique no
              link abaixo:
            </p>
            <LinkAzul
              text="Portal da Transparência – Licitações"
              href="https://transparencia.aparecida.go.gov.br/licitacoes"
            />
          </div>
        </div>
      </section>
    </article>
  );
}
