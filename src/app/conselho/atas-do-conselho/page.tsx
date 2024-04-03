import LinkAzul from "@/app/institucional/components/links";
import Title from "@/components/title";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Atas do conselho",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-white pb-2">
      <section className="px-2 container">
        <Title title="Atas do conselho" />
        <div className="w-full container gap-5 pb-20">
          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">2024</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="JANEIRO/2024"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/ATA-24-01-CONSELHO-DELIBERATIVO.pdf"
              />
              <LinkAzul
                text="FEVEREIRO/2024"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/Ata-Previdenciario-28-02.pdf"
              />
              <LinkAzul
                text="MARÇO/2024"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/04/ATA-27-03-CMP.pdf"
              />
            </div>
          </div>

          <div className="flex flex-col w-3/4 md:w-2/4">
            <p className="font-bold uppercase pb-2">2023</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="JANEIRO/2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/02/Ata-de-janeiro.pdf"
              />
              <LinkAzul
                text="FEVEREIRO/2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/02/Ata-de-fevereiro.pdf"
              />
              <LinkAzul
                text="MARÇO/2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/03/Ata-16-03.pdf"
              />
              <LinkAzul
                text="ABRIL EXTRAORDINÁRIA/2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/230830062826.pdf"
              />
              <LinkAzul
                text="ABRIL/2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Ata-04-2023.pdf"
              />
              <LinkAzul
                text="MAIO/2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Ata-05-2023.pdf"
              />
              <LinkAzul
                text="JUNHO/2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Ata-06-2023.pdf"
              />
              <LinkAzul
                text="AGOSTO/2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/09/230901125000.pdf"
              />
              <LinkAzul
                text="SETEMBRO/2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/ATA-REUNIAO-DO-CMP-26_09_2023.pdf"
              />
              <LinkAzul
                text="OUTUBRO/2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/Outubro-2023.pdf"
              />
              <LinkAzul
                text="NOVEMBRO/2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/11/Ata-de-novembro.pdf"
              />
              <LinkAzul
                text="DEZEMBRO/2023"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Ata-CMP-12-2023.pdf"
              />
              <LinkAzul
                text="RESOLUÇÃO n° 01/2023 CMP"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Resolucao-n%C2%B0-001-2023-CMP.pdf"
              />
              <LinkAzul
                text="DEZEMBRO/2023 – REUNIÃO EXTRAORDINÁRIA"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/12/Ata-extrordinaria.pdf"
              />
            </div>
          </div>

          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">2022</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="JANEIRO/2022"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/01-2022.pdf"
              />
              <LinkAzul
                text="FEVEREIRO/2022"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/02-2022.pdf"
              />
              <LinkAzul
                text="MAIO/2022"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/05/MAIO-2022.pdf"
              />
              <LinkAzul
                text="JUNHO/2022"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/06/Ata-junho-2022.pdf"
              />
              <LinkAzul
                text="JULHO/2022"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/07/Ata.pdf"
              />
              <LinkAzul
                text="AGOSTO/2022"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/10/08-2022.pdf"
              />
              <LinkAzul
                text="OUTUBRO/2022"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/11/Ata-10-2022.pdf"
              />
              <LinkAzul
                text="NOVEMBRO/2022"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/12/Ata.pdf"
              />
              <LinkAzul
                text="DEZEMBRO/2022"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/12/Ata-19-12.pdf"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">2021</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="JANEIRO/2021"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/ATA-CMP-01-2021.pdf"
              />
              <LinkAzul
                text="FEVEREIRO/2021"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/ATA-CMP-02-2021.pdf"
              />
              <LinkAzul
                text="ABRIL/2021"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/ATA-CMP-04-2021.pdf"
              />
              <LinkAzul
                text="JUNHO/2021"
                href="https://aparecidaprev.go.gov.br/atas-conselho/ata-cmp-junho-2021/"
              />
              <LinkAzul
                text="JULHO/2021"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/ATA-CMP-JULHO-2021.pdf"
              />
              <LinkAzul
                text="AGOSTO/2021"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/ATA-CMP-AGOSTO-2021.pdf"
              />
              <LinkAzul
                text="SETEMBRO/2021"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/12/ATA-CMP-SETEMBRO-2021.pdf"
              />
              <LinkAzul
                text="OUTUBRO/2021"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/12/ATA-CMP-SETEMBRO-2021.pdf"
              />
              <LinkAzul
                text="NOVEMBRO/2021"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/12/ATA-CMP-NOVEMBRO-2021.pdf"
              />
              <LinkAzul
                text="DEZEMBRO/2021"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/230830063320.pdf"
              />
            </div>
          </div>

          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">2020</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="JANEIRO/2020"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/09/Image110920094741.pdf"
              />
              <LinkAzul
                text="AGOSTO/2020"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/09/Image110920094816.pdf"
              />
              <LinkAzul
                text="AGOSTO 2020 – 2ª Reunião"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/09/Image110920094849.pdf"
              />
              <LinkAzul
                text="SETEMBRO/2020"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/09/Image180920101419.pdf"
              />
              <LinkAzul
                text="OUTUBRO/2020 1ª Reunião"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/ATA-CMP-10-2020-1.pdf"
              />
              <LinkAzul
                text="OUTUBRO/2020"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/ATA-CMP-10-2020.pdf"
              />
              <LinkAzul
                text="NOVEMBRO/2020"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/Ata-Aprovacao-Politica-Investimentos.pdf"
              />
              <LinkAzul
                text="ATA CONSELHOS TOP FI"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/05/ATA-CONSELHOS-TOP-FI.pdf"
              />
            </div>
          </div>

          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">2019</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="JANEIRO/2019"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/01-2019.pdf"
              />
              <LinkAzul
                text="FEVEREIRO/2019"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/02-2019.pdf"
              />
              <LinkAzul
                text="MARÇO/2019"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/03-2019.pdf"
              />
              <LinkAzul
                text="MAIO/2019"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/ATA-CMP-07062019.pdf"
              />
              <LinkAzul
                text="JUNHO/2019"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/08/ATA-CMP-29072019.pdf"
              />
              <LinkAzul
                text="JULHO/2019"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/09/JULHO-2019.pdf"
              />
              <LinkAzul
                text="AGOSTO/2019"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/09/AGOSTO-2019.pdf"
              />
              <LinkAzul
                text="SETEMBRO/2019"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/11/SETEMBRO-2019.pdf"
              />
              <LinkAzul
                text="OUTUBRO/2019"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/11/OUTUBRO-2019.pdf"
              />
              <LinkAzul
                text="NOVEMBRO/2019"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/11/NOVEMBRO-2019.pdf"
              />
              <LinkAzul
                text="DEZEMBRO/2019"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2020/09/Image110920094707.pdf"
              />
            </div>
          </div>

          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">2018</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="JANEIRO/2018"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/01-2018.pdf"
              />
              <LinkAzul
                text="MARÇO/2018"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/03-2018.pdf"
              />
              <LinkAzul
                text="ABRIL/2018"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/04-2018.pdf"
              />
              <LinkAzul
                text="MAIO/2018"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/05-2018.pdf"
              />
              <LinkAzul
                text="AGOSTO/2018"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/09/Primeiro-semestre-e-07-2018.pdf"
              />
              <LinkAzul
                text="SETEMBRO/2018"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/09-2018.pdf"
              />
              <LinkAzul
                text="OUTUBRO/2018"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/10-2018.pdf"
              />
              <LinkAzul
                text="NOVEMBRO/2018"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/Ata-11-2018.pdf"
              />
              <LinkAzul
                text="DEZEMBRO/2018"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2019/04/12-2018.pdf"
              />
            </div>
          </div>

          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">2017</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="JANEIRO/2017 Aprovação"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/01-2017-Apova%C3%A7%C3%A3o.pdf"
              />
              <LinkAzul
                text="JANEIRO/2017 Resolução"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/01-2017-Resolu%C3%A7%C3%A3o.pdf"
              />
              <LinkAzul
                text="FEVEREIRO-2017"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/02-2017.pdf"
              />
              <LinkAzul
                text="MARÇO/2017"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/03-2017.pdf"
              />
              <LinkAzul
                text="ABRIL/2017"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/04-2017.pdf"
              />
              <LinkAzul
                text="MAIO/2017"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/05-2017.pdf"
              />
              <LinkAzul
                text="JUNHO/2017"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/06-2017.pdf"
              />
              <LinkAzul
                text="AGOSTO/2017"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/08-2017.pdf"
              />
              <LinkAzul
                text="SETEMBRO/2017"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/09-2017.pdf"
              />
              <LinkAzul
                text="OUTUBRO/2017"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/10-2017.pdf"
              />
              <LinkAzul
                text="DEZEMBRO/2017"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/12-2017-1.pdf"
              />
              <LinkAzul
                text="Resolução – Politíca de investimento"
                href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Resolu%C3%A7%C3%A3o-Polit%C3%ADca-de-investimento-1.pdf"
              />
            </div>
          </div>

          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">2016</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="JANEIRO/2016"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/01-2016.pdf"
              />
              <LinkAzul
                text="FEVEREIRO/2016"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/02-2016.pdf"
              />
              <LinkAzul
                text="MARÇO/2016"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/03-2016.pdf"
              />
              <LinkAzul
                text="ABRIL/2016"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/04-2016.pdf"
              />
              <LinkAzul
                text="MAIO/2016"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/05-2016.pdf"
              />
              <LinkAzul
                text="JUNHO/2016"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/06-2016.pdf"
              />
              <LinkAzul
                text="JULHO/2016"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/07-2016.pdf"
              />
              <LinkAzul
                text="AGOSTO/2016"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/08-2016.pdf"
              />
              <LinkAzul
                text="SETEMBRO/2016"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/09-2016.pdf"
              />
              <LinkAzul
                text="OUTUBRO/2016"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/10-2016.pdf"
              />
              <LinkAzul
                text="NOVEMBRO/2016"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/11-2016.pdf"
              />
              <LinkAzul
                text="DEZEMBRO/2016 – POLÍTICA DE INVESTIMENTO"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/12-2016-POL%C3%8DTICA-DE-INVESTIMENTO.pdf"
              />
              <LinkAzul
                text="RESOLUÇÃO 001-2016"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/RESOLU%C3%87%C3%83O-001-2016.pdf"
              />
            </div>
          </div>

          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">2015</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="JANEIRO/2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/02/01-2015.pdf"
              />
              <LinkAzul
                text="FEVEREIRO/2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/02-20151.pdf"
              />
              <LinkAzul
                text="MARÇO/2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/04/03-20151.pdf"
              />
              <LinkAzul
                text="ABRIL/2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/06/04-2015.pdf"
              />
              <LinkAzul
                text="MAIO/2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/06/05-20151.pdf"
              />
              <LinkAzul
                text="JUNHO/2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/07/06-2015.pdf"
              />
              <LinkAzul
                text="JULHO/2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/07-2015.pdf"
              />
              <LinkAzul
                text="AGOSTO/2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/08-2015.pdf"
              />
              <LinkAzul
                text="SETEMBRO/2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/09-2015.pdf"
              />
              <LinkAzul
                text="OUTUBRO/2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/10-2015.pdf"
              />
              <LinkAzul
                text="NOVEMBRO/2015"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/06/11-2015-Pol%C3%ADtica-de-Investimento.pdf"
              />
            </div>
          </div>

          <div className="flex flex-col w-3/4 md:w-1/4">
            <p className="font-bold uppercase pb-2">2014</p>
            <div className="pl-5 flex flex-col pb-3">
              <LinkAzul
                text="JANEIRO/2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Ata-31-01-2014.pdf"
              />
              <LinkAzul
                text="MARÇO/2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Ata-07-03-2014.pdf"
              />
              <LinkAzul
                text="ABRIL/2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Ata-11-04-2014.pdf"
              />
              <LinkAzul
                text="MAIO/2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Ata-30-05-2014.pdf"
              />
              <LinkAzul
                text="JUNHO/2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Ata-27-06-2014.pdf"
              />
              <LinkAzul
                text="JULHO/2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/07/Ata-25-07-2014.pdf"
              />
              <LinkAzul
                text="AGOSTO/2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/09/Ata-29-08-2014.pdf"
              />
              <LinkAzul
                text="SETEMBRO/2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Ata-09-2014.pdf"
              />
              <LinkAzul
                text="OUTUBRO/2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/11/Ata-10-2014.pdf"
              />
              <LinkAzul
                text="NOVEMBRO/2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Ata-NOVEMBRO-2014.pdf"
              />
              <LinkAzul
                text="DEZEMBRO/2014"
                href="https://aparecidaprev.go.gov.br//wp-content/uploads/2014/12/Ata-DEZEMBRO-2014.pdf"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
