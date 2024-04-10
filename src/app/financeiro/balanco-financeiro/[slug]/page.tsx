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
    case "balanco-financeiro-2024":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/BALANCO-FINANCEIRO.pdf"
            text="JANEIRO"
          />
        </PaginaSlug>
      );
    case "balanco-financeiro-2023":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-FINANCEIRO.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-FINANCEIRO-1.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-FINANCEIRO-2.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-FINANCEIRO-3.pdf"
            text="ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-FINANCEIRO-6.pdf"
            text="MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-FINANCEIRO-7.pdf"
            text="JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-FINANCEIRO-8.pdf"
            text="JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-FINANCEIRO-9.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-FINANCEIRO-10.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-FINANCEIRO-11.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-FINANCEIRO-12.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-FINANCEIRO-13.pdf"
            text="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-financeiro-2022":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JANEIRO-2.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/FEVEREIRO-2.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/MARCO-2.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/ABRIL-2.pdf"
            text="ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/MAIO.pdf"
            text="MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JUNHO.pdf"
            text="JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JULHO.pdf"
            text="JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/AGOSTO-2.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/SETEMBRO-2.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/OUTUBRO-2.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/NOVEMBRO-2.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/DEZEMBRO-CORRIGIDO-2.pdf"
            text="DEZEMBRO "
          />
        </PaginaSlug>
      );
    case "balanco-financeiro-2021":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JANEIRO-2.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/FEVEREIRO-2.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/MARCO-2.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/ABRIL-2.pdf"
            text="ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/MAIO-2.pdf"
            text="MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JUNHO-2.pdf"
            text="JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JULHO-2.pdf"
            text="JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/AGOSTO-2.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/SETEMBRO-3.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/OUTUBRO-2.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/NOVEMBRO-2.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/DEZEMBRO-2.pdf"
            text="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-financeiro-2020":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-JANEIRO.pdf"
            text="MÊS DE JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-FEVEREIRO.pdf"
            text="MÊS DE FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-MARÇO.pdf"
            text="MÊS DE MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-ABRIL.pdf"
            text="MÊS DE ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-MAIO.pdf"
            text="MÊS DE MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-JUNHO.pdf"
            text="MÊS DE JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-JULHO.pdf"
            text="MÊS DE JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-AGOSTO.pdf"
            text="MÊS DE AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-SETEMBRO.pdf"
            text="MÊS DE SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-OUTUBRO.pdf"
            text="MÊS DE OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/NOVEMBRO-2.pdf"
            text="MÊS DE NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/DEZEMBRO-2.pdf"
            text="MÊS DE DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-financeiro-2019":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO.pdf"
            text="BALANÇO FINANCEIRO IPC 06 JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-FEVEREIRO.pdf"
            text="BALANÇO FINANCEIRO IPC 06 FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-MARÇO.pdf"
            text="BALANÇO FINANCEIRO IPC 06 MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-ABRIL.pdf"
            text="BALANÇO FINANCEIRO IPC 06 ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-MAIO.pdf"
            text="BALANÇO FINANCEIRO IPC 06 MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JUNHO.pdf"
            text="BALANÇO FINANCEIRO IPC 06 JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JULHO.pdf"
            text="BALANÇO FINANCEIRO IPC 06 JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-AGOSTO.pdf"
            text="BALANÇO FINANCEIRO IPC 06 AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-SETEMBRO.pdf"
            text="BALANÇO FINANCEIRO IPC 06 SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-OUTUBRO.pdf"
            text="BALANÇO FINANCEIRO IPC 06 OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-NOVEMBRO.pdf"
            text="BALANÇO FINANCEIRO IPC 06 NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-DEZEMBRO.pdf"
            text="BALANÇO FINANCEIRO IPC 06 DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-financeiro-2018":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-FINANCEIRO-IPC06-JANEIRO.pdf"
            text="BALANÇO FINANCEIRO IPC06 JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-FINANCEIRO-IPC-06-FEVEREIRO.pdf"
            text="BALANÇO FINANCEIRO IPC 06 FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-FINANCEIRO-IPC06-MARÇO.pdf"
            text="BALANÇO FINANCEIRO IPC06 MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-FINANCEIRO-IPC06-ABRIL.pdf"
            text="BALANÇO FINANCEIRO IPC06 ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-FINANCEIRO-IPCA06-MAIO.pdf"
            text="BALANÇO FINANCEIRO IPCA06 MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-FINANCEIRO-IPC06-JUNHO.pdf"
            text="BALANÇO FINANCEIRO IPC06 JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-FINANCEIRO-IPC06-JULHO.pdf"
            text="BALANÇO FINANCEIRO IPC06 JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-FINANCEIRO-IPC06-AGOSTO.pdf"
            text="BALANÇO FINANCEIRO IPC06 AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/BALANÇO-FINANCEIRO.pdf"
            text="BALANÇO FINANCEIRO IPC 06 SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/BALANÇO-FINANCEIRO-1.pdf"
            text="BALANÇO FINANCEIRO IPC 06 OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/BALANÇO-FINANCEIRO-2.pdf"
            text="BALANÇO FINANCEIRO IPC 06 NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/BALANÇO-FINANCEIRO-3.pdf"
            text="BALANÇO FINANCEIRO IPC 06 DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-financeiro-2017":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Balanço-Financeiro-IPC06-JANEIRO-2017.pdf"
            text="Balanço Financeiro-IPC06 JANEIRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Balanço-Financeiro-IPC06-FEVEREIRO-2017.pdf"
            text="Balanço Financeiro-IPC06 FEVEREIRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Balanço-Financeiro-IPC06-MARÇO-2017.pdf"
            text="Balanço Financeiro-IPC06 MARÇO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALANÇO-FINANCEIRO-04.17.pdf"
            text="BALANÇO FINANCEIRO IPC06 ABRIL 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALANÇO-FINANCEIRO-05.17.pdf"
            text="BALANÇO FINANCEIRO IPC06 MAIO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALANÇO-FINANCEIRO-06.17.pdf"
            text="BALANÇO FINANCEIRO IPC06 JUNHO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALANÇO-FINANCEIRO-07.17.pdf"
            text="BALANÇO FINANCEIRO IPC06 JULHO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALANÇO-FINANCEIRO-08.17.pdf"
            text="BALANÇO FINANCEIRO IPC06 AGOSTO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALANÇO-FINANCEIRO-09.17.pdf"
            text="BALANÇO FINANCEIRO IPC06 SETEMBRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALANÇO-FINANCEIRO-10.17.pdf"
            text="BALANÇO FINANCEIRO IPC06 OUTUBRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALANÇO-FINANCEIRO-11.17.pdf"
            text="BALANÇO FINANCEIRO IPC06 NOVEMBRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/06/BALANÇO-FINANCEIRO-12.17.pdf"
            text="BALANÇO FINANCEIRO IPC06 DEZEMBRO 2017"
          />
        </PaginaSlug>
      );
    case "balanco-financeiro-2016":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Financeiro-IPC06-JANEIRO-2016.pdf"
            text="Ipc06-Janeiro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Financeiro-IPC06-FEVEREIRO-2016.pdf"
            text="Ipc06-Fevereiro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Financeiro-IPC06-MARÇO-2016.pdf"
            text="Ipc06-Março-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Financeiro-IPC06-ABRIL-2016.pdf"
            text="Ipc06-Abril-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Financeiro-IPC06-MAIO-2016.pdf"
            text="Ipc06-Maio-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Financeiro-IPC06-JUNHO-2016.pdf"
            text="Ipc06-Junho-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Financeiro-IPC06-JULHO-2016.pdf"
            text="Ipc06-Julho-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Financeiro-IPC06-AGOSTO-2016.pdf"
            text="Ipc06-Agosto-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Financeiro-IPC06-SETEMBRO-2016.pdf"
            text="Ipc06-Setembro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Financeiro-IPC06-OUTUBRO-2016.pdf"
            text="Ipc06-Outubro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Financeiro-IPC06-NOVEMBRO-2016.pdf"
            text="Ipc06-Novembro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Financeiro-IPC06-DEZEMBRO-2016.pdf"
            text="Ipc06-Dezembro-2016"
          />
        </PaginaSlug>
      );
    case "balanco-financeiro-2015":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Financeiro-JAN-2015.pdf"
            text="Balanço Financeiro JAN 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Financeiro-FEV-2015.pdf"
            text="Balanço Financeiro FEV 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Financeiro-MAR-2015.pdf"
            text="Balanço Financeiro MAR 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Financeiro-ABR-2015.pdf"
            text="Balanço Financeiro ABR 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Financeiro-MAIO-2015.pdf"
            text="Balanço Financeiro MAIO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Financeiro-JUNHO-2015.pdf"
            text="Balanço Financeiro JUNHO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Financeiro-JULHO-2015.pdf"
            text="Balanço Financeiro JULHO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Financeiro-AGOSTO-2015.pdf"
            text="Balanço Financeiro AGOSTO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Financeiro-SETEMBRO-2015.pdf"
            text="Balanço Financeiro SETEMBRO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Financeiro-OUTUBRO-2015.pdf"
            text="Balanço Financeiro OUTUBRO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Financeiro-NOVEMBRO-2015.pdf"
            text="Balanço Financeiro NOVEMBRO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Financeiro-DEZEMBRO-2015.pdf"
            text="Balanço Financeiro DEZEMBRO 2015"
          />
        </PaginaSlug>
      );
    case "balanco-financeiro-2014":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Balanço-Financeiro-DEZEMBRO-2014.pdf"
            text="Balanço Financeiro DEZEMBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Balanço-Financeiro-NOVEMBRO-2014.pdf"
            text="Balanço Financeiro NOVEMBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Balanço-Financeiro-OUTUBRO-2014.pdf"
            text="Balanço Financeiro OUTUBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Balanço-Financeiro-SETEMBRO-2014.pdf"
            text="Balanço Financeiro SETEMBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Balanço-Financeiro-AGOSTO-2014.pdf"
            text="Balanço Financeiro AGOSTO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Balanço-Financeiro-JULHO-2014.pdf"
            text="Balanço Financeiro JULHO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Balanço-Financeiro-JUNHO-2014.pdf"
            text="Balanço Financeiro JUNHO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Balanço-Financeiro-MAIO-2014.pdf"
            text="Balanço Financeiro MAIO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/Balanço-Financeiro-ABR-2014.pdf"
            text="Balanço Financeiro ABR 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/Balanço-Financeiro-MAR-2014.pdf"
            text="Balanço Financeiro MAR 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/Balanço-Financeiro-FEV-2014.pdf"
            text="Balanço Financeiro FEV 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/Balanço-Financeiro-JAN-2014.pdf"
            text="Balanço Financeiro JAN 2014"
          />
        </PaginaSlug>
      );
    case "balanco-financeiro-2013":
      return <PaginaSlug></PaginaSlug>;
    default:
      return (
        <PaginaSlug>
          <h2>Pagina não encontrada</h2>
        </PaginaSlug>
      );
  }
};
