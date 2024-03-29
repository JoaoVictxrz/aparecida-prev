import { LinksPage } from "@/components/Links"
import Noticias from "@/components/noticias"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Sobre'
}

export default function Sobre() {
  return (
    <article className="w-full flex justify-center bg-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 ">
          Sobre
        </h1>
        <div className="w-full grid lg:grid-cols-2 items-center container gap-5">
          <LinksPage href="/" text="Organograma" />
          <LinksPage href="/" text="Valores" />
          <LinksPage href="/" text="Visão" />
          <LinksPage href="/" text="Histórico" />
          <LinksPage href="/" text="Presidência e diretoria" />
        </div>
      </section>
    </article>
  )
}
