"use client";
import { extractTextFromHtml, formatarData } from "@/services/services";
import { PostsProps, mediaProps } from "@/services/interfaces";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import Container from "@/components/container";
import Loading from "../loading";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

export default function Home() {
  const [posts, setPosts] = useState<PostsProps[] | null>(null);
  const [media, setMedia] = useState<mediaProps[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await AxiosInstance.get<PostsProps[]>(
          "/posts?categories=2",
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
  }, []);

  console.log("posts : ", posts, "media : ", media);

  return (
    <Container title="Notícias" className="flex w-full justify-center">
      <div className="max-w-4xl">
        {posts?.map((post, i) => (
          <div key={i}>
            {media && media[i] ? (
              <div className="pb-10">
                <Image
                  src={media[i].guid.rendered}
                  alt={media[i].source_url}
                  width={media[i].media_details.width}
                  height={200}
                  className=""
                />
                <div
                  className="text-2xl font-semibold"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <p className="pb-4">Postado em: {formatarData(post.date)}</p>
                <p>{extractTextFromHtml(post.excerpt.rendered)}</p>
                <Link href={`/noticias/${post.slug}`}>Leia mais</Link>
              </div>
            ) : (
              <div className="bg-white">
                <Loading />
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
