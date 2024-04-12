import { Metadata } from "next";
import Container from "@/components/container";
import LinkAzul from "@/app/institucional/components/links";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Portaria MPS",
  };
}

export default function Home() {
  return (
    <Container title="Portaria MPS" className="font-light">
      <strong className="font-bold uppercase">portarias</strong>
      <div className="pl-5 pt-2 font-light">
        <p>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/PORTARIA-MTP-No-2.868-DE-13-DE-SETEMBRO-DE-2022.pdf"
            text="Portaria MTP nº 2.868, de 13 de setembro de 2022 – "
          />
          Altera a Portaria SEPRT/ME nº 15.829, de 2 de julho de 2020
        </p>
        <p>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/PORTARIA-MTP-No-1467-DE-02-DE-JUNHO-DE-2022.pdf"
            text="Portaria MTP nº 1.467, de 02 de junho de 2022 (atualizada até 1º/12/2022) – "
          />
          Disciplina os parâmetros e as diretrizes gerais para organização e
          funcionamento dos regimes próprios de previdência social
        </p>
      </div>
      <strong className="pt-2 font-bold uppercase">
        emendas constitucionais
      </strong>
      <div className="pl-5 pt-2 font-light">
        <p>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/EMENDA-CONSTITUCIONAL-No-103-DE-12-DE-NOVEMBRO-DE-2019.pdf"
            text="Emenda Constitucional nº 113, de 08 de dezembro de 2021 - "
          />
          Altera a Portaria SEPRT/ME nº 15.829, de 2 de julho de 2020
        </p>
        <p>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Emenda-Constitucional-n.-41_03.pdf"
            text="Emenda Constitucional n°41/03 – "
          />
          Disciplina os parâmetros e as diretrizes gerais para organização e
          funcionamento dos regimes próprios de previdência social
        </p>
        <p>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Emenda-Constitucional-n.-20_98.pdf"
            text="Emenda Constitucional n°20/98 – "
          />
          Disciplina os parâmetros e as diretrizes gerais para organização e
          funcionamento dos regimes próprios de previdência social
        </p>
      </div>
      <strong className="pt-2 font-bold uppercase">Leis federais</strong>
      <div className="pl-5 pt-2 font-light">
        <p>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Lei-n.-9717_98-Lei-Basica-do-RPPS.pdf"
            text="Lei n°9717/98 – "
          />
          Dispõe sobre regras gerais para a organização e o funcionamento dos
          RPPS
        </p>
        <p>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Lei-n.-10887_04-Regulamenta-a-EC-41_03.pdf"
            text="Lei n°10887/04 – "
          />
          Dispõe sobre a aplicação de disposições da Emenda Constitucional no
          41/03, altera dispositivos das Leis nos 9.717/98, 8.213/91, 9.532/97
        </p>
        <p>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Lei-11.301-de-10-de-maio-de-2006.pdf"
            text="Lei n°11.301/06 – "
          />
          Altera o art. 67 da Lei n°9.394/96, incluindo, para os efeitos do
          disposto no § 5º do art. 40 e no § 8° do art. 201 da Constituição
          Federal
        </p>
      </div>
      <strong className="pt-2 font-bold uppercase">Resoluções</strong>
      <div className="flex w-3/4 flex-col pl-5 pt-2 font-light md:w-1/4">
        <LinkAzul
          href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/RESOLUCAO-3922-APLICACAO-RECURSOS.pdf"
          text="RESOLUCAO 3922 APLICACAO RECURSOS"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/RESOLU%C3%87%C3%83O-4392.pdf"
          text="RESOLUÇÃO 4392 APLICAÇÃO RECURSOS"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/02/CONSOLIDACAO-LEGISLACAO-RPPS.pdf"
          text="CONSOLIDAÇAO LEGISLAÇAO RPPS"
        />
      </div>
    </Container>
  );
}
