import { LinksPage } from "@/components/Links"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Financeiro'
}

export default function Financeiro() {
  return (
    <article className="w-full flex justify-center bg-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 ">
          Financeiro
        </h1>
        <div className="w-full grid lg:grid-cols-2 items-center container gap-5">
          <LinksPage href="/" text="Demonstrativo variação Patrimonial" />
          <LinksPage href="/" text="Comparativo de despesa" />
          <LinksPage href="/" text="DIPR Demostrativo informações prev e repasse" />
          <LinksPage href="/" text="Relatório mensal carteira financeira" />
          <LinksPage href="/" text="Balanço financeiro" />
          <LinksPage href="/" text="Balanço orcamentário" />
          <LinksPage href="/" text="Balanço patrimonial" />
          <LinksPage href="/" text="Comparativo da receita" />
          <LinksPage href="/" text="Situação financieira AparecidaPrev" />
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