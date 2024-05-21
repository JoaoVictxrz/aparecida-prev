"use client";
import { useEffect, useState } from "react";
import { extrairLinksDoHtml } from "@/utils/functions";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import LinkAzul from "../components/links";
import Loading from "@/app/loading";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/3283");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("erro ao buscar dados: ", error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const links = extrairLinksDoHtml(data?.content.rendered!);

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  return (
    <Container title="Planejamento estrategico">
      <div className="gap-2 border-b-[1px] dark:border-zinc-800">
        <p className="font-bold uppercase">planejamento</p>
        <div className="flex flex-col gap-1 pb-2 pl-5 pt-2">
          {links.map((link, i) => (
            <div key={i}>
              {link.text.includes("PLANEJAMENTO") && (
                <LinkAzul text={link.text} href={link.url} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="gap-2 pt-2">
        <p className="font-bold uppercase">plano de ação</p>
        <div className="flex flex-col gap-1 pl-5 pt-2">
          {links.map((link, i) => (
            <div key={i}>
              {link.text.includes("PLANO") && (
                <LinkAzul text={link.text} href={link.url} />
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
