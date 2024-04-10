import LinkAzul from "@/app/institucional/components/links";
import PaginaSlug from "../../components/pageslug";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: params.slug,
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
    case "DIPR-2024":
      return;
    case "DIPR-2023":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DIPR-janeiro-fevereiro.pdf"
            text="DIPR JANEIRO/FEVEREIRO 2023"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DIPR-marco-abril.pdf"
            text="DIPR MARÇO/ABRIL 2023"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DIPR_20230823.pdf"
            text="DIPR MAIO/JUNHO 2023"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DIPR_20231120.pdf"
            text="DIPR JULHO/AGOSTO 2023"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DIPR-SETEMBRO-OUTUBRO-2023.pdf"
            text="DIPR SETEMBRO/OUTUBRO 2023"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/DIPR-NOVEMBRO-DEZEMBRO-2023.pdf"
            text="DIPR NOVEMBRO/DEZEMBRO 2023"
          />
        </PaginaSlug>
      );
    case "DIPR-2022":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/DIPR_202204191-2.pdf"
            text="DIPR JANEIRO/FEVEREIRO 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/220718094353.pdf"
            text="DIPR MARÇO/ABRIL 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/DIPR-MAIO-JUNHO.pdf"
            text="DIPR MAIO/JUNHO 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/DIPR-JULHO-AGOSTO.pdf"
            text="DIPR JULHO/AGOSTO 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/set-agosto-2022.pdf"
            text="DIPR SETEMBRO/OUTUBRO 2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/DIPR-NOV-DEZ.pdf"
            text="DIPR NOVEMBRO/DEZEMBRO 2022"
          />
        </PaginaSlug>
      );
    case "DIPR-2021":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/DIPR-JAN-FEV-2021-1.pdf"
            text="DIPR JAN FEV 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/DIPR-MAR-ABR-2021.pdf"
            text="DIPR MAR ABR 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/DECLARACAO_VERACIDADE-DIPR-MAI-JUN-2021.pdf"
            text="DIPR MAI JUN 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/DIPR_20211227.pdf"
            text="DIPR_JUL AGO 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/DIPR_202112271.pdf"
            text="DIPR_SET OUT 2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/DIPR_20220419-1.pdf"
            text="DIPR_NOV DEZ 2021"
          />
        </PaginaSlug>
      );

    case "DIPR-2020":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/02/DIPR-JAN-FEV-2020.pdf"
            text="DIPR JAN FEV 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/02/DIPR-MAR-ABR-2020.pdf"
            text="DIPR MAR ABR 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/02/DIPR-MAI-JUN-2020.pdf"
            text="DIPR MAI JUN 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/02/DECLARACAO_VERACIDADE-DIPR-JUL-AGO-2020.pdf"
            text="DIPR JUL AGO 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/02/DECLARACAO_VERACIDADE-DIPR-SET-OUT-2020.pdf"
            text="DIPR SET OUT 2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/02/DECLARACAO_VERACIDADE-DIPR-NOV-DEZ-2020.pdf"
            text="DIPR NOV DEZ 2020"
          />
        </PaginaSlug>
      );
    case "DIPR-2019":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/09/DIPR-JAN-FEV-2019.pdf"
            text="DIPR JAN FEV 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/09/DIPR-MAR-ABR-2019.pdf"
            text="DIPR MAR ABR 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/09/DIPR-MA-JUN-2019.pdf"
            text="DIPR MAI JUN 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/09/DIPR-JUL-AGOSTO-2019.pdf"
            text="DIPR JUL AGOSTO 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/09/DIPR-SET-OUT-2019.pdf"
            text="DIPR SET OUT 2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/09/DIPR-NOV-DEZ-2019.pdf"
            text="DIPR NOV DEZ 2019"
          />
        </PaginaSlug>
      );
    case "DIPR-2018":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/DECLARACAO-DIPR-JAN-FEV-2018.pdf"
            text="DIPR JAN FEV 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/DIPR-MAR-ABR-2018.pdf"
            text="DIPR MAR ABR 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/IMAGE.pdf"
            text="DIPR MAI JUN 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/DIPR-JUL-AGO-2018.pdf"
            text="DIPR JUL AGO 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/DIPR-SET-OUT-2018.pdf"
            text="DIPR SET OUT 2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/DIPR-NOV-DEZ-2018.pdf"
            text="DIPR NOV DEZ 2018"
          />
        </PaginaSlug>
      );
    case "DIPR-2017":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2017/12/DIPR-JAN-FEV-2017.pdf"
            text="DIPR JAN FEV 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/12/DECLARACAO-DIPR-MAR-ABR-2017.pdf"
            text="DIPR MAR ABR 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/12/DECLARACAO-DIPR-MAI-JUN-2017.pdf"
            text="DIPR MAI JUN 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/12/DECLARACAO-DIPR-JUL-AGO-2017.pdf"
            text="DIPR JUL AGO 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/12/DECLARACAO-DIPR-SET-OUT-2017.pdf"
            text="DIPR SET OUT 2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2017/12/DIPR-NOV-DEZ-2017.pdf"
            text="DIPR NOV DEZ 2017"
          />
        </PaginaSlug>
      );
    case "DIPR-2016":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/DIPR-JAN-FEV-2016.pdf"
            text="DIPR JAN FEV"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/DIPR-MAR-ABR-2016.pdf"
            text="DIPR MAR ABR"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/DIPR-MAI-JUN-2016.pdf"
            text="DIPR MAI JUN"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2016/10/DIPR-JUL-AGO-2016.pdf"
            text="DIPR JUL AGO"
          />
        </PaginaSlug>
      );
    case "DIPR-2015":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/JAN-FEV-2015.pdf"
            text="DIPR – JAN/FEV"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/06/MAR-ABR-2015.pdf"
            text="DIPR – MAR/ABR"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/05-06.pdf"
            text="DIPR – MAI/JUN"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/07-08.pdf"
            text="DIPR – JUL/AGO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/04021500.pdf"
            text="DIPR – SET/OUT"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/DIPR-NOV-DEZ-2015.pdf"
            text="DIPR -NOV/DEZ"
          />
        </PaginaSlug>
      );
    case "DIPR-2014":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/09/jan-fev.pdf"
            text="DIPR – JAN/FEV "
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/09/mar-abr.pdf"
            text="DIPR – MAR/ABR"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/09/mai-jun.pdf"
            text="DIPR – MAI/JUN"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/JUL-AGO-2014.pdf"
            text="DIPR – JUL/AGO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/SET-OUT-2014.pdf"
            text="DIPR -SET/OUT"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/NOV-DEZ-2014.pdf"
            text="DIPR – NOV/DEZ"
          />
        </PaginaSlug>
      );
    case "DIPR-2013":
      return (
        <PaginaSlug>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/DIPR-JUL-AGOS-2013.pdf"
            text="DIPR JUL-AGOS 2013"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/DIPR-SET-OUT-2013.pdf"
            text="DIPR SET-OUT 2013"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/05/DIPR-NOV-DEZ-2013.pdf"
            text="DIPR NOV-DEZ 2013"
          />
        </PaginaSlug>
      );
    default:
      return (
        <PaginaSlug>
          <h1>Pagina não encontrada</h1>
        </PaginaSlug>
      );
  }
}
