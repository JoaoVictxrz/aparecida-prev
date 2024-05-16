"use client";
import { PostsProps } from "@/interfaces/interfaces";
import LinkAzul from "../components/links";
import Container from "@/components/container";
import { useEffect, useState } from "react";
import { AxiosInstance } from "@/services/axios";
import { extrairLinksDoHtml } from "@/utils/functions";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/3283");
      setData(response.data);
    } catch (error) {
      console.log("erro ao buscar dados: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const links = extrairLinksDoHtml(data?.content.rendered!);

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
