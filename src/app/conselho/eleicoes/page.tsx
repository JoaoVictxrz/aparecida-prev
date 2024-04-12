import LinkAzul from "@/app/institucional/components/links";
import Container from "@/components/container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Eleições",
  };
}

export default function Home() {
  return (
    <Container title="Eleições">
      <div className="flex flex-col">
        <p className="pb-2 font-bold uppercase">
          ELEIÇÃO 2023 – PLEITO HOMOLOGADO
        </p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="Edital de Convocação n°001/2023 e Publicação Diário Oficial"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/Edital-de-Convocacao-e-Publicacao.pdf"
          />
          <LinkAzul
            text="Regimento Assembleia Eleição dos Conselhos e Publicação"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/Regimento-e-Publicacao.pdf"
          />
          <LinkAzul
            text="Declaração de Interesse"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/Declaracao-de-interesse.pdf"
          />
          <LinkAzul
            text="Portaria n° 167, de 03 de maio de 2023"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/Portaria-n%C2%B0-167-2023.pdf"
          />
          <LinkAzul
            text="1° Retificação do Edital de Convocação n° 001/2023 – Aparecida Prev"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/1%C2%B0-Retificacao.pdf"
          />
          <LinkAzul
            text="Parecer Jurídico n° 110/2023-Apprev (Legalidade/Regularidade das inscrições)"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/230519083019.pdf"
          />
          <LinkAzul
            text="Lista dos Candidatos – Aptos"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/Lista-do-candidatos-aptos.pdf"
          />
          <LinkAzul
            text="Resultado da Eleição 2023"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/Resultado-da-Eleicao-2023-2.pdf"
          />
          <LinkAzul
            text="Ata da Assembleia Geral de Eleição"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/Ata-da-Assembleia-Geral.pdf"
          />
          <LinkAzul
            text="Ata da Assembleia Geral da Apuração"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/Ata-da-Apuracao.pdf"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <p className="pb-2 font-bold uppercase">
          ELEIÇÃO 2022 – PLEITO HOMOLOGADO
        </p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="Edital de Convocação n. 001-2022"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/06/Edital-de-Convocacao-n.-001-2022.pdf"
          />
          <LinkAzul
            text="Anexo de Edital de Convocação n° 001-2022"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/06/Anexo-de-Edital-de-Convocacao-n%C2%B0-001-2022.pdf"
          />
          <LinkAzul
            text="Retificação do Edital de Convocação 001-2022"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/06/RETIFICACAO-DO-EDITAL-001.pdf"
          />
          <LinkAzul
            text="Portaria n°219 de junho de 2022."
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/06/Portaria-n%C2%B0-219-2022.pdf"
          />
          <LinkAzul
            text="Lista de Candidatos"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/06/Lista-Eleicao-Apto.pdf"
          />
          <LinkAzul
            text="Parecer Jurídico n°167/2022"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/06/Parecer-Juridico-n%C2%B0-167-2022-1.pdf"
          />
          <LinkAzul
            text="Ata da Assembleia Geral de Eleição"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/08/Ata-de-Assembleia-Geral-de-Eleicao.pdf"
          />
          <LinkAzul
            text="Ata de Assembleia Geral de Apuração"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/08/Ata-de-Assembleia-Geral-de-Apuracao.pdf"
          />
          <LinkAzul
            text="Relação dos Candidatos Eleitos"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/08/Relacao-dos-Canditados-Eleitos.pdf"
          />
        </div>
      </div>
    </Container>
  );
}
