import Container from "@/components/container";
import CardsFinanceiro from "../components/cards";
import { getQueryParams } from "../components/getQueryParams";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Balanço Financeiro",
  };
}

const links = [
  {
    title: "Balanço Financeiro 2024",
    postadoEm: "15 de fevereiro de 2024",
    descrição: "",
    href: "balanco-financeiro-2024",
  },
  {
    title: "Balanço Financeiro 2023",
    postadoEm: "5 de junho de 2023",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "balanco-financeiro-2023",
  },
  {
    title: "Balanço Financeiro 2022",
    postadoEm: "19 de abril de 2022",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "balanco-financeiro-2022",
  },
  {
    title: "Balanço Financeiro 2021",
    postadoEm: "24 de setembro de 2021",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "balanco-financeiro-2021",
  },
  {
    title: "Balanço Financeiro 2020",
    postadoEm: "3 de julho de 2020",
    descrição:
      "MÊS DE JANEIRO MÊS DE FEVEREIRO MÊS DE MARÇO MÊS DE ABRIL MÊS DE MAIO MÊS DE JUNHO MÊS DE JULHO MÊS DE AGOSTO MÊS DE SETEMBRO MÊS DE OUTUBRO MÊS DE NOVEMBRO MÊS DE DEZEMBRO",
    href: "balanco-financeiro-2020",
  },
  {
    title: "Balanço Financeiro 2019",
    postadoEm: "16 de agosto de 2019",
    descrição:
      "BALANÇO FINANCEIRO IPC 06 JANEIRO BALANÇO FINANCEIRO IPC 06 FEVEREIRO BALANÇO FINANCEIRO IPC 06 MARÇO BALANÇO FINANCEIRO IPC 06 ABRIL BALANÇO FINANCEIRO IPC 06 MAIO BALANÇO FINANCEIRO IPC 06 JUNHO BALANÇO FINANCEIRO IPC 06 JULHO BALANÇO FINANCEIRO IPC 06 AGOSTO BALANÇO FINANCEIRO IPC 06 SETEMBRO BALANÇO FINANCEIRO IPC 06 OUTUBRO BALANÇO FINANCEIRO IPC 06 NOVEMBRO… Read more »",
    href: "balanco-financeiro-2019",
  },
  {
    title: "Balanço Financeiro 2018",
    postadoEm: "12 de junho de 2018",
    descrição:
      "BALANÇO FINANCEIRO IPC06 JANEIRO BALANÇO FINANCEIRO IPC 06 FEVEREIRO BALANÇO FINANCEIRO IPC06 MARÇO BALANÇO FINANCEIRO IPC06 ABRIL BALANÇO FINANCEIRO IPCA06 MAIO BALANÇO FINANCEIRO IPC06 JUNHO BALANÇO FINANCEIRO IPC06 JULHO BALANÇO FINANCEIRO IPC06 AGOSTO BALANÇO FINANCEIRO IPC 06 SETEMBRO BALANÇO FINANCEIRO IPC 06 OUTUBRO BALANÇO FINANCEIRO IPC 06 NOVEMBRO BALANÇO FINANCEIRO IPC 06 DEZEMBRO",
    href: "balanco-financeiro-2018",
  },
  {
    title: "Balanço Financeiro 2017",
    postadoEm: "13 de junho de 2017",
    descrição:
      "Balanço Financeiro-IPC06 JANEIRO 2017 Balanço Financeiro-IPC06 FEVEREIRO 2017 Balanço Financeiro-IPC06 MARÇO 2017 BALANÇO FINANCEIRO IPC06 ABRIL 2017 BALANÇO FINANCEIRO IPC06 MAIO 2017 BALANÇO FINANCEIRO IPC06 JUNHO 2017 BALANÇO FINANCEIRO IPC06 JULHO 2017 BALANÇO FINANCEIRO IPC06 AGOSTO 2017 BALANÇO FINANCEIRO IPC06 SETEMBRO 2017 BALANÇO FINANCEIRO IPC06 OUTUBRO 2017 BALANÇO FINANCEIRO IPC06 NOVEMBRO 2017 BALANÇO FINANCEIRO IPC06… Read more »",
    href: "balanco-financeiro-2017",
  },
  {
    title: "Balanço Financeiro 2016",
    postadoEm: "17 de outubro de 2016",
    descrição:
      "Ipc06-Janeiro-2016 Ipc06-Fevereiro-2016 Ipc06-Marco-20 Ipc06-Abril-2016 Ipc06-Maio-2016 Ipc06-Junho-2016 Ipc06-Julho-2016 Ipc06-Agosto-2016 Ipc06-setembro-2016 Ipc06-outubro-2016 Ipc06-novembro-2016 Ipc06-Dezembro-2016",
    href: "balanco-financeiro-2016",
  },
  {
    title: "Balanço Financeiro 2015",
    postadoEm: "28 de agosto de 2015",
    descrição:
      "Balanço Financeiro JAN 2015 Balanço Financeiro FEV 2015 Balanço Financeiro MAR 2015 Balanço Financeiro ABR 2015 Balanço Financeiro MAIO 2015 Balanço Financeiro JUNHO 2015 Balanço Financeiro JULHO 2015 Balanço Financeiro AGOSTO 2015 Balanço Financeiro SETEMBRO 2015 Balanço Financeiro OUTUBRO 2015 Balanço Financeiro NOVEMBRO 2015 Balanço Financeiro DEZEMBRO 2015",
    href: "balanco-financeiro-2015",
  },
  {
    title: "Balanço Financeiro 2014",
    postadoEm: "6 de maio de 2014",
    descrição:
      "Balanço Financeiro DEZEMBRO 2014 Balanço Financeiro NOVEMBRO 2014 Balanço Financeiro OUTUBRO 2014 Balanço Financeiro SETEMBRO 2014 Balanço Financeiro AGOSTO 2014 Balanço Financeiro JULHO 2014 Balanço Financeiro JUNHO 2014 Balanço Financeiro MAIO 2014 Balanço Financeiro ABR 2014 Balanço Financeiro MAR 2014 Balanço Financeiro FEV 2014 Balanço Financeiro JAN 2014",
    href: "balanco-financeiro-2014",
  },
  {
    title: "Balanço Financeiro 2013",
    postadoEm: "4 de fevereiro de 2014",
    descrição: "",
    href: "balanco-financeiro-2013",
  },
];

export default function Home() {
  return (
    <Container title="Balanço financeiro" className="grid md:grid-cols-2">
      {links.map((link, i) => (
        <CardsFinanceiro
          key={i}
          title={link.title}
          postadoEm={link.postadoEm}
          descrição={link.descrição}
          href={link.href}
          path="balanco-financeiro"
          query={getQueryParams(link)}
        />
      ))}
    </Container>
  );
}
