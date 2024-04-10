import LinkAzul from "@/app/institucional/components/links";
import PaginaSlug from "../../components/pageslug";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Comparativo da Despesa",
  };
}

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  return <GeneratePage params={params} />;
}

const GeneratePage = ({ params }: Props) => {
  switch (params.slug) {
    case "politica-de-investimentos-2024":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Ata-COMIN-12-2023.pdf"
            text="Ata Aprovação Política de Investimento – Comitê"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Resolucao-n.-001-2023-COMIN.pdf"
            text="Resolução n°. 001-2023 COMIN"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Ata-CMP-12-2023-1.pdf"
            text="Ata Aprovação Política de Investimento – Conselho de Previdência"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Resolucao-n°-001-2023-CMP-1.pdf"
            text="Resolução n° 001-2023 CMP"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Publicacao-Resolucoes.pdf"
            text="Publicação Resoluções"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/APARECIDA_DE_GOIANIA_-_GO_1_assinado.pdf"
            text="Caderno Política Investimento"
          />
        </PaginaSlug>
      );
    case "politica-de-investimentos-2023":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/12/Ata.pdf"
            text="Ata Aprovação Política de Investimentos"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/12/Resolucao-n°-04-2022.pdf"
            text="Resolução n° 04-2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/12/Politica-Anual-de-Investimentos.pdf"
            text="Caderno da Política Anual de Investimentos"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/12/Publicacao-da-Resolucao-n°-04-2022.pdf"
            text="Publicação da Resolução n° 04-2022"
          />
        </PaginaSlug>
      );
    case "politica-de-investimentos-2022":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/12/Image271221105923.pdf"
            text="ATA Aprovação Politíca Investimentos"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/12/Image271221105840.pdf"
            text="Resolução 003/2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/12/Image271221105321.pdf"
            text="Caderno da Política de Investimentos"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/12/Resolucao-Politica-Investimentos-2021.pdf"
            text="Resolução Politica Investimentos 2021"
          />
        </PaginaSlug>
      );
    case "politica-de-investimentos-2021":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/DPIN_2021-Retificada.pdf"
            text="DPIN_2021 Retificada"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/Resolucao-Politica-Investimentos.pdf"
            text="Resolução Politica Investimentos"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/Ata-Aprovacao-Politica-Investimentos.pdf"
            text="Ata Aprovação Política Investimentos"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/Caderno-Politica-Inavestimentos-2021.pdf"
            text="Caderno Política Inavestimentos 2021"
          />
        </PaginaSlug>
      );
    case "politica-de-investimentos-2020":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/11/NOVEMBRO-2019.pdf"
            text="Ata de Aprovação da Política de Investimentos"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/11/Image191119134822.pdf"
            text="Resolução Aprovação da Política de Investimentos"
          />
        </PaginaSlug>
      );
    case "politica-de-investimentos-2019":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/12/Ata-11-2018.pdf"
            text="Ata de Aprovação da Política de Investimentos"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/12/Resolucao-001-2018.pdf"
            text="Resolução Conselho Aprovação da DPIN 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/12/DPIN_DIGITALIZADO_2019.pdf"
            text="DPIN_DIGITALIZADO_2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/12/03-2019.pdf"
            text="Ata Alteração da Política de Investimento"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/12/RESOLUÇÃO-001-alterada.pdf"
            text="RESOLUÇÃO 001 – alterada"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/12/Decreto-N-n°-376-2019.pdf"
            text="Decreto “N” n° 376-2019"
          />
        </PaginaSlug>
      );
    case "politica-de-investimentos-2018":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/12-2017.pdf"
            text="Ata Aprovação da Política de Investimentos"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Resolução-Politíca-de-investimento.pdf"
            text="Resolução – Politíca de investimento"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/DPIN_2018.pdf"
            text="DPIN_2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/DPIN_DIGITALIZADO_2018-13.pdf"
            text="DPIN_DIGITALIZADO_2018-13"
          />
        </PaginaSlug>
      );
    case "politica-de-investimentos-2017":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/12/12-2016-Política-de-Investimento.pdf"
            text="Ata Aprovação politica deinvestimento 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2016/12/DPIN_DIGITALIZADO_2017-9.pdf"
            text="DPIN_DIGITALIZADO_2017-9"
          />
        </PaginaSlug>
      );
    case "politica-de-investimentos-2016":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/01/2016.pdf"
            text="Política de Investimentos 2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/01/11-2015-Política-de-Investimento.pdf"
            text="Ata Aprovação da Política de Investimento"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/01/Resolução-001-2015.pdf"
            text="Resolução 001-2015"
          />
        </PaginaSlug>
      );
    case "politica-de-investimentos-2015":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/DPIN-2015.pdf"
            text="DPIN 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Resolução.pdf"
            text="Resolução de Aprovação Política de Investimentos 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Ata-DEZEMBRO-2014.pdf"
            text="Ata de Aprovação da Política de Investimentos 2015"
          />
        </PaginaSlug>
      );
    case "politica-de-investimentos-2014":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/DPIN-assinados.pdf"
            text="DPIN – 2014"
          />
        </PaginaSlug>
      );
    default:
      return (
        <PaginaSlug>
          <h2>Pagina não encontrada</h2>
        </PaginaSlug>
      );
  }
};
