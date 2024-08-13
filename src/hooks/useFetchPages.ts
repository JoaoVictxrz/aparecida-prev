"use client";
import { useState, useEffect } from "react";
import { PostsProps } from "@/interfaces/interfaces";
import { fetchPages } from "@/services/fetch-posts";

export default function useFetchPages(slug: string) {
  const [pages, setPages] = useState<PostsProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPages(slug);
        setPages(data);
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

  return { pages, loading, error };
}
