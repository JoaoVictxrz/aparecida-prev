"use client";
import BackgroundImage from "@/components/background";
import Transparencia from "@/components/transparencia";
import AcessoRapido from "@/components/acesso-rapido";
import Noticias from "@/components/noticias";
import Carrosel from "@/components/carrosel";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center text-black">
      <BackgroundImage />
      <Carrosel />
      <Noticias />
      <AcessoRapido />
      <Transparencia />
    </main>
  );
}
