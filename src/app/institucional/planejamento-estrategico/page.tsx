import { Metadata } from "next";
import LinkAzul from "../components/links";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Planejamento estratégico",
  };
}

export default function Home() {
  return (
    <Container title="Planejamento estrategico">
      <div className="gap-2 border-b-[1px] dark:border-zinc-800">
        <p className="font-bold uppercase">planejamento</p>
        <div className="flex flex-col gap-1 pb-2 pl-5 pt-2">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/PLANEJAMENTO-ESTRATEGICO-APARECIDAPREV-2019-2023.pdf"
            text="PLANEJAMENTO ESTRATÉGICO APARECIDAPREV – 2019-2023"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/PLANEJAMENTO-ESTRATEGICO-APARECIDAPREV-2019-2023.pdf"
            text="PLANEJAMENTO ESTRATÉGICO APARECIDAPREV – 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2015/07/Planejamento-Estrat%C3%A9gico-do-AparecidaPrev-2015.pdf"
            text="PLANEJAMENTO ESTRATÉGICO APARECIDAPREV – 2015"
          />
        </div>
      </div>
      <div className="gap-2 pt-2">
        <p className="font-bold uppercase">plano de ação</p>
        <div className="flex flex-col gap-1 pl-5 pt-2">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Plano-de-Acao-Anual-2023.pdf"
            text="PLANO DE AÇÃO ANUAL – 2023"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/PLANO-DE-ACAO-ANUAL-2022.pdf"
            text="PLANO DE AÇÃO ANUAL – 2022"
          />
        </div>
      </div>
    </Container>
  );
}
