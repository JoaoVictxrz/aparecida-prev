import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Acórdãos do tribunal de contas",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
