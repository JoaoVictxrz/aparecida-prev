"use client";
import Loading from "@/app/loading";
import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPages from "@/hooks/useFetchPages";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import { CheerioLink } from "@/services/cheerio-link-azuk";
import cheerio from "cheerio";
import { useEffect, useState } from "react";

export default function Home() {
  const { pages, error, loading } = useFetchPages(
    "?slug=gestao-financeira-e-administrativa",
  );
  if (!pages) return;
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  const page = pages[0];

  const updatedHTML = CheerioLink(page.content.rendered);

  return (
    <Container title={page.title.rendered} className="flex flex-col">
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="space-y-4"
      />
    </Container>
  );
}
