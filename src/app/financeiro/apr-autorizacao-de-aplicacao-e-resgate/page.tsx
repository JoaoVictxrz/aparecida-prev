import Container from "@/components/container";
import CardsFinanceiro from "../components/cards";
import { getQueryParams } from "../components/getQueryParams";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "APR – Autorização de Aplicação e Resgate",
  };
}

const links = [
  {
    title: "Ano – 2024",
    postadoEm: "15 de fevereiro de 2024",
    descrição: "JANEIRO 2024",
    href: "ano-2024",
  },
  {
    title: "Ano – 2023",
    postadoEm: "20 de junho de 2023",
    descrição:
      "APR JANEIRO APR FEVEREIRO APR MARÇO APR ABRIL  APR MAIO APR JUNHO APR JULHO APR AGOSTO 2023 APR SETEMBRO 2023 APR OUTUBRO 2023 APR NOVEMBRO 2023 APR DEZEMBRO 2023",
    href: "ano-2023",
  },
  {
    title: "Ano – 2022",
    postadoEm: "19 de abril de 2022",
    descrição:
      "APR JANEIRO – 2022  APR FEVEREIRO – 2022 APR MARÇO – 2022 APR ABRIL – 2022 APR MAIO – 2022 APR JUNHO – 2022 APR JULHO – 2022 APR AGOSTO – 2022 APR  SETEMBRO – 2022 APR OUTUBRO – 2022 APR NOVEMBRO-2022 APR DEZEMBRO-2022",
    href: "ano-2022",
  },
  {
    title: "Ano – 2021",
    postadoEm: "21 de maio de 2021",
    descrição:
      "APR-JANEIRO 2021 APR- FEVEREIRO 2021 APR-MARÇO 2021 APR-ABRIL 2021 APR-MAIO 2021 APR-JUNHO 2021 APR-JULHO 2021 APR-AGOSTO 2021 APR SETEMBRO 2021 APR OUTUBRO 2021 APR NOVEMBRO 2021 APR DEZEMBRO 2021",
    href: "ano-2021",
  },
  {
    title: "Ano – 2020",
    postadoEm: "3 de julho de 2020",
    descrição:
      "APR-JANEIRO 2020 APR-FEVEREIRO 2020 APR-MARÇO-2020 APR-ABRIL-2020 APR-MAIO 2020 APR-JUNHO 2020 APR-JULHO 2020 APR-AGOSTO 2020 APR-SETEMBRO 2020 APR-OUTUBRO 2020 APR-NOVEMBRO 2020 APR-DEZEMBRO 2020",
    href: "ano-2020",
  },
  {
    title: "APR 2020",
    postadoEm: "3 de julho de 2020",
    descrição:
      "APR-JANEIRO 2020 APR-FEVEREIRO 2020 APR-MARÇO-2020 APR-ABRIL-2020",
    href: "apr-2020",
  },
  {
    title: "APR -2019",
    postadoEm: "1 de abril de 2019",
    descrição:
      "APR JANEIRO 2019 APR FEVEREIRO 2019 APR MARÇO 2019 APR ABRIL 2019 APR MAIO 2019 APR JUNHO 2019 APR JULHO 2019 APR AGOSTO 2019 APR SETEMBRO 2019 APR OUTUBRO 2019 APR NOVEMBRO 2019 APR DEZEMBRO 2019",
    href: "apr-2019",
  },
  {
    title: "APR -2018",
    postadoEm: "12 de junho de 2018",
    descrição:
      "APR JANEIRO 2018 APR FEVEREIRO 2018 APR MARÇO 2018 APR ABRIL 2018 APR MAIO 2018 APR JUNHO 2018 APR JULHO 2018 APR AGOSTO 2018 APR SETEMBRO 2018 APR OUTUBRO 2018 APR NOVEMBRO 2018 APR DEZEMBRO 2018",
    href: "apr-2018",
  },
  {
    title: "APR -2017",
    postadoEm: "8 de março de 2017",
    descrição:
      "APR JAN 2017 APR FEV 2017 APR MAR 2017 APR MAI-2017 APR JUN-2017 APR JUL-2017 APR AGO-2017 APR SET-2017 APR OUT-2017 APR NOV-2017 APR DEZ-2017",
    href: "apr-2017",
  },
  {
    title: "APR – 2016",
    postadoEm: "31 de março de 2016",
    descrição:
      "APR JAN – 2016 APR FEV – 2016 APR MAR – 2016 APR ABR – 2016 APR MAI -2016 APR JUN -2016 APR JUL -2016 APR AGO -2016 APR SET-2016 APR OUT-2016 APR NOV- 2016 APR DEZ-2016",
    href: "apr-2016",
  },
  {
    title: "APR – 2015",
    postadoEm: "22 de abril de 2015",
    descrição:
      "APR JANERIO2015 APR FEVEREIRO2015 APR MARÇO2015 APR ABRIL2015 APR MAIO2015 APR JUNHO2015 APR JULHO2015 APR AGOSTO2015 APR SETEMBRO2015 APR OUTUBRO2015 APR NOVEMBRO2015 APR DEZEMBRO2015",
    href: "apr-2015",
  },
  {
    title: "APR – 2014",
    postadoEm: "7 de maio de 2014",
    descrição:
      "APR – JANEIRO 2014 APR – FEVEREIRO 2014 APR – MARÇO 2014 APR- ABRIL-2014 APR -MAIO- 2014 APR-JUNHO-2014 APR-JULHO-2014 APR-AGOSTO-2014 APR-SETEMBRO-2014 APR-OUTUBRO-2014 APR-NOVEMBRO-2014 APR – DEZEMBRO-2014",
    href: "apr-2014",
  },
  {
    title: "APR – 2013",
    postadoEm: "14 de fevereiro de 2014",
    descrição:
      "APR DEZ -2013 APR NOV-2013 APR OUT-2013 APR SET- 2013 APR AGO- 2013 APR JUL- 2013 APR JUN-2013 APR MAI 2013 APR ABR-2013 APR MAR-2013 APR FEV-2013 APR JAN-2013",
    href: "apr-2013",
  },
];

export default function Home() {
  return (
    <Container
      title="APR – Autorização de Aplicação e Resgate"
      className="grid md:grid-cols-2"
    >
      {links.map((link, i) => (
        <CardsFinanceiro
          key={i}
          title={link.title}
          postadoEm={link.postadoEm}
          descrição={link.descrição}
          href={link.href}
          path="apr-autorizacao-de-aplicacao-e-resgate"
          query={getQueryParams(link)}
        />
      ))}
    </Container>
  );
}
