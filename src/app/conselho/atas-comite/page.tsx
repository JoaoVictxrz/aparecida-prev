import LinkAzul from "@/app/institucional/components/links";
import Title from "@/components/title";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Atas comitê",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-white pb-2">
      <section className="px-2 container">
        <Title title="Atas comitê" />
        <div className="w-full container gap-5 pb-20">
          <div className="flex flex-col w-3/4 md:w-2/4">
            <p className="font-bold uppercase pb-2">REGIMENTO DO COMITÊ</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="REGIMENTO DO COMITÊ "
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/05/Regimeto-do-Comite.pdf"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4 md:w-2/4">
            <p className="font-bold uppercase pb-2">ATAS COMITÊ 2024</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="ATA REUNIÃO 08/02/2024 (DADOS FINANCEIROS DE DEZEMBRO DE 2023)"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/Ata-Comite-08-02-2024.pdf"
              />
              <LinkAzul
                text="ATA REUNIÃO 15/02/2024 (DADOS FINANCEIROS DE JANEIRO 2024)"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/Ata-Comite-15-02.pdf"
              />
              <LinkAzul
                text="ATA REUNIÃO 15/03/2024 (DADOS FINANCEIROS DE FEVEREIRO 2024)"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/03/240319011520.pdf"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">ATAS COMITÊ 2023</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="JANEIRO - 2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Ata-01-2023.pdf"
              />
              <LinkAzul
                text="FEVEREIRO - 2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Ata-02-2023.pdf"
              />
              <LinkAzul
                text="MARÇO - 2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/03/230320142401.pdf"
              />
              <LinkAzul
                text="ABRIL - 2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Ata-04-2023-1.pdf"
              />
              <LinkAzul
                text="MAIO - 2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/230627092051.pdf"
              />
              <LinkAzul
                text="JUNHO - 2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Ata-06-2023-1.pdf"
              />
              <LinkAzul
                text="AGOSTO - 2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/Agosto-2023.pdf"
              />
              <LinkAzul
                text="SETEMBRO - 2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/Setembro-2023.pdf"
              />
              <LinkAzul
                text="OUTUBRO - 2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/231027110016.pdf"
              />
              <LinkAzul
                text="NOVEMBRO - 2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Dados-de-Setembro-2023.pdf"
              />
              <LinkAzul
                text="NOVEMBRO - 2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Dados-de-Outubro-2023.pdf"
              />
              <LinkAzul
                text="DEZEMBRO - 2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/ATA-12-12-COMIN.pdf"
              />
              <LinkAzul
                text="RESOLUÇÃO N° 001/2023 COMIN – POLÍTICA DE INVESTIMENTO 2024"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/Publicao-Resolucao-COMIN.pdf"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">ALM 2022</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="ALM  – Asset Liability Management"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/2022.10.28-ALM-Ap-de-Goiania-1.pdf"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">ATAS COMITÊ 2022</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="CARTA DE RENÚNCIA"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/05/Carta-de-Renuncia.pdf"
              />
              <LinkAzul
                text="AGOSTO - 2022 1° ATA"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/08/AGOSTO-2022-1%C2%B0-ATA.pdf"
              />
              <LinkAzul
                text="AGOSTO – 2022 2° ATA"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/08/AGOSTO-2022-2%C2%B0-ATA.pdf"
              />
              <LinkAzul
                text="SETEMBRO – 2022"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/08/AGOSTO-2022-2%C2%B0-ATA.pdf"
              />
              <LinkAzul
                text="DEZEMBRO – 2022"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/02/230207091402.pdf"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">ATAS COMITÊ 2021</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="ABRIL - 2021"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/ATA-Comite-280421.pdf"
              />
              <LinkAzul
                text="JULHO - 2021"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/ATA-COMITE-JULHO-2021.pdf"
              />
              <LinkAzul
                text="AGOSTO - 2021"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/12/COMIN-AGOSTO-2021.pdf"
              />
              <LinkAzul
                text="SETEMBRO - 2021"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/12/COMIN-SETEMBRO-2021.pdf"
              />
              <LinkAzul
                text="NOVEMBRO - 2021"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/12/COMIN-NOVEMBRO-2021.pdf"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">ATAS COMITÊ 2020</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="FEVEREIRO - 2020"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/09/Image110920100108.pdf"
              />
              <LinkAzul
                text="JUNHO - 2020"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/09/Image110920100140.pdf"
              />
              <LinkAzul
                text="DEZEMBRO - 2020"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/ATA-CMI-12-2020.pdf"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">ATAS COMITÊ 2019</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="MARÇO - 2019"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/09/Image110920100007.pdf"
              />
              <LinkAzul
                text="NOVEMBRO - 2019"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/09/Image110920100037.pdf"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">ATAS COMITÊ 2018</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="FEVEREIRO - 2018"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/02-2018.pdf"
              />
              <LinkAzul
                text="MAIO - 2018"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/05-2018-1.pdf"
              />
              <LinkAzul
                text="NOVEMBRO - 2018"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/ATA-19-11-2018.pdf"
              />
              <LinkAzul
                text="Resolução 001-2018 PI"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/Resolucao-001-2018-CI-Alterada-2.pdf"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">ATAS COMITÊ 2017</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="MARÇO - 2017"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/01/03-2017.pdf"
              />
              <LinkAzul
                text="SETEMBRO - 2017"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Pasta2018-6-130002.pdf"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">ATAS COMITÊ 2016</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="JANEIRO - 2016"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/01/01-2016.pdf"
              />
              <LinkAzul
                text="AGOSTO - 2016"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/01/ATA-REUNI%C3%83O-12-08-2016.pdf"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">ATAS COMITÊ 2015</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="JANEIRO - 2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/02/01-20151.pdf"
              />
              <LinkAzul
                text="FEVEREIRO - 2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/02-2015.pdf"
              />
              <LinkAzul
                text="MARÇO - 2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/03-2015-Extraordin%C3%A1ria-Corrigida.pdf"
              />
              <LinkAzul
                text="Extraordinária MARÇO - 2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/03-2015.pdf"
              />
              <LinkAzul
                text="ABRIL - 2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/04-2015.pdf"
              />
              <LinkAzul
                text="MAIO - 2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/06/05-2015.pdf"
              />
              <LinkAzul
                text="Extraordinária JUNHO - 2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/07/06-2015-Extraordin%C3%A1ria.pdf"
              />
              <LinkAzul
                text="JULHO - 2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/01/07-2015.pdf"
              />
              <LinkAzul
                text="AGOSTO - 2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/01/08-2015.pdf"
              />
              <LinkAzul
                text="SETEMBRO - 2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/01/09-2015.pdf"
              />
              <LinkAzul
                text="DEZEMBRO - 2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/01/12-2015.pdf"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">ATAS COMITÊ 2014</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="JANEIRO - 2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/JAN.pdf"
              />
              <LinkAzul
                text="FEVEREIRO - 2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/MAR.pdf"
              />
              <LinkAzul
                text="MARÇO - 2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/MAR.pdf"
              />
              <LinkAzul
                text="ABRIL - 2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/09/Ata-04-2014.pdf"
              />
              <LinkAzul
                text="MAIO - 2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/MAI.pdf"
              />
              <LinkAzul
                text="JULHO - 2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/09/Ata-07-2014.pdf"
              />
              <LinkAzul
                text="AGOSTO - 2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/09/Ata-08-2014.pdf"
              />
              <LinkAzul
                text="SETEMBRO - 2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/09/Ata-09-2014.pdf"
              />
              <LinkAzul
                text="OUTUBRO - 2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Ata-10-20141.pdf"
              />
              <LinkAzul
                text="NOVEMBRO - 2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Ata-11-2014.pdf"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
