import Title from "@/components/title";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Instituções Financeiras",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-white pb-2">
      <section className="px-2 container">
        <Title title="Instituções Financeiras" />
        <div className="w-full container gap-5 pb-20">
          <div className="grid md:grid-cols-4">
            <LinkBancos
              nome="BANCO GENAIL"
              postadoEm=" 19 de março de 2024"
              href="banco-genail"
            />
            <LinkBancos
              nome="BANCO MASTER"
              postadoEm="27 de fevereiro de 2024"
              href="banco-master"
            />
            <LinkBancos
              nome="BTG PACTUAL"
              postadoEm="2 de outubro de 2023"
              href="btg-pactual"
            />
            <LinkBancos
              nome="PLANNER"
              postadoEm="2 de outubro de 2023"
              href="planner"
            />
            <LinkBancos
              nome="XP INVESTIMENTOS"
              postadoEm="2 de outubro de 2023"
              href="xp-investimentos"
            />
            <LinkBancos
              nome="BANCO SANTANDER"
              postadoEm="2 de outubro de 2023"
              href="banco-santander"
            />
            <LinkBancos
              nome="BANCO BRADESCO"
              postadoEm="2 de outubro de 2023"
              href="banco-bradesco"
            />
            <LinkBancos
              nome="BANCO SAFRA"
              postadoEm="2 de outubro de 2023"
              href="banco-safra"
            />
            <LinkBancos
              nome="BANCO ITAÚ"
              postadoEm="27 de setembro de 2023"
              href="banco-itau"
            />
            <LinkBancos
              nome="BANCO DO BRASIL"
              postadoEm="17 de fevereiro de 2014"
              href="banco-do-brasil"
            />
            <LinkBancos
              nome="CAIXA ECONôMICA FEDERAL"
              postadoEm="2 de janeiro de 2014"
              href="caixa-economica-federal"
            />
          </div>
        </div>
      </section>
    </article>
  );
}

export const LinkBancos = ({ nome, postadoEm, href }: any) => {
  return (
    <div className="flex flex-col">
      <p className="text-xl md:text-2xl uppercase pt-10 font-semibold">
        {nome}
      </p>
      <p className="text-lg md:text-base font-extralight">
        Postado em: {postadoEm}
      </p>
      <Link
        href={`/institucional/instituicoes-financeiras/${href}`}
        className=" bg-zinc-700 w-3/4 uppercase text-sm text-center text-white font-bold py-2 px-4 rounded mt-5"
      >
        Leia mais
      </Link>
    </div>
  );
};
