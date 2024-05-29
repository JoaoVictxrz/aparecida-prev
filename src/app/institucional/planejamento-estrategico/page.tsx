"use client";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "@/app/loading";
import cheerio, { CheerioAPI } from "cheerio";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/3283");
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

  const $: CheerioAPI = cheerio.load(data?.content.rendered!);
  $("a").addClass("pl-5 text-blue-500 hover:underline hover:text-blue-700");
  $("a").attr("target", "_blank");
  $("p").addClass("font-bold");
  $("strong").contents().unwrap();
  const updatedHTML = $.html();

  return (
    <Container title="Planejamento estrategico">
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="space-y-4"
      />
    </Container>
  );
}
