"use client";
import { PostsProps, mediaProps } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";
import { extractTextFromHtml } from "@/utils/functions";
import { AxiosInstance } from "@/services/axios";
import { CiCirclePlus } from "react-icons/ci";
import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import PaginaNaoEncontrada from "./pagina-nao-encontrada";

export default function Noticias() {
  const [noticias, setNoticias] = useState<PostsProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [media, setMedia] = useState<mediaProps[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const noticiasResponse = await AxiosInstance.get<PostsProps[]>(
          "/posts?categories=2",
        );
        setNoticias(noticiasResponse.data);

        const mediaIds = noticiasResponse.data.map(
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
        console.error("Erro ao buscar os dados:", error);
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  if (error) return <PaginaNaoEncontrada />;

  return (
    <section className="flex w-full justify-center bg-white pb-20 text-black dark:bg-zinc-900 dark:text-white">
      <section className="container px-2">
        <div className="flex justify-between">
          <h1 className="my-8 text-lg font-bold uppercase dark:text-zinc-100 md:text-2xl">
            Notícias
          </h1>
          <Link
            href="/noticias"
            className="my-8 flex items-center gap-1 p-2 hover:rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            <CiCirclePlus size={20} />
            Leia mais
          </Link>
        </div>
        <div className="grid w-full grid-cols-1 place-items-center sm:grid-cols-2 xl:grid-cols-3">
          {noticias?.map(
            (dados, i) =>
              i < 3 && (
                <article
                  key={i}
                  className="mx-5 my-2 flex h-full max-w-sm flex-col justify-between overflow-hidden bg-white p-2 shadow-md dark:bg-zinc-900 sm:mx-0 xl:mx-10"
                >
                  {media && media[i] ? (
                    <div className="h-1/2">
                      <Image
                        src={media[i].guid.rendered}
                        alt={media[i].source_url}
                        width={media[i].media_details.width}
                        height={200}
                        className="h-[200px] w-full"
                      />
                    </div>
                  ) : (
                    <div className="bg-white">
                      <Loading />
                    </div>
                  )}

                  <div className="flex h-1/2 flex-col justify-between py-2">
                    <h2 className="text-base font-semibold uppercase dark:text-white xl:text-xl">
                      {dados.title.rendered}
                    </h2>
                    <p className="line-clamp-4 text-gray-600 dark:text-zinc-100">
                      {extractTextFromHtml(dados.excerpt.rendered)}
                    </p>
                    <div className="flex w-full justify-center">
                      <Link
                        href={`/noticias/${dados.slug}`}
                        className="mt-2 rounded border-2 border-blue-500 p-2 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-800 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700"
                      >
                        Leia mais
                      </Link>
                    </div>
                  </div>
                </article>
              ),
          )}
        </div>
      </section>
    </section>
  );
}
