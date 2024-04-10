import LinkAzul from "@/app/institucional/components/links";
import PaginaSlug from "../../components/pageslug";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Calculo Atuarial",
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
    case "avaliacao-atuarial-2023":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/10-Carta-Resumo-e-envio-Avaliacao.pdf"
            text="Carta Resumo e Envio Avaliação"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/11-Rel-Atuarial.pdf"
            text="Relatório Atuarial"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/18-Carta-Juros-Meta-Atuarial.pdf"
            text="Carta Juros Meta Atuarial"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Decreto-667-Aliquotas.pdf"
            text="Decreto ”N” n° 667, de 23 de outubro de 2023 – Alíquotas de contribuição previdenciária"
          />
        </PaginaSlug>
      );
    case "gestao-atuarial":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/RELATORIO-DE-GESTAO-ATUARIAL-2019-A-2023.pdf"
            text="RELATÓRIO DE GESTÃO ATUARIAL 2019 A 2023"
          />
        </PaginaSlug>
      );
    case "avaliacao-atuarial-2022":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/10-Carta-Resumo-e-envio-Avaliacao.pdf"
            text="Carta Resumo e envio Avaliação"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/11-Rel-Atuarial.pdf"
            text="Relatório Atuarial"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/18-Carta-Juros-Meta-Atuarial.pdf"
            text="Carta Juros Meta Atuarial"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/ANEXO-Formulacao-Nota-Tecnica-Atuarial.pdf"
            text="Formulação – Nota Técnica Atuarial"
          />
        </PaginaSlug>
      );
    case "avaliacao-atuarial-2021":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/12/relatorio.pdf"
            text="Demonstrativo do Resultado da Avaliação 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/12/10-Carta-Resumo-e-envio-Avaliacao-14.pdf"
            text="Carta Resumo da Avaliação 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/12/11-Rel-Atuarial-14.pdf"
            text="Relatório Atuarial 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/12/18-Carta-Juros-Meta-Atuarial.pdf"
            text="Carta Juros Meta Atuarial"
          />
        </PaginaSlug>
      );
    case "avaliacao-atuarial-2020":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/11-Rel-Atuarial-14.pdf"
            text="Calculo Atuarial 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/10-Carta-Resumo-e-envio-Avaliacao.pdf"
            text="Carta Resumo Avaliação"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/Lei-180-Aumento-Aliquota.pdf"
            text="Lei 180 Aumento Aliquota"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/DRAA-2020.pdf"
            text="DRAA 2020"
          />
        </PaginaSlug>
      );
    case "avaliacao-atuarial-2019":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/10/11-Relatorio-Atuarial.pdf"
            text="Calculo Atuarial 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/10/10-Carta-Resumo-e-envio-Avaliação.pdf"
            text="Carta Resumo Avaliação"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/10/Decreto-376-aliquota-contribuição-2019.pdf"
            text="Decreto 376 Alíquota Contribuição 2019"
          />
        </PaginaSlug>
      );
    case "avaliacao-atuarial-2018":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/08/11-Relatorio-Atuarial-2.pdf"
            text="Calculo Atuarial 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/08/10-Carta-Resumo-e-envio-Avaliação.pdf"
            text="Nota Técnica Avaliação"
          />
        </PaginaSlug>
      );
    case "avaliacao-atuarial-2017":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/08/11-Relatorio-Atuarial-2017.pdf"
            text="Relatorio Atuarial 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/08/Nota-Técnica-Atuarial-Formulação.pdf"
            text="Nota Técnica Atuarial – 2017"
          />
        </PaginaSlug>
      );
    case "avaliacao-atuarial-2016":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/8-Relatório-Resumo-da-Avaliação-Atuarial.pdf"
            text="Resumo Avaliacao Atuarial"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/14-Nota-Técnica-Atuarial-Formulação-Alcir1.pdf"
            text="Nota Tecnica Atuarial"
          />
        </PaginaSlug>
      );
    case "avaliacao-atuarial-2015":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/14-Nota-Técnica-Atuarial-Formulação-Alcir.pdf"
            text="Avaliacao-atuarial"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/14-Nota-Técnica-Atuarial-Formulação-Alcir.pdf"
            text="Nota Tecnica Atuarial"
          />
        </PaginaSlug>
      );
    case "avaliacao-atuarial-2014":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Relatorio-de-Reavaliação-Atuarial.pdf"
            text="Relatorio de Reavaliação Atuarial 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Nota-Técnica-Alc.pdf"
            text="Nota Técnica 2014"
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
