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
      const response = await AxiosInstance.get<PostsProps>("/pages/647");
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

  return (
    <Container title={data?.title.rendered!} className="space-y-2">
      <Div ano="2024" title="2024" links={links} />
      <Div ano="2023" title="2023" links={links} />
      <Div ano="2022" title="2022" links={links} />
      <Div ano="2021" title="2021" links={links} />
      <Div ano="2020" title="2020" links={links} />
      <Div ano="2019" title="2019" links={links} />
      <Div ano="2018" title="2018" links={links} />
      <Div ano="2017" title="2017" links={links} />
      <Div ano="2016" title="2016" links={links} />
      <Div ano="2015" title="2015" links={links} />
      <Div ano="2014" title="2014" links={links} />
    </Container>
  );
}

interface LinkProps {
  title: string;
  links: Link[];
  ano: string;
}

interface Link {
  text: string;
  url: string;
}

const Div = ({ title, links, ano }: LinkProps) => (
  <div className="flex flex-col ">
    <p className="pb-2 font-bold uppercase">{title}</p>
    <div className="flex flex-col pb-3 pl-5">
      {links.map((link, i) => (
        <div key={i}>
          {link.text.includes(`${ano}`) && (
            <LinkAzul text={link.text} href={link.url} />
          )}
        </div>
      ))}
    </div>
  </div>
);
