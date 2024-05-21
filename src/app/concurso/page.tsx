"use client";
import { extractTextFromHtml } from "@/utils/functions";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "../loading";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function extractTextAndLinkFromHtml(html: string): {
    textWithoutHtml: string;
    linkText: string;
  } {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const textWithoutHtml = doc.body.textContent || "";

    const linkElement = doc.querySelector("a");
    const linkText = linkElement ? linkElement.textContent || "" : "";

    return { textWithoutHtml, linkText };
  }

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/6791");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Erro ao buscar dados da página:", error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {error && <PaginaNaoEncontrada />}
      <Container title="Concurso público" className="font-light">
        {loading ? (
          <Loading />
        ) : (
          <>
            {data && (
              <div className="gap-2">
                <div className="mb-5">
                  {extractTextFromHtml(data.content.rendered)}
                </div>
                <LinkConcurso
                  href="/concurso/concurso-publico"
                  text={
                    extractTextAndLinkFromHtml(data.content.rendered).linkText
                  }
                  className="pl-5"
                />
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
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
