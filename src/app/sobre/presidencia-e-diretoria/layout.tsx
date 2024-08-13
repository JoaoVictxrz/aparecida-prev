import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presidência e diretoria",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
