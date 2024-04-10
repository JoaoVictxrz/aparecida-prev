import { Metadata } from "next";
import Container from "@/components/container";
import CardsFinanceiro from "../components/cards";
import { getQueryParams } from "../components/getQueryParams";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Comparativo de despesa",
  };
}

const links = [
  {
    title: "Comparativo da Despesa 2024",
    postadoEm: "15 de fevereiro de 2024",
    descrição: "JANEIRO",
    href: "comparativo-da-despesa-2024",
  },
  {
    title: "Comparativo da Despesa 2023",
    postadoEm: "5 de junho de 2023",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "comparativo-da-despesa-2023",
  },
  {
    title: "Comparativo da Despesa 2022",
    postadoEm: "19 de abril de 2022",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "comparativo-da-despesa-2022",
  },
  {
    title: "Comparativo da Despesa 2021",
    postadoEm: "24 de setembro de 2021",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "comparativo-da-despesa-2021",
  },
  {
    title: "Comparativo da Despesa 2020",
    postadoEm: "3 de julho de 2020",
    descrição:
      "MÊS DE JANEIRO MÊS DE FEVEREIRO MÊS DE MARÇO MÊS DE ABRIL MÊS DE MAIO MÊS DE JUNHO MÊS DE JULHO MÊS DE AGOSTO MÊS DE SETEMBRO MÊS DE OUTUBRO MÊS DE NOVEMBRO MÊS DE DEZEMBRO",
    href: "comparativo-da-despesa-2020",
  },
  {
    title: "Comparativo da Despesa 2019",
    postadoEm: "16 de agosto de 2019",
    descrição:
      "COMPARATIVO DESPESA JANEIRO COMPARATIVO DESPESA FEVEREIRO COMPARATIVO DESPESA MARÇO COMPARATIVO DESPESA ABRIL COMPARATIVO DESPESA MAIO COMPARATIVO DESPESA JUNHO COMPARATIVO DESPESA JULHO COMPARATIVO DESPESA AGOSTO COMPARATIVO DESPESA  SETEMBRO COMPARATIVO DESPESA OUTUBRO COMPARATIVO DESPESA NOVEMBRO COMPARATIVO DESPESA DEZEMBRO",
    href: "comparativo-da-despesa-2019",
  },
  {
    title: "Comparativo da Despesa 2018",
    postadoEm: "12 de junho de 2018",
    descrição:
      "COMPARATIVO DA DESPESA FIXADA JANEIRO COMPARATIVO DA DESPESA FEVEREIRO COMPARATIVO DE DESPESA FIXADA MARÇO COMPARATIVO DE DESPESAS FIXADA ABRIL COMPARATVO DE DESPESAS FIXADA MAIO COMPARATIVO DE DESPESAS FIXADA  JUNHO COMPARATIVO DA DESPESA FIXADA  JULHO COMPARATIVO DAS DESPESAS FIXADA  AGOSTO COMPARATIVO DAS DESPESA FIXADA SETEMBRO",
    href: "comparativo-da-despesa-2018",
  },
  {
    title: "Comparativo da Despesa 2017",
    postadoEm: "13 de junho de 2017",
    descrição:
      "Despesa Orçamentária JANEIRO 2017 Despesa Orçamentária FEVEREIRO 2017 Despesa Orçamentária MARÇO 2017 DESPESA ORÇAMENTARIA ABRIL 2017 DESPESA ORÇAMENTARIA MAIO 2017 DESPESA ORÇAMENTARIA JUNHO 2017 DESPESA ORÇAMENTARIA JULHO 2017 DESPESA ORÇAMENTARIA AGOSTO 2017 DESPESA ORÇAMENTARIA SETEMBRO 2017 DESPESA ORÇAMENTARIA OUTUBRO 2017 DESPESA ORÇAMENTARIA NOVEMBRO 2017",
    href: "comparativo-da-despesa-2017",
  },
  {
    title: "Comparativo Despesa 2016",
    postadoEm: "17 de outubro de 2016",
    descrição:
      "despesa-orcamentaria-janeiro-2016 despesa-orcamentaria-fevereiro-2016 despesa-orcamentaria-marco-2016 despesa-orcamentaria-abril-2016 despesa-orcamentaria-maio-2016 despesa-orcamentaria-junho-2016 despesa-orcamentaria-julho-2016 despesa-orcamentaria-agosto-2016 despesa-orcamentaria-setembro-2016 despesa-orcamentaria-outubro-2016 despesa-orçamentaria-novembro-2016 despesa-orçamentaria-dezembro-2016",
    href: "comparativo-despesa-2016",
  },
  {
    title: "Despesa Orçamentaria 2015",
    postadoEm: "16 de novembro de 2015",
    descrição:
      "Despesa Orçamentária JAN 2015 Despesa Orçamentária FEV 2015 Despesa Orçamentária MAR 2015 Despesa Orçamentária ABR 2015 Despesa Orçamentária MAIO 2015 Despesa Orçamentária JUNHO 2015 Despesa Orçamentária JULHO 2015 Despesa Orçamentária AGOSTO 2015 Despesa Orçamentária SETEMBRO 2015 Despesa Orçamentária OUTUBRO 2015 Despesa Orçamentária NOVEMBRO 2015 Despesa Orçamentária DEZEMBRO 2015",
    href: "despesa-orcamentaria-2015",
  },
  {
    title: "Despesa Orçamentaria 2014",
    postadoEm: "6 de maio de 2014",
    descrição: "",
    href: "despesa-orcamentaria-2014",
  },
  {
    title: "Despesa Orçamentaria 2013",
    postadoEm: "4 de fevereiro de 2014",
    descrição: "",
    href: "despesa-orcamentaria-2013",
  },
];

export default function Home() {
  return (
    <Container title="Comparativo da Despesa" className="grid md:grid-cols-2">
      {links.map((link, i) => (
        <CardsFinanceiro
          key={i}
          title={link.title}
          postadoEm={link.postadoEm}
          descrição={link.descrição}
          href={link.href}
          path="comparativo-da-despesa"
          query={getQueryParams(link)}
        />
      ))}
    </Container>
  );
}
