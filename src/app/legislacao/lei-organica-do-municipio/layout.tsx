import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Lei orgânica do município",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
