import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Resultado Final | Aparecidaprev",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
