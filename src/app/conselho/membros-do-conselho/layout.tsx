import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Membros dos conselhos",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
