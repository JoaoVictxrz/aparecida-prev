import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await AxiosInstance.get("/posts?slug=" + params.slug);

  if (response.status !== 200) {
    throw new Error("Erro ao buscar dados da página");
  }

  const contentRendered = response.data[0].content.rendered;

  if (!contentRendered || contentRendered.trim().length === 0) {
    throw new Error("Content is empty");
  }

  const data: PostsProps = response.data[0];
  return {
    title: data.title.rendered || "",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
