"use client";
import Loading from "@/app/loading";
import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import cheerio, { CheerioAPI } from "cheerio";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<PostsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get(
        "/pages?slug=gestao-financeira-e-administrativa",
      );
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

  const $: CheerioAPI = cheerio.load(data[0]?.content.rendered!);
  $("a").addClass("pl-5 text-blue-500 hover:underline hover:text-blue-700");
  $("a").attr("target", "_blank");
  const updatedHTML = $.html();

  return (
    <Container title={data[0].title.rendered} className="flex flex-col">
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="space-y-4"
      />
    </Container>
  );
}
