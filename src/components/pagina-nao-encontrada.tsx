"use client";
import Link from "next/link";
import Container from "./container";

export default function PaginaNaoEncontrada() {
  return (
    <Container title="Ops!">
      <h2>Pagina não encontrada</h2>
      <Link href={"/"} className="text-blue-500">
        Voltar a pagina inicial
      </Link>
    </Container>
  );
}
