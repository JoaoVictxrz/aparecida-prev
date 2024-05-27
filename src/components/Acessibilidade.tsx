"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMoon, FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineYoutubeSearchedFor, MdSunny } from "react-icons/md";

type Theme = "light" | "dark" | null;

export default function Acessibilidade({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme as Theme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleClick = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`dark: w-full bg-white px-5 dark:bg-zinc-950 dark:text-zinc-400 ${className}`}
    >
      <div className="grid w-full gap-2 lg:flex lg:justify-between lg:gap-0">
        <div className="flex gap-2">
          <Link
            target="_blank"
            href="https://aparecidaprev.go.gov.br/agendamento/admin/"
            className="flex items-center px-2 text-sm hover:bg-zinc-300 dark:hover:bg-zinc-700"
          >
            <FaRegCalendarAlt size={15} />
            AGENDAMENTOS
          </Link>
          <Link
            target="_blank"
            href="http://gestaopublica.previdencia.aparecida.bsit-br.com.br/portal/employee-login.jsf?e="
            className="flex items-center px-2 text-sm hover:bg-zinc-300 dark:hover:bg-zinc-700"
          >
            <MdOutlineYoutubeSearchedFor size={15} />
            TRANSPARÊNCIA
          </Link>
        </div>
        <div className="grid place-items-center gap-2 lg:flex">
          <span className="font-semibold">Acessibilidade </span>
          <div className="space-x-2">
            <span className="font-light">Fonte: </span>
            <button>A+</button>
            <button>A-</button>
          </div>
          <span className="flex items-center gap-2">
            Contraste: <ThemeToggle handleClick={handleClick} theme={theme} />
          </span>
        </div>
      </div>
    </div>
  );
}

const ThemeToggle = ({
  theme,
  handleClick,
}: {
  theme: Theme;
  handleClick: () => void;
}) => {
  return (
    <button
      className="text-black dark:text-white"
      onClick={handleClick}
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? <FaMoon size={12} /> : <MdSunny size={12} />}
    </button>
  );
};
