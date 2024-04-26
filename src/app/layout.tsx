import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons:
    "https://aparecidaprev.go.gov.br/wp-content/uploads/2018/01/favicon.png",
  title: {
    default: " Home | Aparecidaprev",
    template: "%s | Aparecidaprev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="!scroll-smooth">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <header className="sticky top-0 z-50 w-full">
            <NavBar />
          </header>
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
