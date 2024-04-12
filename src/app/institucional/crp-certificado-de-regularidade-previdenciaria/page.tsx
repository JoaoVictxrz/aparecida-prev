import { Metadata } from "next";
import LinkAzul from "../components/links";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "CRP - Certificado de Regularidade Previdênciária",
  };
}

export default function Home() {
  return (
    <Container
      title="CRP - Certificado de Regularidade Previdênciária"
      className="flex flex-col"
    >
      <p>
        Os certificados de regularidade previdenciária do Município de Aparecida
        de Goiânia podem ser consultados no site: (falta o link)
      </p>
      <br />
      <p>
        Digitando no campo de pesquisa “
        <span className="font-semibold">Aparecida de Goiânia</span>“, clicando
        em “<span className="font-semibold">pesquisar</span>“, confirmando o
        Ente na linha de retorno da pesquisa para exibição dos certificados.
      </p>
      <div className="flex flex-col pb-4 pl-5 pt-4 font-bold uppercase md:w-2/4">
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/CRP.pdf"
          text="CRP VENC 05 01 2024"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2014/02/CRP.pdf"
          text="CRP VENC 09 07 2023"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2014/02/CRP-10012023.pdf"
          text="CRP VENC 10 01 2023"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2014/02/CRP-14072022.pdf"
          text="CRP VENC 14 07 2022"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2014/02/Emissao-de-Certificado-15-01-2022.pdf"
          text="CRP VENC 15 01 2022"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2014/02/CRP-VENC-18072021.pdf"
          text="CRP VENC 18.07.2021"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2014/02/CRP-VENC-04012021.pdf"
          text="CRP VENC 04.01.2021"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2014/02/CRP-08-07-2020.pdf"
          text="CRP VENC 08 07 2020"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2014/02/CRP-10012020.pdf"
          text="CRP VENC 10.01.2020"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2014/02/CRP-v%C3%A1lida-24062019.pdf"
          text="CRP VENC 24.06.2019"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2014/02/CRP-VENC-26.12.2018.pdf"
          text="CRP VENC 26.12.2018"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2014/02/CRP-VENC-27.06.2018.pdf"
          text="CRP VENC 27.06.2018"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/02/CRP-09102017.pdf"
          text="CRP VENC 09.10.2017"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/02/CRP-12042017.pdf"
          text="CRP VENC 12.04.2017"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/02/CRP-08102016.pdf"
          text="CRP VENC 08.10.2016"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/02/CRP-10042016.pdf"
          text="CRP VENC 10.04.2016"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/CRP-2015.pdf"
          text="CRP VENC 23.09.2015"
        />
        <LinkAzul
          href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/09/CRP-02032015.pdf"
          text="CRP VENC. 02.03.2015"
        />
      </div>
    </Container>
  );
}
