import { Metadata } from "next";
import CardsFinanceiro from "../components/cards";
import { getQueryParams } from "../components/getQueryParams";
import Container from "@/components/container";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "DPIN – Política de Investimento e suas Revisões",
  };
}

const links = [
  {
    title: "Política de Investimentos 2024",
    postadoEm: "13 de dezembro de 2023",
    descrição:
      "Ata Aprovação Política de Investimento – Comitê Resolução n°. 001-2023 COMIN Ata Aprovação Política de Investimento – Conselho de Previdência Resolução n° 001-2023 CMP Publicação Resoluções Caderno Política Investimento",
    href: "politica-de-investimentos-2024",
  },
  {
    title: "Política de Investimentos 2023",
    postadoEm: "2 de dezembro de 2022",
    descrição:
      "Ata Aprovação Política de Investimentos Resolução n° 04-2022 Caderno da Política Anual de Investimentos Publicação da Resolução n° 04-2022",
    href: "politica-de-investimentos-2023",
  },
  {
    title: "Política de Investimentos 2022",
    postadoEm: "27 de dezembro de 2021",
    descrição:
      "ATA Aprovação Politíca Investimentos Resolução 003/2021 Caderno da Política de Investimentos Resolução Politica Investimentos 2021",
    href: "politica-de-investimentos-2022",
  },
  {
    title: "Política de Investimentos 2021",
    postadoEm: "17 de março de 2021",
    descrição:
      "DPIN_2021 Retificada Resolução Politica Investimentos Ata Aprovação Política Investimentos Caderno Política Inavestimentos 2021",
    href: "politica-de-investimentos-2021",
  },
  {
    title: "Política de Investimentos 2020",
    postadoEm: "19 de novembro de 2019",
    descrição:
      "Ata de Aprovação da Política de Investimentos Resolução Aprovação da Política de Investimentos",
    href: "politica-de-investimentos-2020",
  },
  {
    title: "Política de Investimentos 2019",
    postadoEm: "3 de dezembro de 2018",
    descrição:
      "Ata de Aprovação da  Política de Investimentos Resolução Conselho Aprovação da DPIN 2019 DPIN_DIGITALIZADO_2019 Ata Alteração da Política de Investimento RESOLUÇÃO 001 – alterada Decreto “N” n° 376-2019",
    href: "politica-de-investimentos-2019",
  },
  {
    title: "Política de Investimentos 2018",
    postadoEm: "12 de junho de 2018",
    descrição:
      "Ata Aprovação da Política de Investimentos Resolução – Politíca de investimento DPIN_2018 DPIN_DIGITALIZADO_2018-13",
    href: "politica-de-investimentos-2018",
  },
  {
    title: "Política de Investimentos 2017",
    postadoEm: "19 de dezembro de 2016",
    descrição:
      "Ata Aprovação politica deinvestimento 2017 DPIN_DIGITALIZADO_2017-9",
    href: "politica-de-investimentos-2017",
  },
  {
    title: "Política de Investimentos 2016",
    postadoEm: "5 de janeiro de 2016",
    descrição:
      "Política de Investimentos 2016 Ata Aprovação da Política de Investimento Resolução 001-2015",
    href: "politica-de-investimentos-2016",
  },
  {
    title: "Política de Investimentos 2015",
    postadoEm: "26 de janeiro de 2015",
    descrição:
      "DPIN 2015 Resolução de Aprovação Política de Investimentos 2015 Ata de Aprovação da Política de Investimentos 2015",
    href: "politica-de-investimentos-2015",
  },
  {
    title: "Política de Investimentos 2014",
    postadoEm: "14 de fevereiro de 2014",
    descrição: "DPIN – 2014",
    href: "politica-de-investimentos-2014",
  },
];

export default function Home() {
  return (
    <Container
      title="DPIN – Política de Investimento e suas Revisões"
      className="grid md:grid-cols-2"
    >
      {links.map((link, i) => (
        <CardsFinanceiro
          key={i}
          title={link.title}
          postadoEm={link.postadoEm}
          descrição={link.descrição}
          href={link.href}
          path="dpin-politica-de-investimento-e-suas-revisoes"
          query={getQueryParams(link)}
        />
      ))}
    </Container>
  );
}
