import { extractTextFromHtml, formatarData } from "@/utils/functions";
import Link from "next/link";

interface props {
  href: string;
  title: string;
  postadoEm: string;
  descrição: string;
}

export default function Cards({ href, title, postadoEm, descrição }: props) {
  return (
    <div className="pt-3">
      <Link href={`${href}`} className="text-xl font-semibold">
        {extractTextFromHtml(title)}
      </Link>
      <p className="font-extralight ">Postado em: {formatarData(postadoEm)}</p>
      <p className="mb-5 line-clamp-1 font-light">
        {extractTextFromHtml(descrição)}
      </p>
      <Link
        href={{ pathname: `${href}` }}
        className="rounded-md bg-zinc-700 p-3 uppercase text-white hover:bg-zinc-500"
      >
        Leia mais
      </Link>
    </div>
  );
}
