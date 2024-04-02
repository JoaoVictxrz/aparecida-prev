import { LinksPage } from "@/components/Links";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legislação",
};

export default function Legislação() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 ">
          Legislação
        </h1>
        <div className="w-full grid lg:grid-cols-2 items-center container gap-5">
          <LinksPage href="/" text="Leis municipais" />
          <LinksPage href="/" text="Partaria mps" />
          <LinksPage href="/" text="Lei organica do município" />
        </div>
      </section>
    </article>
  );
}
