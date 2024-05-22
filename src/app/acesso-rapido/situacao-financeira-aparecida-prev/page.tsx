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
  const [data, setData] = useState<PostsProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get("/pages/85");
      setData(response.data);
      setLoading(false);
    } catch (error) {
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

  const ano2024 = links
    .map((link) => link.text)
    .filter((link) => link.includes("2024"));
  const ano2023 = links
    .map((link) => link.text)
    .filter((link) => link.includes("2023"));
  const anosAnteriores = links
    .map((link) => link.text)
    .filter((link) => link.includes("Financeiro"));

  return (
    <Container title="SITUAÇÃO FINANCEIRA DO APARECIDAPREV">
      <Card title="ano de 2024">
        <div className="flex flex-col">
          {ano2024.map((mes) => (
            <LinkAzul key={mes} href={mes} text={mes} />
          ))}
        </div>
      </Card>
      <Card title="ano de 2023">
        <div className="flex flex-col">
          {ano2023.map((mes) => (
            <LinkAzul key={mes} href={mes} text={mes} />
          ))}
        </div>
      </Card>
      <Card title="anos anteriores">
        <div className="flex flex-col">
          {anosAnteriores.map((mes) => (
            <LinkAzul key={mes} href={mes} text={mes} />
          ))}
        </div>
      </Card>
    </Container>
  );
}

const Card = ({
  title,
  children,
  className,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`${className} border-b-[1px] py-3 dark:border-zinc-800`}>
      <p className="text-lg font-semibold uppercase">{title}</p>
      <div>{children}</div>
    </div>
  );
};
