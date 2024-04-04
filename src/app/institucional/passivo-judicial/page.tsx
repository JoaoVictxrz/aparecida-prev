import { Metadata } from "next";
import LinkAzul from "../components/links";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Passivo Judicial",
  };
}

export default function Home() {
  return (
    <Container title="Passivo Judicial">
      <LinkAzul
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/RELATORIO-DE-PASSIVO-JUDICIAL-2022-E-2023.pdf"
        text="Relatório Passivo Judicial – 2022 E 2023"
      />
    </Container>
  );
}
