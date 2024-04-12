"use client";
import { useRouter } from "next/router";
import Link from "next/link";

interface props {
  title: string;
  href: string;
  path: string;
  postadoEm: string;
  descrição?: string;
  query?: any;
}
export default function CardsFinanceiro({
  href,
  title,
  path,
  postadoEm,
  descrição,
  query,
}: props) {
  return (
    <div className="pt-3">
      <Link
        href={`/financeiro/${path}/${href}`}
        className="text-xl font-semibold"
      >
        {title}
      </Link>
      <p className="font-extralight ">Postado em: {postadoEm}</p>
      <p className="mb-5 line-clamp-1 font-light">{descrição}</p>
      <Link
        href={{ pathname: `/financeiro/${path}/${href}`, query: `${query} ` }}
        className="rounded-md bg-zinc-700 p-3 uppercase text-white hover:bg-zinc-500"
      >
        Leia mais
      </Link>
    </div>
  );
}
