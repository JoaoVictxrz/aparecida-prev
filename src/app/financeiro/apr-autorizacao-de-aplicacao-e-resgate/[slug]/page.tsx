import LinkAzul from "@/app/institucional/components/links";
import PaginaSlug from "../../components/pageslug";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "APR – Autorização de Aplicação e Resgate",
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
    case "ano-2024":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/APR-JANEIRO-2024.pdf"
            text="JANEIRO 2024"
          />
        </PaginaSlug>
      );
    case "ano-2023":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/APR-JANEIRO-2023.pdf"
            text="APR JANEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/APR-FEVEREIRO-2023.pdf"
            text="APR FEVEREIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/APR-MARCO-2023.pdf"
            text="APR MARÇO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/APR-ABRIL-2023.pdf"
            text="APR ABRIL"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/APR-MAIO-DE-2023.pdf"
            text="APR MAIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/APR-JUNHO.pdf"
            text="APR JUNHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/APR-JULHO.pdf"
            text="APR JULHO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/APR-AGOSTO-2023.pdf"
            text="APR AGOSTO 2023"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/APR-SETEMBRO-2023.pdf"
            text="APR SETEMBRO 2023"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/APR-OUTUBRO-2023.pdf"
            text="APR OUTUBRO 2023"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/APR-NOVEMBRO-2023.pdf"
            text="APR NOVEMBRO 2023"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/APR-DEZEMBRO-2023.pdf"
            text="APR DEZEMBRO 2023"
          />
        </PaginaSlug>
      );
    case "ano-2022":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/APR-Janeiro-2022.pdf"
            text="APR JANEIRO – 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/APR-Fevereiro-2022.pdf"
            text="APR FEVEREIRO – 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/APR-Marco-20222.pdf"
            text="APR MARÇO – 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/APR-Abril-2022.pdf"
            text="APR ABRIL – 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/APR-Maio-2022.pdf"
            text="APR MAIO – 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/APR-06-2022.pdf"
            text="APR JUNHO – 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/APR-07-2022.pdf"
            text="APR JULHO – 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/APR-08-2022.pdf"
            text="APR AGOSTO – 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/APR-09-2022.pdf"
            text="APR SETEMBRO – 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/APR-10-2022.pdf"
            text="APR OUTUBRO – 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/APR-11-2022.pdf"
            text="APR NOVEMBRO-2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/APR-12-2022.pdf"
            text="APR DEZEMBRO-2022"
          />
        </PaginaSlug>
      );
    case "ano-2021":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/APR-01.pdf"
            text="APR-JANEIRO 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/APR-02.pdf"
            text="APR- FEVEREIRO 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/APR-03-2021.pdf"
            text="APR-MARÇO 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/APR-04-2021.pdf"
            text="APR-ABRIL 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/APR-05-2021.pdf"
            text="APR-MAIO 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/APR-06-2021.pdf"
            text="APR-JUNHO 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/APR-07-2021.pdf"
            text="APR-JULHO 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/APR-08-2021.pdf"
            text="APR-AGOSTO 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/APR-SETEMBRO-2021.pdf"
            text="APR SETEMBRO 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/APR-OUTUBRO-2021.pdf"
            text="APR OUTUBRO 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/Image301221112346.pdf"
            text="APR NOVEMBRO 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/APR-12-2021.pdf"
            text="APR DEZEMBRO 2021"
          />
        </PaginaSlug>
      );
    case "ano-2020":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-JANEIRO-2020-1.pdf"
            text="APR-JANEIRO 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-FEVEREIRO-2020-1.pdf"
            text="APR-FEVEREIRO 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-MARÇO-2020-1.pdf"
            text="APR-MARÇO-2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-ABRIL-2020-1.pdf"
            text="APR-ABRIL-2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-05-2020.pdf"
            text="APR-MAIO 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-06-2020.pdf"
            text="APR-JUNHO 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-07-2020.pdf"
            text="APR-JULHO 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-08-2020.pdf"
            text="APR-AGOSTO 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-09-2020.pdf"
            text="APR-SETEMBRO 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-10-2020.pdf"
            text="APR-OUTUBRO 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-11-2020.pdf"
            text="APR-NOVEMBRO 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-12-2020.pdf"
            text="APR-DEZEMBRO 2020"
          />
        </PaginaSlug>
      );
    case "apr-2020":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-JANEIRO-2020.pdf"
            text="APR-JANEIRO 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-FEVEREIRO-2020.pdf"
            text="APR-FEVEREIRO 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-MARÇO-2020.pdf"
            text="APR-MARÇO-2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/07/APR-ABRIL-2020.pdf"
            text="APR-ABRIL-2020"
          />
        </PaginaSlug>
      );
    case "apr-2019":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/APR-JAN-2019.pdf"
            text="APR JANEIRO 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/APR-FEV-2019.pdf"
            text="APR FEVEREIRO 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/APR-MARÇO-2019.pdf"
            text="APR MARÇO 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/APR-ABRIL-2019.pdf"
            text="APR ABRIL 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/APR-MAIO-2019.pdf"
            text="APR MAIO 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/APR-JUNHO-2019.pdf"
            text="APR JUNHO 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/APR-JULHO-2019.pdf"
            text="APR JULHO 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/APR-AGOSTO-2019.pdf"
            text="APR AGOSTO 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/APR-SETEMBRO-2019.pdf"
            text="APR SETEMBRO 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/APR-10-2019.pdf"
            text="APR OUTUBRO 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/APR-11-2019.pdf"
            text="APR NOVEMBRO 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/APR-DEZEMBRO-19.pdf"
            text="APR DEZEMBRO 2019"
          />
        </PaginaSlug>
      );
    case "apr-2018":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/APR-01-2018.pdf"
            text="APR JANEIRO 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/APR-02-2018.pdf"
            text="APR FEVEREIRO 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/APR-03-2018.pdf"
            text="APR MARÇO 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/APR-04-2018.pdf"
            text="APR ABRIL 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/APR-05-2018.pdf"
            text="APR MAIO 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/APR-06-2018.pdf"
            text="APR JUNHO 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/APR-07-2018.pdf"
            text="APR JULHO 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/APR-08-2018.pdf"
            text="APR AGOSTO 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/APR-09-2018.pdf"
            text="APR SETEMBRO 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/APR-10-2018.pdf"
            text="APR OUTUBRO 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/APR-11-2018.pdf"
            text="APR NOVEMBRO 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/APR-12-2018.pdf"
            text="APR DEZEMBRO 2018"
          />
        </PaginaSlug>
      );
    case "apr-2017":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/03/APR-JAN-2017.pdf"
            text="APR JAN 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/03/APR-FEV-2017.pdf"
            text="APR FEV 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/03/APR-MAR-2017.pdf"
            text="APR MAR 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/03/APR-05-2017.pdf"
            text="APR MAI-2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/03/APR-06-2017.pdf"
            text="APR JUN-2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/03/APR-07-2017.pdf"
            text="APR JUL-2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/03/APR-08-2017.pdf"
            text="APR AGO-2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/03/APR-09-2017.pdf"
            text="APR SET-2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/03/APR-10-2017.pdf"
            text="APR OUT-2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/03/APR-11-2017.pdf"
            text="APR NOV-2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/03/APR-12-2017.pdf"
            text="APR DEZ-2017"
          />
        </PaginaSlug>
      );
    case "apr-2016":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/03/APR-01-16.pdf"
            text="APR JAN – 2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/03/APR.pdf"
            text="APR FEV – 2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/03/APR.pdf"
            text="APR MAR – 2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/03/APR-3.pdf"
            text="APR ABR – 2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/03/APR-Maio-2016.pdf"
            text="APR MAI -2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/03/APR-Junho-2016.pdf"
            text="APR JUN -2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/03/APR-Julho-2016.pdf"
            text="APR JUL -2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/03/APR-Agosto-2016.pdf"
            text="APR AGO -2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/03/APR-SETEMBRO-2016.pdf"
            text="APR SET-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/03/APR-OUTUBRO-2016.pdf"
            text="APR OUT-2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/03/APR-NOVEMBRO-2016.pdf"
            text="APR NOV- 2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/03/APR-DEZEMBRO-2016.pdf"
            text="APR DEZ-2016"
          />
        </PaginaSlug>
      );
    case "apr-2015":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/01-20151.pdf"
            text="APR JANERIO2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/02-20152.pdf"
            text="APR FEVEREIRO2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/03-20152.pdf"
            text="APR MARÇO2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/04-20151.pdf"
            text="APR ABRIL2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/05-2015.pdf"
            text="APR MAIO2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/06-2015.pdf"
            text="APR JUNHO2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/07-20151.pdf"
            text="APR JULHO2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/08-2015.pdf"
            text="APR AGOSTO2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/09-2015.pdf"
            text="APR SETEMBRO2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/10-2015.pdf"
            text="APR OUTUBRO2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/11-2015.pdf"
            text="APR NOVEMBRO2015"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/12-2015.pdf"
            text="APR DEZEMBRO2015"
          />
        </PaginaSlug>
      );
    case "apr-2014":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/04/APR-JANEIRO-2014.pdf"
            text="APR – JANEIRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/04/APR-FEVEREIRO-2014.pdf"
            text="APR – FEVEREIRO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/04/APR-MARÇO-2014.pdf"
            text="APR – MARÇO 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/APR-04-2014.pdf"
            text="APR- ABRIL-2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/APR-05-2014.pdf"
            text="APR -MAIO- 2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/APR-06-2014.pdf"
            text="APR-JUNHO-2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/09/APR-07-2014.pdf"
            text="APR-JULHO-2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/09/APR-08-2014.pdf"
            text="APR-AGOSTO-2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/APR-09-2014.pdf"
            text="APR-SETEMBRO-2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/APR-10-2014.pdf"
            text="APR-OUTUBRO-2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/APR-11-2014.pdf"
            text="APR-NOVEMBRO-2014"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/APR-12-2014.pdf"
            text="APR – DEZEMBRO-2014"
          />
        </PaginaSlug>
      );
    case "apr-2013":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/APR-DEZ-2013.pdf"
            text="APR DEZ -2013"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/APR-11-2013.pdf"
            text="APR NOV-2013"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/APR-10-2013.pdf"
            text="APR OUT-2013"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/APR-09-2013.pdf"
            text="APR SET- 2013"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/APR-08-2013.pdf"
            text="APR AGO- 2013"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/APR-07-2013.pdf"
            text="APR JUL- 2013"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/APR-06-2013.pdf"
            text="APR JUN-2013"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/APR-05-2013.pdf"
            text="APR MAI 2013"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/APR-04-2013.pdf"
            text="APR ABR-2013"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/APR-03-2013.pdf"
            text="APR MAR-2013"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/APR-02-2013.pdf"
            text="APR FEV-2013"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/APR-01-2013.pdf"
            text="APR JAN-2013"
          />
        </PaginaSlug>
      );
    default:
      return (
        <PaginaSlug>
          <h2>Página não encontrada</h2>
        </PaginaSlug>
      );
  }
};
