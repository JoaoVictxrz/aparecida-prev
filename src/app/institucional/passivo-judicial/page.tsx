"use client";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { extrairLinksDoHtml } from "@/utils/functions";
import { PostsProps } from "@/interfaces/interfaces";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import LinkAzul from "../components/links";
import Loading from "@/app/loading";
import useFetchPages from "@/hooks/useFetchPages";
import { CheerioLink } from "@/services/cheerio-link-azuk";

export default function Home() {
  const { pages, error, loading } = useFetchPages("?slug=passivo-judicial");

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (!pages) return;

  const data = pages[0];

  const updatedHTML = CheerioLink(data.content.rendered!);

  return (
    <Container title={data?.title.rendered!}>
      <div dangerouslySetInnerHTML={{ __html: updatedHTML }} />
    </Container>
  );
}
