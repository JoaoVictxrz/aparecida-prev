"use client";
import { extrairLinksDoHtml } from "@/utils/functions";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import LinkAzul from "@/app/institucional/components/links";
import Loading from "@/app/loading";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/6961");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Erro ao buscar dados da página:", error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const links = extrairLinksDoHtml(data?.content.rendered!);

  return (
    <>
      {error && <PaginaNaoEncontrada />}
      <Container title={data?.title.rendered!} className="space-y-2">
        {loading ? (
          <Loading />
        ) : (
          <div>
            {links.map((link, i) => (
              <div key={i} className="line-clamp-1 md:pl-5">
                <LinkAzul href={link.url} text={link.text} className="w-3/4" />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
