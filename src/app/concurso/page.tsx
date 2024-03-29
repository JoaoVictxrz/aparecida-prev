import { LinksPage } from "@/components/Links"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Concursos'
}

export default function Concursos() {
  return (
    <article className="w-full flex justify-center bg-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 ">
          Concurso público
        </h1>
        <div className="w-full grid lg:grid-cols-2 items-center container gap-5">
          <p>Nesta página é possível acompanhar os assuntos em relação à realização de concursos públicos promovidos pelo Instituto de Previdência de Aparecida de Goiânia.</p> <br />
          <li>CONCURSO APARECIDAPREV N° 001/2017</li>
        </div>
      </section>
    </article>
  )
}