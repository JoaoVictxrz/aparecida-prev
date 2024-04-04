import { Metadata } from "next";
import LinkAzul from "../components/links";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Educação previdênciária",
  };
}

export default function Home() {
  return (
    <Container title="Educação previdênciária">
      <div className="w-3/4 md:w-2/4 flex flex-col gap-2 pl-5">
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/PLANO-DE-ACAO-E-CAPACITACAO-PARA-SERVIDORES-DO-RPPS.pdf"
          text="PLANO DE AÇÃO E CAPACITAÇÃO PARA SERVIDORES DO RPPS – 2022"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/PROGRAMA-DE-ATIVIDADES-DE-EDUCACAO-PREVIDENCIARIA-2022-2.pdf"
          text="PROGRAMA DE ATIVIDADES DE EDUCAÇÃO PREVIDENCIÁRIA – 2022"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/PLANO-DE-CAPACTACAO-2023-_-APARECIDAPREV.pdf"
          text="PLANO DE CAPACITAÇÃO 2023 "
        />
      </div>
    </Container>
  );
}
