import { LinksPage } from "@/components/Links";
import Noticias from "@/components/noticias";
import Title from "@/components/title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
};

export default function Sobre() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2">
      <section className="px-2 container">
        <Title title="Sobre" />
        <div className="w-full grid lg:grid-cols-2 items-center container gap-5 pb-20">
          <LinksPage href="/sobre/organograma" text="Organograma" />
          <LinksPage href="/sobre/valores" text="Valores" />
          <LinksPage href="/sobre/visao" text="Visão" />
          <LinksPage href="/sobre/historico" text="Histórico" />
          <LinksPage
            href="/sobre/presidencia-e-diretoria"
            text="Presidência e diretoria"
          />
        </div>
      </section>
    </article>
  );
}
