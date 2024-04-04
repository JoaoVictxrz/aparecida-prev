import { Metadata } from "next";
import LinkAzul from "../components/links";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Taxa de Administração",
  };
}

export default function Home() {
  return (
    <Container title="Taxa de Administração">
      <div className="flex flex-col">
        <p className="uppercase font-semibold">
          PORTARIA INSTITUI A TAXA ADMINISTRATIVA
        </p>
        <div className="flex flex-col gap-1 pt-2 pl-5">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/Portaria-n%C2%B0-045_merged.pdf"
            text="Portaria 045/2024"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/02/Portaria-068.pdf"
            text="Portaria 068/2023"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/2022.pdf"
            text="Portaria 080/2022"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/Portaria-019-Tx-Adm2021.pdf"
            text="Portaria 019/2021"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/02/Portaria-005-de-2020.pdf"
            text="Portaria 005/2020"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/02/Portaria-031-de-2019.pdf"
            text="Portaria 031/2019"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Pasta2018-6-130001.pdf"
            text="Portaria 015/2018"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/07/Tx-Adm-2017.pdf"
            text="Portaria 002/2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/07/TAXA-ADM-2016.pdf"
            text="Portaria 009/2016"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/07/Portaria-809-2015.pdf"
            text="Portaria 809/2015"
          />
        </div>
      </div>
    </Container>
  );
}
