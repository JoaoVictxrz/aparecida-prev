"use client";
import { useEffect, useState } from "react";
import { extrairLinksDoHtml } from "@/utils/functions";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import LinkAzul from "@/app/institucional/components/links";
import Loading from "@/app/loading";

interface Link {
  url: string;
  text: string;
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState<Link[]>([]);
  const [error, setError] = useState(false);
  const [data, setData] = useState<PostsProps>();

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get<PostsProps>("/pages/6039");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Erro ao buscar dados: " + error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      const extractedLinks = extrairLinksDoHtml(data.content.rendered);
      const filteredLinks = extractedLinks.filter((link, i) => i !== 15);
      const updatedLinks = filteredLinks.map((link, i) => {
        if (i === 15) {
          return { ...link, text: "Parecer Jurídico n°167/2022" };
        }
        return link;
      });

      setLinks(updatedLinks);
    }
  }, [data]);

  return (
    <>
      {error && <PaginaNaoEncontrada />}
      <Container title={data?.title.rendered!}>
        {loading ? (
          <Loading />
        ) : (
          <div className="space-y-2">
            <h1 className="font-bold">ELEIÇÃO 2023 – PLEITO HOMOLOGADO</h1>
            <div className="flex flex-col pl-5">
              {links.slice(0, 9).map((link, i) => (
                <LinkAzul href={link.url} text={link.text} key={i} />
              ))}
            </div>
            <h2 className="font-bold">ELEIÇÃO 2022 – PLEITO HOMOLOGADO</h2>
            <div className="flex flex-col pl-5">
              {links.slice(9).map((link, i) => (
                <LinkAzul href={link.url} text={link.text} key={i + 9} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
