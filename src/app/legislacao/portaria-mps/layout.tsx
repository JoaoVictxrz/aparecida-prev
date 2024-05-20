import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Portaria MPS",
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
