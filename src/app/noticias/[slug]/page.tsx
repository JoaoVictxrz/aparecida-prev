"use client";
import { formatarData } from "@/utils/functions";
import { CheerioLink } from "@/services/cheerio-link-azuk";
import { useNotices } from "@/hooks/useNotices";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

export default function Home({ params }: Props) {
  const { notices, error, loading } = useNotices("?slug=" + params.slug);

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  const posts = notices?.post!;
  const media = notices?.media!;

  const updateHtml = CheerioLink(posts[0].content.rendered!);
  return (
    <Container
      title={posts[0].title.rendered}
      className="flex items-center justify-center"
    >
      <div className="max-w-4xl">
        {posts.map((post) => (
          <div className="flex flex-col justify-center" key={post.id}>
            {media && media.length > 0 && media[0] ? (
              <div className="h-full">
                <Image
                  src={media[0].source_url}
                  alt={media[0].id.toString()}
                  width={media[0].media_details.width}
                  height={media[0].media_details.height}
                  className="my-4 pl-4"
                />
              </div>
            ) : null}
            <h1 className="pl-4 text-3xl font-bold">{post.title.rendered}</h1>
            <h2 className="pl-4">Postado em: {formatarData(post.date)}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: updateHtml }}
              className="grid grid-cols-1 gap-4 p-4"
            />
            <div className="flex w-full items-center justify-center">
              <Link
                href="/noticias"
                className="p-2 px-5 text-blue-500 underline hover:text-blue-400"
              >
                Voltar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
