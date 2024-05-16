import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Regimento Interno",
  };
}

export default function Layou({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
