"use client";
import LinkAzul from "@/app/institucional/components/links";
import Container from "@/components/container";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState<PostsProps | null>(null);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get<PostsProps>("/pages/1822");
      setData(response.data);
    } catch (error) {
      console.log("erro ao buscar dados: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container title={data?.title.rendered!}>
      <Div title="COMITÊ DE INVESTIMENTOS">
        <LinkAzul
          text="Decreto 112-2015"
          href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/07/Decreto-112-2015.pdf"
        />
        <LinkAzul
          text="Decreto 39-2015"
          href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/07/Decreto-39-2015.pdf"
        />
        <LinkAzul
          text="Decreto 314-2015"
          href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/07/Decreto-314-2015.pdf"
        />
        <LinkAzul
          text="Decreto 52 – 2017"
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/08/Decreto-Comit%C3%AA.pdf"
        />
        <LinkAzul
          text="Decreto 389 – 2022"
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/09/Decreto-389-Comite-de-Investimentos.pdf"
        />
        <LinkAzul
          text="Decreto 183 – 2023"
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Decreto-n%C2%B0-183-Comite-de-Investimento.pdf"
        />
      </Div>

      <Div title="CONSELHO DELIBERATIVO">
        <LinkAzul
          text="Decreto 55 -2015"
          href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/07/Decreto-CMP.pdf"
        />
        <LinkAzul
          text="Decreto 25-2016 Recondução"
          href="https://aparecidaprev.go.gov.br//wp-content/uploads/2015/07/Decreto-n-n%C2%B0-25-2016-CMP.pdf"
        />
        <LinkAzul
          text="Decreto 108 – 2017"
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Decreto-108-C.-Previdenciario.pdf"
        />
        <LinkAzul
          text="Decreto 54-2017"
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Decreto-n-54.pdf"
        />
        <LinkAzul
          text="Decreto 198-2019"
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/DECRETO-N-No-198-DE-31-DE-MAIO-DE-2019.pdf"
        />
        <LinkAzul
          text="Decreto 348-2021"
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/09/DECRETO-N-N%C2%B0-348-DE-10-DE-AGOSTO-DE-2021.pdf"
        />
        <LinkAzul
          text="Decreto 226 – 2022"
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/09/Decreto-226-Conselho-Previdencia.pdf"
        />
        <LinkAzul
          text="Decreto 379 – 2022"
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/09/Decreto-379-Conselho-Previdencia.pdf"
        />
        <LinkAzul
          text="Decreto 530 – 2022"
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/09/Decreto-530-Conselho-Previdencia.pdf"
        />
        <LinkAzul
          text="Decreto 413 -2023"
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Decreto-413-Conselho-deliberativo.pdf"
        />
      </Div>

      <Div title="CONSELHO FISCAL">
        <LinkAzul
          text="Decreto 109 – 2017"
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Decreto-109-C.-Fiscal.pdf"
        />
        <LinkAzul
          text="Decreto 529 – 2022"
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2022/09/Decreto-529-Conselho-Fiscal.pdf"
        />
      </Div>
    </Container>
  );
}

const Div = ({
  children,
  title,
}: {
  children?: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex flex-col">
      <p className="pb-2 font-bold uppercase">{title}</p>
      <div className="flex w-3/4 flex-col pb-3 pl-5 lg:w-1/4">{children}</div>
    </div>
  );
};
