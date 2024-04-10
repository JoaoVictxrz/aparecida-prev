import Container from "@/components/container";
import CardsFinanceiro from "../components/cards";
import { getQueryParams } from "../components/getQueryParams";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Relatório Mensal Carteira Financeira",
  };
}

const links = [
  {
    title: "Ano – 2024",
    postadoEm: "15 de fevereiro de 2024",
    descrição: "JANEIRO",
    href: "ano-2024",
  },
  {
    title: "Ano – 2023",
    postadoEm: "20 de março de 2023",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO  OUTUBRO NOVEMBRO DEZEMBRO",
    href: "ano-2023",
  },
  {
    title: "Ano – 2022",
    postadoEm: "19 de abril de 2022",
    descrição:
      "JANEIRO FEVEREIRO MARÇO ABRIL MAIO JUNHO JULHO AGOSTO SETEMBRO OUTUBRO NOVEMBRO DEZEMBRO",
    href: "ano-2022",
  },
  {
    title: "Ano – 2021",
    postadoEm: "17 de março de 2021",
    descrição:
      "1 Janeiro-2021 2-Fevereiro-2021 3-Marco-2021 4-Abril-2021 5-Maio-2021 6-Junho-2021 7-Julho-2021 8-Agosto-2021 9-Setembro-2021 10-Outubro-2021 11-Novembro-2021 12-Dezembro 2021",
    href: "ano-2021",
  },
  {
    title: "Ano – 2020",
    postadoEm: "25 de agosto de 2020",
    descrição:
      "1 Janeiro-2020 2 Fevereiro-2020 3 Marco-2020 4 Abril-2020 5 Maio-2020 6 Junho-2020 7 Julho-2020 8 agosto-2020 9 setembro-2020 10 outubro-2020 11novembro-2020 12 dezembro-2020",
    href: "ano-2020",
  },
  {
    title: "Ano – 2019",
    postadoEm: "1 de abril de 2019",
    descrição:
      "Janeiro 2019 Fevereiro 2019 Março 2019 Abril 2019 Maio 2019 Junho 2019 Julho 2019 Agosto 2019 Setembro 2019 Outubro 2019 Novembro 2019 Dezembro 2019",
    href: "ano-2019",
  },
  {
    title: "Ano – 2018",
    postadoEm: "12 de junho de 2018",
    descrição:
      "Janeiro 2018 Fevereiro 2018 Março 2018 Abril 2018 Maio e Junho 2018 Janeiro a Julho 2018 Agosto 2018 Setembro 2018 Outubro 2018 Novembro 2018 Dezembro 2018",
    href: "ano-2018",
  },
  {
    title: "Ano – 2017",
    postadoEm: "11 de dezembro de 2017",
    descrição:
      "Janeiro 2017 Fevereiro 2017 Março 2017 Abril 2017 Maio 2017 Junho 2017 Julho 2017 Agosto 2017 Setembro 2017 Outubro 2017 Novembro 2017 Dezembro 2017",
    href: "ano-2017",
  },
  {
    title: "Ano-2016",
    postadoEm: "11 de dezembro de 2017",
    descrição:
      "Dezembro 2016Novembro-2016Outubro-2016setembro-2016agosto-2016julho-2016Junho 2016MAIO 2016Abril 2016Março 2016Fevereiro 2016Janeiro 2016",
    href: "ano-2016",
  },
  {
    title: "Ano-2015",
    postadoEm: "16 de novembro de 2015",
    descrição:
      "Relatório Mensal – Dezembro 2015 APARECIDAPREVRelatório Mensal Novembro 2015 APARECIDAPREVRelatório Mensal -Outubro 2015Carteira Aparecida Prev – Setembro 2015Carteira Aparecida Prev – Agosto 2015Carteira Mensal Aparecida Prev – Julho 2015Carteira Aparecida Prev – Junho Carteira Aparecida Prev Maio 2015 Carteira Aparecida Prev Abril 2015 Carteira Aparecida Prev Março 2015Carteira Aparecida Prev Fevereiro 2015Carteira Aparecida Prev Janeiro 2015",
    href: "ano-2015",
  },
  {
    title: "Ano-2014",
    postadoEm: "26 de janeiro de 2015",
    descrição:
      "Relatorio Mensal – Dezembro 2014 Novembro 2014Outubro 2014Setembro 2014Agosto 2014Julho 2014Junho 2014 Maio 2014Abril 2014Março 2014Fevereiro 2014Janeiro 2014",
    href: "ano-2014",
  },
  {
    title: "Ano-2013",
    postadoEm: "14 de fevereiro de 2014",
    descrição: "[wpfilebase tag=file id=15 /]",
    href: "ano-2013",
  },
];

export default function Home() {
  return (
    <Container
      title="Relatório Mensal – Comp. Carteira Fin."
      className="grid md:grid-cols-2"
    >
      {links.map((link, i) => (
        <CardsFinanceiro
          key={i}
          title={link.title}
          postadoEm={link.postadoEm}
          descrição={link.descrição}
          href={link.href}
          path="relatorio-mensal-carteira-financeira"
          query={getQueryParams(link)}
        />
      ))}
    </Container>
  );
}
