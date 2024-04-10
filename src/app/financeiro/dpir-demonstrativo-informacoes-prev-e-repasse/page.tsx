import { Metadata } from "next";
import Container from "@/components/container";
import CardsFinanceiro from "../components/cards";
import { getQueryParams } from "../components/getQueryParams";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "DIPR – Demostrativo de Informações Prev. e Repasse",
  };
}

const links = [
  {
    title: "DIPR-2024",
    postadoEm: "22 de março de 2024",
    descrição: "",
    href: "DIPR-2024",
  },
  {
    title: "DIPR-2023",
    postadoEm: "20 de junho de 2023",
    descrição:
      "DIPR JANEIRO/FEVEREIRO 2023 DIPR MARÇO/ABRIL 2023 DIPR MAIO/JUNHO 2023 DIPR JULHO/AGOSTO 2023 DIPR SETEMBRO/OUTUBRO 2023 DIPR NOVEMBRO/DEZEMBRO 2023",
    href: "DIPR-2023",
  },
  {
    title: "DIPR-2022",
    postadoEm: "19 de abril de 2022",
    descrição:
      "DIPR JANEIRO/FEVEREIRO 2022 DIPR MARÇO/ABRIL 2022 DIPR MAIO/JUNHO 2022 DIPR  JULHO/AGOSTO 2022 DIPR SETEMBRO/OUTUBRO 2022 DIPR NOVEMBRO/DEZEMBRO 2022",
    href: "DIPR-2022",
  },
  {
    title: "DIPR-2021",
    postadoEm: "21 de maio de 2021",
    descrição:
      "DIPR JAN FEV 2021 DIPR MAR ABR 2021 DIPR MAI JUN 2021 DIPR_JUL AGO 2021 DIPR_SET OUT 2021 DIPR_NOV DEZ 2021",
    href: "DIPR-2021",
  },
  {
    title: "DIPR-2020",
    postadoEm: "8 de fevereiro de 2021",
    descrição:
      "DIPR JAN FEV 2020 DIPR MAR ABR 2020 DIPR MAI JUN 2020 DIPR JUL AGO 2020 DIPR SET OUT 2020 DIPR NOV DEZ 2020",
    href: "DIPR-2020",
  },
  {
    title: "DIPR-2019",
    postadoEm: "5 de setembro de 2019",
    descrição:
      "DIPR  JAN FEV 2019 DIPR MAR ABR 2019 DIPR MAI JUN 2019 DIPR JUL AGOSTO 2019 DIPR SET OUT 2019 DIPR NOV DEZ 2019",
    href: "DIPR-2019",
  },
  {
    title: "DIPR-2018",
    postadoEm: "12 de junho de 2018",
    descrição:
      "DIPR JAN FEV 2018 DIPR MAR ABR 2018 DIPR MAI JUN 2018 DIPR JUL AGO 2018 DIPR SET OUT 2018 DIPR NOV DEZ 2018",
    href: "DIPR-2018",
  },
  {
    title: "DIPR-2017",
    postadoEm: "11 de dezembro de 2017",
    descrição:
      "DIPR JAN FEV 2017 DIPR MAR ABR 2017 DIPR MAI JUN 2017 DIPR JUL AGO 2017 DIPR SET OUT 2017 DIPR NOV DEZ 2017",
    href: "DIPR-2017",
  },
  {
    title: "DIPR-2016",
    postadoEm: "18 de outubro de 2016",
    descrição: "DIPR JAN FEV DIPR MAR ABR DIPR MAI JUN DIPR JUL AGO",
    href: "DIPR-2016",
  },
  {
    title: "DIPR-2015",
    postadoEm: "23 de abril de 2015",
    descrição:
      "DIPR – JAN/FEV DIPR – MAR/ABR DIPR – MAI/JUN DIPR – JUL/AGO DIPR – SET/OUT DIPR -NOV/DEZ",
    href: "DIPR-2015",
  },
  {
    title: "DIPR-2014",
    postadoEm: "17 de junho de 2014",
    descrição:
      "DIPR – JAN/FEV DIPR – MAR/ABR DIPR – MAI/JUN DIPR – JUL/AGO DIPR – SET/OUT DIPR -NOV/DEZ",
    href: "DIPR-2014",
  },
  {
    title: "DIPR-2013",
    postadoEm: "17 de junho de 2013",
    descrição: "DIPR JUL-AGOS 2013 DIPR SET-OUT 2013 DIPR NOV-DEZ 2013",
    href: "DIPR-2013",
  },
];

export default function Home() {
  return (
    <Container
      title="DIPR – Demostrativo de Informações Prev. e Repasse"
      className="grid md:grid-cols-2"
    >
      {links.map((link, i) => (
        <CardsFinanceiro
          key={i}
          title={link.title}
          postadoEm={link.postadoEm}
          descrição={link.descrição}
          href={link.href}
          path="dpir-demonstrativo-informacoes-prev-e-repasse"
          query={getQueryParams(link)}
        />
      ))}
    </Container>
  );
}
