"use client";
import { AxiosInstance } from "@/services/axios";
import { extractTextFromHtml } from "@/services/noticias-services";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Image from "next/image";
import Loading from "@/app/loading";

interface noticiasProps {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  guid: {
    rendered: string;
  };
  slug: string;
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
  link: string;
}

export default function Noticias() {
  const [noticias, setNoticias] = useState<noticiasProps[] | null>(null);
  const [media, setMedia] = useState<mediaProps[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const noticiasResponse = await AxiosInstance.get<noticiasProps[]>(
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
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="flex w-full justify-center bg-white pb-20 text-black dark:bg-zinc-900 dark:text-white">
      <section className="container px-2">
        <div className="flex justify-between">
          <h1 className="my-8 text-lg font-bold uppercase dark:text-zinc-100 md:text-2xl">
            Notícias
          </h1>
          <Link
            href="/"
            className="my-8 flex items-center gap-1 p-2 hover:rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            <CiCirclePlus size={20} />
            Leia mais
          </Link>
        </div>
        <div className="grid w-full grid-cols-1 place-items-center md:grid-cols-3">
          {noticias?.map(
            (dados, i) =>
              i < 3 && (
                <article
                  key={i}
                  className="mx-5 my-2 flex h-full max-w-md flex-col justify-between  overflow-hidden bg-white p-2 shadow-md dark:bg-zinc-900 md:max-w-2xl"
                >
                  {media && media[i] ? (
                    <div className="h-1/2">
                      <Image
                        src={media[i].guid.rendered}
                        alt={media[i].link}
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
                    <h2 className="text-xl font-semibold uppercase dark:text-white">
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
