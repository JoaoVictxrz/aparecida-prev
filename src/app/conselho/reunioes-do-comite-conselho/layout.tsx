import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Local e data das reuniões do comitê/conselho",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
