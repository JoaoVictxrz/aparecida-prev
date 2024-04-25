"use client";
import { useEffect, useState } from "react";
import Container from "@/components/container";
import { formatarData } from "@/services/noticias-services";
import Link from "next/link";
import axios from "axios";
import { AxiosInstance } from "@/services/axios";
import Image from "next/image";

interface PostsProps {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_media: number;
}

interface mediaProps {
  id: number;
  post: number;
  guid: {
    rendered: string;
  };
  media_details: {
    width: number;
    height: number;
  };
  source_url: string;
}

interface Props {
  params: {
    slug: string;
  };
}

export default function Home({ params }: Props) {
  const [posts, setPosts] = useState<PostsProps[] | null>(null);
  const [media, setMedia] = useState<mediaProps[] | null>(null);

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
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    };
    fetchData();
  }, [params.slug]);

  console.log("posts : ", posts, "media : ", media);

  if (!posts) {
    return (
      <Container title="Ops!">
        <h2>Pagina não encontrada</h2>
        <Link href={"/"} className="text-blue-500">
          Voltar a pagina inicial
        </Link>
      </Container>
    );
  }

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
            ></div>
          </div>
        ))}
      </div>
    </Container>
  );
}
