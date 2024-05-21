"use client";
import { PostsProps } from "@/interfaces/interfaces";
import LinkAzul from "../components/links";
import Container from "@/components/container";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { extrairLinksDoHtml } from "@/utils/functions";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Loading from "@/app/loading";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get<PostsProps>("/pages/1828");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("erro ao buscar dados: ", error);
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
    <Container title={data?.title.rendered!} className="flex flex-col">
      {links.map((link, i) => (
        <LinkAzul href={link.url} text={link.text} key={i} className="pl-5" />
      ))}
    </Container>
  );
}
