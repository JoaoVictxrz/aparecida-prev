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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/posts?categories=19");
        setPosts(response.data);
        const responsePage2 = await AxiosInstance.get(
          "/posts?categories=19&page=2",
        );
        setPosts((prevPosts) => [...prevPosts, ...responsePage2.data]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <PaginaNaoEncontrada />;

  return (
    <Container title="Comparativo da Despesa" className="grid md:grid-cols-2">
      {posts?.map((post, i) => (
        <Cards
          key={i}
          title={post.title.rendered}
          postadoEm={post.date}
          descrição={post.excerpt.rendered}
          href={`/financeiro/comparativo-da-despesa/${post.slug}`}
        />
      ))}
    </Container>
  );
}
