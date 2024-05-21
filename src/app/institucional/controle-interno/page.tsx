"use client";
import { useEffect, useState } from "react";
import { extrairLinksDoHtml } from "@/utils/functions";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import LinkAzul from "../components/links";
import Loading from "@/app/loading";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/5975");
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

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

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
