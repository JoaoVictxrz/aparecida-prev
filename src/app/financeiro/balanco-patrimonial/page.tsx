"use client";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "@/app/loading";
import Cards from "@/components/card";

export default function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await AxiosInstance.get("/posts?categories=22");
        setPosts(response.data);
        const responsePage2 = await AxiosInstance.get(
          "/posts?categories=22&page=2",
        );
        setPosts((prevPosts) => [...prevPosts, ...responsePage2.data]);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (posts.length === 0) return <Loading />;

  return (
    <Container title="Balanço Patrimonial" className="grid md:grid-cols-2">
      {posts?.map((post, i) => (
        <Cards
          key={i}
          title={post.title.rendered}
          postadoEm={post.date}
          descrição={post.excerpt.rendered}
          href={`/financeiro/balanco-patrimonial/${post.slug}`}
        />
      ))}
    </Container>
  );
}
