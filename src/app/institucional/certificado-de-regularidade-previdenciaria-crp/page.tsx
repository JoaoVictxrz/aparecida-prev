"use client";
import { extractTextFromHtml } from "@/utils/functions";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import cheerio, { CheerioAPI } from "cheerio";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/5866");
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

  if (error || !data?.content.rendered) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  const $: CheerioAPI = cheerio.load(data.content.rendered);
  $("a").addClass("text-blue-500 hover:underline hover:text-blue-700");
  $("a[href='https://l1nk.dev/3Sbba']").attr("href", "/");
  $("strong").contents().unwrap();
  $("ul").addClass("pl-5");
  const updatedHTML = $.html();

  return (
    <Container
      title={extractTextFromHtml(data.title.rendered)}
      className="flex flex-col"
    >
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="space-y-4"
      />
    </Container>
  );
}
