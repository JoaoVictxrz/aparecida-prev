"use client";
import LinkAzul from "@/app/institucional/components/links";
import Container from "@/components/container";
import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import { extrairLinksDoHtml } from "@/utils/functions";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<PostsProps>();
  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/3326");
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
        <p className="pb-2 font-bold uppercase">CONSELHO FISCAL</p>
        <div className="flex flex-col pb-3 pl-5 md:flex-row ">
          {links.map((link, i) => (
            <div key={i}>
              {link.text.includes("Regimento do Conselho Fiscal") && (
                <LinkAzul href={link.url} text={link.text} />
              )}
            </div>
          ))}
          <span>
            &nbsp;– Remete-se as atribuições da Lei 010/2005, art. 88 §1.
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        <p className="pb-2 font-bold uppercase">CONSELHO DE PREVIDÊNCIA</p>
        <div className="flex flex-col pb-3 pl-5">
          {links.map((link, i) => (
            <div key={i}>
              {link.text.includes("Resolução") && (
                <LinkAzul href={link.url} text={link.text} />
              )}
              {link.text.includes(
                "Regimento Interno Conselho de Previdência",
              ) && <LinkAzul href={link.url} text={link.text} />}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <p className="pb-2 font-bold uppercase">
          REGIMENTO PARA ELEIÇÃO CONSELHEIROS
        </p>
        <p className="pb-2 font-bold uppercase">2023</p>
        <div className="flex flex-col pb-3 pl-5">
          {links.map((link, i) => (
            <div key={i}>
              {link.url.includes("04") && (
                <LinkAzul href={link.url} text={link.text} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <p className="pb-2 font-bold uppercase">
          REGIMENTO PARA ELEIÇÃO CONSELHEIROS
        </p>
        <p className="pb-2 font-bold uppercase">2022</p>
        <div className="flex flex-col pb-3 pl-5">
          {links.map((link, i) => (
            <div key={i}>
              {link.text.includes("(representante inativos)") && (
                <LinkAzul href={link.url} text={link.text} />
              )}
              {link.text.includes("(Inscrição)") && (
                <LinkAzul href={link.url} text={link.text} />
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
