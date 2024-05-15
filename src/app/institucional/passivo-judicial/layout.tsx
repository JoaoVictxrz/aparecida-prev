import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Passivo Judicial",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
