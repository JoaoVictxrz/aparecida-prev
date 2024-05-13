"use client";
import Container from "@/components/container";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Organograma() {
  const [data, setData] = useState<PostsProps>();

  const fetchData = async () => {
    const response = await AxiosInstance.get("/pages/6609");
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
    <Container title={data?.title.rendered!} className="flex justify-center">
      <div dangerouslySetInnerHTML={{ __html: data?.content.rendered! }}></div>
    </Container>
  );
}
