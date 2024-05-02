"use client";
import { extractTextFromHtml, extrairLinksDoHtml } from "@/utils/functions";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import LinkAzul from "@/app/institucional/components/links";
import Loading from "@/app/loading";

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  const [posts, setPosts] = useState<PostsProps[]>();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await AxiosInstance.get("/posts?slug=" + params.slug);
        setPosts(response.data);
      };
      fetchData();
    } catch (error) {
      console.log("Erro ao buscar dados da página:", error);
    }
  }, [params.slug]);

  if (posts?.length === 0) return <PaginaNaoEncontrada />;
  if (!posts) return <Loading />;
  if (!posts[0]?.content.rendered) return;

  const links = extrairLinksDoHtml(posts[0].content.rendered);

  return (
    <div>
      {posts?.map((post) => (
        <Container
          title={extractTextFromHtml(post.title.rendered)}
          key={post.id}
          className="grid max-w-xl"
        >
          {links.map((link, i) => (
            <LinkAzul key={i} href={link.url} text={link.text} />
          ))}
        </Container>
      ))}
    </div>
  );
}
