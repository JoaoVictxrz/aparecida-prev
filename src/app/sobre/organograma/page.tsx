import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Organograma",
  };
}

export default function Organograma() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 dark:text-zinc-100 dark:border-zinc-700">
          Organograma
        </h1>
        <div className="w-full flex items-center justify-center container pr-2">
          <Image
            src="/sobre/Organograma.jpg"
            alt="Organograma"
            width={1000}
            height={1000}
          />
        </div>
      </section>
    </article>
  );
}
