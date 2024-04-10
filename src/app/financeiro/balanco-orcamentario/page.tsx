import { Metadata } from "next";
import Container from "@/components/container";
import CardsFinanceiro from "../components/cards";
import { getQueryParams } from "../components/getQueryParams";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Balanço Orçamentário",
  };
}

const links = [
  {
    title: "Balanço Orçamentário 2024",
    postadoEm: "15 de fevereiro de 2024",
    descrição: "JANEIRO",
    href: "balanco-orcamentario-2024",
  },
  {
    title: "Balanço Orçamentário 2023",
    postadoEm: "5 de junho de 2023",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "balanco-orcamentario-2023",
  },
  {
    title: "Balanço Orçamentário 2022",
    postadoEm: "19 de abril de 2022",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "balanco-orcamentario-2022",
  },
  {
    title: "Balanço Orçamentário 2021",
    postadoEm: "24 de setembro de 2021",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "balanco-orcamentario-2021",
  },
  {
    title: "Balanço Orçamentário 2020",
    postadoEm: "3 de julho de 2020",
    descrição:
      "MÊS DE JANEIRO MÊS DE FEVEREIRO MÊS DE MARÇO MÊS DE ABRIL MÊS DE MAIO MÊS DE JUNHO MÊS DE JULHO MÊS DE AGOSTO MÊS DE SETEMBRO MÊS DE OUTUBRO MÊS DE NOVEMBRO MÊS DE DEZEMBRO",
    href: "balanco-orcamentario-2020",
  },
  {
    title: "Balanço Orçamentário 2019",
    postadoEm: "16 de agosto de 2019",
    descrição:
      "BALANÇO ORÇAMENTÁRIO IPC 07 JANEIRO BALANÇO ORÇAMENTÁRIO IPC 07  FEVEREIRO BALANÇO ORÇAMENTÁRIO IPC 07 MARÇO BALANÇO ORÇAMENTÁRIO IPC 07 ABRIL BALANÇO ORÇAMENTÁRIO IPC 07 MAIO BALANÇO ORÇAMENTÁRIO IPC 07 JUNHO BALANÇO ORÇAMENTÁRIO IPC 07 JULHO BALANÇO ORÇAMENTÁRIO IPC 07 AGOSTO BALANÇO ORÇAMENTÁRIO IPC 07 SETEMBRO BALANÇO ORÇAMENTÁRIO IPC 07 OUTUBRO BALANÇO ORÇAMENTÁRIO IPC 07 NOVEMBRO",
    href: "balanco-orcamentario-2019",
  },
  {
    title: "Balanço Orçamentário 2018",
    postadoEm: "12 de junho de 2018",
    descrição:
      "BALANÇO ORÇAMENTARIO IPC 07 JANEIRO BALANÇO ORÇAMENTARIO IPC07 FEVEREIRO BALANÇO ORÇAMENTARIO IPC07 MARÇO BALANÇO ORCAMENTARIO IPC07 ABRIL BALANÇO ORÇAMENTARIO IPC07 MAIO BALANÇO ORÇAMENTARIO IPC07 JUNHO BALANÇO ORÇAMENTÁRIO IPC07 JULHO BALANÇO ORÇAMENTÁRIO IPC07 AGOSTO BALANÇO ORÇAMENTARIO IPC07 SETEMBRO",
    href: "balanco-orcamentario-2018",
  },
  {
    title: "Balanço Orçamentário 2017",
    postadoEm: "13 de junho de 2017",
    descrição:
      "Balanço Orçamentário-IPC07 JANEIRO 2017 Balanço Orçamentario-IPC07 FEVEREIRO 2017 Balanço Orçamentario-IPC07 MARÇO 2017 BALANÇO ORÇAMENTÁRIO IPC07 ABRIL 2017 BALANÇO ORÇAMENTÁRIO IPC07 MAIO 2017 BALANÇO ORÇAMENTÁRIO IPC07 JUNHO 2017 BALANÇO ORÇAMENTÁRIO IPC07 JULHO 2017 BALANÇO ORÇAMENTÁRIO IPC07 AGOSTO 2017 BALANÇO ORÇAMENTÁRIO IPC07 SETEMBRO 2017 BALANÇO ORÇAMENTÁRIO IPC07 OUTUBRO 2017 BALANÇO ORÇAMENTÁRIO IPC07 NOVEMBRO 2017 BALANÇO ORÇAMENTÁRIO IPC07 DEZEMBRO 2017",

    href: "balanco-orcamentario-2017",
  },
  {
    title: "Balanço Orçamentário 2016",
    postadoEm: "17 de outubro de 2016",
    descrição:
      "balanco-orcamentario-ipc07-janeiro-2016 balanco-orcamentario-ipc07-fevereiro-2016 balanco-orcamentario-ipc07-marco-2016 balanco-orcamentario-ipc07-abril-2016 balanco-orcamentario-ipc07-maio-2016 balanco-orcamentario-ipc07-junho-2016 balanco-orcamentario-ipc07-julho-2016 balanco-orcamentario-ipc07-agosto-2016 balanco-orcamentario-ipc07-setembro-2016 balanco-orcamentario-ipc07-outubro-2016 balanço orçamentario-ipc07-novembro-2016 balanço orçamentario-ipc07-dezembro-2016",
    href: "balanco-orcamentario-2016",
  },
  {
    title: "Balanço Orçamentario 2015",
    postadoEm: "28 de agosto de 2015",
    descrição:
      "Balanço Orçamentário JAN 2015 Balanço Orçamentario FEV 2015 Balanço Orçamentario MAR 2015 Balanço Orçamentario ABR 2015 Balanço Orçamentario MAIO 2015 Balanço Orçamentario JUNHO 2015 Balanço Orçamentario JULHO 2015 Balanço Orçamentario AGOSTO 2015 Balanço Orçamentario SETEMBRO 2015 Balanço Orçamentario OUTUBRO 2015 Balanço Orçamentario NOVEMBRO 2015 Balanço Orçamentario DEZEMBRO 2015",
    href: "balanco-orcamentario-2015",
  },
  {
    title: "Balanço Orçamentário 2014",
    postadoEm: "6 de maio de 2014",
    descrição:
      "Balanço Orçamentario DEZEMBRO 2014 Balanço Orçamentario NOVEMBRO 2014 Balanço Orçamentario OUTUBRO 2014 Balanço Orçamentario SETEMBRO 2014 Balanço Orçamentário AGOSTO 2014 Balanço Orçamentário JULHO 2014 Balanço Orçamentário JUNHO 2014 Balanço Orçamentário MAIO 2014 Balanço Orçamentário ABR 2014 Balanço Orçamentário MAR 2014 Balanço Orçamentário FEV 2014 Balanço Orçamentário JAN 2014",
    href: "balanco-orcamentario-2014",
  },
  {
    title: "Balanço Orçamentário 2013",
    postadoEm: "4 de fevereiro de 2014",
    descrição: "[wpfilebase tag=file id=2 /]",
    href: "balanco-orcamentario-2013",
  },
];

export default function Home() {
  return (
    <Container title="Balanço Orçamentário" className="grid md:grid-cols-2">
      {links.map((link, i) => (
        <CardsFinanceiro
          key={i}
          title={link.title}
          postadoEm={link.postadoEm}
          descrição={link.descrição}
          href={link.href}
          path="balanco-orcamentario"
          query={getQueryParams(link)}
        />
      ))}
    </Container>
  );
}
