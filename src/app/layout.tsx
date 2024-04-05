import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { Footer } from "@/components/footer";
import ThemeToggle from "@/components/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: " Home | Aparecidaprev",
    template: "%s | Aparecidaprev", //%s will be replaced with title on page whe have metadata title
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header className="w-full sticky top-0 z-50">
          <ThemeToggle />
          <NavBar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
