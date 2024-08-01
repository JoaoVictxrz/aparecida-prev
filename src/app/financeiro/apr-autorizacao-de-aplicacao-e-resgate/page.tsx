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
    try {
      const fetchData = async () => {
        const response = await AxiosInstance.get("/posts?categories=22");
        setPosts(response.data);
        if (posts.length > 10) {
          const responsePage2 = await AxiosInstance.get(
            "/posts?categories=22&page=2",
          );
          setPosts((prevPosts) => [...prevPosts, ...responsePage2.data]);
        }
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  }, [posts]);

  return (
    <>
      {error && <PaginaNaoEncontrada />}
      {loading ? (
        <Loading />
      ) : (
        <Container
          title="APR – Autorização de Aplicação e Resgate"
          className="grid md:grid-cols-2"
        >
          {posts?.map((post, i) => (
            <Cards
              key={i}
              title={post.title.rendered}
              postadoEm={post.date}
              descrição={post.excerpt.rendered}
              href={`/financeiro/apr-autorizacao-de-aplicacao-e-resgate/${post.slug}`}
            />
          ))}
        </Container>
      )}
    </>
  );
}
