import { Metadata } from "next";
import LinkAzul from "../components/links";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Código de etica/politica de segurança da informação",
  };
}

export default function Home() {
  return (
    <Container title="Código de etica/politica de segurança da informação">
      <div>
        <h1 className="upercase font-bold">Código de ética</h1>
        <div className="pl-5 flex flex-col md:w-2/4 pt-2 pb-4">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/05/Codigo-de-Etica-Aparecida-Prev.pdf"
            text="Código de Ética AparecidaPrev"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/05/ilovepdf_merged3.pdf"
            text="Portaria n°136 Código de Ética "
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/09/nomeacao-comissao-de-etica.pdf"
            text="Portaria n° 325, 31 de agosto de 2023 (Nomeação da Comissão)"
          />
        </div>
      </div>
      <div>
        <h1 className="upercase font-bold">
          Política de segurança da informação
        </h1>
        <div className="pl-5 flex flex-col md:w-2/4 pt-2 pb-4">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/12/Politica-de-Seguranca-da-Informacao-com-anexos.pdf"
            text="Política de Segurança da Informação"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/12/1866.pdf"
            text="Portaria n°137 Política da Segurança da Informação"
          />
        </div>
      </div>
    </Container>
  );
}
