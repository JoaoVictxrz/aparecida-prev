import { Metadata } from "next";
import Container from "@/components/container";
import LinkAzul from "@/app/institucional/components/links";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Situação financeira AparecidaPrev",
  };
}

const meses2023 = [
  {
    mês: "Janeiro 2023",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/Demonstrativo-Financeiro-Janeiro-2023-Corrigido.pdf",
  },
  {
    mês: "Fevereiro 2023",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/Demonstrativo-Financeiro-Fevereiro-2023-Corrigido.pdf",
  },
  {
    mês: "Março 2023",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/Demonstrativo-Financeiro-Marco-2023.pdf",
  },
  {
    mês: "Abril 2023",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/06/Demonstrativo-Financeiro-Abril-2023.pdf",
  },
  {
    mês: "Maio 2023",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Demonstrativo-Financeiro-Maio-2023.pdf",
  },
  {
    mês: "Junho 2023",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Demonstrativo-Financeiro-Junho-2023.pdf",
  },
  {
    mês: "Julho 2023",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/03/Demonstrativo-Financeiro-Julho-2023.pdf",
  },
  {
    mês: "Agosto 2023",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/SITUACAO-FINANCEIRA-08_2023.pdf",
  },
  {
    mês: "Setembro 2023",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/11/Setembro.pdf",
  },
  {
    mês: "Outubro 2023",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/03/Demonstrativo-Financeiro-Outubro-2023-1.pdf",
  },
  {
    mês: "Novembro 2023",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/Demonstrativo-Financeiro-Novembro-2023.pdf",
  },
  {
    mês: "Dezembro 2023",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/Demonstrativo-Financeiro-Dezembro-2023-Final.pdf",
  },
];
const meses2023Invertido = meses2023.reverse();
const anosFinanceiros = [
  {
    ano: "Financeiro 2022",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/Gestao-2017-a-2022.pdf",
  },
  {
    ano: "Financeiro 2021",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2022/04/Gestao-2017-a-2021.pdf",
  },
  {
    ano: "Financeiro 2020",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2021/02/Demonstrativo-Financeiro-Janeiro-a-Dezembro-2020.pdf",
  },
  {
    ano: "Financeiro 2019",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2020/03/Demonstrativo-Financeiro-Dezembro-2019-CF.pdf",
  },
  {
    ano: "Financeiro 2018",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Demonstrativo-Financeiro-DEZ-2018.pdf",
  },
  {
    ano: "Financeiro 2017",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Site-DEZ-2017.pdf",
  },
  {
    ano: "Financeiro 2016",
    link: "https://aparecidaprev.go.gov.br/wp-content/uploads/2018/06/Site-Dez-2016.pdf",
  },
  {
    ano: "Financeiro 2015",
    link: "https://aparecidaprev.go.gov.br//wp-content/uploads/2013/10/financeiro2016.pdf",
  },
  {
    ano: "Financeiro 2014",
    link: "https://aparecidaprev.go.gov.br//wp-content/uploads/2015/01/DEZEMBRO_2014.pdf",
  },
  {
    ano: "Financeiro 2013",
    link: "https://aparecidaprev.go.gov.br//wp-content/uploads/2013/10/Financeiro2013.pdf",
  },
  {
    ano: "Financeiro 2012",
    link: "https://aparecidaprev.go.gov.br//wp-content/uploads/2013/10/Financeiro2012.pdf",
  },
  {
    ano: "Financeiro 2011",
    link: "https://aparecidaprev.go.gov.br//wp-content/uploads/2013/10/Financeiro2011.pdf",
  },
  {
    ano: "Financeiro 2010",
    link: "https://aparecidaprev.go.gov.br//wp-content/uploads/2013/10/Financeiro2010.pdf",
  },
  {
    ano: "Financeiro 2009",
    link: "https://aparecidaprev.go.gov.br//wp-content/uploads/2013/10/Financeiro2009.pdf",
  },
];

export default function Home() {
  return (
    <Container title="SITUAÇÃO FINANCEIRA DO APARECIDAPREV">
      <Card title="ano de 2024">
        <LinkAzul
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/03/Demonstrativo-Financeiro-Janeiro-2024a.pdf"
          text=" Janeiro 2024"
        />
      </Card>
      <Card title="ano de 2023">
        {meses2023Invertido.map((mes) => (
          <div key={mes.mês} className="flex fle-col pb-1">
            <LinkAzul href={mes.link} text={mes.mês} />
          </div>
        ))}
      </Card>
      <Card title="anos anteriores">
        {anosFinanceiros.map((ano) => (
          <div key={ano.ano} className="flex fle-col pb-1">
            <LinkAzul href={ano.link} text={ano.ano} />
          </div>
        ))}
      </Card>
    </Container>
  );
}

const Card = ({
  title,
  children,
  className,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`${className} py-3 border-b-[1px] dark:border-zinc-800`}>
      <p className="text-lg font-semibold uppercase">{title}</p>
      <div>{children}</div>
    </div>
  );
};
