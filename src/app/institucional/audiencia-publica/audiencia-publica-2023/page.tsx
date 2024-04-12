import { Metadata } from "next";
import Image from "next/image";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Audiencia publica 2023",
  };
}

export default function Home() {
  return (
    <article className="flex w-full justify-center bg-white pb-2 text-white dark:bg-zinc-900">
      <section className="container flex flex-col items-center px-2 pb-20 pt-10">
        <Image
          src="/audiencia-publica/Post-Instagram-Comunicado-Amarelo-Corporativo-1.jpg"
          alt="Comunicado amarelo corporativo"
          width={1080}
          height={500}
          className="h-[800px] w-[800px]"
        />
        <div className="lg:h-[800px lg:w-[800px]">
          <h1 className="pt-4 text-xl font-bold">Audiência Pública 2023</h1>
          <h2 className="pb-2 text-sm font-light">
            Postado em: 14 de julho de 2023
          </h2>
          <p className="text-lg">
            O Presidente do Robes Venancio convida a população do entorno do
            AparecidaPrev, os servidores ativos e inativos, representantes da
            sociedade organizada e demais interessado a participarem da
            Audiência Pública, a ser realizada no auditório do Instituto de
            Previdência de Aparecida de Goiânia.
          </p>
        </div>
      </section>
    </article>
  );
}
