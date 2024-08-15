import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Prova Anual de Vida",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
