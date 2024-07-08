"use client";
import { PostsProps, mediaProps } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";
import { extractTextFromHtml } from "@/utils/functions";
import { AxiosInstance } from "@/services/axios";
import { CiCirclePlus } from "react-icons/ci";
import PaginaNaoEncontrada from "./pagina-nao-encontrada";
import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";

interface Props {
  posts: PostsProps[];
  media: mediaProps[];
}

export default function Noticias() {
  const [data, setData] = useState<Props | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const postsResponse = await AxiosInstance.get(
        "/posts?categories=2&per_page=3",
      );
      const posts: PostsProps[] = postsResponse.data;

      const mediaIds = posts
        .map((post) => post.featured_media)
        .filter((id) => id);
      const mediaResponse = await AxiosInstance.get(
        `/media?include=${mediaIds.join(",")}`,
      );
      const media: mediaProps[] = mediaResponse.data;

      const combinedData: Props = { posts, media };
      setData(combinedData);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <PaginaNaoEncontrada />;

  return (
    <section className="flex w-full items-center justify-center bg-white pb-20 text-black dark:bg-zinc-900 dark:text-white">
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
        {loading && <Loading />}
        <div className="grid w-full grid-cols-1 place-items-center lg:grid-cols-2 xl:grid-cols-3">
          {data?.posts.map((post) => {
            const mediaItem = data.media.find(
              (media) => media.id === post.featured_media,
            );
            return (
              <Link
                key={post.id}
                className="group mx-5 my-2 flex max-w-sm flex-col justify-between  overflow-hidden bg-white p-2 shadow-md  dark:bg-zinc-900 sm:mx-0 xl:mx-10"
                href={`/noticias/${post.slug}`}
              >
                <div className="justify-cente flex w-full items-center">
                  {mediaItem ? (
                    <div className="h-full w-full">
                      <Image
                        src={mediaItem.source_url}
                        alt={"teste"}
                        width={mediaItem.media_details.width}
                        height={200}
                        className="h-[200px] w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-[200px] w-full items-center justify-center text-black dark:text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-between py-2">
                  <h2 className="line-clamp-2 h-12 text-base font-semibold uppercase dark:text-white xl:h-14 xl:text-xl">
                    {post.title.rendered}
                  </h2>
                  <p className="line-clamp-4 text-gray-600 dark:text-zinc-100">
                    {extractTextFromHtml(post.excerpt.rendered)}
                  </p>
                  <div className="flex w-full justify-center">
                    <Link
                      href={`/noticias/${post.slug}`}
                      className="mt-2 rounded border-2 border-blue-500 p-2 text-blue-500 hover:bg-blue-500 hover:text-white group-hover:bg-blue-500 group-hover:text-white dark:border-blue-800 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700"
                    >
                      Leia mais
                    </Link>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </section>
  );
}
