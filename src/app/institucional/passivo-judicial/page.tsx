"use client";
import { PostsProps } from "@/interfaces/interfaces";
import LinkAzul from "../components/links";
import Container from "@/components/container";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { extrairLinksDoHtml } from "@/utils/functions";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/5958");
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
    <Container title={data?.title.rendered!}>
      {links.map((link, i) => (
        <LinkAzul href={link.url} text={link.text} key={i} className="pl-5" />
      ))}
    </Container>
  );
}
