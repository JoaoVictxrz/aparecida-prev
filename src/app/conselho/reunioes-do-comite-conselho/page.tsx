"use client";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import cheerio from "cheerio";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "@/app/loading";
import useFetchPages from "@/hooks/useFetchPages";
import { CheerioLink } from "@/services/cheerio-link-azuk";

export default function Home() {
  const { pages, loading, error } = useFetchPages(
    "?slug=local-de-reunioes-comiteconselho",
  );
  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  const data = pages![0];

  const updateHtml = CheerioLink(data.content.rendered);

  return (
    <Container title="Local e data das reuniões do comitê/conselho">
      <div
        dangerouslySetInnerHTML={{ __html: updateHtml }}
        className="flex flex-col space-y-4"
      />
    </Container>
  );
}
