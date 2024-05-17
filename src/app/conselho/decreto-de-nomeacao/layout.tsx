import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Decreto de nomeação",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
