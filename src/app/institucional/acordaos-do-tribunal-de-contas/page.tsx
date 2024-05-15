"use client";
import Container from "@/components/container";
import LinkAzul from "../components/links";
import { useEffect, useState } from "react";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import { extrairLinksDoHtml } from "@/utils/functions";

export default function Home() {
  const [data, setData] = useState<PostsProps>();

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get<PostsProps>("/pages/5982");
      setData(response.data);
    } catch (error) {
      console.log("erro ao buscar dados: " + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const links = extrairLinksDoHtml(data?.content.rendered!);
  return (
    <Container title={data?.title.rendered!} className="flex flex-col">
      {links.map((link, i) => {
        return (
          <LinkAzul href={link.url} text={link.text} key={i} className="pl-5" />
        );
      })}
    </Container>
  );
}
