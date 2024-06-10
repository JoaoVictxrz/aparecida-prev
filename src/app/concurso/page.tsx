import cheerio, { CheerioAPI } from "cheerio";
import { Metadata } from "next";
import { getData } from "@/services/fetch";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concurso",
};

export default async function Home() {
  try {
    const data = await getData("/pages/6791");
    const $: CheerioAPI = cheerio.load(data.content.rendered);

    $("a").addClass("text-blue-500 hover:text-blue-700 hover:underline");
    $("strong").contents().unwrap();
    $("a").attr("href", "/concurso/concurso-publico");
    $("a").attr("target", "");
    const updatedHTML = $.html();

    return (
      <Container title={data.title.rendered}>
        <div
          dangerouslySetInnerHTML={{ __html: updatedHTML }}
          className="space-y-4"
        />
      </Container>
    );
  } catch (error) {
    return <PaginaNaoEncontrada />;
  }
}

interface LinkProps {
  href: string;
  text: string;
  className?: string;
}

export function LinkConcurso({ href, text, className }: LinkProps) {
  return (
    <Link
      href={href}
      className={`text-blue-500 hover:text-blue-700 hover:underline ${className}`}
    >
      {text}
    </Link>
  );
}
