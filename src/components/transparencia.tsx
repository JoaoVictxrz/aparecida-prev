import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transparencia",
};
export default function Transparencia() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-zinc-200">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8">
          Transparencia
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <LinksTransparencia
            href="/"
            text="Folha de pagamento"
            description="lorem "
          >
            <Image
              src="/mais.svg"
              alt="mais"
              width={150}
              height={150}
              className="w-3/4 sm:w-2/4"
            />
          </LinksTransparencia>
          <LinksTransparencia
            href="/"
            text="Consultar Matrícula"
            description="lorem "
          >
            <Image
              src="/mais.svg"
              alt="mais"
              width={150}
              height={150}
              className="w-3/4 sm:w-2/4"
            />
          </LinksTransparencia>
          <LinksTransparencia href="/" text="Contracheque" description="lorem ">
            <Image
              src="/mais.svg"
              alt="mais"
              width={150}
              height={150}
              className="w-3/4 sm:w-2/4"
            />
          </LinksTransparencia>
          <LinksTransparencia href="/" text="Cédula C " description="lorem ">
            <Image
              src="/mais.svg"
              alt="mais"
              width={150}
              height={150}
              className="w-3/4 sm:w-2/4"
            />
          </LinksTransparencia>
          <LinksTransparencia
            href="/"
            text="Primeiro Acesso"
            description="lorem "
          >
            <Image
              src="/mais.svg"
              alt="mais"
              width={150}
              height={150}
              className="w-3/4 sm:w-2/4"
            />
          </LinksTransparencia>
          <LinksTransparencia href="/" text="Agendamentos" description="lorem ">
            <Image
              src="/mais.svg"
              alt="mais"
              width={150}
              height={150}
              className="w-3/4 sm:w-2/4"
            />
          </LinksTransparencia>
          <LinksTransparencia href="/" text="Webmail" description="lorem ">
            <Image
              src="/mais.svg"
              alt="mais"
              width={150}
              height={150}
              className="w-3/4 sm:w-2/4"
            />
          </LinksTransparencia>
          <LinksTransparencia
            href="/"
            text="Sistema de Gestão Prodata"
            description="lorem "
          >
            <Image
              src="/mais.svg"
              alt="mais"
              width={150}
              height={150}
              className="w-3/4 sm:w-2/4"
            />
          </LinksTransparencia>
        </div>
      </section>
    </article>
  );
}

interface props {
  href: string;
  text: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}
export const LinksTransparencia = ({
  href,
  text,
  children,
  description,
}: props) => {
  return (
    <Link
      href={href}
      className="flex flex-col text-center justify-center items-center transition ease-in-out duration-300 hover:text-zinc-900 hover:bg-zinc-100/95 dark:hover:bg-zinc-800 m-5 p-5 group hover:scale-110"
    >
      {children}
      <p className="font-semibold text-sm uppercase sm:text-lg text-zinc-500 dark:text-zinc-100 group-hover:text-zinc-900 group-hover:dark:text-zinc-300">
        {text}
      </p>
      <p className="text-sm text-zinc-500 dark:text-zinc-100">{description}</p>
    </Link>
  );
};
