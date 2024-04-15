import Image from "next/image";
import Link from "next/link";
import { FaChartBar, FaRegCalendarCheck, FaUser } from "react-icons/fa";
import { RiBankFill } from "react-icons/ri";

export default function AcessoRapido() {
  return (
    <article className="flex w-full justify-center bg-white pb-20 dark:bg-zinc-900 dark:text-zinc-200">
      <section className="container px-2">
        <h1 className="my-8 text-lg font-bold uppercase md:text-2xl">
          acesso rápido
        </h1>
        <div className="grid grid-cols-2 justify-around md:flex">
          <LinksAcessoRapido
            href="/acesso-rapido/politica-de-valorizacao-dos-servidores"
            text="Política de Valorização do Servidor"
          >
            <FaUser size={150} className="w-2/3" />
          </LinksAcessoRapido>
          <LinksAcessoRapido
            href="/acesso-rapido/situacao-financeira-aparecida-prev"
            text="Situação Financeira AparecidaPrev"
          >
            <FaChartBar size={150} className="w-2/3" />
          </LinksAcessoRapido>
          <LinksAcessoRapido
            href="/acesso-rapido/como-fica-minha-aposentadoria"
            text="Como Fica Minha Aposentadoria "
          >
            <RiBankFill size={150} className="w-2/3" />
          </LinksAcessoRapido>
          <LinksAcessoRapido
            target="_blank"
            href="https://eagenda.com.br/auditorio"
            text="Agendamento do Auditório"
          >
            <FaRegCalendarCheck size={150} className="w-2/3" />
          </LinksAcessoRapido>
        </div>
      </section>
    </article>
  );
}

interface props {
  href: string;
  text: string;
  children?: React.ReactNode;
  className?: string;
  target?: string;
}

export const LinksAcessoRapido = ({
  children,
  href,
  text,
  className,
  target,
}: props) => {
  return (
    <Link
      target={target}
      href={href}
      className="group m-5 flex flex-col items-center justify-center gap-5 p-5 text-center transition duration-300 ease-in-out hover:scale-110 hover:bg-zinc-100/95 hover:text-zinc-900 dark:hover:bg-zinc-800 hover:dark:text-zinc-200"
    >
      {children}
      <p className="text-sm font-semibold text-zinc-500 group-hover:text-zinc-900 dark:text-zinc-100 group-hover:dark:text-zinc-200 sm:text-lg">
        {text}
      </p>
    </Link>
  );
};
