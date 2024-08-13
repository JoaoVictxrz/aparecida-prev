"use client";
import { useState, useEffect } from "react";
import { PostsProps } from "@/interfaces/interfaces";
import { fetchPages } from "@/services/fetch-api";

interface Props {
  pages: PostsProps[] | null;
  loading: boolean;
  error: boolean;
}

export default function useFetchPages(slug: string) {
  const [state, setState] = useState<Props>({
    pages: null,
    loading: true,
    error: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPages(slug);
        setState({ pages: data, loading: false, error: false });
      } catch (err) {
        console.log("Erro ao buscar dados da página:", err);
        setState({ pages: null, loading: false, error: true });
      }
    };
    fetchData();
  }, [slug]);

  return state;
}
