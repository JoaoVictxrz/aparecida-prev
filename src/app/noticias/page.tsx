"use client";
import { extractTextFromHtml, formatarData } from "@/utils/functions";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useNotices } from "@/hooks/useNotices";
import { useState } from "react";
import { Button } from "@/components/botao-paginação-noticias";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "../loading";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [page, setPage] = useState(1);
  const { notices, loading, error } = useNotices(`?categories=2&page=${page}`);

  if (!notices?.post.length) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (error) return <PaginaNaoEncontrada />;

  const total_pages = notices.post.length / 10;

  function proximaPagina() {
    if (page < total_pages) {
      setPage(page + 1);
    }
  }
  function paginaAnterior() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <Container title="Notícias" className="flex flex-col items-center">
      <div className="max-w-5xl">
        {notices!.post.map((post, i) => {
          const mediaItem = post.featured_media
            ? notices?.media.find((media) => media.id === post.featured_media)
            : null;
          if (!post) return null;
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
                <div
                  dangerouslySetInnerHTML={{
                    __html: extractTextFromHtml(post.content.rendered),
                  }}
                  className="pb-4"
                />

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

      {notices.post.length >= 10 && (
        <div className="flex w-full justify-center gap-[2px]">
          <Button onClick={() => paginaAnterior()}>
            <AiOutlineLeft />
          </Button>
          <p>
            {page}/{Math.floor(total_pages)}
          </p>
          <Button onClick={() => proximaPagina()}>
            <AiOutlineRight />
          </Button>
        </div>
      )}
    </Container>
  );
}
