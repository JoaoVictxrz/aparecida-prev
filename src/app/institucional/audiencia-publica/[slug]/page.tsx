"use client";
import { formatarData } from "@/utils/functions";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPosts from "@/hooks/useFetchPosts";
import Container from "@/components/container";
import Loading from "@/app/loading";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export default function Home({ params }: Props) {
  const { posts, loading, error } = useFetchPosts("/posts?slug=" + params.slug);
  if (error || !posts) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;
  if (posts?.length === 0) return <PaginaNaoEncontrada />;

  return (
    <Container
      title={""}
      PostadoEm={formatarData(posts[0].date)}
      className="flex flex-col items-center"
    >
      {posts[0].jetpack_featured_media_url && (
        <Image
          src={posts[0].jetpack_featured_media_url}
          alt={posts[0].title.rendered}
          width={500}
          height={500}
        />
      )}
      <div
        dangerouslySetInnerHTML={{ __html: posts[0].content.rendered }}
        className="flex flex-col space-y-4"
      />
    </Container>
  );
}
