"use client";
import { extractTextFromHtml, extrairLinksDoHtml } from "@/utils/functions";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "@/app/loading";
import LinkAzul from "@/app/institucional/components/links";

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/posts?slug=" + params.slug);
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Erro ao buscar dados da página:", error);
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, [params.slug]);

  if (loading) return <Loading />;
  if (error) return <PaginaNaoEncontrada />;

  return (
    <>
      {posts.length === 0 ? (
        <PaginaNaoEncontrada />
      ) : (
        posts.map((post) => {
          const links = extrairLinksDoHtml(post.content.rendered || "");
          return (
            <Container
              title={extractTextFromHtml(post.title.rendered)}
              key={post.id}
              className="grid max-w-xl"
            >
              {links.map((link, i) => (
                <LinkAzul key={i} href={link.url} text={link.text} />
              ))}
            </Container>
          );
        })
      )}
    </>
  );
}
