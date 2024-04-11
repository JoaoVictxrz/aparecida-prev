"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaRegCalendarAlt, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";
import ThemeToggle from "./theme-toggle";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const links = [
  { href: "/", text: "HOME" },
  { href: "/sobre", text: "SOBRE" },
  { href: "/institucional", text: "INSTITUCIONAL" },
  { href: "/beneficio", text: "BENEFÍCIO" },
  { href: "/conselho", text: "CONSELHO" },
  { href: "/financeiro", text: "FINANCEIRO" },
  { href: "/legislacao", text: "LEGISLAÇÃO" },
  { href: "/ouvidoria", text: "OUVIDORIA" },
  { href: "/concurso", text: "CONCURSOS" },
  { href: "/contato", text: "CONTATO" },
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <>
      <Acessibilidade className="hidden lg:flex bg-zinc-100" />
      <header className="w-full bg-white dark:bg-zinc-950 p-2 px-5 flex items-center justify-between">
        <Link href="/" onClick={() => setActive(0)}>
          <Image
            src="/logo-aparecidaprev-1.png"
            alt="logo"
            width={200}
            height={200}
            className="w-44"
          />
        </Link>
        <ProGestao />
        <div className="lg:hidden">
          {isOpen ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black dark:text-white"
            >
              <IoMdClose size={30} />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black dark:text-white"
            >
              <IoMdMenu size={30} />
            </button>
          )}
        </div>
      </header>
      <nav className="duration-500 trabsition-all">
        {isOpen ? (
          <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
        ) : (
          <DesktopNavbar active={active} setActive={setActive} />
        )}
      </nav>
    </>
  );
}

const MobileNavbar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) => {
  return (
    <nav className="w-full bg-white dark:bg-zinc-900 text-black duration-500 trabsition-all">
      <ul className="lg:hidden text-center flex flex-col items-center justify-center pb-5">
        {links.map((link, i) => (
          <Links
            key={i}
            href={link.href}
            text={link.text}
            onClick={() => setIsOpen(!isOpen)}
          />
        ))}
        {/* Pro-Gestão */}
        <div className="flex flex-col items-center justify-center">
          <Link
            target="_blank"
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Certificado-Pro-Gestao.pdf"
            className="flex hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:rounded-md p-1 group transition duration-300 ease-in-out"
          >
            <Image
              src="/selo-pro-gestao.png"
              alt="logo"
              width={200}
              height={200}
              className="w-10"
            />
            <span className="text-xl text-zinc-500 font-light group-hover:text-zinc-700 dark:text-white group-hover:dark:text-zinc-300 p-2">
              Pró-Gestão RPPS
            </span>
          </Link>
          <div className="flex gap-5 pt-1 dark:text-white">
            <Link href="/" className="hover:text-orange-600">
              <FaInstagram size={20} />
            </Link>
            <Link href="/" className="hover:text-red-600">
              <FaYoutube size={20} />
            </Link>
          </div>
          <div className="py-5">
            <Acessibilidade />
          </div>
        </div>
      </ul>
    </nav>
  );
};

const DesktopNavbar = ({ active, setActive }: any) => {
  return (
    <nav className="hidden w-full lg:flex lg:items-center">
      <ul className=" bg-white dark:bg-zinc-950 flex w-full justify-end px-5 pb-1 ">
        {links.map((link, i) => (
          <Links
            key={i}
            href={link.href}
            text={link.text}
            onClick={() => setActive(i)}
            className={`${
              active === i
                ? "border-b-2 border-zinc-300/50 dark:border-zinc-600/40"
                : ""
            }`}
          />
        ))}
      </ul>
    </nav>
  );
};
const Acessibilidade = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-full dark:bg-zinc-900 dark:text-zinc-400 px-5 ${className}`}
    >
      <div className="w-full grid lg:flex lg:justify-between gap-2 lg:gap-0">
        <div className="flex gap-2">
          <Link
            href="https://www.aparecidaprev.com.br/portal/agendamento/admin/index.php"
            className="flex items-center text-sm hover:bg-zinc-700 px-2"
          >
            <FaRegCalendarAlt size={15} />
            AGENDAMENTOS
          </Link>
          <Link
            href="http://gestaopublica.previdencia.aparecida.bsit-br.com.br/portal/employee-login.jsf?e="
            className="flex items-center text-sm hover:bg-zinc-700 px-2"
          >
            <MdOutlineYoutubeSearchedFor size={15} />
            TRANSPARÊNCIA
          </Link>
        </div>
        <div className="grid place-items-center lg:flex gap-2">
          <span className="font-semibold">Acessibilidade </span>
          <span className="font-light">Fonte: </span>
          <span className="flex items-center gap-2">
            Contraste: <ThemeToggle />
          </span>
        </div>
      </div>
    </div>
  );
};
const Links = ({ href, text, onClick, className }: any) => {
  return (
    <Link
      href={`${href}`}
      onClick={onClick}
      className={`text-xl lg:text-sm text-zinc-500 dark:text-white font-light hover:text-zinc-700 hover:dark:text-zinc-500 p-2 pb-1 ${className}`}
    >
      {text}
    </Link>
  );
};

const ProGestao = () => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center">
      <Link
        target="_blank"
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Certificado-Pro-Gestao.pdf"
        className="flex items-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:rounded-md p-2 group"
      >
        <Image
          src="/selo-pro-gestao.png"
          alt="logo"
          width={200}
          height={200}
          className="w-5"
        />
        <span className="text-sm text-zinc-500 dark:text-white font-light group-hover:text-white ">
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
