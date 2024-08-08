"use client";
import PaginaSlug from "@/components/slug-page";
import useFetchPosts from "@/hooks/useFetchPosts";

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  const { posts, loading, error } = useFetchPosts(params.slug as string);

  return <PaginaSlug data={posts} loading={loading} error={error} />;
}
