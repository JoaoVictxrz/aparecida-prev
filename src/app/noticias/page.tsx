"use client";
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { extractTextFromHtml, formatarData } from "@/utils/functions";
import { useEffect, useState } from "react";
import { useNotices } from "@/hooks/useNotices";
import { Button } from "@/components/botao-paginação-noticias";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "../loading";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [page, setPage] = useState(1);
  const { notices, loading, error } = useNotices(`?categories=2`);
  const itensPorPagina = 10;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page, setPage]);

  if (loading) return <Loading />;
  if (error) return <PaginaNaoEncontrada />;

  const totalPages = Math.ceil(notices!.post.length / itensPorPagina);

  const paginaAnterior = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const proximaPagina = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const startIndex = (page - 1) * itensPorPagina;
  const endIndex = startIndex + itensPorPagina;

  return (
    <Container title="Notícias" className="space-y-4">
      <div className="flex flex-col items-center">
        {notices!.post.slice(startIndex, endIndex).map((post, i) => {
          const mediaItem = post.featured_media
            ? notices?.media.find((media) => media.id === post.featured_media)
            : null;
          if (!post) return null;
          return (
            <div key={i} className="w-full max-w-5xl">
              <div className="flex flex-col gap-5 pb-5 md:flex-row">
                {mediaItem ? (
                  <div className="w-full md:w-1/4">
                    <Image
                      src={mediaItem.source_url}
                      alt={"teste"}
                      width={mediaItem.media_details.width}
                      height={500}
                      className="bg-white object-cover"
                    />
                  </div>
                ) : null}
                <div className="h-full w-full md:w-3/4">
                  <p className="text-2xl font-semibold">
                    {post.title.rendered}
                  </p>
                  <p className="pb-2 font-light">
                    Postado em: {formatarData(post.date)}
                  </p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: extractTextFromHtml(post.excerpt.rendered),
                    }}
                    className="line-clamp-4"
                  />
                  <div className="pt-5">
                    <Link
                      href={`/noticias/${post.slug}`}
                      className="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600 hover:underline"
                    >
                      Leia mais
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {notices!.post.length >= 0 && (
        <div className="flex w-full justify-center gap-[2px]">
          <Button onClick={() => setPage(1)} disabled={page === 1}>
            <AiOutlineDoubleLeft />
          </Button>
          <Button onClick={paginaAnterior} disabled={page === 1}>
            <AiOutlineLeft />
          </Button>
          <Button
            onClick={paginaAnterior}
            className={page === 1 ? "hidden" : ""}
          >
            {page - 1}
          </Button>
          <Button>{page}</Button>
          <Button
            onClick={proximaPagina}
            className={page === totalPages ? "hidden" : ""}
          >
            {page + 1}
          </Button>

          <Button onClick={proximaPagina} disabled={page === totalPages}>
            <AiOutlineRight />
          </Button>
          <Button
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages}
          >
            <AiOutlineDoubleRight />
          </Button>
        </div>
      )}
    </Container>
  );
}
