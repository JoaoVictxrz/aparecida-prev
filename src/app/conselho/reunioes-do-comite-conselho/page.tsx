"use client";
import { useEffect, useState } from "react";
import { extrairLinksDoHtml } from "@/utils/functions";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import PaginaNaoEncontrada from "@/components/pagina-nao-encontrada";
import Container from "@/components/container";
import LinkAzul from "@/app/institucional/components/links";
import Loading from "@/app/loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<PostsProps>();

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/551");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Erro ao buscar dados: " + error);
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

  const previdenciarioLinks = links.filter((link) =>
    link.text.includes("PREVIDENCIÁRIO"),
  );
  const investimentosLinks = links.filter((link) =>
    link.text.includes("INVESTIMENTOS"),
  );
  const fiscalLinks = links.filter((link) => link.text.includes("FISCAL"));

  return (
    <Container title="Local e data das reuniões do comitê/conselho">
      <div className="flex flex-col">
        <p className="pb-2 font-bold uppercase">CONSELHO PREVIDENCIÁRIO</p>
        <div className="flex flex-col pb-3 pl-5">
          {previdenciarioLinks.map((link, i) => (
            <LinkAzul key={i} href={link.url} text={link.text} />
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <p className="pb-2 font-bold uppercase">COMITÊ DE INVESTIMENTOS</p>
        <div className="flex flex-col pb-3 pl-5">
          {investimentosLinks.map((link, i) => (
            <LinkAzul key={i} href={link.url} text={link.text} />
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <p className="pb-2 font-bold uppercase">CONSELHO FISCAL</p>
        <div className="flex flex-col pb-3 pl-5">
          {fiscalLinks.map((link, i) => (
            <LinkAzul key={i} href={link.url} text={link.text} />
          ))}
        </div>
      </div>
    </Container>
  );
}
