import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Política de valoração dos servidores",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
