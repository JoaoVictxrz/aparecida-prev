import { LinksPage } from "@/components/Links"
import Noticias from "@/components/noticias"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Benefício'
}

export default function Benefício() {
  return (
    <article className="w-full flex justify-center bg-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 ">
          Benefício
        </h1>
        <div className="w-full grid lg:grid-cols-2 items-center container gap-5">
          <LinksPage href="/" text="Aposentadoria por invalidez" />
          <LinksPage href="/" text="Aposentadoria Compulsória" />
          <LinksPage href="/" text="Aposentadoria por idade" />
          <LinksPage href="/" text="Pensão por morte" />
          <LinksPage href="/" text="Folha de pagamento" />
        </div>
      </section>
    </article>
  )
}
