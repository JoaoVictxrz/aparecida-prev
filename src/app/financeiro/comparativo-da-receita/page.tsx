import { Metadata } from "next";
import Container from "@/components/container";
import CardsFinanceiro from "../components/cards";
import { getQueryParams } from "../components/getQueryParams";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Comparativo da Receita",
  };
}

const links = [
  {
    title: "Comparativo da Receita 2024",
    postadoEm: "15 de fevereiro de 2024",
    descrição: "JANEIRO",
    href: "comparativo-da-receita-2024",
  },
  {
    title: "Comparativo da Receita 2023",
    postadoEm: "20 de junho de 2023",
    descrição:
      "JANEIRO  FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "comparativo-da-receita-2023",
  },
  {
    title: "Comparativo da Receita 2022",
    postadoEm: "19 de abril de 2022",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "comparativo-da-receita-2022",
  },
  {
    title: "Comparativo da Receita 2021",
    postadoEm: "24 de setembro de 2021",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "comparativo-da-receita-2021",
  },
  {
    title: "Comparativo da Receita 2020",
    postadoEm: "3 de julho de 2020",
    descrição:
      "MÊS DE JANEIRO MÊS DE FEVEREIRO MÊS DE MARÇO MÊS DE ABRIL MÊS DE MAIO MÊS DE JUNHO MÊS DE JULHO MÊS DE AGOSTO MÊS DE SETEMBRO MÊS DE OUTUBRO MÊS DE NOVEMBRO MÊS DE DEZEMBRO",
    href: "comparativo-da-receita-2020",
  },
  {
    title: "Comparativo da Receita 2019",
    postadoEm: "16 de agosto de 2019",
    descrição:
      "COMPARATIVO RECEITA JANEIRO COMPARATIVO RECEITA FEVEREIRO COMPARATIVO RECEITA MARÇO COMPARATIVO RECEITA ABRIL COMPARATIVO RECEITA MAIO COMPARATIVO RECEITA JUNHO COMPARATIVO RECEITA  JULHO COMPARATIVO RECEITA  AGOSTO COMPARATIVO RECEITA  SETEMBRO COMPARATIVO RECEITA OUTUBRO COMPARATIVO RECEITA NOVEMBRO COMPARATIVO DA RECEITA DEZEMBRO",
    href: "comparativo-da-receita-2019",
  },
  {
    title: "Comparativo da Receita 2018",
    postadoEm: "12 de junho de 2018",
    descrição:
      "COMPARATIVO DA RECEITA  JANEIRO COMPARATIVO DA RECEITA  FEVEREIRO COMPARATIVO DA RECEITA  MARÇO COMPARATIVO DA RECEITA  ABRIL COMPARATIVO DA RECEITA MAIO COMPARATIVO DA RECEITA  JUNHO COMPARATIVO DA RECEITA  JULHO COMPARATIVO DA RECEITA AGOSTO COMPARATIVO DA RECEITA SETEMBRO",
    href: "comparativo-da-receita-2018",
  },
  {
    title: "Comparativo da Receita 2017",
    postadoEm: "13 de junho de 2017",
    descrição:
      "Receita Orçamentária JANEIRO 2017 Receita Orçamentária FEVEREIRO 2017 Receita Orçamentária MARÇO 2017 RECEITA ORÇAMENTARIA ABRIL 2017 RECEITA ORÇAMENTARIA MAIO 2017 RECEITA ORÇAMENTARIA JUNHO 2017 RECEITA ORÇAMENTARIA JULHO 2017 RECEITA ORÇAMENTARIA AGOSTO 2017 RECEITA ORÇAMENTARIA SETEMBRO 2017 RECEITA ORÇAMENTARIA OUTUBRO 201 RECEITA ORÇAMENTARIA NOVEMBRO 2017 RECEITA ORÇAMENTARIA DEZEMBRO 2017",
    href: "comparativo-da-receita-2017",
  },
  {
    title: "Comparativo Receita 2016",
    postadoEm: "17 de outubro de 2016",
    descrição:
      "receita-orcamentaria-janeiro-2016 receita-orcamentaria-fevereiro-2016 receita-orcamentaria-marco-2016 receita-orcamentaria-abril-2016 receita-orcamentaria-maio-2016 receita-orcamentaria-junho-2016 receita-orcamentaria-julho-2016 receita-orcamentaria-agosto-2016 receita-orcamentaria-setembro-2016 receita-orcamentaria-outubro-2016 receita-orçamentaria-novembro-2016 receita-orçamentaria-dezembro-2016",
    href: "comparativo-receita-2016",
  },
  {
    title: "Receito Orçamentaria 2015",
    postadoEm: "16 de novembro de 2015",
    descrição:
      "Receita Orçamentária JAN 2015 Receita Orçamentária FEV 2015 Receita Orçamentária MAR 2015 Receita Orçamentária ABR 2015 Receita Orçamentária MAIO 2015 Receita Orçamentária JUNHO 2015 Receita Orçamentária JULHO 2015 Receita Orçamentária AGOSTO 2015 Receita Orçamentária SETEMBRO 2015 Receita Orçamentária OUTUBRO 2015 Receita Orçamentária NOVEMBRO 2015 Receita Orçamentária DEZEMBRO 2015",
    href: "receita-orcamentaria-2015",
  },
  {
    title: "Receita Orçamentaria 2014",
    postadoEm: "6 de maio de 2014",
    descrição:
      "Receita Orçamentária DEZEMBRO 2014 Receita Orçamentária NOVEMBRO 2014 Receita Orçamentária OUTUBRO 2014 Receita Orçamentária SETEMBRO 2014 Receita Orçamentária AGOSTO 2014 Receita Orçamentária JULHO 2014 Receita Orçamentária JUNHO 2014 Receita Orçamentária MAIO 2014 Receita Orçamentária ABR 2014 Receita Orçamentária MAR 2014 Receita Orçamentária FEV 2014 Receita Orçamentária JAN 2014",
    href: "receita-orcamentaria-2014",
  },
  {
    title: "Comparativo da Receita 2013",
    postadoEm: "4 de fevereiro de 2014",
    href: "comparativo-da-receita-2013",
  },
];

export default function Home() {
  return (
    <Container title="Comparativo da Receita" className="grid md:grid-cols-2">
      {links.map((link, i) => (
        <CardsFinanceiro
          key={i}
          title={link.title}
          postadoEm={link.postadoEm}
          descrição={link.descrição}
          href={link.href}
          path="comparativo-da-receita"
          query={getQueryParams(link)}
        />
      ))}
    </Container>
  );
}
