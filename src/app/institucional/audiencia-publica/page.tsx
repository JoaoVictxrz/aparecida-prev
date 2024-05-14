"use client";
import { useEffect, useState } from "react";
import LinkAzul from "../components/links";
import Container from "@/components/container";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import { extrairLinksDoHtml } from "@/utils/functions";
import { text } from "stream/consumers";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const fetchData = async () => {
    const response = await AxiosInstance.get("/pages/6515");
    setData(response.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("Erro ao buscar dados da página:", error);
    }
  }, []);

  const links = extrairLinksDoHtml(data?.content.rendered!);

  return (
    <Container title="Audiência publica">
      <div className="flex flex-col items-start gap-2 border-b-[1px] pb-5 dark:border-zinc-800">
        <p className="font-semibold uppercase">Audiencia pública n°002/2023</p>
        <div className="flex flex-col items-start gap-1 pl-5">
          {links.map(
            (link, i) =>
              i < 4 && <LinkAzul key={i} href={link.url} text={link.text} />,
          )}
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 border-b-[1px] py-5 dark:border-zinc-800">
        <p className="font-semibold uppercase">Audiencia pública n°001/2023</p>
        <div className="flex flex-col items-start gap-1 pl-5">
          {links.map(
            (link, i) =>
              i >= 4 && <LinkAzul key={i} href={link.url} text={link.text} />,
          )}
        </div>
      </div>
    </Container>
  );
}
