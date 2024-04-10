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
    case "comparativo-da-receita-2024":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/COMPARATIVO-DA-RECEITA.pdf"
            text="JANEIRO"
          />
        </PaginaSlug>
      );
    case "comparativo-da-receita-2023":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-RECEITA-PREVISTA-COM-A-ARRECADADA-3.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-RECEITA-PREVISTA-COM-A-ARRECADADA-4.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-RECEITA-PREVISTA-COM-A-ARRECADADA-5.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-RECEITA-PREVISTA-COM-A-ARRECADADA-6.pdf"
            text="ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-RECEITA.pdf"
            text="MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-RECEITA-1.pdf"
            text="JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-RECEITA-2.pdf"
            text="JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-RECEITA-PREVISTA-COM-A-ARRECADADA-7.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-RECEITA-3.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-RECEITA-4.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-RECEITA-5.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/COMPARATIVO-DA-RECEITA-6.pdf"
            text="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "comparativo-da-receita-2022":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JANEIRO-5.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/FEVEREIRO-5.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/MARCO-5.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/ABRIL-5.pdf"
            text="ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/MAIO-2.pdf"
            text="MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JUNHO-2.pdf"
            text="JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JULHO-2.pdf"
            text="JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/AGOSTO-5.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/SETEMBRO-6.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/OUTUBRO-6.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/NOVEMBRO-5.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/DEZEMBRO-CORRIGIDO-1.pdf"
            text="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "comparativo-da-receita-2021":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JANEIRO-5.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/FEVEREIRO-5.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/MARCO-5.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/ABRIL-5.pdf"
            text="ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/MAIO-5.pdf"
            text="MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JUNHO-5.pdf"
            text="JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JULHO-5.pdf"
            text="JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/AGOSTO-5.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/SETEMBRO-6.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/OUTUBRO-5.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/NOVEMBRO-5.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/DEZEMBRO-5.pdf"
            text="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "comparativo-da-receita-2020":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-JANEIRO-4.pdf"
            text="MÊS DE JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-FEVEREIRO-4.pdf"
            text="MÊS DE FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-MARÇO-4.pdf"
            text="MÊS DE MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-ABRIL-4.pdf"
            text="MÊS DE ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-MAIO-4.pdf"
            text="MÊS DE MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-JUNHO-4.pdf"
            text="MÊS DE JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-JULHO-4.pdf"
            text="MÊS DE JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-AGOSTO-3.pdf"
            text="MÊS DE AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-SETEMBRO-4.pdf"
            text="MÊS DE SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-OUTUBRO-4.pdf"
            text="MÊS DE OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/NOVEMBRO-5.pdf"
            text="MÊS DE NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/DEZEMBRO-5.pdf"
            text="MÊS DE DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "comparativo-da-receita-2019":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-4.pdf"
            text="COMPARATIVO RECEITA JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-4.pdf"
            text="COMPARATIVO RECEITA FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-4.pdf"
            text="COMPARATIVO RECEITA MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-4.pdf"
            text="COMPARATIVO RECEITA ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-4.pdf"
            text="COMPARATIVO RECEITA MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-4.pdf"
            text="COMPARATIVO RECEITA JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-4.pdf"
            text="COMPARATIVO RECEITA JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-4.pdf"
            text="COMPARATIVO RECEITA AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-4.pdf"
            text="COMPARATIVO RECEITA SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-OUTUBRO-3.pdf"
            text="COMPARATIVO RECEITA OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-NOVEMBRO-4.pdf"
            text="COMPARATIVO RECEITA NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-DEZEMBRO-4.pdf"
            text="COMPARATIVO DA RECEITA DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "comparativo-da-receita-2018":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATIVO-DA-RECEITA-PREV-C-A-REALIZADA-JANEIRO.pdf"
            text="COMPARATIVO DA RECEITA&nbsp; JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATIVO-DA-RECEITA-PREVISTA-FEVEREIRO.pdf"
            text="COMPARATIVO DA RECEITA&nbsp; FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATIVO-DA-RECEITA-PREVISTA-MARÇO-1.pdf"
            text="COMPARATIVO DA RECEITA&nbsp; MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATIVO-DA-RECEITA-PREVISTA-ABRIL.pdf"
            text="COMPARATIVO DA RECEITA&nbsp; ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATIVO-DA-RECEITA-PREVISTA-MAIO.pdf"
            text="COMPARATIVO DA RECEITA MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATIVO-DA-RECEITA-PREVISTA-COM-A-REALIZADA-JUNHO.pdf"
            text="COMPARATIVO DA RECEITA&nbsp; JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATIVO-DA-RECEITA-PREVISTA-COM-A-REALIZADA-JULHO.pdf"
            text="COMPARATIVO DA RECEITA&nbsp; JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/COMPARATIVO-DA-RECEITA-PREVISTA-COM-A-REALIZADA-AGOSTO.pdf"
            text="COMPARATIVO DA RECEITA AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/COMPARATIVO-DA-RECEITA-PREVISTA-COM-A-REALIZADA.pdf"
            text="COMPARATIVO DA RECEITA SETEMBRO"
          />
        </PaginaSlug>
      );
    case "comparativo-da-receita-2017":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Receita-Orçamentária-JANEIRO-2017.pdf"
            text="Receita Orçamentária JANEIRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Receita-Orçamentária-FEVEREIRO-2017.pdf"
            text="Receita Orçamentária FEVEREIRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Receita-Orçamentária-MARÇO-2017.pdf"
            text="Receita Orçamentária MARÇO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DA-RECEITA-04.2017.pdf"
            text="RECEITA ORÇAMENTARIA ABRIL 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DA-RECEITA-05.2017.pdf"
            text="RECEITA ORÇAMENTARIA MAIO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DA-RECEITA-06.2017.pdf"
            text="RECEITA ORÇAMENTARIA JUNHO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DA-RECEITA-07.2017.pdf"
            text="RECEITA ORÇAMENTARIA JULHO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DA-RECEITA-08.2017.pdf"
            text="RECEITA ORÇAMENTARIA AGOSTO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DA-RECEITA-09.2017.pdf"
            text="RECEITA ORÇAMENTARIA SETEMBRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DA-RECEITA-10.2017.pdf"
            text="RECEITA ORÇAMENTARIA OUTUBRO 201"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/COMPARATIVO-DA-RECEITA-11.2017.pdf"
            text="RECEITA ORÇAMENTARIA NOVEMBRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/06/COMPARATIVO-DA-RECEITA-12.2017.pdf"
            text="RECEITA ORÇAMENTARIA DEZEMBRO 2017"
          />
        </PaginaSlug>
      );
    case "receita-orcamentaria-2016":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Receita-Orçamentária-JANEIRO-2016.pdf"
            text="receita-orcamentaria-janeiro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Receita-Orçamentária-FEVEREIRO-2016.pdf"
            text="receita-orcamentaria-fevereiro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Receita-Orçamentária-MARÇO-2016.pdf"
            text="receita-orcamentaria-marco-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Receita-Orçamentária-ABRIL-2016.pdf"
            text="receita-orcamentaria-abril-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Receita-Orçamentária-MAIO-2016.pdf"
            text="receita-orcamentaria-maio-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Receita-Orçamentária-JUNHO-2016.pdf"
            text="receita-orcamentaria-junho-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Receita-Orçamentária-JULHO-2016.pdf"
            text="receita-orcamentaria-julho-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Receita-Orçamentária-AGOSTO-2016.pdf"
            text="receita-orcamentaria-agosto-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Receita-Orçamentária-SETEMBRO-2016.pdf"
            text="receita-orcamentaria-setembro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Receita-Orçamentária-OUTUBRO-2016.pdf"
            text="receita-orcamentaria-outubro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Receita-Orçamentária-NOVEMBRO-2016.pdf"
            text="receita-orçamentaria-novembro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Receita-Orçamentária-DEZEMBRO-2016.pdf"
            text="receita-orçamentaria-dezembro-2016"
          />
        </PaginaSlug>
      );
    case "receita-orcamentaria-2015":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Receita-Orçamentária-JAN-2015.pdf"
            text="Receita Orçamentária JAN 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Receita-Orçamentária-FEV-2015.pdf"
            text="Receita Orçamentária FEV 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Receita-Orçamentária-MAR-2015.pdf"
            text="Receita Orçamentária MAR 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Receita-Orçamentária-ABR-2015.pdf"
            text="Receita Orçamentária ABR 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Receita-Orçamentária-MAIO-2015.pdf"
            text="Receita Orçamentária MAIO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Receita-Orçamentária-JUNHO-2015.pdf"
            text="Receita Orçamentária JUNHO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Receita-Orçamentária-JULHO-2015.pdf"
            text="Receita Orçamentária JULHO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Receita-Orçamentária-AGOSTO-2015.pdf"
            text="Receita Orçamentária AGOSTO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Receita-Orçamentária-SETEMBRO-2015.pdf"
            text="Receita Orçamentária SETEMBRO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Receita-Orçamentária-OUTUBRO-2015.pdf"
            text="Receita Orçamentária OUTUBRO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Receita-Orçamentária-NOVEMBRO-2015.pdf"
            text="Receita Orçamentária NOVEMBRO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/11/Receita-Orçamentária-DEZEMBRO-2015.pdf"
            text="Receita Orçamentária DEZEMBRO 2015"
          />
        </PaginaSlug>
      );
    case "receita-orcamentaria-2014":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Receita-Orçamentária-DEZEMBRO-2014.pdf"
            text="Receita Orçamentária DEZEMBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Receita-Orçamentária-NOVEMBRO-2014.pdf"
            text="Receita Orçamentária NOVEMBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Receita-Orçamentária-OUTUBRO-2014.pdf"
            text="Receita Orçamentária OUTUBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Receita-Orçamentária-SETEMBRO-2014.pdf"
            text="Receita Orçamentária SETEMBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Receita-Orçamentária-AGOSTO-2014.pdf"
            text="Receita Orçamentária AGOSTO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Receita-Orçamentária-JULHO-2014.pdf"
            text="Receita Orçamentária JULHO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Receita-Orçamentária-JUNHO-2014.pdf"
            text="Receita Orçamentária JUNHO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Receita-Orçamentária-MAIO-2014.pdf"
            text="Receita Orçamentária MAIO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/Receita-Orçamentária-ABR-2014.pdf"
            text="Receita Orçamentária ABR 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/Receita-Orçamentária-MAR-2014.pdf"
            text="Receita Orçamentária MAR 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/Receita-Orçamentária-FEV-2014.pdf"
            text="Receita Orçamentária FEV 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/Receita-Orçamentária-JAN-2014.pdf"
            text="Receita Orçamentária JAN 2014"
          />
        </PaginaSlug>
      );
    case "comparativo-da-receita-2013":
      return <PaginaSlug></PaginaSlug>;
    default:
      return (
        <PaginaSlug>
          <h2>Pagina não encontrada</h2>
        </PaginaSlug>
      );
  }
};
