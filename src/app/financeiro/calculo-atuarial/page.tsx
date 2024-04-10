import Container from "@/components/container";
import { getQueryParams } from "../components/getQueryParams";
import CardsFinanceiro from "../components/cards";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Calculo Atuarial",
  };
}

const links = [
  {
    title: "Avaliação Atuarial 2023",
    postadoEm: "25 de julho de 2023",
    descrição:
      "Carta Resumo e Envio Avaliação Relatório Atuarial Carta Juros Meta Atuarial Decreto ”N” n° 667, de 23 de outubro de 2023 – Alíquotas de contribuição previdenciária",
    href: "avaliacao-atuarial-2023",
  },
  {
    title: "GESTÃO ATUARIAL",
    postadoEm: "30 de maio de 2023",
    descrição: "RELATÓRIO DE GESTÃO ATUARIAL 2019 A 2023",
    href: "gestao-atuarial",
  },
  {
    title: "Avaliação Atuarial 2022",
    postadoEm: "19 de abril de 2022",
    descrição:
      "Carta Resumo e envio Avaliação Relatório Atuarial Carta Juros Meta Atuarial Formulação – Nota Técnica Atuarial",
    href: "avaliacao-atuarial-2022",
  },
  {
    title: "Avaliação Atuarial 2021",
    postadoEm: "27 de dezembro de 2021",
    descrição:
      "Demonstrativo do Resultado da Avaliação 2021 Carta Resumo da Avaliação 2021 Relatório  Atuarial 2021 Carta Juros Meta Atuarial",
    href: "avaliacao-atuarial-2021",
  },
  {
    title: "Avaliação Atuarial 2020",
    postadoEm: "21 de maio de 2021",
    descrição:
      "Calculo Atuarial 2020 Carta Resumo Avaliação Lei 180 Aumento Aliquota DRAA 2020",
    href: "avaliacao-atuarial-2020",
  },
  {
    title: "Avaliação Atuarial 2019",
    postadoEm: "7 de outubro de 2019",
    descrição:
      "Calculo Atuarial 2019 Carta Resumo Avaliação Decreto 376 Alíquota Contribuição 2019",
    href: "avaliacao-atuarial-2019",
  },
  {
    title: "Avaliação Atuarial 2018",
    postadoEm: "22 de agosto de 2018",
    descrição: "Calculo Atuarial 2018 Nota Técnica Avaliação",
    href: "avaliacao-atuarial-2018",
  },
  {
    title: "Avaliação Atuarial 2017",
    postadoEm: "22 de agosto de 2018",
    descrição: "Relatorio Atuarial 2017 Nota Técnica Atuarial – 2017",
    href: "avaliacao-atuarial-2017",
  },
  {
    title: "Avaliação Atuarial 2016",
    postadoEm: "18 de outubro de 2016",
    descrição: "Resumo Avaliacao Atuarial Nota Tecnica Atuarial",
    href: "avaliacao-atuarial-2016",
  },
  {
    title: "Avaliação Atuarial 2015",
    postadoEm: "18 de outubro de 2016",
    descrição: "Avaliacao-atuarial Nota Tecnica Atuarial",
    href: "avaliacao-atuarial-2015",
  },
  {
    title: "AVALIAÇÃO ATUARIAL 2014",
    postadoEm: "21 de julho de 2014",
    descrição: "Relatorio de Reavaliação Atuarial 2014 Nota Técnica 2014",
    href: "avaliacao-atuarial-2014",
  },
];

export default function Home() {
  return (
    <Container title="Calculo Atuarial" className="grid md:grid-cols-2">
      {links.map((link, i) => (
        <CardsFinanceiro
          key={i}
          title={link.title}
          postadoEm={link.postadoEm}
          descrição={link.descrição}
          href={link.href}
          path="calculo-atuarial"
          query={getQueryParams(link)}
        />
      ))}
    </Container>
  );
}
