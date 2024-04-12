import LinkAzul from "@/app/institucional/components/links";
import Container from "@/components/container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Regimento Interno",
  };
}

export default function Home() {
  return (
    <Container title="Regimento Interno">
      <div className="flex flex-col">
        <p className="pb-2 font-bold uppercase">CONSELHO FISCAL</p>
        <div className="flex flex-col pb-3 pl-5 md:flex-row ">
          <LinkAzul
            text="Regimento do Conselho Fiscal"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Regimento-do-Conselho-Fiscal.pdf"
          />
          <span>
            &nbsp;– Remete-se as atribuições da Lei 010/2005, art. 88 §1.
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <p className="pb-2 font-bold uppercase">CONSELHO DE PREVIDÊNCIA</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="Resolução CMP Nº 001-2010 Diárias"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/Resolucao-CMP-No-001-2010-Diarias.pdf"
          />
          <LinkAzul
            text="Regimento Interno Conselho de Previdência"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/09/Regimento-Interno-Conselho-de-Previdencia.pdf"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <p className="pb-2 font-bold uppercase">
          REGIMENTO PARA ELEIÇÃO CONSELHEIROS
        </p>
        <p className="pb-2 font-bold uppercase">2023</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="Regimento Assembleia Eleição dos Conselhos e Publicação"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/Regimento-e-Publicacao.pdf"
          />
          <LinkAzul
            text="Declaração de interesse"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/Declaracao-de-interesse.pdf"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <p className="pb-2 font-bold uppercase">
          REGIMENTO PARA ELEIÇÃO CONSELHEIROS
        </p>
        <p className="pb-2 font-bold uppercase">2022</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="Regimento Assembleia Eleição Conselho – específico para Conselho Fiscal e Previdenciário (representante inativos)"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/05/Regimento-Assembleia-Eleicao-Conselho.pdf"
          />
          <LinkAzul
            text="Declaração de Interesse (Inscrição)"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/06/Declaracao-de-Interesse.docx"
          />
        </div>
      </div>
    </Container>
  );
}
