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
      const response = await AxiosInstance.get("/pages/1820");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("erro ao buscar dados: " + error);
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
