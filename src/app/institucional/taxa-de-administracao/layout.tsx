import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Taxa de Administração",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
