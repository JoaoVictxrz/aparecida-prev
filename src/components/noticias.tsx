// import { AxiosInstance } from '@/app/api/axios'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
const imageTest = "https://static.pingendo.com/cover-moon.svg";

interface posts {
  userId: number;
  id: number;
  title: string;
  body: string;
  Image: string;
}

export default function Noticias() {
  // const [data, setData] = useState<posts[]>([])

  const initialData: posts[] = [
    {
      userId: 1,
      id: 1,
      title: "Noticia 1",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      Image: imageTest,
    },
    {
      userId: 2,
      id: 2,
      title: "Noticia 2",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      Image: imageTest,
    },
    {
      userId: 3,
      id: 3,
      title: "Noticia 3",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      Image: imageTest,
    },
  ];
  const [data, setData] = useState<posts[]>(initialData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const params = 3
  //       const data = await AxiosInstance.get(`posts?_start=0&_limit=${params}`)
  //       setData(data.data)
  //       console.log(data.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchData()
  // }, [])

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
          {data.map((post) => (
            <article
              key={post.id}
              className="mx-5 my-2 flex h-full max-w-md flex-col justify-between overflow-hidden bg-white p-2 shadow-md dark:bg-zinc-900 md:max-w-2xl"
            >
              <div>
                <Image
                  src={post.Image}
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="h-full pt-4">
                <h2 className="py-2 text-2xl font-bold dark:text-white">
                  {post.title}
                </h2>
                <p className="line-clamp-4 text-gray-600 dark:text-zinc-100">
                  {post.body}
                </p>
              </div>
              <div className="mb-2 flex w-full items-center justify-center">
                <Link
                  href={`/${post.id}`}
                  className="rounded border-2 border-blue-500 p-2 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-800 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700"
                >
                  Leia mais
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
