"use client";
import Loading from "@/app/loading";
import Container from "@/components/container";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import { useEffect, useState } from "react";
export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/2789");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  return (
    <Container title="Membros dos conselhos">
      <div
        dangerouslySetInnerHTML={{ __html: data?.content.rendered! }}
        className="flex flex-col space-y-2"
      />
    </Container>
  );
}
