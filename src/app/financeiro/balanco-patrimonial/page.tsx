import Container from "@/components/container";
import CardsFinanceiro from "../components/cards";
import { getQueryParams } from "../components/getQueryParams";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Balanço patrimonial",
  };
}

const links = [
  {
    title: "Balanço Patrimonial 2024",
    postadoEm: "15 de fevereiro de 2024",
    descrição: "JANEIRO",
    href: "balanco-patrimonial-2024",
  },
  {
    title: "Balanço Patrimonial 2023",
    postadoEm: "5 de junho de 2023",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "balanco-patrimonial-2023",
  },
  {
    title: "Balanço Patrimonial 2022",
    postadoEm: "19 de abril de 2022",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "balanco-patrimonial-2022",
  },
  {
    title: "Balanço Patrimonial 2021",
    postadoEm: "24 de setembro de 2021",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "balanco-patrimonial-2021",
  },
  {
    title: "Balanço Patrimonial 2020",
    postadoEm: "3 de julho de 2020",
    descrição:
      "MÊS DE JANEIRO MÊS DE FEVEREIRO MÊS DE MARÇO MÊS DE ABRIL MÊS DE MAIO MÊS DE JUNHO MÊS DE JULHO MÊS DE AGOSTO MÊS DE SETEMBRO MÊS DE OUTUBRO MÊS DE NOVEMBRO MÊS DE DEZEMBRO",
    href: "balanco-patrimonial-2020",
  },
  {
    title: "Balanço Patrimonial 2019",
    postadoEm: "16 de agosto de 2019",
    descrição:
      "BALANÇO PATRIMONIAL IPC 04 JANEIRO BALANÇO PATRIMONIAL IPC 04 FEVEREIRO BALANÇO PATRIMONIAL IPC 04 MARÇO BALANÇO PATRIMONIAL IPC 04 ABRIL BALANÇO PATRIMONIAL IPC 04 MAIO BALANÇO PATRIMONIAL IPC 04 JUNHO BALANÇO PATRIMONIAL IPC 04 JULHO BALANÇO PATRIMONIAL IPC 04 AGOSTO BALANÇO PATRIMONIAL IPC 04 SETEMBRO BALANÇO PATRIMONIAL IPC 04 OUTUBRO BALANÇO PATRIMONIAL IPC 04 NOVEMBRO BALANÇO PATRIMONIAL IPC… Read more »",
    href: "balanco-patrimonial-2019",
  },
  {
    title: "Balanço Patrimonial 2018",
    postadoEm: "12 de junho de 2018",
    descrição:
      "BALANÇO PATRIMONIAL IPC 04 JANEIRO BALANÇO PATRIMONIAL IPC04 FEVEREIRO BALANÇO PATRIMONIAL IPC04 MARÇO BALANÇO PATRIMONIAL IPC04 ABRIL BALANÇO PATRIMONIAL IPC04 MAIO BALANÇO PATRIMONIAL IPC04 JUNHO BALANÇO PATRIMONIAL IPC04 JULHO BALANÇO PATRIMONIAL IPC04 AGOSTO BALANÇO PATRIMONIAL IPC04 SETEMBRO",
    href: "balanco-patrimonial-2018",
  },
  {
    title: "Balanço Patrimonial 2017",
    postadoEm: "13 de junho de 2017",
    descrição:
      "Balanço Patrimonial-IPC04 JANEIRO 2017 Balanço Patrimonial-IPC04 FEVEREIRO 2017 Balanço Patrimonial-IPC04 MARÇO 2017 BALANÇO PATRIMONIAL IPC04 MAIO 2017 BALANÇO PATRIMONIAL IPC04 JUNHO 2017 BALANÇO PATRIMONIAL IPC04 JULHO 2017 BALANÇO PATRIMONIAL IPC04 AGOSTO 2017 BALANÇO PATRIMONIAL IPC04 SETEMBRO 2017 BALANÇO PATRIMONIAL IPC04 OUTUBRO 2017 BALANÇO PATRIMONIAL IPC04 NOVEMBRO 2017 BALANÇO PATRIMONIAL IPC04 DEZEMBRO 2017",
    href: "balanco-patrimonial-2017",
  },
  {
    title: "Balanço Patrimonial 2016",
    postadoEm: "17 de outubro de 2016",
    descrição:
      "balanco-patrimonial-ipc04-janeiro-2016 balanco-patrimonial-ipc04-fevereiro-2016 balanco-patrimonial-ipc04-marco-2016 balanco-patrimonial-ipc04-abril-2016 balanco-patrimonial-ipc04-maio-2016 balanco-patrimonial-ipc04-junho-2016 balanco-patrimonial-ipc04-julho-2016 balanco-patrimonial-ipc04-agosto-2016 balanco-patrimonial-ipc04-setembro-2016 balanco-patrimonial-ipc04-outubro-2016 balanço-patrimonial-ipc04-novembro-2016 balanço patrimonial-ipc04-dezembro-2016",
    href: "balanco-patrimonial-2016",
  },
  {
    title: "Balança Patrimonial 2015",
    postadoEm: "28 de agosto de 2015",
    descrição:
      "Balanço Patrimonial JAN 2015 Balanço Patrimonial FEV 2015 Balanço Patrimonial MAR 2015 Balanço Patrimonial ABR 2015 Balanço Patrimonial MAIO 2015 Balanço Patrimonial JUNHO 2015 Balanço Patrimonial JULHO 2015 Balanço Patrimonial AGOSTO 2015 Balanço Patrimonial SETEMBRO 2015 Balanço Patrimonial OUTUBRO 2015 Balanço Patrimonial NOVEMBRO 2015 Balanço Patrimonial DEZEMBRO 2015",
    href: "balanco-patrimonial-2015",
  },
  {
    title: "Balanço Patrimonial 2014",
    postadoEm: "6 de maio de 2014",
    descrição:
      "Balanço Patrimonial DEZEMBRO 2014 Balanço Patrimonial NOVEMBRO 2014 Balanço Patrimonial OUTUBRO 2014 Balanço Patrimonial SETEMBRO 2014 Balanço Patrimonial AGOSTO 2014 Balanço Patrimonial JULHO 2014 Balanço Patrimonial JUNHO 2014 Balanço Patrimonial MAIO 2014 Balanço Patrimonial ABR 2014 Balanço Patrimonial MAR 2014 Balanço Patrimonial FEV 2014 Balanço Patrimonial JAN 2014",
    href: "balanco-patrimonial-2014",
  },
  {
    title: "Balanço Patrimonial 2013",
    postadoEm: "4 de fevereiro de 2014",
    descrição: "[wpfilebase tag=file id=3 /]",
    href: "balanco-patrimonial-2013",
  },
];

export default function Home() {
  return (
    <Container title="Balanço patrimonial" className="grid md:grid-cols-2">
      {links.map((link, i) => (
        <CardsFinanceiro
          key={i}
          title={link.title}
          postadoEm={link.postadoEm}
          descrição={link.descrição}
          href={link.href}
          path="balanco-patrimonial"
          query={getQueryParams(link)}
        />
      ))}
    </Container>
  );
}
