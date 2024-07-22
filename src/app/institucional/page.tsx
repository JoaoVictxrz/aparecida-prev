import { LinksPage } from "@/components/links";
import Container from "@/components/container";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Institucional",
};

export default function Sobre() {
  return (
    <Container title="Institucional" className="grid md:grid-cols-2">
      <LinksPage
        href="/institucional/acordaos-do-tribunal-de-contas"
        text="Acórdãos do tribunal de contas"
      />
      <LinksPage
        href="/institucional/acompanhamento-de-contratos-administrativos-e-licitacoes"
        text="Acompanhamento de contratos administrativos e licitações"
      />
      <LinksPage
        href="/institucional/audiencia-publica"
        text="Audiência publica"
      />
      <LinksPage href="/institucional/certidoes" text="Certidões" />
      <LinksPage
        href="/institucional/cartilha-previdenciaria"
        text="Cartilha previdênciaria"
      />
      <LinksPage href="/institucional/certificacao" text="Certificação" />
      <LinksPage
        href="/institucional/controle-interno"
        text="Controle interno"
      />
      <LinksPage
        href="/institucional/codigo-de-etica-e-politica-de-seguranca-da-informacao"
        text="Código de ética/política de segurança da informação"
      />
      <LinksPage
        href="/institucional/crp-certificado-de-regularidade-previdenciaria"
        text="CRP - Certificado de regularidade Previdenciária"
      />
      <LinksPage
        href="/institucional/gestao-financeira-e-administrativa"
        text="Gestão financeira e administrativa"
      />
      <LinksPage
        href="/institucional/governanca-corporativa"
        text="Governança corporativa"
      />
      <LinksPage
        href="/institucional/edital-de-credenciamento"
        text="Edital de credenciamento"
      />
      <LinksPage
        href="/institucional/educacao-previdenciaria"
        text="Educação previdenciária"
      />
      <LinksPage
        href="/institucional/instituicoes-financeiras"
        text="Instituições financeiras"
      />
      <LinksPage
        href="/institucional/passivo-judicial"
        text="Passivo Judicial"
      />
      <LinksPage
        href="/institucional/planejamento-estrategico"
        text="Planejamento estratégico"
      />
      <LinksPage
        href="/institucional/prova-anual-de-vida"
        text="Prova anual de vida"
      />
      <LinksPage
        href="/institucional/taxa-de-administracao"
        text="Taxa de administração"
      />
    </Container>
  );
}

export const LinksInstitucional = ({ href, text }: any) => {
  return (
    <Link
      href={href}
      className="group flex items-center justify-center p-5 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-zinc-100"
    >
      <p
        className={`text-2xl font-light text-zinc-500 group-hover:text-zinc-700`}
      >
        {text}
      </p>
    </Link>
  );
};
