import LinkAzul from "@/app/institucional/components/links";
import Container from "@/components/container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Local e data das reuniões do comitê/conselho",
  };
}

export default function Home() {
  return (
    <Container title="Local e data das reuniões do comitê/conselho">
      <div className="flex w-2/4 flex-col">
        <p className="pb-2 font-bold uppercase">CONSELHO PREVIDENCIÁRIO</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="LOCAL E DATA REUNIÕES DO CONSELHO PREVIDENCIÁRIO ANO 2024"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/LOCAL-E-DATA-DAS-REUNIOES-DO-CONSELHO-PREVIDENCIARIO-ANO-2024.pdf"
          />
          <LinkAzul
            text="LOCAL E DATA REUNIÕES DO CONSELHO PREVIDENCIÁRIO ANO 2023"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/02/Data-e-Local-Reuniao-Conselho-2023.pdf"
          />
          <LinkAzul
            text="LOCAL E DATA REUNIÕES DO CONSELHO PREVIDENCIÁRIO ANO 2022"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/01/LOCAL-E-DATA-REUNIOES-DO-CONELHO-ANO-2022.pdf"
          />
          <LinkAzul
            text="LOCAL E DATA REUNIÕES DO CONSELHO PREVIDENCIÁRIO ANO 2021"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/02/LOCAL-E-DATA-DAS-REUNIOES-DO-CONSELHO-PREVIDENCIARIO-ANO-2021.pdf"
          />
        </div>
      </div>

      <div className="flex w-2/4 flex-col">
        <p className="pb-2 font-bold uppercase">COMITÊ DE INVESTIMENTOS</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="LOCAL E DATA DAS REUNIÕES DO COMITÊ DE INVESTIMENTOS ANO 2024"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/LOCAL-E-DATA-DAS-REUNIOES-DO-COMITE-DE-INVESTIMENTOS-ANO-2024.pdf"
          />
          <LinkAzul
            text="LOCAL E DATA DAS REUNIÕES DO COMITÊ DE INVESTIMENTOS ANO 2023"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/LOCAL-E-DATA-DAS-REUNIOES-DO-COMITE-DE-INVESTIMENTOS-ANO-2023.pdf"
          />
        </div>
      </div>

      <div className="flex w-2/4 flex-col">
        <p className="pb-2 font-bold uppercase">CONSELHO FISCAL</p>
        <div className="flex flex-col pb-3 pl-5">
          <LinkAzul
            text="LOCAL E DATA DAS REUNIÕES DO CONSELHO FISCAL ANO 2024"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/LOCAL-E-DATA-DAS-REUNIOES-DO-CONSELHO-FISCAL-ANO-2024.pdf"
          />
          <LinkAzul
            text="LOCAL E DATA DAS REUNIÕES DO CONSELHO FISCAL ANO 2023"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/LOCAL-E-DATA-DAS-REUNIOES-DO-CONSELHO-FISCAL-ANO-2023.pdf"
          />
          <LinkAzul
            text="LOCAL E DATA DAS REUNIÕES DO CONSELHO FISCAL ANO 2022"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/LOCAL-E-DATA-DAS-REUNIOES-DO-CONSELHO-FISCAL-ANO-2022.pdf"
          />
        </div>
      </div>
    </Container>
  );
}
