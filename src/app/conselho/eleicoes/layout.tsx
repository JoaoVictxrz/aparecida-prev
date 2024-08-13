import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eleições",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
