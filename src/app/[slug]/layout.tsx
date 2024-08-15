import { PostsProps } from "@/interfaces/interfaces";
import { AxiosInstance } from "@/services/axios";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await AxiosInstance.get("/pages?slug=" + params.slug);
  try {
    if (response.status !== 200) {
      throw new Error("Erro ao buscar dados da página");
    }

    const data: PostsProps = response.data[0];
    return {
      title: data.title.rendered,
    };
  } catch (error) {
    return {
      title: " ",
    };
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
