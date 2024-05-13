"use client";
import LinkAzul from "@/app/institucional/components/links";
import Container from "@/components/container";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import { extrairLinksDoHtml } from "@/utils/functions";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const fetchData = async () => {
    const response = await AxiosInstance.get<PostsProps>("/pages/6560");
    setData(response.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Erro ao buscar dados: " + error);
    }
  }, []);

  return (
    <Container title={data?.title.rendered!} className="space-y-2">
      {/* Tem que rever essa parte */}
      <div dangerouslySetInnerHTML={{ __html: data?.content.rendered! }}></div>
    </Container>
  );
}
