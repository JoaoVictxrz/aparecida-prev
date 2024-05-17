"use client";
import { useEffect, useState } from "react";
import { extrairLinksDoHtml } from "@/utils/functions";
import { AxiosInstance } from "@/services/axios";
import { PostsProps } from "@/interfaces/interfaces";
import Container from "@/components/container";
import LinkAzul from "@/app/institucional/components/links";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/846");
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
      <Div title="ATAS 2024" ano="2024" links={links}></Div>
      <Div title="ATAS 2023" ano="2023" links={links}></Div>
      <Div title="ATAS 2022" ano="2022" links={links}></Div>
      <Div title="ATAS 2021" ano="2021" links={links}></Div>
      <Div title="ATAS 2020" ano="2020" links={links}></Div>
      <Div title="ATAS 2019" ano="2019" links={links}></Div>
      <Div title="ATAS 2018" ano="2018" links={links}></Div>
      <Div title="ATAS 2017" ano="2017" links={links}></Div>
      <Div title="ATAS 2016" ano="2016" links={links}></Div>
      <Div title="ATAS 2015" ano="2015" links={links}></Div>
      <Div title="ATAS 2014" ano="2014" links={links}></Div>
    </Container>
  );
}

interface Link {
  text: string;
  url: string;
}

const Div: React.FC<{
  title: string;
  links: Link[];
  ano: string;
}> = ({ title, links, ano }) => (
  <div className="flex w-3/4 flex-col md:w-1/4">
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
