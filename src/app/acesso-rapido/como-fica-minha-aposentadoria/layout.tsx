import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Como fica minha aposentadoria",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
