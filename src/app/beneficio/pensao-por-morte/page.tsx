"use client";
import Loading from "@/app/loading";
import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/6517");
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
  if (loading) return <Loading />;
  if (error) return <PaginaNaoEncontrada />;

  return (
    <Container title={data?.title.rendered!} className="space-y-4">
      <div
        dangerouslySetInnerHTML={{ __html: data?.content.rendered! }}
        className="space-y-2"
      />
    </Container>
  );
}
