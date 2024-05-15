import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Código de etica/politica de segurança da informação",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
