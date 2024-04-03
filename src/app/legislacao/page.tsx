import { LinksPage } from "@/components/Links";
import Title from "@/components/title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legislação",
};

export default function Legislação() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2">
      <section className="px-2 container">
        <Title title="Legislação" />
        <div className="w-full grid lg:grid-cols-2 items-center container gap-5">
          <LinksPage href="/" text="Leis municipais" />
          <LinksPage href="/" text="Partaria mps" />
          <LinksPage href="/" text="Lei organica do município" />
        </div>
      </section>
    </article>
  );
}
