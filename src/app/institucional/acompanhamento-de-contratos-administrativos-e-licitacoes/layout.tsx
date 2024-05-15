import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Acompanhamento de contratos administrativos e licitações",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
