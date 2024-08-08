import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "CRP - Certificado de Regularidade Previdênciária",
  };
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}