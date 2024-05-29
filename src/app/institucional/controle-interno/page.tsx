"use client";
import { useEffect, useState } from "react";
import { extrairLinksDoHtml } from "@/utils/functions";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import LinkAzul from "../components/links";
import Loading from "@/app/loading";
import cheerio, { CheerioAPI } from "cheerio";

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

  const $: CheerioAPI = cheerio.load(data?.content.rendered!);
  $("a").addClass("pl-5 text-blue-500 hover:underline hover:text-blue-700");
  $("p").addClass("font-bold");
  $("strong").contents().unwrap();
  const updateHtml = $.html();

  return (
    <Container title={data?.title.rendered!}>
      <div
        dangerouslySetInnerHTML={{ __html: updateHtml }}
        className="space-y-4"
      />
    </Container>
  );
}
