"use client";
import { formatarData } from "@/utils/functions";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import useFetchPosts from "@/hooks/useFetchPosts";
import Container from "@/components/container";
import Loading from "@/app/loading";

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  const { posts, loading, error } = useFetchPosts(`/posts?slug=${params.slug}`);

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  return (
    <div>
      {posts?.map((post) => (
        <Container
          title={post.title.rendered}
          key={post.id}
          className="grid max-w-xl"
          PostadoEm={formatarData(post.date)}
        >
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </Container>
      ))}
    </div>
  );
}
