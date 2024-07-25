"use client";
import { LinksPage } from "@/components/links";
import Container from "@/components/container";
import { AxiosResponse } from "axios";
import { useEffect, useMemo, useState } from "react";
import { AxiosInstance } from "@/services/axios";

export default function Home() {
  const [results, setResults] = useState<AxiosResponse<any, any>[]>([]);

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

  useEffect(() => {
    if (links.length === 0) return;

    const filteredHrefs = links
      .map((link) => link.href.replace(/^\/(financeiro|acesso-rapido)\//, ""))
      .filter((href) => links.some((link) => link.href.includes(href)));

    async function fetchData() {
      try {
        const promises = filteredHrefs
          .map((href) => {
            // Pular links que já possuem resultados
            if (href.includes("https")) return null;
            return AxiosInstance.get(`/pages?slug=${href}`);
          })
          .filter(
            (promise): promise is Promise<AxiosResponse<any, any>> =>
              promise !== null,
          );

        const data = await Promise.all(promises);
        setResults(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [links]);

  const resultMap = new Map(
    results.map((result) => [
      result.config.url?.split("?slug=")[1] || "",
      result.data.length,
    ]),
  );
  return (
    <Container title="Financeiro" className="grid md:grid-cols-2">
      {links
        .filter((link) => resultMap.has(link.href))
        .map((link, i) => (
          <LinksPage
            href={link.href}
            text={link.text}
            target={link.target}
            key={i}
          />
        ))}
      {links
        .filter((link) => link.href.includes("https"))
        .map((link, i) => (
          <LinksPage
            href={link.href}
            text={link.text}
            target={link.target}
            key={i}
          />
        ))}
    </Container>
  );
}
