import { Metadata } from "next";
import LinkAzul from "../components/links";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Prova anual de vida",
  };
}

export default function Home() {
  return (
    <Container title="Prova anual de vida">
      <div className="flex flex-col pl-5">
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/DECRETO-N-620-DE-22-DE-AGOSTO-2022.pdf"
          text="Decreto “N” N° 620 de 22 de agosto de 2022"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Portaria-N%C2%B0-275-de-29-de-julho-de-2022.pdf"
          text="Portaria N° 275, de 29 de julho de 2022"
        />
      </div>
    </Container>
  );
}
