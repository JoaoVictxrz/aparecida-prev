"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white dark:bg-zinc-950 p-2 px-5 flex items-center justify-between">
        <Image
          src="/logo-aparecidaprev-1.png"
          alt="logo"
          width={200}
          height={200}
          className="w-44"
        />
        <ProGestao />
        <div className="lg:hidden">
          {isOpen ? (
            <button onClick={() => setIsOpen(!isOpen)} className="text-black">
              <Image
                src="/menu-close.svg"
                alt="logo"
                width={200}
                height={200}
                className="w-6 lg:hidden"
              />
            </button>
          ) : (
            <button onClick={() => setIsOpen(!isOpen)}>
              <Image
                src="/menu.svg"
                alt="logo"
                width={200}
                height={200}
                className="w-6 lg:hidden"
              />
            </button>
          )}
        </div>
      </header>
      <nav className="duration-500 trabsition-all">
        {isOpen ? (
          <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
        ) : (
          <DesktopNavbar />
        )}
      </nav>
    </>
  );
}

export const MobileNavbar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  return (
    <nav className="w-full bg-white dark:bg-zinc-900 text-black duration-500 trabsition-all">
      <ul className="lg:hidden text-center flex flex-col items-center justify-center pb-5">
        <Links onClick={() => setIsOpen(!isOpen)} href="/" text="HOME" />
        <Links onClick={() => setIsOpen(!isOpen)} href="/sobre" text="SOBRE" />
        <Links
          onClick={() => setIsOpen(!isOpen)}
          href="/institucional"
          text="INSTITUCIONAL"
        />
        <Links
          onClick={() => setIsOpen(!isOpen)}
          href="/beneficio"
          text="BENEFÍCIO"
        />
        <Links
          onClick={() => setIsOpen(!isOpen)}
          href="/conselho"
          text="CONSELHO"
        />
        <Links
          onClick={() => setIsOpen(!isOpen)}
          href="/financeiro"
          text="FINANCEIRO"
        />
        <Links
          onClick={() => setIsOpen(!isOpen)}
          href="/legislacao"
          text="LEGISLAÇÃO"
        />
        <Links
          onClick={() => setIsOpen(!isOpen)}
          href="/ouvidoria"
          text="OUVIDORIA"
        />
        <Links
          onClick={() => setIsOpen(!isOpen)}
          href="/concurso"
          text="CONCURSO"
        />

        <Links
          onClick={() => setIsOpen(!isOpen)}
          href="/contato"
          text="CONTATO"
        />
        {/* Pro-Gestão */}
        <div className="flex flex-col items-center justify-center">
          <Link
            href="/"
            className="flex hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:rounded-md p-2 group transition duration-300 ease-in-out"
          >
            <Image
              src="/selo-pro-gestao.png"
              alt="logo"
              width={200}
              height={200}
              className="w-10"
            />
            <span className="text-xl text-zinc-500 font-light group-hover:text-zinc-700 dark:group-hover:text-white p-2">
              Pró-Gestão RPPS
            </span>
          </Link>
          <div className="flex gap-5 dark:text-white">
            <Link href="/" className="hover:text-orange-600">
              <FaInstagram size={20} />
            </Link>
            <Link href="/" className="hover:text-red-600">
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export const DesktopNavbar = () => {
  return (
    <nav className="hidden w-full lg:flex lg:items-center">
      <ul className=" bg-white dark:bg-zinc-950 flex w-full justify-end px-5">
        <Links href="/" text="HOME" />
        <Links href="/sobre" text="SOBRE" />
        <Links href="/institucional" text="INSTITUCIONAL" />
        <Links href="/beneficio" text="BENEFÍCIO" />
        <Links href="/conselho" text="CONSELHO" />
        <Links href="/financeiro" text="FINANCEIRO" />
        <Links href="/legislacao" text="LEGISLAÇÃO" />
        <Links href="/ouvidoria" text="OUVIDORIA" />
        <Links href="/concurso" text="CONCURSOS" />
        <Links href="/contato" text="CONTATO" />
      </ul>
    </nav>
  );
};

export const ProGestao = () => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center">
      <Link
        href="/"
        className="flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:rounded-md p-2 group"
      >
        <Image
          src="/selo-pro-gestao.png"
          alt="logo"
          width={200}
          height={200}
          className="w-5"
        />
        <span className="text-sm text-zinc-500 dark:zinc-700 font-light group-hover:text-white ">
          Pró-Gestão RPPS
        </span>
      </Link>
      <div className="flex gap-5">
        <Link href="/" className=" text-zinc-500 hover:text-orange-600">
          <FaInstagram size={15} />
        </Link>
        <Link href="/" className="text-zinc-500 hover:text-red-600">
          <FaYoutube size={15} />
        </Link>
      </div>
    </div>
  );
};

export const Links = ({ href, text, onClick }: any) => {
  return (
    <Link
      href={`${href}`}
      onClick={onClick}
      className="text-xl md:text-sm text-zinc-500 dark:text-white font-light hover:text-zinc-700 hover:dark:text-zinc-500  p-2"
    >
      {text}
    </Link>
  );
};
