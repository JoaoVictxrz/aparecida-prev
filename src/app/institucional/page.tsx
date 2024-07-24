"use client";
import { LinksPage } from "@/components/links";
import Container from "@/components/container";
import { AxiosResponse } from "axios";
import { useEffect, useMemo, useState } from "react";
import { AxiosInstance } from "@/services/axios";

export default function Sobre() {
  const [results, setResults] = useState<AxiosResponse<any, any>[]>([]);

  const links = useMemo(
    () => [
      {
        href: "/institucional/acordao-do-tribunal-de-contas",
        text: "Acórdãos do tribunal de contas",
        target: "_self",
      },
      {
        href: "/institucional/acompanhamento-de-contrato-administrativos-e-licitacoes",
        text: "Acompanhamento de contratos administrativos e licitações",
        target: "_self",
      },
      {
        href: "/institucional/audiencia-publica",
        text: "Audiência publica",
        target: "_self",
      },
      {
        href: "/institucional/certidoes",
        text: "Certidões",
        target: "_self",
      },
      {
        href: "/institucional/cartilha-previdenciaria",
        text: "Cartilha previdênciaria",
        target: "_self",
      },
      {
        href: "/institucional/certificacao",
        text: "Certificação",
        target: "_self",
      },
      {
        href: "/institucional/controle-interno",
        text: "Controle interno",
        target: "_self",
      },
      {
        href: "/institucional/codigos",
        text: "Código de ética/política de segurança da informação",
        target: "_self",
      },
      {
        href: "/institucional/certificado-de-regularidade-previdenciaria-crp",
        text: "CRP - Certificado de regularidade Previdenciária",
        target: "_self",
      },
      {
        href: "/institucional/gestao-financeira-e-administrativa",
        text: "Gestão financeira e administrativa",
        target: "_self",
      },
      {
        href: "/institucional/governanca-corporativa",
        text: "Governança corporativa",
        target: "_self",
      },
      {
        href: "/institucional/edital-de-credenciamento",
        text: "Edital de credenciamento",
        target: "_self",
      },
      {
        href: "/institucional/educacao-previdenciaria",
        text: "Educação previdenciária",
        target: "_self",
      },
      {
        href: "/institucional/instituicoes-financeiras",
        text: "Instituções financeiras",
        target: "_self",
      },
      {
        href: "/institucional/passivo-judicial",
        text: "Passivo Judicial",
        target: "_self",
      },
      {
        href: "/institucional/planejamento-estrategico",
        text: "Planejamento estratégico",
        target: "_self",
      },
      {
        href: "/institucional/prova-de-vida-anual",
        text: "Prova de vida anual",
        target: "_self",
      },
      {
        href: "/institucional/taxa-de-administracao",
        text: "Taxa de administração",
        target: "_self",
      },
    ],
    [],
  );

  useEffect(() => {
    if (links.length === 0) return;

    const filteredHrefs = links
      .map((link) =>
        link.href.replace(/^\/(institucional|acesso-rapido)\//, ""),
      )
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

  // Cria um mapeamento dos hrefs para o tamanho dos dados retornados
  const resultMap = new Map(
    results.map((result) => [
      result.config.url?.split("?slug=")[1] || "",
      result.data.length,
    ]),
  );

  return (
    <Container title="Institucional" className="grid md:grid-cols-2">
      {links
        .filter(
          (link) =>
            resultMap.get(
              link.href.replace(/^\/(institucional|acesso-rapido)\//, ""),
            ) > 0,
        )
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
