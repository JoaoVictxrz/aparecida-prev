import { LinksPage } from "@/components/Links";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Institucional",
};

export default function Sobre() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2">
      <section className="px-2 container text-black dark:text-white">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 ">
          Institucional
        </h1>
        <div className="w-full grid lg:grid-cols-2 items-center container gap-5 pb-20">
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
            href="/institucional/instituições-financeiras"
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
        </div>
      </section>
    </article>
  );
}

export const LinksInstitucional = ({ href, text }: any) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-center shadow-md p-5 group hover:bg-zinc-100 hover:scale-105 transition-transform ease-in-out duration-300"
    >
      <p
        className={`text-2xl font-light text-zinc-500 group-hover:text-zinc-700`}
      >
        {text}
      </p>
    </Link>
  );
};
