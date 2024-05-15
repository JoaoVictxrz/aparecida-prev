"use client";
import { useEffect, useState } from "react";
import { extrairLinksDoHtml } from "@/utils/functions";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import Container from "@/components/container";
import LinkAzul from "../components/links";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/6016");
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
    <Container title={data?.title.rendered!} className="flex flex-col pl-5">
      {links.map((link, i) => (
        <LinkAzul
          key={i}
          href={link.url}
          text={link.text}
          className={`${link.text.includes("RELATÓRIO") ? "font-semibold" : ""}`}
        />
      ))}
    </Container>
  );
}
