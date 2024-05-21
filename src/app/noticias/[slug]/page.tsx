"use client";
import { PostsProps, mediaProps } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { formatarData } from "@/utils/functions";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Loading from "@/app/loading";

interface Props {
  params: {
    slug: string;
  };
}

export default function Home({ params }: Props) {
  const [posts, setPosts] = useState<PostsProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState<mediaProps[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await AxiosInstance.get<PostsProps[]>(
          "/posts?slug=" + params.slug,
        );
        setPosts(postsResponse.data);

        const mediaIds = postsResponse.data.map(
          (noticia) => noticia.featured_media,
        );

        const mediaResponses = [];

        for (const mediaId of mediaIds) {
          const response = await AxiosInstance.get<mediaProps[]>(
            `/media?include=${mediaId}`,
          );
          mediaResponses.push(response.data);
        }
        setMedia(mediaResponses.map((response) => response[0]));
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, [params.slug]);

  if (error || !posts) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  return (
    <Container title="Noticias" className="flex items-center justify-center">
      <div className="max-w-4xl ">
        {posts.map((post) => (
          <div className="flex flex-col justify-center" key={post.id}>
            {media && (
              <div className="h-full">
                <Image
                  src={media[0].source_url}
                  alt={media[0].id.toString()}
                  width={media[0].media_details.width}
                  height={media[0].media_details.height}
                  className="my-4 pl-4"
                />
              </div>
            )}
            <h1 className="pl-4 text-3xl font-bold">{post.title.rendered}</h1>
            <h2 className="pl-4">Postado em: {formatarData(post.date)}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              className="grid grid-cols-1 gap-4 p-4"
            />
            <div className="flex w-full items-center justify-center">
              <Link
                href="/noticias"
                className="p-2 px-5 text-blue-500 underline hover:text-blue-400"
              >
                Voltar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
