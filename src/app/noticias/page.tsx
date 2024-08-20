"use client";
import { extractTextFromHtml, formatarData } from "@/utils/functions";
import { useEffect, useState } from "react";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import Loading from "../loading";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import { Button } from "@/components/botao-paginação-noticias";
import { useNotices } from "@/hooks/useNotices";
import { fetchPosts } from "@/services/fetch-api";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { notices, loading, error } = useNotices(
    `?categories=2&page=${currentPage}`,
  );
  const [hasMorePages, setHasMorePages] = useState(true);

  useEffect(() => {
    if (notices && notices.post.length >= 10) {
      setHasMorePages(true);
      const fetchData = async () => {
        try {
          const response = await fetchPosts(
            `?categories=2&page=${currentPage + 1}`,
          );
          console.log(response);
          if (response.length === 0) {
            setHasMorePages(false);
          }
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [notices, currentPage]);

  if (!notices?.post.length) return;
  if (loading) return <Loading />;
  if (error) return <PaginaNaoEncontrada />;
  console.log(notices?.post);

  return (
    <Container title="Notícias" className="flex flex-col items-center">
      <div className="max-w-5xl">
        {notices!.post.map((post, i) => {
          const mediaItem = post.featured_media
            ? notices?.media.find((media) => media.id === post.featured_media)
            : null;
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
                <p className="text-2xl font-semibold">{post.title.rendered}</p>
                <p className="pb-4">Postado em: {formatarData(post.date)}</p>
                <p className="pb-4">
                  {extractTextFromHtml(post.content.rendered)}
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
      {/* 
      <div className="flex w-full justify-center gap-[2px]">
        {notices?.post.length >= 10 && (
          <>
            <Button onClick={() => setCurrentPage(1)} disabled={loading}>
              <MdKeyboardDoubleArrowLeft />
            </Button>
            <Button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={loading}
            >
              <MdKeyboardArrowLeft />
            </Button>
          </>
        )}
        <Button className="bg-zinc-200 dark:bg-zinc-800" disabled>
          {currentPage}
        </Button>
        {hasMorePages && (
          <>
            <Button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={loading}
            >
              <MdKeyboardArrowRight />
            </Button>
          </>
        )}
      </div> */}
    </Container>
  );
}
