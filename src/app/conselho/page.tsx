import { LinksPage } from "@/components/Links";
import Title from "@/components/title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conselho",
};

export default function Conselho() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2 text-white">
      <section className="px-2 container">
        <Title title="Conselhos" />
        <div className="w-full grid lg:grid-cols-2 items-center container gap-5 pb-20">
          <LinksPage href="/conselho/atas-comite" text="Atas comitê" />
          <LinksPage
            href="/conselho/atas-do-conselho"
            text="Atas do conselho"
          />
          <LinksPage
            href="/conselho/atas-conselho-fiscal"
            text="Atas conselho fiscal"
          />
          <LinksPage
            href="/conselho/regimento-interno"
            text="Regimento interno"
          />
          <LinksPage
            href="/conselho/reunioes-do-comite-conselho"
            text="Reuniões do comitê/conselho"
          />
          <LinksPage
            href="/conselho/decreto-de-nomeacao"
            text="Decreto de nomeação"
          />
          <LinksPage
            href="/conselho/membros-do-conselho"
            text="Membros do conselho"
          />
          <LinksPage href="/conselho/eleicoes" text="Eleições" />
        </div>
      </section>
    </article>
  );
}
