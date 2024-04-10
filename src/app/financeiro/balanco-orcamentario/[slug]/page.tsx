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
    case "balanco-orcamentario-2024":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/BALANCO-ORCAMENTARIO.pdf"
            text="JANEIRO"
          />
        </PaginaSlug>
      );
    case "balanco-orcamentario-2023":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-ORCAMENTARIO.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-ORCAMENTARIO-1.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-ORCAMENTARIO-2.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-ORCAMENTARIO-3.pdf"
            text="ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-ORCAMENTARIO-4.pdf"
            text="MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-ORCAMENTARIO-5.pdf"
            text="JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-ORCAMENTARIO-6.pdf"
            text="JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-ORCAMENTARIO-7.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-ORCAMENTARIO-8.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-ORCAMENTARIO-9.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-ORCAMENTARIO-10.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-ORCAMENTARIO-11.pdf"
            text="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-orcamentario-2022":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JANEIRO-3.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/FEVEREIRO-3.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/MARCO-3.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/ABRIL-3.pdf"
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
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/AGOSTO-4.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/SETEMBRO-3.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/OUTUBRO-3.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/NOVEMBRO-3.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/DEZEMBRO-CORRIGIDO-3.pdf"
            text="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-orcamentario-2021":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JANEIRO-3.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/FEVEREIRO-3.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/MARCO-3.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/ABRIL-3.pdf"
            text="ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/MAIO-3.pdf"
            text="MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JUNHO-3.pdf"
            text="JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JULHO-3.pdf"
            text="JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/AGOSTO-3.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/SETEMBRO-4.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/OUTUBRO-3.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/NOVEMBRO-3.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/DEZEMBRO-3.pdf"
            text="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-orcamentario-2020":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-JANEIRO-1.pdf"
            text="MÊS DE JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-FEVEREIRO-1.pdf"
            text="MÊS DE FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-MARÇO-1.pdf"
            text="MÊS DE MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-ABRIL-1.pdf"
            text="MÊS DE ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-MAIO-1.pdf"
            text="MÊS DE MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-JUNHO-1.pdf"
            text="MÊS DE JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-JULHO-1.pdf"
            text="MÊS DE JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-AGOSTO-1.pdf"
            text="MÊS DE AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-SETEMBRO-1.pdf"
            text="MÊS DE SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-OUTUBRO-1.pdf"
            text="MÊS DE OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/NOVEMBRO-3.pdf"
            text="MÊS DE NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/DEZEMBRO-3.pdf"
            text="MÊS DE DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-orcamentario-2019":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-1.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC 07 JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-1.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC 07 FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-1.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC 07 MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-1.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC 07 ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-1.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC 07 MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-1.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC 07 JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-1.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC 07 JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-1.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC 07 AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-1.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC 07 SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-OUTUBRO-1.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC 07 OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-NOVEMBRO-1.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC 07 NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-DEZEMBRO-1.pdf"
            text="BALANÇO ORÇAMENTARIO IPC 07 DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-orcamentario-2018":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALAN%C3%87O-OR%C3%87AMENTARIO-IPC-07-JANEIRO.pdf"
            text="BALANÇO ORÇAMENTARIO IPC 07 JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALAN%C3%87O-OR%C3%87AMENTARIO-IPC07-FEVEREIRO.pdf"
            text="BALANÇO ORÇAMENTARIO IPC07 FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALAN%C3%87O-OR%C3%87AMENTARIO-IPC07-MAR%C3%87O.pdf"
            text="BALANÇO ORÇAMENTARIO IPC07 MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALAN%C3%87O-ORCAMENTARIO-IPC07-ABRIL.pdf"
            text="BALANÇO ORCAMENTARIO IPC07 ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALAN%C3%87O-OR%C3%87AMENTARIO-IPC07-MAIO.pdf"
            text="BALANÇO ORÇAMENTARIO IPC07 MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALAN%C3%87O-OR%C3%87AMENTARIO-IPC07-JUNHO.pdf"
            text="BALANÇO ORÇAMENTARIO IPC07 JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALAN%C3%87O-OR%C3%87AMENT%C3%81RIO-IPC07-JULHO.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC07 JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALAN%C3%87O-OR%C3%87AMENT%C3%81RIO-IPC07-AGOSTO.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC07 AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/BALAN%C3%87O-OR%C3%87AMENTARIO.pdf"
            text="BALANÇO ORÇAMENTARIO IPC07 SETEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-orcamentario-2017":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Balan%C3%A7o-Or%C3%A7ament%C3%A1rio-IPC07-JANEIRO-2017.pdf"
            text="Balanço Orçamentário-IPC07 JANEIRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Balan%C3%A7o-Or%C3%A7amentario-IPC07-FEVEREIRO-2017.pdf"
            text="Balanço Orçamentario-IPC07 FEVEREIRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Balan%C3%A7o-Or%C3%A7amentario-IPC07-MAR%C3%87O-2017.pdf"
            text="Balanço Orçamentario-IPC07 MARÇO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALAN%C3%87O-OR%C3%87AMENT%C3%81RIO-04.17.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC07 ABRIL 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALAN%C3%87O-OR%C3%87AMENT%C3%81RIO-05.17.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC07 MAIO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALAN%C3%87O-OR%C3%87AMENT%C3%81RIO-06.17.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC07 JUNHO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALAN%C3%87O-OR%C3%87AMENT%C3%81RIO-07.17.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC07 JULHO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALAN%C3%87O-OR%C3%87AMENT%C3%81RIO-08.17.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC07 AGOSTO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALAN%C3%87O-OR%C3%87AMENT%C3%81RIO-09.17.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC07 SETEMBRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALAN%C3%87O-OR%C3%87AMENT%C3%81RIO-10.17.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC07 OUTUBRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALAN%C3%87O-OR%C3%87AMENT%C3%81RIO-11.17.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC07 NOVEMBRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/06/BALAN%C3%87O-OR%C3%87AMENT%C3%81RIO-12.17.pdf"
            text="BALANÇO ORÇAMENTÁRIO IPC07 DEZEMBRO 2017"
          />
        </PaginaSlug>
      );
    case "balanco-orcamentario-2016":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balan%C3%A7o-Or%C3%A7ament%C3%A1rio-IPC07-JANEIRO-2016.pdf"
            text="balanco-orcamentario-ipc07-janeiro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balan%C3%A7o-Or%C3%A7amentario-IPC07-FEVEREIRO-2016.pdf"
            text="balanco-orcamentario-ipc07-fevereiro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balan%C3%A7o-Or%C3%A7amentario-IPC07-MAR%C3%87O-2016.pdf"
            text="balanco-orcamentario-ipc07-marco-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balan%C3%A7o-Or%C3%A7amentario-IPC07-ABRIL-2016.pdf"
            text="balanco-orcamentario-ipc07-abril-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balan%C3%A7o-Or%C3%A7amentario-IPC07-MAIO-2016.pdf"
            text="balanco-orcamentario-ipc07-maio-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balan%C3%A7o-Or%C3%A7amentario-IPC07-JUNHO-2016.pdf"
            text="balanco-orcamentario-ipc07-junho-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balan%C3%A7o-Or%C3%A7amentario-IPC07-JULHO-2016.pdf"
            text="balanco-orcamentario-ipc07-julho-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balan%C3%A7o-Or%C3%A7amentario-IPC07-AGOSTO-2016.pdf"
            text="balanco-orcamentario-ipc07-agosto-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balan%C3%A7o-Or%C3%A7amentario-IPC07-SETEMBRO-2016.pdf"
            text="balanco-orcamentario-ipc07-setembro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balan%C3%A7o-Or%C3%A7amentario-IPC07-OUTUBRO-2016.pdf"
            text="balanco-orcamentario-ipc07-outubro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balan%C3%A7o-Or%C3%A7amentario-IPC07-NOVEMBRO-2016.pdf"
            text="balanço orçamentario-ipc07-novembro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balan%C3%A7o-Or%C3%A7amentario-IPC07-DEZEMBRO-2016.pdf"
            text="balanço orçamentario-ipc07-dezembro-2016"
          />
        </PaginaSlug>
      );
    case "balanco-orcamentario-2015":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balan%C3%A7o-Or%C3%A7ament%C3%A1rio-JAN-2015.pdf"
            text="Balanço Orçamentário JAN 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balan%C3%A7o-Or%C3%A7amentario-FEV-2015.pdf"
            text="Balanço Orçamentario FEV 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balan%C3%A7o-Or%C3%A7amentario-MAR-2015.pdf"
            text="Balanço Orçamentario MAR 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balan%C3%A7o-Or%C3%A7amentario-ABR-2015.pdf"
            text="Balanço Orçamentario ABR 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balan%C3%A7o-Or%C3%A7amentario-MAIO-2015.pdf"
            text="Balanço Orçamentario MAIO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balan%C3%A7o-Or%C3%A7amentario-JUNHO-2015.pdf"
            text="Balanço Orçamentario JUNHO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balan%C3%A7o-Or%C3%A7amentario-JULHO-2015.pdf"
            text="Balanço Orçamentario JULHO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balan%C3%A7o-Or%C3%A7amentario-AGOSTO-2015.pdf"
            text="Balanço Orçamentario AGOSTO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balan%C3%A7o-Or%C3%A7amentario-SETEMBRO-2015.pdf"
            text="Balanço Orçamentario SETEMBRO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balan%C3%A7o-Or%C3%A7amentario-OUTUBRO-2015.pdf"
            text="Balanço Orçamentario OUTUBRO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balan%C3%A7o-Or%C3%A7amentario-NOVEMBRO-2015.pdf"
            text="Balanço Orçamentario NOVEMBRO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balan%C3%A7o-Or%C3%A7amentario-DEZEMBRO-2015.pdf"
            text="Balanço Orçamentario DEZEMBRO 2015"
          />
        </PaginaSlug>
      );
    case "balanco-orcamentario-2014":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Balan%C3%A7o-Or%C3%A7amentario-DEZEMBRO-2014.pdf"
            text="Balanço Orçamentario DEZEMBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Balan%C3%A7o-Or%C3%A7amentario-NOVEMBRO-2014.pdf"
            text="Balanço Orçamentario NOVEMBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Balan%C3%A7o-Or%C3%A7amentario-OUTUBRO-2014.pdf"
            text="Balanço Orçamentario OUTUBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Balan%C3%A7o-Or%C3%A7amentario-SETEMBRO-2014.pdf"
            text="Balanço Orçamentario SETEMBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Balan%C3%A7o-Or%C3%A7amentario-AGOSTO-2014.pdf"
            text="Balanço Orçamentário AGOSTO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Balan%C3%A7o-Or%C3%A7amentario-JULHO-2014.pdf"
            text="Balanço Orçamentário JULHO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Balan%C3%A7o-Or%C3%A7amentario-JUNHO-2014.pdf"
            text="Balanço Orçamentário JUNHO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Balan%C3%A7o-Or%C3%A7amentario-MAIO-2014.pdf"
            text="Balanço Orçamentário MAIO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/Balan%C3%A7o-Or%C3%A7amentario-ABR-2014.pdf"
            text="Balanço Orçamentário ABR 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/Balan%C3%A7o-Or%C3%A7amentario-MAR-2014.pdf"
            text="Balanço Orçamentário MAR 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/Balan%C3%A7o-Or%C3%A7amentario-FEV-2014.pdf"
            text="Balanço Orçamentário FEV 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/Balan%C3%A7o-Or%C3%A7ament%C3%A1rio-JAN-2014.pdf"
            text="Balanço Orçamentário JAN 2014"
          />
        </PaginaSlug>
      );
    case "balanco-orcamentario-2013":
      return <PaginaSlug></PaginaSlug>;
    default:
      return (
        <PaginaSlug>
          <h2>Pagina não encontrada</h2>
        </PaginaSlug>
      );
  }
};
