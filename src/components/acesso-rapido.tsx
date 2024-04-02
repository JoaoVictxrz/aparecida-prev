import Image from "next/image";
import Link from "next/link";

export default function AcessoRapido() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-zinc-200">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8">
          acesso rápido
        </h1>
        <div className="grid grid-cols-2 md:flex justify-around">
          <LinksAcessoRapido
            href="/"
            text="Política de Valorização do Servidor"
            className="w-2/3"
          >
            <Image
              src="/acesso-rapido/user.svg"
              alt="user"
              width={150}
              height={150}
              className="w-2/3"
            />
          </LinksAcessoRapido>
          <LinksAcessoRapido href="/" text="Situação Financeira AparecidaPrev">
            <Image
              src="/acesso-rapido/graph.svg"
              alt="user"
              width={150}
              height={150}
              className="w-2/3"
            />
          </LinksAcessoRapido>
          <LinksAcessoRapido href="/" text="Como Fica Minha Aposentadoria ">
            <Image
              src="/acesso-rapido/bank.svg"
              alt="user"
              width={150}
              height={150}
              className="w-2/3"
            />
          </LinksAcessoRapido>
          <LinksAcessoRapido href="/" text="Agendamento do Auditório">
            <Image
              src="/acesso-rapido/agenda.svg"
              alt="user"
              width={150}
              height={150}
              className="w-2/3"
            />
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
}

export const LinksAcessoRapido = ({
  children,
  href,
  text,
  className,
}: props) => {
  return (
    <Link
      href={href}
      className="flex flex-col text-center justify-center items-center transition ease-in-out duration-300 hover:text-zinc-900 hover:dark:text-zinc-200 hover:bg-zinc-100/95 dark:hover:bg-zinc-800 m-5 p-5 group hover:scale-110"
    >
      {children}
      <p className="font-semibold text-sm sm:text-lg text-zinc-500 dark:text-zinc-100 group-hover:text-zinc-900 group-hover:dark:text-zinc-200">
        {text}
      </p>
    </Link>
  );
};
