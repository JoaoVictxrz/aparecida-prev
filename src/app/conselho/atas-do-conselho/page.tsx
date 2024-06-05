"use client";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import cheerio, { CheerioAPI } from "cheerio";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<PostsProps>();

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get<PostsProps>("/pages/647");
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
  $("a").addClass("pl-5 text-blue-500 hover:text-blue-700 hover:underline");
  $("strong").removeAttr("style");
  $("span").removeAttr("style");
  $("p").each(function () {
    if ($(this).html()?.trim() === "&nbsp;") {
      $(this).remove();
    }
  });
  $("a").attr("target", "_blank");
  const updateHtml = $.html();

  return (
    <Container title={data?.title.rendered!}>
      <div
        dangerouslySetInnerHTML={{ __html: updateHtml }}
        className="flex flex-col space-y-4"
      />
    </Container>
  );
}
