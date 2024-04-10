import LinkAzul from "@/app/institucional/components/links";
import PaginaSlug from "../../components/pageslug";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Balanço Patrimonial",
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
    case "balanco-patrimonial-2024":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/BALANCO-PATRIMONIAL.pdf"
            text="JANEIRO"
          />
        </PaginaSlug>
      );
    case "balanco-patrimonial-2023":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-PATRIMONIAL.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-PATRIMONIAL-1.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-PATRIMONIAL-2.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-PATRIMONIAL-3.pdf"
            text="ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-PATRIMONIAL-4.pdf"
            text="MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-PATRIMONIAL-5.pdf"
            text="JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-PATRIMONIAL-6.pdf"
            text="JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-PATRIMONIAL-7.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-PATRIMONIAL-9.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-PATRIMONIAL-10.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-PATRIMONIAL-11.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-PATRIMONIAL-12.pdf"
            text="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-patrimonial-2022":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JANEIRO-6.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/FEVEREIRO-6.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/MARCO-6.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/ABRIL-7.pdf"
            text="ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/MAIO-5.pdf"
            text="MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JUNHO-5.pdf"
            text="JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JULHO-5.pdf"
            text="JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/AGOSTO-3.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/SETEMBRO-4.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/OUTUBRO-4.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/NOVEMBRO-4.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/DEZEMBRO-4.pdf"
            text="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-patrimonial-2021":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JANEIRO-4.pdf"
            text="JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/FEVEREIRO-4.pdf"
            text="FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/MARCO-4.pdf"
            text="MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/ABRIL-4.pdf"
            text="ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/MAIO-4.pdf"
            text="MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JUNHO-4.pdf"
            text="JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JULHO-4.pdf"
            text="JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/AGOSTO-4.pdf"
            text="AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/SETEMBRO-5.pdf"
            text="SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/OUTUBRO-4.pdf"
            text="OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/NOVEMBRO-4.pdf"
            text="NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/DEZEMBRO-4.pdf"
            text="DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-patrimonial-2020":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-JANEIRO-2.pdf"
            text="MÊS DE JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-FEVEREIRO-2.pdf"
            text="MÊS DE FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-MARÇO-2.pdf"
            text="MÊS DE MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-ABRIL-2.pdf"
            text="MÊS DE ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-MAIO-2.pdf"
            text="MÊS DE MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-JUNHO-2.pdf"
            text="MÊS DE JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-JULHO-2.pdf"
            text="MÊS DE JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-AGOSTO-2.pdf"
            text="MÊS DE AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-SETEMBRO-2.pdf"
            text="MÊS DE SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/MÊS-DE-OUTUBRO-2.pdf"
            text="MÊS DE OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/balanco-patrimonial-2020/novembro-6/"
            text="MÊS DE NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/balanco-patrimonial-2020/dezembro-5/"
            text="MÊS DE DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-patrimonial-2019":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-2.pdf"
            text="BALANÇO PATRIMONIAL IPC 04 JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-FEVEREIRO-2.pdf"
            text="BALANÇO PATRIMONIAL IPC 04 FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-MAR%C3%87O-2.pdf"
            text="BALANÇO PATRIMONIAL IPC 04 MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-ABRIL-2.pdf"
            text="BALANÇO PATRIMONIAL IPC 04 ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-MAIO-2.pdf"
            text="BALANÇO PATRIMONIAL IPC 04 MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-JUNHO-2.pdf"
            text="BALANÇO PATRIMONIAL IPC 04 JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-JULHO-2.pdf"
            text="BALANÇO PATRIMONIAL IPC 04 JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-AGOSTO-2.pdf"
            text="BALANÇO PATRIMONIAL IPC 04 AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-SETEMBRO-2.pdf"
            text="BALANÇO PATRIMONIAL IPC 04 SETEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-OUTUBRO-2.pdf"
            text="BALANÇO PATRIMONIAL IPC 04 OUTUBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-NOVEMBRO-2.pdf"
            text="BALANÇO PATRIMONIAL IPC 04 NOVEMBRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-DEZEMBRO-2.pdf"
            text="BALANÇO PATRIMONIAL IPC 04 DEZEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-patrimonial-2018":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-PATRIMONIAL-IPC-04-JANEIRO.pdf"
            text="BALANÇO PATRIMONIAL IPC 04 JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-PATRIMONIAL-IPC04-FEVEREIRO.pdf"
            text="BALANÇO PATRIMONIAL IPC04 FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-PATRIMONIAL-IPC04-MARÇO.pdf"
            text="BALANÇO PATRIMONIAL IPC04 MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-PATRIMONIAL-IPC04-ABRIL.pdf"
            text="BALANÇO PATRIMONIAL IPC04 ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-PATRIMONIAL-IPC04-MAIO.pdf"
            text="BALANÇO PATRIMONIAL IPC04 MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-PATRIMONIAL-IPC04-JUNHO.pdf"
            text="BALANÇO PATRIMONIAL IPC04 JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-PATRIMONIAL-IPC04-JULHO.pdf"
            text="BALANÇO PATRIMONIAL IPC04 JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/BALANÇO-PATRIMONIAL-IPC04-AGOSTO.pdf"
            text="BALANÇO PATRIMONIAL IPC04 AGOSTO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/BALANÇO-PATRIMONIAL.pdf"
            text="BALANÇO PATRIMONIAL IPC04 SETEMBRO"
          />
        </PaginaSlug>
      );
    case "balanco-patrimonial-2017":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Balanço-Patrimonial-IPC04-JANEIRO-2017.pdf"
            text="Balanço Patrimonial-IPC04 JANEIRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Balanço-Patrimonial-IPC04-FEVEREIRO-2017.pdf"
            text="Balanço Patrimonial-IPC04 FEVEREIRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Balanço-Patrimonial-IPC04-MARÇO-2017.pdf"
            text="Balanço Patrimonial-IPC04 MARÇO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALANÇO-PATRIMONIAL-06.17.pdf"
            text="BALANÇO PATRIMONIAL IPC04 MAIO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALANÇO-PATRIMONIAL-06.17.pdf"
            text="BALANÇO PATRIMONIAL IPC04 JUNHO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALANÇO-PATRIMONIAL-07.17.pdf"
            text="BALANÇO PATRIMONIAL IPC04 JULHO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALANÇO-PATRIMONIAL-08.17.pdf"
            text="BALANÇO PATRIMONIAL IPC04 AGOSTO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALANÇO-PATRIMONIAL-09.17.pdf"
            text="BALANÇO PATRIMONIAL IPC04 SETEMBRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALANÇO-PATRIMONIAL-10.17.pdf"
            text="BALANÇO PATRIMONIAL IPC04 OUTUBRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/BALANÇO-PATRIMONIAL-11.17.pdf"
            text="BALANÇO PATRIMONIAL IPC04 NOVEMBRO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/06/BALANÇO-PATRIMONIAL-12.17.pdf"
            text="BALANÇO PATRIMONIAL IPC04 DEZEMBRO 2017"
          />
        </PaginaSlug>
      );
    case "balanco-patrimonial-2016":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Patrimonial-IPC04-JANEIRO-2016.pdf"
            text="balanco-patrimonial-ipc04-janeiro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Patrimonial-IPC04-FEVEREIRO-2016.pdf"
            text="balanco-patrimonial-ipc04-fevereiro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Patrimonial-IPC04-MARÇO-2016.pdf"
            text="balanco-patrimonial-ipc04-marco-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Patrimonial-IPC04-ABRIL-2016.pdf"
            text="balanco-patrimonial-ipc04-abril-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Patrimonial-IPC04-MAIO-2016.pdf"
            text="balanco-patrimonial-ipc04-maio-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Patrimonial-IPC04-JUNHO-2016.pdf"
            text="balanco-patrimonial-ipc04-junho-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Patrimonial-IPC04-JULHO-2016.pdf"
            text="balanco-patrimonial-ipc04-julho-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Patrimonial-IPC04-AGOSTO-2016.pdf"
            text="balanco-patrimonial-ipc04-agosto-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Patrimonial-IPC04-SETEMBRO-2016.pdf"
            text="balanco-patrimonial-ipc04-setembro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Patrimonial-IPC04-OUTUBRO-2016.pdf"
            text="balanco-patrimonial-ipc04-outubro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Patrimonial-IPC04-NOVEMBRO-2016.pdf"
            text="balanço-patrimonial-ipc04-novembro-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Balanço-Patrimonial-IPC04-DEZEMBRO-2016.pdf"
            text="balanço patrimonial-ipc04-dezembro-2016"
          />
        </PaginaSlug>
      );
    case "balanco-patrimonial-2015":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Patrimonial-JAN-2015.pdf"
            text="Balanço Patrimonial JAN 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Patrimonial-FEV-2015.pdf"
            text="Balanço Patrimonial FEV 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Patrimonial-MAR-2015.pdf"
            text="Balanço Patrimonial MAR 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Patrimonial-ABR-2015.pdf"
            text="Balanço Patrimonial ABR 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Patrimonial-MAIO-2015.pdf"
            text="Balanço Patrimonial MAIO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Patrimonial-JUNHO-2015.pdf"
            text="Balanço Patrimonial JUNHO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Patrimonial-JULHO-2015.pdf"
            text="Balanço Patrimonial JULHO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Patrimonial-AGOSTO-2015.pdf"
            text="Balanço Patrimonial AGOSTO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Patrimonial-SETEMBRO-2015.pdf"
            text="Balanço Patrimonial SETEMBRO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Patrimonial-OUTUBRO-2015.pdf"
            text="Balanço Patrimonial OUTUBRO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Patrimonial-NOVEMBRO-2015.pdf"
            text="Balanço Patrimonial NOVEMBRO 2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Balanço-Patrimonial-DEZEMBRO-2015.pdf"
            text="Balanço Patrimonial DEZEMBRO 2015"
          />
        </PaginaSlug>
      );
    case "balanco-patrimonial-2014":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Balanço-Patrimonial-DEZEMBRO-2014.pdf"
            text="Balanço Patrimonial DEZEMBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Balanço-Patrimonial-NOVEMBRO-2014.pdf"
            text="Balanço Patrimonial NOVEMBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Balanço-Patrimonial-OUTUBRO-2014.pdf"
            text="Balanço Patrimonial OUTUBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Balanço-Patrimonial-SETEMBRO-2014.pdf"
            text="Balanço Patrimonial SETEMBRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Balanço-Patrimonial-AGOSTO-2014.pdf"
            text="Balanço Patrimonial AGOSTO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Balanço-Patrimonial-JULHO-2014.pdf"
            text="Balanço Patrimonial JULHO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Balanço-Patrimonial-JUNHO-2014.pdf"
            text="Balanço Patrimonial JUNHO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Balanço-Patrimonial-MAIO-2014.pdf"
            text="Balanço Patrimonial MAIO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/Balanço-Patrimonial-ABR-2014.pdf"
            text="Balanço Patrimonial ABR 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/Balanço-Patrimonial-MAR-2014.pdf"
            text="Balanço Patrimonial MAR 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/Balanço-Patrimonial-FEV-2014.pdf"
            text="Balanço Patrimonial FEV 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/Balanço-Patrimonial-JAN-2014.pdf"
            text="Balanço Patrimonial JAN 2014"
          />
        </PaginaSlug>
      );
    case "balanco-patrimonial-2013":
      return <PaginaSlug></PaginaSlug>;
    default:
      return (
        <PaginaSlug>
          <h2>Pagina não encontrada</h2>
        </PaginaSlug>
      );
  }
};
