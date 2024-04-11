// import { AxiosInstance } from '@/app/api/axios'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
    <section className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-20 text-black dark:text-white">
      <section className="px-2 container">
        <div className="flex justify-between">
          <h1 className="font-bold uppercase text-lg md:text-2xl my-8 dark:text-zinc-100">
            Notícias
          </h1>
          <Link
            href="/"
            className="flex items-center hover:bg-zinc-200 hover:rounded-md p-2 my-8"
          >
            <Image
              src="/mais.svg"
              alt="logo"
              width={20}
              height={20}
              className=""
            />
            Leia mais
          </Link>
        </div>
        <div className="w-full grid grid-cols-1 place-items-center md:grid-cols-3">
          {data.map((post) => (
            <article
              key={post.id}
              className="max-w-md bg-white dark:bg-zinc-800 shadow-md overflow-hidden md:max-w-2xl flex flex-col h-full justify-between mx-5 my-2 p-2"
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
              <div className="pt-4 h-full">
                <h2 className="text-2xl font-bold py-2 dark:text-white">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-zinc-100 line-clamp-4">
                  {post.body}
                </p>
              </div>
              <div className="w-full flex items-center justify-center mb-2">
                <Link
                  href={`/${post.id}`}
                  className="text-blue-500 dark:bg-blue-800 dark:text-white border-2 border-blue-500 dark:border-blue-800 rounded p-2 hover:bg-blue-500 dark:hover:bg-blue-700 hover:text-white"
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
