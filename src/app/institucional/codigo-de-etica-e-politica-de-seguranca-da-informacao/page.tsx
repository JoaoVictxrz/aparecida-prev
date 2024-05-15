"use client";
import { useEffect, useState } from "react";
import { extrairLinksDoHtml } from "@/utils/functions";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import Container from "@/components/container";
import LinkAzul from "../components/links";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/5186");
      setData(response.data);
    } catch (error) {
      console.log("erro ao buscar dados: " + error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const links = extrairLinksDoHtml(data?.content.rendered!);
  return (
    <Container title={data?.title.rendered!} className="space-y-3">
      <div>
        <h1 className="upercase font-bold">Código de ética</h1>
        {links.map((link, i) => (
          <div className="flex flex-col pb-1 pl-5 md:w-2/4" key={i}>
            {(link.text.includes("Ética") ||
              link.text.includes("Nomeação")) && (
              <LinkAzul href={link.url} text={link.text} />
            )}
          </div>
        ))}
      </div>
      <div>
        <h1 className="upercase font-bold">
          Política de segurança da informação
        </h1>
        {links.map((link, i) => (
          <div key={i} className="flex flex-col pb-1 pl-5 md:w-2/4">
            {link.text.includes("Segurança") && (
              <LinkAzul key={i} href={link.url} text={link.text} />
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
