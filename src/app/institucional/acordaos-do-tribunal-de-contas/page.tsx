import { Metadata } from "next";
import LinkAzul from "../components/links";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Acórdãos do tribunal de contas",
  };
}

export default function Home() {
  return (
    <Container title="Acórdãos do tribunal de contas" className="flex flex-col">
      <p className="text-center text-xl font-semibold">
        Aparecida Prev - Acórdãos do tribunal de contas
      </p>
      <LinkAzul
        text="ACORDÃO Nº 07973 – 2023-2022"
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/11/PROCESSO-2023-2022-2.pdf"
      />
      <LinkAzul
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/ACORDAO-No-00007-2022-2021.pdf"
        text="ACORDÃO Nº 00007 – 2022-2021"
      />
      <LinkAzul
        text="ACORDÃO Nº 03568 – 2021-2020"
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/ACORDAO-No-03568-2021-2020.pdf"
      />
    </Container>
  );
}
