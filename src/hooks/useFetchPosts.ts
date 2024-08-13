"use client";
import { useState, useEffect } from "react";
import { PostsProps } from "@/interfaces/interfaces";
import { fetchPosts } from "@/services/fetch-api";

interface Props {
  posts: PostsProps[] | null;
  loading: boolean;
  error: boolean;
}
export default function useFetchPosts(slug: string) {
  const [state, setState] = useState<Props>({
    posts: null,
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts(slug);
        setState({
          posts: data,
          loading: false,
          error: false,
        });
      } catch (err) {
        console.log("Erro ao buscar dados da página:", err);
        setState({ posts: null, loading: false, error: true });
      }
    };
    fetchData();
  }, [slug]);

  return state;
}
