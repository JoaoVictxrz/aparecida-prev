"use client";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "@/app/loading";
import Cards from "@/components/card";

export default function Home() {
  const [postsDpir, setPostsDpir] = useState<PostsProps[]>([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await AxiosInstance.get("/posts?categories=15");
        setPostsDpir(response.data);
        const responsePage2 = await AxiosInstance.get(
          "/posts?categories=15&page=2",
        );
        setPostsDpir((prevPosts) => [...prevPosts, ...responsePage2.data]);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!postsDpir) return <Loading />;
  if (postsDpir.length === 0) return <PaginaNaoEncontrada />;

  return (
    <Container
      title="DIPR – Demostrativo de Informações Prev. e Repasse"
      className="grid md:grid-cols-2"
    >
      {postsDpir?.map((post, i) => (
        <Cards
          key={i}
          title={post.title.rendered}
          postadoEm={post.date}
          descrição={post.excerpt.rendered}
          href={`/institucional/instituicoes-financeiras/${post.slug}`}
        />
      ))}
    </Container>
  );
}
