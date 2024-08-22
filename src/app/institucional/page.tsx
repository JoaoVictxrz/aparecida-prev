"use client";
import { LinksPage } from "@/components/links-page";
import { useMemo } from "react";
import Container from "@/components/container";

export default function Sobre() {
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
        href: "/institucional/prova-anual-de-vida",
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

  return (
    <Container title="Institucional" className="grid md:grid-cols-2">
      {links.map((link, i) => (
        <LinksPage key={i} {...link} />
      ))}
    </Container>
  );
}
