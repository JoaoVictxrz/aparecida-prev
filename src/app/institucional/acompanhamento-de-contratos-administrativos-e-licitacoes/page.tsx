import { Metadata } from "next";
import LinkAzul from "../components/links";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Acompanhamento de contratos administrativos e licitações",
  };
}

export default function Home() {
  return (
    <Container title="Acompanhamento de contratos administrativos e licitações">
      <div className="flex flex-col gap-2 border-b-[1px] pb-2 dark:border-zinc-800">
        <p>
          Acesso aos contratos pertinentes ao AparecidaPrev clique no link
          abaixo, na sequência inserir o código 7 no campo
          <span className="font-semibold">&nbsp;Gestão&nbsp;</span>e depois
          <span className="font-semibold">&nbsp;Pesquisar:</span>
        </p>
        <div className="pl-5">
          <LinkAzul
            text="Portal da Transparência – Relação de Contratos"
            href="https://sigp.aparecida.go.gov.br/sig/app.html#/transparencia/contratos/"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 border-b-[1px] py-2 dark:border-zinc-800">
        <p>
          Acesso as licitações do município e do AparecidaPrev, clique no link
          abaixo:
        </p>
        <div className="pl-5">
          <LinkAzul
            text="Portal da Transparência – Licitações"
            href="https://transparencia.aparecida.go.gov.br/licitacoes"
          />
        </div>
      </div>
    </Container>
  );
}
