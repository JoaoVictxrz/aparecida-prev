import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "DIPR – Demostrativo de Informações Prev. e Repasse",
  };
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
