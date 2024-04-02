import { Metadata } from "next";
import Image from "next/image";
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Audiencia publica 2023",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 text-white pb-2">
      <section className="px-2 container flex flex-col items-center pt-10 pb-20">
        <Image
          src="/audiencia-publica/Post-Instagram-Comunicado-Amarelo-Corporativo-1.jpg"
          alt="Comunicado amarelo corporativo"
          width={1080}
          height={500}
          className="w-[800px] h-[800px]"
        />
        <div className="lg:w-[800px] lg:h-[800px">
          <h1 className="text-xl font-bold pt-4">Audiência Pública 2023</h1>
          <h2 className="font-light text-sm pb-2">
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
