"use client";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import cheerio, { CheerioAPI } from "cheerio";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "@/app/loading";
import { extractTextFromHtml } from "@/utils/functions";

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/posts?slug=" + params.slug);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar dados da página:", error);
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, [params.slug]);

  if (loading) return <Loading />;
  if (error) return <PaginaNaoEncontrada />;

  const $: CheerioAPI = cheerio.load(posts[0]?.content.rendered);
  $("a").addClass("pl-5 text-blue-500 hover:text-blue-700 hover:underline");
  $("a").attr("target", "_blank");
  const updatedHTML = $.html();

  return (
    <Container title={extractTextFromHtml(posts[0]?.title.rendered)}>
      <div
        dangerouslySetInnerHTML={{ __html: updatedHTML }}
        className="space-y-2"
      />
    </Container>
  );
}
