"use client";
import LinkAzul from "@/app/institucional/components/links";
import Container from "@/components/container";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import { extrairLinksDoHtml } from "@/utils/functions";
import { useEffect, useState } from "react";

interface Link {
  url: string;
  text: string;
}

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const [links, setLinks] = useState<Link[]>([]);

  const fetchData = async () => {
    const response = await AxiosInstance.get<PostsProps>("/pages/6039");
    setData(response.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Erro ao buscar dados: " + error);
    }
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
    <Container title={data?.title.rendered!}>
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
    </Container>
  );
}
