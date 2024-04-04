import { Metadata } from "next";
import LinkAzul from "../components/links";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Certidões",
  };
}

export default function Home() {
  return (
    <Container title="Certidões" className="flex flex-col">
      <LinkAzul
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Certidao-Negativa-de-Debitos_APARECIDAPREV-SEFAZ.pdf"
        text="CERTIDÃO NEGATIVA DE DÉBITOS – ESTADO"
      />
      <LinkAzul
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Consulta-Regularidade-do-Empregador_ATUALIZADA.pdf"
        text="CERTIDÃO NEGATIVA DE DÉBITOS – FGTS"
      />
      <LinkAzul
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/certidao-receita-federal-1.pdf"
        text="CERTIDÃO NEGATIVA DE DÉBITOS – UNIÃO"
      />
      <LinkAzul
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Trabalhista.pdf"
        text="CERTIDÃO NEGATIVA DE DÉBITOS – TRABALHISTA"
      />
      <LinkAzul
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Certidao-Negativa-Municipal_ATUALIZADA.pdf"
        text="CERTIDÃO NEGATIVA DE DÉBITOS – MUNICIPIO"
      />
    </Container>
  );
}
