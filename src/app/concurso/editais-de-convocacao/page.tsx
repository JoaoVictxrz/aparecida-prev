"use client";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import Container from "@/components/container";
import Loading from "@/app/loading";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get<PostsProps>("/pages/6560");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Erro ao buscar dados: " + error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {error ? (
        <PaginaNaoEncontrada />
      ) : (
        <Container title={data?.title.rendered!} className="space-y-2">
          {/* Tem que rever essa parte */}
          {loading ? (
            <Loading />
          ) : (
            <div
              dangerouslySetInnerHTML={{ __html: data?.content.rendered! }}
            ></div>
          )}
        </Container>
      )}
    </>
  );
}
