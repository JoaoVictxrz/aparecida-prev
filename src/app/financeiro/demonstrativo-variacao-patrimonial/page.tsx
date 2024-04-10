import Container from "@/components/container";
import CardsFinanceiro from "../components/cards";
import { Metadata } from "next";
import { getQueryParams } from "../components/getQueryParams";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Demonstrativo Variação Patrimonial ",
  };
}

const links = [
  {
    title: "Demonstrativo da Variação Patrimonial 2024",
    postadoEm: "15 de fevereiro de 2024",
    descrição: "",
    href: "demonstrativo-da-variacao-patrimonial-2024",
  },
  {
    title: "Demonstrativo da Variação Patrimonial 2023",
    postadoEm: "5 de junho de 2023",
    descrição: "",
    href: "demonstrativo-da-variacao-patrimonial-2023",
  },
  {
    title: "Demonstrativo da Variação Patrimonial 2022",
    postadoEm: "19 de abril de 2022",
    descrição: "",
    href: "demonstrativo-da-variacao-patrimonial-2022",
  },
  {
    title: "Demonstrativo da Variação Patrimonial 2021",
    postadoEm: "24 de setembro de 2021",
    descrição: "",
    href: "demonstrativo-da-variacao-patrimonial-2021",
  },
  {
    title: "Demonstrativo da Variação Patrimonial 2020",
    postadoEm: "3 de julho de 2020",
    descrição: "",
    href: "demonstrativo-da-variacao-patrimonial-2020",
  },
  {
    title: "Demonstrativo da Variação Patrimonial 2019",
    postadoEm: "16 de agosto de 2019",
    descrição: "",
    href: "demonstrativo-da-variacao-patrimonial-2019",
  },
  {
    title: "Demonstrativo da Variação Patrimonial 2018",
    postadoEm: "12 de junho de 2018",
    descrição: "",
    href: "demonstrativo-da-variacao-patrimonial-2018",
  },
  {
    title: "Demonstrativo da Variação Patrimonial 2017",
    postadoEm: "13 de junho de 2017",
    descrição: "",
    href: "demonstrativo-da-variacao-patrimonial-2017",
  },
  {
    title: "Demonstrativo Variação Patrimonial 2016",
    postadoEm: "17 de outubro de 2016",
    descrição: "",
    href: "demonstrativo-variacao-patrimonial-2016",
  },
  {
    title: "Variação Patrimonial 2015",
    postadoEm: "28 de agosto de 2015",
    descrição: "",
    href: "variacao-patrimonial-2015",
  },
  {
    title: "Variação Patrimonial 2014",
    postadoEm: "6 de maio de 2014",
    descrição: "",
    href: "variacao-patrimonial-2014",
  },
  {
    title: "Demonstrativo das Variações Patrimoniais 2013",
    postadoEm: "4 de fevereiro de 2014",
    descrição: "",
    href: "demonstrativo-das-variacoes-patrimoniais-2013",
  },
];

export default function Home() {
  return (
    <Container
      title="Demonstrativo Variação Patrimonial "
      className="grid md:grid-cols-2"
    >
      {links.map((link, i) => (
        <CardsFinanceiro
          key={i}
          title={link.title}
          postadoEm={link.postadoEm}
          descrição={link.descrição}
          href={link.href}
          path="demonstrativo-variacao-patrimonial"
          query={getQueryParams(link)}
        />
      ))}
    </Container>
  );
}
