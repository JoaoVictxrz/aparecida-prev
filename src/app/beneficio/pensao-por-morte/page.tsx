"use client";
import Container from "@/components/container";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<PostsProps>();

  const fetchData = async () => {
    const response = await AxiosInstance.get("/pages/6517");
    setData(response.data);
  };
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Erro ao buscar dados: " + error);
    }
  }, []);

  return (
    <Container title={data?.title.rendered!} className="space-y-4">
      {/* Tem que rever essa parte */}
      <div dangerouslySetInnerHTML={{ __html: data?.content.rendered! }}></div>
    </Container>
  );
}
