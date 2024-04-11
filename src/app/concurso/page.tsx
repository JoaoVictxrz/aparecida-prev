import Container from "@/components/container";
import { Metadata } from "next";
import LinkAzul from "../institucional/components/links";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concursos",
};

export default function Home() {
  return (
    <Container title="Concurso público" className="font-light">
      <p>
        Nesta página é possível acompanhar os assuntos em relação à realização
        de concursos públicos promovidos pelo Instituto de Previdência de
        Aparecida de Goiânia.
      </p>
      <br />
      <LinkConcurso
        text="CONCURSO APARECIDAPREV N°001/2017"
        href="/concurso/concurso-publico"
      />
    </Container>
  );
}

interface props {
  href: string;
  text: string;
  className?: string;
}
export function LinkConcurso({ href, text, className }: props) {
  return (
    <Link
      href={href}
      className={`text-blue-500 hover:text-blue-700 hover:underline ${className}`}
    >
      {text}
    </Link>
  );
}
