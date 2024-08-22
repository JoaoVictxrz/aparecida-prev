"use client";
import { LinksPage } from "@/components/links-page";
import { useMemo } from "react";
import Container from "@/components/container";

export default function Home() {
  const links = useMemo(
    () => [
      {
        href: "/financeiro/demostrativo-var-patri",
        text: "Demonstrativo variação Patrimonial",
        target: "_self",
      },
      {
        href: "/financeiro/comparativo-da-despesa",
        text: "Comparativo de despesa",
        target: "_self",
      },
      {
        href: "/financeiro/dirp",
        text: "DIPR Demostrativo informações prev e repasse",
        target: "_self",
      },
      {
        href: "/financeiro/relatorio-mensal-comp-carteira-fin",
        text: "Relatório mensal carteira financeira",
        target: "_self",
      },
      {
        href: "/financeiro/balanco-financeiro",
        text: "Balanço financeiro",
        target: "_self",
      },
      {
        href: "/financeiro/balanco-orcamentario",
        text: "Balanço orçamentário",
        target: "_self",
      },
      {
        href: "/financeiro/balanco-patrimonial",
        text: "Balanço patrimonial",
        target: "_self",
      },
      {
        href: "/financeiro/comparativo-da-receita",
        text: "Comparativo da receita",
        target: "_self",
      },
      {
        href: "/acesso-rapido/situacao-financeira-aparecidaprev",
        text: "Situação financeira AparecidaPrev",
        target: "_self",
      },
      {
        href: "/financeiro/apr-autorizacao-de-aplicacao-e-resgate",
        text: "APR - Autorização de aplicação e resgate",
        target: "_self",
      },
      {
        href: "/financeiro/calculo-atuarial",
        text: "Cálculo atuarial",
        target: "_self",
      },
      {
        href: "/financeiro/dpin-politica-de-investimento-e-suas-revisoes",
        text: "DPIN Politica de investimentos e suas revisões",
        target: "_self",
      },
      {
        href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/BANNER-CALENDARIO-e1674654065560-820x430-1.jpg",
        text: "Calendário pagamento da folha",
        target: "_blank",
      },
      {
        href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/PLANO-DE-TRABALHO-ATUARIAL-4.pdf",
        text: "Plano de trabalho atuario",
        target: "_blank",
      },
    ],
    [],
  );

  return (
    <Container title="Financeiro" className="grid md:grid-cols-2">
      {links.map((link, i) => (
        <LinksPage key={i} {...link} />
      ))}
    </Container>
  );
}
