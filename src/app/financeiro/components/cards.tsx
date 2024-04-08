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
      <p className="font-light line-clamp-1 mb-5">{descrição}</p>
      <Link
        href={{ pathname: `/financeiro/${path}/${href}`, query: `${query} ` }}
        className="uppercase bg-zinc-700 text-white hover:bg-zinc-500 rounded-md p-3"
      >
        Leia mais
      </Link>
    </div>
  );
}
