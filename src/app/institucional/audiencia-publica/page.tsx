"use client";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import cheerio, { CheerioAPI } from "cheerio";
import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Loading from "@/app/loading";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/6515");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Erro ao buscar dados da página:", error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error || !data?.content.rendered) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  const $: CheerioAPI = cheerio.load(data?.content.rendered!);
  $("a").addClass("pl-5 text-blue-500 hover:underline hover:text-blue-700");
  $("a").attr("target", "_blank");
  const selector = {
    1: 'a[href="https://aparecidaprev.go.gov.br/audiencia-publica-de-prestacao-de-contas-2022-e-realizada/"]',
    2: 'a[href="https://aparecidaprev.go.gov.br/audiencia-publica-2023/"]',
  };
  const newHref = {
    1: "/institucional/audiencia-publica/audiencia-publica-de-prestacao-de-contas-2022-e-realizada",
    2: "/institucional/audiencia-publica/audiencia-publica-2023",
  };

  $(selector[1]).attr("href", newHref[1]);
  $(selector[2]).attr("href", newHref[2]);
  $("strong").contents().unwrap();
  $("p").addClass("font-bold");
  const updateHtml = $.html();

  return (
    <Container title={data?.title.rendered}>
      <div
        dangerouslySetInnerHTML={{ __html: updateHtml }}
        className="space-y-4"
      />
    </Container>
  );
}
