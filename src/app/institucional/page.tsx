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
          <LinksPage href="/" text="Acórdãos do tribunal de contas" />
          <LinksPage
            href="/"
            text="Acompanhamento de contratos administrativos e licitações"
          />
          <LinksPage href="/" text="Audiência publica" />
          <LinksPage href="/" text="Certidões" />
          <LinksPage href="/" text="Cartilha previdênciaria" />
          <LinksPage href="/" text="Certificação" />
          <LinksPage href="/" text="Controle interno" />
          <LinksPage
            href="/"
            text="Código de ética/política de segurança da informação"
          />
          <LinksPage
            href="/"
            text="CRP - Certificado de regularidade Previdenciária"
          />
          <LinksPage href="/" text="Gestão financeira e administrativa" />
          <LinksPage href="/" text="Governança corporativa" />
          <LinksPage href="/" text="Edital de credenciamento" />
          <LinksPage href="/" text="Educação previdenciária" />
          <LinksPage href="/" text="Instituições financeiras" />
          <LinksPage href="/" text="Passivo Judicial" />
          <LinksPage href="/" text="Planejamento estratégico" />
          <LinksPage href="/" text="Prova anual de vida" />
          <LinksPage href="/" text="Taxa de administração" />
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
