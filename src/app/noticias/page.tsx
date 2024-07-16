"use client";
import { extractTextFromHtml, formatarData } from "@/utils/functions";
import { PostsProps, mediaProps } from "@/interfaces/interfaces";
import { useCallback, useEffect, useState } from "react";
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
import Loading from "../loading";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import { fetchMedia, fetchPosts } from "@/services/fetch-noticias";
import { Button } from "@/components/botao-paginação-noticias";

interface Props {
  posts: PostsProps[];
  media: mediaProps[];
}

export default function Home() {
  const [proxPagina, setProxPagina] = useState<PostsProps[]>([]);
  const [data, setData] = useState<Props | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const numeroMeio = currentPage;
  const proxNumero = numeroMeio + 1;
  const antNumero = numeroMeio - 1;

  const fetchData = useCallback(async (page: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    try {
      setLoading(true);
      const posts = await fetchPosts(page);
      const mediaIds = posts
        .map((post) => post.featured_media)
        .filter((id) => id);
      const media = await fetchMedia(mediaIds);
      const combinedData: Props = { posts, media };
      setData(combinedData);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, fetchData]);

  useEffect(() => {
    const loadNextPage = async () => {
      try {
        if (data && data.posts && data.posts.length >= 10) {
          const nextPagePosts = await fetchPosts(currentPage + 1);
          setProxPagina(nextPagePosts);
        } else {
          setProxPagina([]);
        }
      } catch (error) {
        console.error("Erro ao buscar a próxima página:", error);
        setProxPagina([]);
      }
    };
    loadNextPage();
  }, [currentPage, data]);

  if (loading) return <Loading />;
  if (error) return <PaginaNaoEncontrada />;

  return (
    <Container title="Notícias" className="flex flex-col items-center">
      <div className="max-w-5xl">
        {data?.posts.map((post, i) => {
          const mediaItem = data.media.find(
            (media) => media.id === post.featured_media,
          );
          return (
            <div key={i}>
              <div className="pb-10">
                {mediaItem ? (
                  <div className="h-full w-full">
                    <Image
                      src={mediaItem.source_url}
                      alt={"teste"}
                      width={mediaItem.media_details.width}
                      height={200}
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <div
                  className="text-2xl font-semibold"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <p className="pb-4">Postado em: {formatarData(post.date)}</p>
                <p className="pb-4">
                  {extractTextFromHtml(post.excerpt.rendered)}
                </p>

                <Link
                  href={`/noticias/${post.slug}`}
                  className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600 hover:underline"
                >
                  Leia mais
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex w-full justify-center gap-[2px]">
        {data && data.posts.length < 10 ? null : (
          <>
            <Button
              onClick={() => (
                setCurrentPage(1),
                window.scrollTo({ top: 0, behavior: "smooth" })
              )}
              className={`${antNumero < 1 && "hidden"}`}
            >
              <MdKeyboardDoubleArrowLeft />
            </Button>
            <Button
              className={`${antNumero < 1 && "hidden"}`}
              onClick={() => (
                setCurrentPage(currentPage - 1),
                window.scrollTo({ top: 0, behavior: "smooth" })
              )}
            >
              <MdKeyboardArrowLeft />
            </Button>
            <Button
              className={`${antNumero < 1 && "hidden"}`}
              onClick={() => (
                setCurrentPage(antNumero),
                window.scrollTo({ top: 0, behavior: "smooth" })
              )}
            >
              {antNumero}
            </Button>
            <Button className="bg-zinc-200 dark:bg-zinc-800">
              {numeroMeio}
            </Button>
            <Button
              className={`${proxPagina.length <= 0 && "hidden"}`}
              onClick={() => (
                setCurrentPage(proxNumero),
                window.scrollTo({ top: 0, behavior: "smooth" })
              )}
            >
              {proxNumero}
            </Button>
            <Button
              className={`${proxNumero > 13 && "hidden"}`}
              onClick={() => (
                setCurrentPage(currentPage + 1),
                window.scrollTo({ top: 0, behavior: "smooth" })
              )}
            >
              <MdKeyboardArrowRight />
            </Button>
            <Button
              onClick={() => (
                setCurrentPage(13),
                window.scrollTo({ top: 0, behavior: "smooth" })
              )}
              className={`${proxPagina.length <= 0 && "hidden"}`}
            >
              <MdKeyboardDoubleArrowRight />
            </Button>
          </>
        )}
      </div>
    </Container>
  );
}
