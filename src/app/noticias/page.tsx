"use client";
import { extractTextFromHtml, formatarData } from "@/utils/functions";
import { PostsProps, mediaProps } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

export default function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [media, setMedia] = useState<mediaProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itensPorPagina = 10;
  const numeroMeio = currentPage;
  const proxNumero = numeroMeio + 1;
  const antNumero = numeroMeio - 1;

  const fetchData = async (page: number) => {
    try {
      const postsResponse = await AxiosInstance.get<PostsProps[]>(
        `/posts?categories=2&page=${page}`,
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

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <Container title="Notícias" className="flex flex-col items-center">
      <div className="max-w-5xl">
        {posts?.map((post, i) => (
          <div key={i}>
            <div className="pb-10">
              {media && media[i] && i < itensPorPagina && (
                <Image
                  src={media[i].guid.rendered}
                  alt={media[i].source_url}
                  width={media[i].media_details.width}
                  height={media[i].media_details.height}
                  className="h-[500px] w-full object-contain"
                />
              )}
              <div
                className="text-2xl font-semibold"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <p className="pb-4">Postado em: {formatarData(post.date)}</p>
              <p className="pb-4">
                {extractTextFromHtml(post.excerpt.rendered)}
              </p>
              <div className="flex w-full justify-center">
                <Link
                  href={`/noticias/${post.slug}`}
                  className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600 hover:underline"
                >
                  Leia mais
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-[2px]">
        <Button
          onClick={() => (
            setCurrentPage(1), window.scrollTo({ top: 0, behavior: "smooth" })
          )}
          className={`${antNumero < 1 && "hidden"}`}
        >
          <MdKeyboardDoubleArrowLeft />
        </Button>
        <Button
          className={`${antNumero < 1 && "hidden"}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <MdKeyboardArrowLeft />
        </Button>
        <Button
          className={`${antNumero < 1 && "hidden"}`}
          onClick={() => setCurrentPage(antNumero)}
        >
          {antNumero}
        </Button>
        <Button className="bg-zinc-200 dark:bg-zinc-800">{numeroMeio}</Button>
        <Button
          className={`${proxNumero > 13 && "hidden"}`}
          onClick={() => (
            setCurrentPage(proxNumero),
            proxNumero === 13 && window.scrollTo({ top: 0, behavior: "smooth" })
          )}
        >
          {proxNumero}
        </Button>
        <Button
          className={`${proxNumero > 13 && "hidden"}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <MdKeyboardArrowRight />
        </Button>
        <Button
          onClick={() => (
            setCurrentPage(13), window.scrollTo({ top: 0, behavior: "smooth" })
          )}
          className={`${proxNumero > 13 && "hidden"}`}
        >
          <MdKeyboardDoubleArrowRight />
        </Button>
      </div>
    </Container>
  );
}

const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={`rounded-sm border-2 px-2 dark:border-zinc-800 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
