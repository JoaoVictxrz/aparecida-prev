import { LinksPage } from "@/components/Links"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Institucional',
}

export default function Sobre() {
  return (
    <article className="w-full flex justify-center bg-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 ">
          Institucional
        </h1>
        <div className="w-full grid lg:grid-cols-2 items-center container gap-5">
          <LinksPage href="/" text="Demonstrativo variação Patrimonial" />
          <LinksPage href="/" text="Comparativo de despesa" />
          <LinksPage href="/" text="DPIR Demonstrativo informações prev e repasse" />
          <LinksPage href="/" text="Relátorio mensal carteira financiera" />
          <LinksPage href="/" text="Balanço financeiro" />
          <LinksPage href="/" text="Balanço orçamentário" />
          <LinksPage href="/" text="Balanço patrimonial" />
          <LinksPage href="/" text="Comparativo da receita" />
          <LinksPage href="/" text="Situação fincanceira AparecidaPrev" />
          <LinksPage href="/" text="APR - Autorização de aplicação e resgate" />
          <LinksPage href="/" text="Cálculo atuarial" />
          <LinksPage href="/" text="DPIN Politica de investimentos e suas revisões" />
          <LinksPage href="/" text="Calendário pagamento da folha" />
          <LinksPage href="/" text="Plano de trabalho atuario" />
        </div>
      </section>
    </article>
  )
}

export const LinksInstitucional = ({ href, text }: any) => {
  return (
    <Link href={href} className='flex items-center justify-center shadow-md p-5 group hover:bg-zinc-100 hover:scale-105 transition-transform ease-in-out duration-300'><p className={`text-2xl font-light text-zinc-500 group-hover:text-zinc-700`}>{text}</p></Link>
  )
}