import { Metadata } from "next";
import LinkAzul from "../components/links";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Gestão financeira e administrativa",
  };
}

export default function Home() {
  return (
    <Container
      title="Gestão financeira e administrativa"
      className="flex flex-col"
    >
      <LinkAzul
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Gestao-2017-a-2022.pdf"
        text="Relatório de Gestão Financeira e Administrativa 2017 a 2022"
      />
      <LinkAzul
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Gestao-2017-a-2021-Atualizado.pdf"
        text="Relatório de Gestão Financeira e Administrativa 2017 a 2021"
      />
      <LinkAzul
        href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/07/gestao.pdf"
        text="Relatório de Gestão Financeira e Administrativa 2009 a 2015"
      />
    </Container>
  );
}
