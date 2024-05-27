"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Acessibilidade from "./Acessibilidade";

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
      <Acessibilidade className="hidden lg:flex" />
      <header className="flex w-full items-center justify-between bg-white p-2 px-5 dark:bg-zinc-950">
        <Link href="/" onClick={() => setActive(0)}>
          <Image
            src="/logo-aparecidaprev.png"
            alt="logo"
            width={400}
            height={400}
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
      <nav>
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
  useEffect(() => {
    if (typeof window === "undefined") return;
    function handleResize() {
      setIsOpen(window.innerWidth > 1024 ? false : true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsOpen]);

  return (
    <nav className="flex flex-col items-center bg-white pb-5 text-black dark:bg-zinc-950">
      {links.map((link, i) => (
        <Links
          key={i}
          href={link.href}
          text={link.text}
          onClick={() => setIsOpen(!isOpen)}
        />
      ))}
      <Link
        target="_blank"
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Certificado-Pro-Gestao.pdf"
        className="group flex p-1 transition duration-300 ease-in-out hover:rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800"
      >
        <Image
          src="/selo-pro-gestao.png"
          alt="logo"
          width={200}
          height={200}
          className="w-10"
        />
        <span className="p-2 text-xl font-light text-zinc-500 group-hover:text-zinc-700 dark:text-white group-hover:dark:text-zinc-300">
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
    </nav>
  );
};

const DesktopNavbar = ({ active, setActive }: any) => {
  return (
    <nav className="hidden w-full bg-white lg:flex lg:items-center">
      <ul className=" flex w-full justify-end px-5 pb-1 dark:bg-zinc-950 ">
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

const Links = ({ href, text, onClick, className }: any) => {
  return (
    <Link
      href={`${href}`}
      onClick={onClick}
      className={`p-2 pb-1 text-xl font-light text-zinc-500 hover:text-zinc-700 dark:text-white hover:dark:text-zinc-500 lg:text-sm ${className}`}
    >
      {text}
    </Link>
  );
};

const ProGestao = () => {
  return (
    <div className="hidden flex-col items-center justify-center lg:flex">
      <Link
        target="_blank"
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Certificado-Pro-Gestao.pdf"
        className="group flex items-center gap-2 p-2 hover:rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800"
      >
        <Image
          src="/selo-pro-gestao.png"
          alt="logo"
          width={200}
          height={200}
          className="w-5"
        />
        <span className="text-sm font-light text-zinc-500 group-hover:text-white dark:text-white ">
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
