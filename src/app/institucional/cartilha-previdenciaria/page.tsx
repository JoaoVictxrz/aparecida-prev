import { Metadata } from "next";
import LinkAzul from "../components/links";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cartilha Previdênciária",
  };
}

export default function Home() {
  return (
    <Container title="Cartilha Previdênciária">
      <LinkAzul
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/CARTILHA-PREVIDENCIARIA-2023.pdf"
        text="CARTILHA PREVIDENCIARIA 2023"
      />
    </Container>
  );
}
