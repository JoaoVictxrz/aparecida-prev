"use client";
import Container from "@/components/container";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<PostsProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await AxiosInstance.get("/posts?categories=25");
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <Container title="Edital de credenciamento">
      {data.map((post, i) => (
        <div
          key={i}
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      ))}
    </Container>
  );
}
