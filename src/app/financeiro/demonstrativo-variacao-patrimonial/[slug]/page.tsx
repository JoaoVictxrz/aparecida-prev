import LinkAzul from "@/app/institucional/components/links";
import PaginaSlug from "../../components/pageslug";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: "Demonstrativo Variação Patrimonial",
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
function GeneratePage({ params }: Props) {
  switch (params.slug) {
    case "demonstrativo-da-variacao-patrimonial-2024":
      return (
        <PaginaSlug className="md:w-1/6">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/DEMONSTRACAO-DAS-VARIACOES-PATRIMONIAIS.pdf"
            text="JANEIRO"
          />
        </PaginaSlug>
      );
    case "demonstrativo-da-variacao-patrimonial-2023":
      return (
        <PaginaSlug className="md:w-1/6">
          <LinkAzul
            text="JANEIRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DEMONSTRACAO-DAS-VARIACOES-PATRIMONIAIS.pdf"
          />
          <LinkAzul
            text="FEVEREIRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DEMONSTRACAO-DAS-VARIACOES-PATRIMONIAIS-1.pdf"
          />
          <LinkAzul
            text="MARÇO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DEMONSTRACAO-DAS-VARIACOES-PATRIMONIAIS-2.pdf"
          />
          <LinkAzul
            text="ABRIL"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DEMONSTRACAO-DAS-VARIACOES-PATRIMONIAIS-3.pdf"
          />
          <LinkAzul
            text="MAIO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DEMONSTRACAO-DAS-VARIACOES-PATRIMONIAIS-4.pdf"
          />
          <LinkAzul
            text="JUNHO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DEMONSTRACAO-DAS-VARIACOES-PATRIMONIAIS-5.pdf"
          />
          <LinkAzul
            text="JULHO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/BALANCO-FINANCEIRO-8.pdf"
          />
          <LinkAzul
            text="AGOSTO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DEMONSTRACAO-DAS-VARIACOES-PATRIMONIAIS-7.pdf"
          />
          <LinkAzul
            text="SETEMBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DEMONSTRACAO-DAS-VARIACOES-PATRIMONIAIS-8.pdf"
          />
          <LinkAzul
            text="OUTUBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DEMONSTRACAO-DAS-VARIACOES-PATRIMONIAIS-9.pdf"
          />
          <LinkAzul
            text="NOVEMBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DEMONSTRACAO-DAS-VARIACOES-PATRIMONIAIS-10.pdf"
          />
          <LinkAzul
            text="DEZEMBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DEMONSTRACAO-DAS-VARIACOES-PATRIMONIAIS-11.pdf"
          />
        </PaginaSlug>
      );
    case "demonstrativo-da-variacao-patrimonial-2022":
      return (
        <PaginaSlug className="md:w-1/6">
          <LinkAzul
            text="JANEIRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JANEIRO.pdf"
          />
          <LinkAzul
            text="FEVEREIRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/FEVEREIRO.pdf"
          />
          <LinkAzul
            text="MARÇO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/MARCO.pdf"
          />
          <LinkAzul
            text="ABRIL"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/ABRIL.pdf"
          />
          <LinkAzul
            text="MAIO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/MAIO.pdf"
          />
          <LinkAzul
            text="JUNHO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JUNHO.pdf"
          />
          <LinkAzul
            text="JULHO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/JULHO.pdf"
          />
          <LinkAzul
            text="AGOSTO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/AGOSTO.pdf"
          />
          <LinkAzul
            text="SETEMBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/SETEMBRO.pdf"
          />
          <LinkAzul
            text="OUTUBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/OUTUBRO.pdf"
          />
          <LinkAzul
            text="NOVEMBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/NOVEMBRO.pdf"
          />
          <LinkAzul
            text="DEZEMBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/DEZEMBRO.pdf"
          />
        </PaginaSlug>
      );
    case "demonstrativo-da-variacao-patrimonial-2021":
      return (
        <PaginaSlug className="md:w-1/6">
          <LinkAzul
            text="JANEIRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JANEIRO.pdf"
          />
          <LinkAzul
            text="FEVEREIRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/FEVEREIRO.pdf"
          />
          <LinkAzul
            text="MARÇO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/MARCO.pdf"
          />
          <LinkAzul
            text="ABRIL"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/ABRIL.pdf"
          />
          <LinkAzul
            text="MAIO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/MAIO.pdf"
          />
          <LinkAzul
            text="JUNHO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JUNHO.pdf"
          />
          <LinkAzul
            text="JULHO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/JULHO.pdf"
          />
          <LinkAzul
            text="AGOSTO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/AGOSTO.pdf"
          />
          <LinkAzul
            text="SETEMBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/SETEMBRO.pdf"
          />
          <LinkAzul
            text="OUTUBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/OUTUBRO.pdf"
          />
          <LinkAzul
            text="NOVEMBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/NOVEMBRO.pdf"
          />
          <LinkAzul
            text="DEZEMBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/DEZEMBRO.pdf"
          />
        </PaginaSlug>
      );
    case "demonstrativo-da-variacao-patrimonial-2020":
      return (
        <PaginaSlug className="md:w-1/6">
          <LinkAzul
            text="MÊS DE JANEIRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-JANEIRO-5.pdf"
          />
          <LinkAzul
            text="MÊS DE FEVEREIRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-FEVEREIRO-5.pdf"
          />
          <LinkAzul
            text="MÊS DE MARÇO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-MAR%C3%87O-5.pdf"
          />
          <LinkAzul
            text="MÊS DE ABRIL	"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-ABRIL-5.pdf"
          />
          <LinkAzul
            text="MÊS DE MAIO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-MAIO-5.pdf"
          />
          <LinkAzul
            text="MÊS DE JUNHO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-JUNHO-5.pdf"
          />
          <LinkAzul
            text="MÊS DE JULHO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-JULHO-5.pdf"
          />
          <LinkAzul
            text="MÊS DE AGOSTO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-AGOSTO-4.pdf"
          />
          <LinkAzul
            text="MÊS DE SETEMBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-SETEMBRO-5.pdf"
          />
          <LinkAzul
            text="MÊS DE OUTUBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/M%C3%8AS-DE-OUTUBRO-5.pdf"
          />
          <LinkAzul
            text="MÊS DE NOVEMBRO"
            href="https://aparecidaprev.go.gov.br/demonst-variacao-patrimonial/novembro-2/"
          />
          <LinkAzul
            text="MÊS DE DEZEMBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/DEZEMBRO.pdf"
          />
        </PaginaSlug>
      );
    case "demonstrativo-da-variacao-patrimonial-2019":
      return (
        <PaginaSlug>
          <LinkAzul
            text="Demonstrativo da Variação Patrimonial JANEIRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JANEIRO-5.pdf"
          />
          <LinkAzul
            text="Demonstrativo da Variação Patrimonial FEVEREIRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-FEVEREIRO-5.pdf"
          />
          <LinkAzul
            text="Demonstrativo da Variação Patrimonial MARÇO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-MARÇO-5.pdf"
          />
          <LinkAzul
            text="Demonstrativo da Variação Patrimonial ABRIL"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-ABRIL-5.pdf"
          />
          <LinkAzul
            text="Demonstrativo da Variação Patrimonial MAIO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-MAIO-5.pdf"
          />
          <LinkAzul
            text="Demonstrativo da Variação Patrimonial JUNHO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JUNHO-5.pdf"
          />
          <LinkAzul
            text="Demonstrativo da Variação Patrimonial JULHO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-JULHO-5.pdf"
          />
          <LinkAzul
            text="Demonstrativo da Variação Patrimonial AGOSTO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-AGOSTO-5.pdf"
          />
          <LinkAzul
            text="Demonstrativo da Variação Patrimonial SETEMBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-SETEMBRO-5.pdf"
          />
          <LinkAzul
            text="Demonstrativo da Variação Patrimonial OUTUBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/M%C3%8AS-DE-OUTUBRO-4.pdf"
          />
          <LinkAzul
            text="Demonstrativo da Variação Patrimonial NOVEMBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-NOVEMBRO-5.pdf"
          />
          <LinkAzul
            text="Demonstrativo da Variação Patrimonial DEZEMBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/MÊS-DE-DEZEMBRO-5.pdf"
          />
        </PaginaSlug>
      );
    case "demonstrativo-da-variacao-patrimonial-2018":
      return (
        <PaginaSlug>
          <LinkAzul
            text="DEMONSTRAÇÃO DAS VARIAÇÕES PATRIMONIAIS JANEIRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/DEMONSTRA%C3%87%C3%83O-DAS-VARIA%C3%87%C3%95ES-PATRIMONIAIS-JANEIRO.pdf"
          />
          <LinkAzul
            text="DEMONSTRAÇÕES DAS VARIAÇÕES PATRIMONIAIS FEVEREIRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/DEMONSTRA%C3%87%C3%95ES-DAS-VARIA%C3%87%C3%95ES-PATRIMONIAIS-FEVEREIRO.pdf"
          />
          <LinkAzul
            text="DEMONSTRAÇÕES DAS VARIAÇÕES PATRIMONIAIS MARÇO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/DEMONSTRA%C3%87%C3%95ES-DAS-VARIA%C3%87%C3%95ES-PATRIMONIAIS-MAR%C3%87O.pdf"
          />
          <LinkAzul
            text="DEMONSTRAÇÃO DAS VARIAÇÕES PATRIMONIAIS ABRIL"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/DEMONSTRA%C3%87%C3%83O-DAS-VARIA%C3%87%C3%95ES-PATRIMINIAIS-ABRIL.pdf"
          />
          <LinkAzul
            text="DEMONSTRAÇÃO DAS VARIAÇÕES PATRIMONIAIS MAIO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/DEMONSTRA%C3%87%C3%83O-DAS-VARIA%C3%87%C3%95ES-PATRIMONIAIS-MAIO.pdf"
          />
          <LinkAzul
            text="DEMONSTRATIVO DAS VARIAÇÕES PATRIMONIAIS JUNHO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/DEMONSTRATIVO-DAS-VARIA%C3%87%C3%95ES-PATRIMONIAIS-JUNHO.pdf"
          />
          <LinkAzul
            text="DEMONSTRAÇÕES DAS VARIAÇÕES PATRIMONIAIS JULHO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/DEMONSTRA%C3%87%C3%95ES-DAS-VARIA%C3%87%C3%95ES-PATRIMONIAIS-JULHO.pdf"
          />
          <LinkAzul
            text="DEMONSTRAÇÕES DAS VARIAÇÕES PATRIMONIAIS AGOSTO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/10/DEMONSTRA%C3%87%C3%95ES-DAS-VARIA%C3%87%C3%95ES-PATRIMONAIS-AGOSTO.pdf"
          />
          <LinkAzul
            text="DEMONSTRAÇÕES DAS VARIAÇÕES PATRIMONIAIS SETEMBRO"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/DEMONSTRA%C3%87%C3%95ES-DAS-VARIA%C3%87%C3%95ES-PATRIMONIAIS.pdf"
          />
        </PaginaSlug>
      );
    case "demonstrativo-da-variacao-patrimonial-2017":
      return (
        <PaginaSlug>
          <LinkAzul
            text="Variações Patrimoniais-IPC05 JANEIRO 2017"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Varia%C3%A7%C3%B5es-Patrimoniais-IPC05-JANEIRO-2017.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais-IPC05 FEVEREIRO 2017"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Varia%C3%A7%C3%B5es-Patrimoniais-IPC05-FEVEREIRO-2017.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais-IPC05 MARÇO 2017"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/Varia%C3%A7%C3%B5es-Patrimoniais-IPC05-MAR%C3%87O-2017.pdf"
          />
          <LinkAzul
            text="VARIAÇÕES PATRIMONIAIS 04.2017"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/DEMONSTRA%C3%87%C3%83O-DAS-CARIA%C3%87%C3%95ES-PATRIMONIAIS-04.171.pdf"
          />
          <LinkAzul
            text="VARIAÇÕES PATRIMONIAIS 05.2017"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/DEMONSTRA%C3%87%C3%83O-DAS-CARIA%C3%87%C3%95ES-PATRIMONIAIS-05.17.pdf"
          />
          <LinkAzul
            text="VARIAÇÕES PATRIMONIAIS 06.2017"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/DEMONSTRA%C3%87%C3%83O-DAS-CARIA%C3%87%C3%95ES-PATRIMONIAIS-06.17.pdf"
          />
          <LinkAzul
            text="VARIAÇÕES PATRIMONIAIS 07.2017"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/DEMONSTRA%C3%87%C3%83O-DAS-CARIA%C3%87%C3%95ES-PATRIMONIAIS-07.17.pdf"
          />
          <LinkAzul
            text="VARIAÇÕES PATRIMONIAIS 08.2017"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/DEMONSTRA%C3%87%C3%83O-DAS-CARIA%C3%87%C3%95ES-PATRIMONIAIS-08.17.pdf"
          />
          <LinkAzul
            text="VARIAÇÕES PATRIMONIAIS 09.2017"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/DEMONSTRA%C3%87%C3%83O-DAS-CARIA%C3%87%C3%95ES-PATRIMONIAIS-09.17.pdf"
          />
          <LinkAzul
            text="VARIAÇÕES PATRIMONIAIS 10.2017"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/DEMONSTRA%C3%87%C3%83O-DAS-CARIA%C3%87%C3%95ES-PATRIMONIAIS-10.17.pdf"
          />
          <LinkAzul
            text="VARIAÇÕES PATRIMONIAIS 11.2017"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/06/DEMONSTRA%C3%87%C3%83O-DAS-CARIA%C3%87%C3%95ES-PATRIMONIAIS-11.17.pdf"
          />

          <LinkAzul
            text="VARIAÇÕES PATRIMONIAIS 12.2017"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/06/DEMONSTRA%C3%87%C3%83O-DAS-VARIA%C3%87%C3%95ES-PATRIMONIAIS-12.17.pdf"
          />
        </PaginaSlug>
      );
    case "demonstrativo-variacao-patrimonial-2016":
      return (
        <PaginaSlug>
          <LinkAzul
            text="variacoes-patrimoniais-ipc05-janeiro-2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Varia%C3%A7%C3%B5es-Patrimoniais-IPC05-JANEIRO-2016.pdf"
          />
          <LinkAzul
            text="variacoes-patrimoniais-ipc05-fevereiro-2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Varia%C3%A7%C3%B5es-Patrimoniais-IPC05-FEVEREIRO-2016.pdf"
          />
          <LinkAzul
            text="variacoes-patrimoniais-ipc05-marco-2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Varia%C3%A7%C3%B5es-Patrimoniais-IPC05-MAR%C3%87O-2016.pdf"
          />
          <LinkAzul
            text="variacoes-patrimoniais-ipc05-abril-2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Varia%C3%A7%C3%B5es-Patrimoniais-IPC05-ABRIL-2016.pdf"
          />
          <LinkAzul
            text="variacoes-patrimoniais-ipc05-maio-2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Varia%C3%A7%C3%B5es-Patrimoniais-IPC05-MAIO-2016.pdf"
          />
          <LinkAzul
            text="variacoes-patrimoniais-ipc05-junho-2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Varia%C3%A7%C3%B5es-Patrimoniais-IPC05-JUNHO-2016.pdf"
          />
          <LinkAzul
            text="variacoes-patrimoniais-ipc05-julho-2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Varia%C3%A7%C3%B5es-Patrimoniais-IPC05-JULHO-2016.pdf"
          />
          <LinkAzul
            text="variacoes-patrimoniais-ipc05-agosto-2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Varia%C3%A7%C3%B5es-Patrimoniais-IPC05-AGOSTO-2016.pdf"
          />
          <LinkAzul
            text="variacoes-patrimoniais-ipc05-setembro-2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Varia%C3%A7%C3%B5es-Patrimoniais-IPC05-SETEMBRO-2016.pdf"
          />
          <LinkAzul
            text="variacoes-patrimoniais-ipc05-outubro-2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Varia%C3%A7%C3%B5es-Patrimoniais-IPC05-OUTUBRO-2016.pdf"
          />
          <LinkAzul
            text="variacoes-patrimoniais-ipc05-novembro-2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Varia%C3%A7%C3%B5es-Patrimoniais-IPC05-NOVEMBRO-2016.pdf"
          />
          <LinkAzul
            text="variacoes-patrimoniais-ipc05-dezembro-2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/Varia%C3%A7%C3%B5es-Patrimoniais-IPC05-DEZEMBRO-2016.pdf"
          />
        </PaginaSlug>
      );
    case "variacao-patrimonial-2015":
      return (
        <PaginaSlug>
          <LinkAzul
            text="Variações Patrimoniais JAN 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Varia%C3%A7%C3%B5es-Patrimoniais-JAN-2015.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais FEV 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Varia%C3%A7%C3%B5es-Patrimoniais-FEV-2015.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais MAR 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Varia%C3%A7%C3%B5es-Patrimoniais-MAR-2015.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais ABR 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Varia%C3%A7%C3%B5es-Patrimoniais-ABR-2015.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais MAIO 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Varia%C3%A7%C3%B5es-Patrimoniais-MAIO-2015.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais JUNHO 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Varia%C3%A7%C3%B5es-Patrimoniais-JUNHO-2015.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais JULHO 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Varia%C3%A7%C3%B5es-Patrimoniais-JULHO-2015.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais AGOSTO 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Varia%C3%A7%C3%B5es-Patrimoniais-AGOSTO-2015.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais SETEMBRO 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Varia%C3%A7%C3%B5es-Patrimoniais-SETEMBRO-2015.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais OUTUBRO 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Varia%C3%A7%C3%B5es-Patrimoniais-OUTUBRO-2015.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais NOVEMBRO 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Varia%C3%A7%C3%B5es-Patrimoniais-NOVEMBRO-2015.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais DEZEMBRO 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/08/Varia%C3%A7%C3%B5es-Patrimoniais-DEZEMBRO-2015.pdf"
          />
        </PaginaSlug>
      );
    case "variacao-patrimonial-2014":
      return (
        <PaginaSlug>
          <LinkAzul
            text="Variações Patrimoniais DEZEMBRO 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Varia%C3%A7%C3%B5es-Patrimoniais-DEZEMBRO-2014.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais NOVEMBRO 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Varia%C3%A7%C3%B5es-Patrimoniais-NOVEMBRO-2014.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais OUTUBRO 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Varia%C3%A7%C3%B5es-Patrimoniais-OUTUBRO-2014.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais SETEMBRO 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Varia%C3%A7%C3%B5es-Patrimoniais-SETEMBRO-2014.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais AGOSTO 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Varia%C3%A7%C3%B5es-Patrimoniais-AGOSTO-2014.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais JULHO 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Varia%C3%A7%C3%B5es-Patrimoniais-JULHO-2014.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais JUNHO 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Varia%C3%A7%C3%B5es-Patrimoniais-JUNHO-2014.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais MAIO 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Varia%C3%A7%C3%B5es-Patrimoniais-MAIO-2014.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais ABR 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/Varia%C3%A7%C3%B5es-Patrimoniais-ABR-2014.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais MAR 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/Varia%C3%A7%C3%B5es-Patrimoniais-MAR-2014.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais FEV 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/Varia%C3%A7%C3%B5es-Patrimoniais-FEV-2014.pdf"
          />
          <LinkAzul
            text="Variações Patrimoniais JAN 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/Varia%C3%A7%C3%B5es-Patrimoniais-JAN-2014.pdf"
          />
        </PaginaSlug>
      );
    case "demonstrativo-das-variacoes-patrimoniais-2013":
      return <PaginaSlug></PaginaSlug>;
    default:
      return "Página não encontrada";
  }
}
