"use client";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "@/app/loading";
import cheerio from "cheerio";
import useFetchPages from "@/hooks/useFetchPages";
import { CheerioLink } from "@/services/cheerio-link-azuk";

export default function Home() {
  const { pages, error, loading } = useFetchPages(
    "?slug=planejamento-estrategico",
  );
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;
  const page = pages[0];
  const updatedHTML = CheerioLink(page.content.rendered!);
  return (
    <Container title="Planejamento estrategico">
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="space-y-4"
      />
    </Container>
  );
}
