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
      const response = await AxiosInstance.get<PostsProps>("/pages/5964");
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

  if (error) return <PaginaNaoEncontrada />;
  if (loading) return <Loading />;

  const links = extrairLinksDoHtml(data?.content.rendered!);

  return (
    <Container title={data?.title.rendered!}>
      <div className="flex flex-col gap-2 border-b-[1px] pb-2 dark:border-zinc-800">
        <p>
          Acesso aos contratos pertinentes ao AparecidaPrev clique no link
          abaixo, na sequência inserir o código 7 no campo
          <span className="font-semibold">&nbsp;Gestão&nbsp;</span>e depois
          <span className="font-semibold">&nbsp;Pesquisar:</span>
        </p>
        <div className="pl-5">
          {links.map((link, i) => (
            <div key={i}>
              {link.text.includes("Contratos") && (
                <LinkAzul text={link.text} href={link.url} />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 border-b-[1px] py-2 dark:border-zinc-800">
        <p>
          Acesso as licitações do município e do AparecidaPrev, clique no link
          abaixo:
        </p>
        <div className="pl-5">
          {links.map((link, i) => (
            <div key={i}>
              {link.text.includes("Licitações") && (
                <LinkAzul text={link.text} href={link.url} />
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
