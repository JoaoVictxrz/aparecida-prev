import Container from "@/components/container";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Instituções Financeiras",
  };
}

export default function Home() {
  return (
    <Container title="Instituções Financeiras">
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
    </Container>
  );
}

export const LinkBancos = ({ nome, postadoEm, href }: any) => {
  return (
    <div className="flex flex-col">
      <p className="pt-10 text-xl font-semibold uppercase md:text-2xl">
        {nome}
      </p>
      <p className="text-lg font-extralight md:text-base">
        Postado em: {postadoEm}
      </p>
      <Link
        href={`/institucional/instituicoes-financeiras/${href}`}
        className=" hover mt-5 w-3/4 rounded bg-zinc-700 px-4 py-2 text-center text-sm font-bold uppercase text-white transition-all duration-300 ease-out hover:bg-zinc-800/50"
      >
        Leia mais
      </Link>
    </div>
  );
};
