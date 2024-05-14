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
    try {
      const response = await AxiosInstance.get("/pages/6029");
      setData(response.data);
    } catch (error) {
      console.log("Erro ao buscar dados: " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const links = extrairLinksDoHtml(data?.content.rendered!);

  return (
    <Container title={data?.title.rendered!} className="space-y-2">
      {links.map((link, i) => (
        <div key={i}>
          <LinkAzul href={link.url} text={link.text} />
        </div>
      ))}
    </Container>
  );
}
