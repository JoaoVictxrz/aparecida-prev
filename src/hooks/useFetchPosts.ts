"use client";
import { useState, useEffect } from "react";
import { PostsProps } from "@/interfaces/interfaces";
import { fetchPosts } from "@/services/fetch-posts";

export default function useFetchPosts(slug: string) {
  const [posts, setPosts] = useState<PostsProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts(slug);
        setPosts(data);
      } catch (err) {
        console.log("Erro ao buscar dados da página:", err);
        if (err instanceof Error) {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  return { posts, loading, error };
}
