"use client";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import CardsFinanceiro from "../components/cards";
import Container from "@/components/container";
import Loading from "@/app/loading";

export default function Home() {
  const [postsDpir, setPostsDpir] = useState<PostsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/posts?categories=27");
        setPostsDpir(response.data);
        const responsePage2 = await AxiosInstance.get(
          "/posts?categories=27&page=2",
        );
        setPostsDpir((prevPosts) => [...prevPosts, ...responsePage2.data]);
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
    <Container
      title="DIPR – Demostrativo de Informações Prev. e Repasse"
      className="grid md:grid-cols-2"
    >
      {postsDpir?.map((post, i) => (
        <CardsFinanceiro
          key={i}
          title={post.title.rendered}
          postadoEm={post.date}
          descrição={post.excerpt.rendered}
          href={post.slug}
          path="dpir-demonstrativo-informacoes-prev-e-repasse"
        />
      ))}
    </Container>
  );
}
