"use client";
import { useEffect, useState } from "react";
import LinkAzul from "../components/links";
import Container from "@/components/container";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import { extrairLinksDoHtml } from "@/utils/functions";

export default function Home() {
  const [data, setData] = useState<PostsProps>();

  const fetchData = async () => {
    const response = await AxiosInstance.get("/pages/6714");
    setData(response.data);
  };
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Erro ao buscar dados: " + error);
    }
  }, []);

  const links = extrairLinksDoHtml(data?.content.rendered!);

  return (
    <Container title={data?.title.rendered!} className="space-y-2">
      {links.map((link, i) => (
        <div key={i} className="line-clamp-1 md:pl-5">
          <LinkAzul href={link.url} text={link.text} className="w-3/4" />
        </div>
      ))}
    </Container>
  );
}
