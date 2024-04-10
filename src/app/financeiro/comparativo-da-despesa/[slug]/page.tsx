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
    case "comparativo-da-despesa-2024":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/COMPARATIVO-DA-DESPESA.pdf"
            text="JANEIRO"
          />
        </PaginaSlug>
      );
    case "comparativo-da-despesa-2023":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DE-DESPESA-AUTORIZADA-COM-A-REALIZADA.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DE-DESPESA-AUTORIZADA-COM-A-REALIZADA-1.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DE-DESPESA-AUTORIZADA-COM-A-REALIZADA-2.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-DESPESA-AUTORIZADA-COM-A-REALIZADA.pdf"
            text="ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-DESPESA.pdf"
            text="MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-DESPESA-1.pdf"
            text="JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-DESPESA-2.pdf"
            text="JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-DESPESA-AUTORIZADA-COM-A-REALIZADA-1.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-DESPESA-3.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-DESPESA-4.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-DESPESA-5.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-DESPESA-6.pdf"
            text="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "comparativo-da-despesa-2022":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JANEIRO-1.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/FEVEREIRO-1.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/MARCO-1.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/ABRIL-1.pdf"
            text="ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/MAIO-1.pdf"
            text="MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JUNHO-1.pdf"
            text="JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JULHO-1.pdf"
            text="JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/AGOSTO-1.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/SETEMBRO-1.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/OUTUBRO-1.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/NOVEMBRO-7.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/DEZEMBRO-7.pdf"
            text="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "comparativo-da-despesa-2021":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JANEIRO-1.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/FEVEREIRO-1.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/MARCO-1.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/ABRIL-1.pdf"
            text="ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/MAIO-1.pdf"
            text="MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JUNHO-1.pdf"
            text="JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JULHO-1.pdf"
            text="JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/AGOSTO-1.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/SETEMBRO-2.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/OUTUBRO-1.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/NOVEMBRO-1.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/DEZEMBRO-1.pdf"
            text="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "comparativo-da-despesa-2020":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-JANEIRO-3.pdf"
            text="MÊS DE JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-FEVEREIRO-3.pdf"
            text="MÊS DE FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-MAR%C3%87O-3.pdf"
            text="MÊS DE MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-ABRIL-3.pdf"
            text="MÊS DE ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-MAIO-3.pdf"
            text="MÊS DE MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-JUNHO-3.pdf"
            text="MÊS DE JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-JULHO-3.pdf"
            text="MÊS DE JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%AAS-DE-AGOSTO.pdf"
            text="MÊS DE AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-SETEMBRO-3.pdf"
            text="MÊS DE SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-OUTUBRO-3.pdf"
            text="MÊS DE OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/NOVEMBRO-1.pdf"
            text="MÊS DE NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/DEZEMBRO-1.pdf"
            text="MÊS DE DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "comparativo-da-despesa-2019":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-JANEIRO-3.pdf"
            text="COMPARATIVO DESPESA JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-FEVEIREIRO-3.pdf"
            text="COMPARATIVO DESPESA FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-MARCO-3.pdf"
            text="COMPARATIVO DESPESA MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-ABRIL-3.pdf"
            text="COMPARATIVO DESPESA ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-MAIO-3.pdf"
            text="COMPARATIVO DESPESA MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-JUNHO-3.pdf"
            text="COMPARATIVO DESPESA JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-JULHO-3.pdf"
            text="COMPARATIVO DESPESA JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-AGOSTO-3.pdf"
            text="COMPARATIVO DESPESA AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-SETEMBRO-3.pdf"
            text="COMPARATIVO DESPESA SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-OUTUBRO.pdf"
            text="COMPARATIVO DESPESA OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-NOVEMBRO-3.pdf"
            text="COMPARATIVO DESPESA NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-DEZEMBRO-3.pdf"
            text="COMPARATIVO DESPESA DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "comparativo-da-despesa-2018":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATIVO-DA-DESPESA-FIXADA-JANEIRO.pdf"
            text="COMPARATIVO DA DESPESA FIXADA JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATIVO-DA-DESPESA-FEVEREIRO.pdf"
            text="COMPARATIVO DA DESPESA FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATIVO-DE-DESPESA-FIXADA-MAR%C3%87O.pdf"
            text="COMPARATIVO DE DESPESA FIXADA MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATIVO-DE-DESPESAS-FIXADA-ABRIL.pdf"
            text="COMPARATIVO DE DESPESAS FIXADA ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATVO-DE-DESPESAS-FIXADA-MAIO.pdf"
            text="COMPARATIVO DE DESPESAS FIXADA MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATIVO-DE-DESPESAS-FIXADA-COM-A-EFETUADA-JUNHO.pdf"
            text="COMPARATIVO DE DESPESAS FIXADA JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATIVO-DA-DESPESA-FIXADA-COM-A-EFETUADA-JULHO.pdf"
            text="COMPARATIVO DA DESPESA FIXADA JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATIVO-DAS-DESPESAS-FIXADA-COM-A-EFETUADA-AGOSTO.pdf"
            text="COMPARATIVO DAS DESPESAS FIXADA AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/COMPARATIVO-DE-DESPESAS-FIXADA-COM-A-EFETUADA.pdf"
            text="COMPARATIVO DAS DESPESA FIXADA SETEMBRO"
          />
        </PaginaSlug>
      );
    case "comparativo-da-despesa-2017":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Despesa-Or%C3%A7ament%C3%A1ria-JANEIRO-2017.pdf"
            text="Despesa Orçamentária JANEIRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Despesa-Or%C3%A7ament%C3%A1ria-FEVEREIRO-2017.pdf"
            text="Despesa Orçamentária FEVEREIRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Despesa-Or%C3%A7ament%C3%A1ria-MAR%C3%87O-2017.pdf"
            text="Despesa Orçamentária MARÇO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DESPESA-05.2017.pdf"
            text="Despesa Orçamentária ABRIL 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DESPESA-05.2017.pdf"
            text="Despesa Orçamentária MAIO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DESPESA-06.2017.pdf"
            text="Despesa Orçamentária JUNHO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DESPESA-07.2017.pdf"
            text="Despesa Orçamentária JULHO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DESPESA-08.2017.pdf"
            text="Despesa Orçamentária AGOSTO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DESPESA-09.2017.pdf"
            text="Despesa Orçamentária SETEMBRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DESPESA-10.2017.pdf"
            text="Despesa Orçamentária OUTUBRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DESPESA-11.2017.pdf"
            text="Despesa Orçamentária NOVEMBRO 2017"
          />
        </PaginaSlug>
      );
    case "comparativo-despesa-2016":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Despesa-Or%C3%A7ament%C3%A1ria-JANEIRO-2016.pdf"
            text="despesa-orcamentaria-janeiro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Despesa-Or%C3%A7ament%C3%A1ria-FEVEREIRO-2016.pdf"
            text="despesa-orcamentaria-fevereiro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Despesa-Or%C3%A7ament%C3%A1ria-MARCO-2016.pdf"
            text="despesa-orcamentaria-marco-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Despesa-Or%C3%A7ament%C3%A1ria-ABRIL-2016.pdf"
            text="despesa-orcamentaria-abril-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Despesa-Or%C3%A7ament%C3%A1ria-MAIO-2016.pdf"
            text="despesa-orcamentaria-maio-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Despesa-Or%C3%A7ament%C3%A1ria-JUNHO-2016.pdf"
            text="despesa-orcamentaria-junho-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Despesa-Or%C3%A7ament%C3%A1ria-JULHO-2016.pdf"
            text="despesa-orcamentaria-julho-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Despesa-Or%C3%A7ament%C3%A1ria-AGOSTO-2016.pdf"
            text="despesa-orcamentaria-agosto-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Despesa-Or%C3%A7ament%C3%A1ria-SETEMBRO-2016.pdf"
            text="despesa-orcamentaria-setembro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Despesa-Or%C3%A7ament%C3%A1ria-OUTUBRO-2016.pdf"
            text="despesa-orcamentaria-outubro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Despesa-Or%C3%A7ament%C3%A1ria-NOVEMBRO-2016.pdf"
            text="despesa-orçamentaria-novembro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Despesa-Or%C3%A7ament%C3%A1ria-DEZEMBRO-2016.pdf"
            text="despesa-orçamentaria-dezembro-2016"
          />
        </PaginaSlug>
      );
    case "despesa-orcamentaria-2015":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Despesa-Or%C3%A7ament%C3%A1ria-JAN-2015.pdf"
            text="Despesa Orçamentária JAN 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Despesa-Or%C3%A7ament%C3%A1ria-FEV-2015.pdf"
            text="Despesa Orçamentária FEV 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Despesa-Or%C3%A7ament%C3%A1ria-MAR-2015.pdf"
            text="Despesa Orçamentária MAR 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Despesa-Or%C3%A7ament%C3%A1ria-ABR-2015.pdf"
            text="Despesa Orçamentária ABR 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Despesa-Or%C3%A7ament%C3%A1ria-MAIO-2015.pdf"
            text="Despesa Orçamentária MAIO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Despesa-Or%C3%A7ament%C3%A1ria-JUNHO-2015.pdf"
            text="Despesa Orçamentária JUNHO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Despesa-Or%C3%A7ament%C3%A1ria-JULHO-2015.pdf"
            text="Despesa Orçamentária JULHO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Despesa-Or%C3%A7ament%C3%A1ria-AGOSTO-2015.pdf"
            text="Despesa Orçamentária AGOSTO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Despesa-Or%C3%A7ament%C3%A1ria-SETEMBRO-2015.pdf"
            text="Despesa Orçamentária SETEMBRO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Despesa-Or%C3%A7ament%C3%A1ria-OUTUBRO-2015.pdf"
            text="Despesa Orçamentária OUTUBRO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Despesa-Or%C3%A7ament%C3%A1ria-NOVEMBRO-2015.pdf"
            text="Despesa Orçamentária NOVEMBRO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Despesa-Or%C3%A7ament%C3%A1ria-DEZEMBRO-2015.pdf"
            text="Despesa Orçamentária DEZEMBRO 2015"
          />
        </PaginaSlug>
      );
    case "despesa-orcamentaria-2014":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Despesa-Or%C3%A7ament%C3%A1ria-DEZEMBRO-2014.pdf"
            text="Despesa Orçamentária DEZEMBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Despesa-Or%C3%A7ament%C3%A1ria-NOVEMBRO-2014.pdf"
            text="Despesa Orçamentária NOVEMBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Despesa-Or%C3%A7ament%C3%A1ria-OUTUBRO-2014.pdf"
            text="Despesa Orçamentária OUTUBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Despesa-Or%C3%A7ament%C3%A1ria-SETEMBRO-2014.pdf"
            text="Despesa Orçamentária SETEMBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Despesa-Or%C3%A7ament%C3%A1ria-AGOSTO-2014.pdf"
            text="Despesa Orçamentária AGOSTO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Despesa-Or%C3%A7ament%C3%A1ria-JULHO-2014.pdf"
            text="Despesa Orçamentária JULHO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Despesa-Or%C3%A7ament%C3%A1ria-JUNHO-2014.pdf"
            text="Despesa Orçamentária JUNHO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Despesa-Or%C3%A7ament%C3%A1ria-MAIO-2014.pdf"
            text="Despesa Orçamentária MAIO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/Despesa-Or%C3%A7ament%C3%A1ria-ABR-2014.pdf"
            text="Despesa Orçamentária ABR 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/Despesa-Or%C3%A7ament%C3%A1ria-MAR-2014.pdf"
            text="Despesa Orçamentária MAR 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/Despesa-Or%C3%A7ament%C3%A1ria-FEV-2014.pdf"
            text="Despesa Orçamentária FEV 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/Despesa-Or%C3%A7ament%C3%A1ria-JAN-2014.pdf"
            text="Despesa Orçamentária JAN 2014"
          />
        </PaginaSlug>
      );
    case "despesa-orcamentaria-2013":
      return;
    default:
      return (
        <PaginaSlug className="">
          <h1>Pagina não encontrada</h1>
        </PaginaSlug>
      );
  }
};
