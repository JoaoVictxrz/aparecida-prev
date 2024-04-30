"use client";
import Link from "next/link";
import { extractTextFromHtml, formatarData } from "@/utils/functions";

interface props {
  title: string;
  href: string;
  path: string;
  postadoEm: string;
  descrição?: any;
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
        {extractTextFromHtml(title)}
      </Link>
      <p className="font-extralight ">Postado em: {formatarData(postadoEm)}</p>
      <p className="mb-5 line-clamp-1 font-light">
        {extractTextFromHtml(descrição)}
      </p>
      <Link
        href={{ pathname: `/financeiro/${path}/${href}` }}
        className="rounded-md bg-zinc-700 p-3 uppercase text-white hover:bg-zinc-500"
      >
        Leia mais
      </Link>
    </div>
  );
}
