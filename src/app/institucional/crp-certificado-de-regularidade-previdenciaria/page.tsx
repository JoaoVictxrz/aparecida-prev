"use client";
import { useEffect, useState } from "react";
import LinkAzul from "../components/links";
import Container from "@/components/container";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import { extrairLinksDoHtml } from "@/utils/functions";

export default function Home() {
  const [data, setData] = useState<PostsProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await AxiosInstance.get("/posts?categories=23");
      setData(response.data);
    };
    fetchData();
  }, []);

  const links = extrairLinksDoHtml(data[0]?.content.rendered);

  return (
    <Container
      title="CRP - Certificado de Regularidade Previdênciária"
      className="flex flex-col"
    >
      <p>
        Os certificados de regularidade previdenciária do Município de Aparecida
        de Goiânia podem ser consultados no site: (falta o link)
      </p>
      <br />
      <p>
        Digitando no campo de pesquisa “
        <span className="font-semibold">Aparecida de Goiânia</span>“, clicando
        em “<span className="font-semibold">pesquisar</span>“, confirmando o
        Ente na linha de retorno da pesquisa para exibição dos certificados.
      </p>
      {links.reverse().map((link, i) => (
        <div className="flex flex-col pl-5 md:w-2/4" key={i}>
          <LinkAzul key={i} href={link.url} text={link.text} />
        </div>
      ))}
    </Container>
  );
}
