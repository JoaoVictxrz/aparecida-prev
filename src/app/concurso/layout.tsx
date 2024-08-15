import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concurso",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
