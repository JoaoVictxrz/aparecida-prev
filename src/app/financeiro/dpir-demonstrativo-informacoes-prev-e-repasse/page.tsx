"use client";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import CardsFinanceiro from "../components/cards";
import Container from "@/components/container";

export default function Home() {
  const [postsDpir, setPostsDpir] = useState<PostsProps[]>();
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await AxiosInstance.get("/posts?categories=27");
        setPostsDpir(response.data);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
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
