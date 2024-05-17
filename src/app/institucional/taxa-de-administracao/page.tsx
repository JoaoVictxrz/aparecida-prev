"use client";
import { useEffect, useState } from "react";
import LinkAzul from "../components/links";
import Container from "@/components/container";
import { extrairLinksDoHtml } from "@/utils/functions";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/1820");
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
    <Container title={data?.title.rendered!}>
      <div className="flex flex-col">
        <p className="font-semibold uppercase">
          PORTARIA INSTITUI A TAXA ADMINISTRATIVA
        </p>
        <div className="flex flex-col gap-1 pl-5 pt-2">
          {links.map((link, i) => (
            <div key={i}>
              <LinkAzul text={link.text} href={link.url} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
