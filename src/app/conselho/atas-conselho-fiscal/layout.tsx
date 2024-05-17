import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Atas conselho fiscal",
  };
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
