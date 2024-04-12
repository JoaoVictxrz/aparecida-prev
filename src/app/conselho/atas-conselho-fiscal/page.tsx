import LinkAzul from "@/app/institucional/components/links";
import Container from "@/components/container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Atas conselho fiscal",
  };
}

export default function Home() {
  return (
    <Container title="Atas conselho fiscal">
      <div className="flex w-3/4 flex-col md:w-1/4">
        <p className="pb-2 font-bold uppercase">ATAS 2024</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="Relatório 3° Quadrimestre 2023"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/RELATORIO-3%C2%B0-QUADRIMESTRE-2023.pdf"
          />
          <LinkAzul
            text="Ata da Reunião 28/02/2024"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/Ata-Fiscal-28-02.pdf"
          />
          <LinkAzul
            text="Relatório de Janeiro 2024"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/03/Relatorio-de-Janeiro-Conselho-Fiscal.pdf"
          />
          <LinkAzul
            text="Ata da Reunião 27/03/2024"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/03/Ata-Conselho-Fiscal-02-2024.pdf"
          />
        </div>
      </div>

      <div className="flex w-3/4 flex-col md:w-1/4">
        <p className="pb-2 font-bold uppercase">ATAS 2023</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="Ata 1° Quadrimestre 2023"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/Ata-Consellho-Fiscal-1%C2%B0-quadrimestre.pdf"
          />
          <LinkAzul
            text="Relatório do 1° Quadrimestre 2023"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Relatorio-1%C2%B0-quadrimestre.pdf"
          />
          <LinkAzul
            text="Ata 2° Quadrimestre 2023"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/ATA-REUNIAO-DO-CONSELHO-FISCAL-28_09_2023.pdf"
          />
          <LinkAzul
            text="Relatório 2° Quadrimestre 2023"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/11/Relaorio-2%C2%B0-quadrimestre-1-7.pdf"
          />
        </div>
      </div>

      <div className="flex w-3/4 flex-col md:w-1/4">
        <p className="pb-2 font-bold uppercase">ATAS 2022</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="Ata 1° Quadrimestre 2022"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/08/1%C2%B0-Quadrimestre-2022.pdf"
          />
          <LinkAzul
            text="Relatório do 1° Quadrimestre 2022"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/12/Relatorio-do-1%C2%B0-quadrimestre-2022.pdf"
          />
          <LinkAzul
            text="Ata 2° Quadrimestre 2022"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/10/2%C2%B0-Quadrimestre-2022.pdf"
          />
          <LinkAzul
            text="Relatório do 2° Quadrimestre 2022"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/12/Relatorio-do-2%C2%B0-quadrimestre-2022.pdf"
          />
          <LinkAzul
            text="Relatório do 3° Quadrimestre 2022"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/02/3%C2%B0-quadrimestre.pdf"
          />
        </div>
      </div>
      <div className="flex w-3/4 flex-col md:w-1/4">
        <p className="pb-2 font-bold uppercase">ATAS 2021</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="ATA 1º Quadrimestre 2021"
            href="https://aparecidaprev.go.gov.br/atas-conselho-fiscal-2/ata-cf-1-quadrim-2021/"
          />
        </div>
      </div>

      <div className="flex w-3/4 flex-col md:w-1/4">
        <p className="pb-2 font-bold uppercase">ATAS 2020</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="Ata 1º Quadrimestre 2020"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/09/Image110920101110.pdf"
          />
          <LinkAzul
            text="Ata 2º Quadrimestre 2020"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/ATA-CMF-11-2020.pdf"
          />
          <LinkAzul
            text="Ata 3º Quadrimestre 2020"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/PARECER-CONS-FISCAL-III-QUAD-2020.pdf"
          />
        </div>
      </div>

      <div className="flex w-3/4 flex-col md:w-1/4">
        <p className="pb-2 font-bold uppercase">ATAS 2019</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="Ata Posse Conselho Fiscal 2019"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/07/POSSE-CONSELHEIRO-2019.pdf"
          />
          <LinkAzul
            text="Ata 1º Quadrimestre 2019"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/Image160819094516.pdf"
          />
          <LinkAzul
            text="Ata 2º Quadrimestre 2019"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/09/Image110920100957.pdf"
          />
          <LinkAzul
            text="Ata 3º Quadrimestre 2019"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/09/Image110920101034.pdf"
          />
        </div>
      </div>

      <div className="flex w-3/4 flex-col md:w-1/4">
        <p className="pb-2 font-bold uppercase">ATAS 2018</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="Ata 1º Quadrimestre 2018"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/08/Ata-1%C2%AA-Quadrimestre-2018.pdf"
          />
          <LinkAzul
            text="Ata 2º Quadrimestre 2018"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/07/ATA-SEGUNDO-QUADRIMESTRE.pdf"
          />
          <LinkAzul
            text="Ata 3º Quadrimestre 2018"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/07/ATA-TERCEIRO-QUADRIMESTRE.pdf"
          />
        </div>
      </div>

      <div className="flex w-3/4 flex-col md:w-1/4">
        <p className="pb-2 font-bold uppercase">ATAS 2017</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="Ata 2º Quadrimestre 2017"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Pasta2018-6-130003.pdf"
          />
          <LinkAzul
            text="Ata 3º Quadrimestre 2017"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/08/Ata-3%C2%AA-Quadrimestre-2017.pdf"
          />
        </div>
      </div>

      <div className="flex w-3/4 flex-col md:w-1/4">
        <p className="pb-2 font-bold uppercase">ATA 2016</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="Ata 1º Quadrimestre 2016"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Ata-1%C2%BA-Quadrimestre-2016.pdf"
          />
        </div>
      </div>

      <div className="flex w-3/4 flex-col md:w-1/4">
        <p className="pb-2 font-bold uppercase">ATAS 2015</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="ATA 1º Quadrimestre 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/PARECER-0101.pdf"
          />
          <LinkAzul
            text="Ata 3º Quadrimestre 2015"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Ata-2%C2%BA-Quadrimestre-2015.pdf"
          />
        </div>
      </div>

      <div className="flex w-3/4 flex-col md:w-1/4">
        <p className="pb-2 font-bold uppercase">ATAS 2014</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="ATA Posse Conselho Fiscal 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/09-2014.pdf"
          />
          <LinkAzul
            text="Ata 1º e 2º Quadrimestre 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/Ata-dezembro-2014.pdf"
          />
          <LinkAzul
            text="Ata 3º Quadrimestre 2014"
            href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/PARECER-001.pdf"
          />
        </div>
      </div>
    </Container>
  );
}
