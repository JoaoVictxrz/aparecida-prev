import { LinksPage } from "@/components/Links"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Conselho'
}

export default function Conselho() {
  return (
    <article className="w-full flex justify-center bg-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 ">
          Conselhos
        </h1>
        <div className="w-full grid lg:grid-cols-2 items-center container gap-5">
          <LinksPage href="/" text="Atas comitê" />
          <LinksPage href="/" text="Atas do conselho" />
          <LinksPage href="/" text="Atas conselho fiscal" />
          <LinksPage href="/" text="Regimento interno" />
          <LinksPage href="/" text="Reuniões do comitê/conselho" />
          <LinksPage href="/" text="Descreto de nomeação" />
          <LinksPage href="/" text="Membros do conselho" />
          <LinksPage href="/" text="Eleições" />
        </div>
      </section>
    </article>
  )
}