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
      const response = await AxiosInstance.get("/pages/1824");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Erro ao buscar dados :", error);
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

  const bancos = [
    "BB",
    "Caixa",
    "Bradesco",
    "BTG",
    "Itaú",
    "Safra",
    "Santander",
    "Planner",
    "XP",
  ];

  return (
    <Container title={data?.title.rendered!} className="space-y-2">
      <p className="font-bold">EDITAL DE CREDENCIAMENTO 2024</p>
      {links.map((link, i) => (
        <div key={i} className="pl-5">
          {link.text.includes("2024") && (
            <LinkAzul href={link.url} text={link.text} />
          )}
        </div>
      ))}
      <p className="font-bold">EDITAL DE CREDENCIAMENTO 2023</p>
      {links.map((link, i) => (
        <div key={i} className="pl-5">
          {link.text.includes("2023") && (
            <LinkAzul href={link.url} text={link.text} />
          )}
        </div>
      ))}
      <p className="font-bold">EDITAL DE CREDENCIAMENTO 2022</p>
      {links.map((link, i) => (
        <div key={i} className="pl-5">
          {link.text.includes("001-2022") && (
            <LinkAzul href={link.url} text={link.text} />
          )}
        </div>
      ))}
      <em className="font-bold">– INSTITUIÇÕES CREDENCIADAS</em>
      {links.map((link, i) => (
        <div key={i} className="pl-5">
          {bancos.some((banco) => link.text.includes(banco)) && (
            <LinkAzul href={link.url} text={link.text} />
          )}
        </div>
      ))}
      <p className="font-bold">EDITAL DE CREDENCIAMENTO CUSTÓDIA 2022</p>
      {links.map((link, i) => (
        <div key={i} className="pl-5">
          {link.text.includes("002") && (
            <LinkAzul href={link.url} text={link.text} />
          )}
        </div>
      ))}
    </Container>
  );
}
