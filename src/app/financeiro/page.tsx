import { LinksPage } from "@/components/Links";
import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financeiro",
};

export default function Home() {
  return (
    <Container title="Financeiro" className="grid md:grid-cols-2">
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
      <LinksPage
        href="/"
        text="DPIN Politica de investimentos e suas revisões"
      />
      <LinksPage href="/" text="Calendário pagamento da folha" />
      <LinksPage href="/" text="Plano de trabalho atuario" />
    </Container>
  );
}
