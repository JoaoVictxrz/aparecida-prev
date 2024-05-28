"use client";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { formatarData } from "@/utils/functions";
import { PostsProps } from "@/interfaces/interfaces";
import cheerio, { CheerioAPI } from "cheerio";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "@/app/loading";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export default function Home({ params }: Props) {
  const [data, setData] = useState<PostsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/posts?slug=" + params.slug);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar dados da página:", error);
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, [params.slug]);

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  const $: CheerioAPI = cheerio.load(data[0].content.rendered);

  return (
    <Container
      title={data[0].title.rendered}
      PostadoEm={formatarData(data[0].date)}
      className="flex flex-col items-center"
    >
      {data[0].jetpack_featured_media_url && (
        <Image
          src={data[0].jetpack_featured_media_url}
          alt={data[0].title.rendered}
          width={500}
          height={500}
        />
      )}
      <div
        dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}
        className="flex flex-col space-y-4"
      />
    </Container>
  );
}
