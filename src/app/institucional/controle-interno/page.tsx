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
      const response = await AxiosInstance.get("/pages/5975");
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
    <Container title={data?.title.rendered!}>
      <h1 className="font-bold">2023</h1>
      {links.map((link, i) => (
        <div key={i} className="pl-5 pt-1">
          {link.text.includes("2023") && (
            <LinkAzul href={link.url} text={link.text} />
          )}
        </div>
      ))}
      <h2 className="font-bold">2022</h2>
      {links.map((link, i) => (
        <div key={i} className="pl-5 pt-1">
          {link.text.includes("2022") && (
            <LinkAzul href={link.url} text={link.text} />
          )}
        </div>
      ))}
    </Container>
  );
}
