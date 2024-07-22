import { LinksPage } from "@/components/links";
import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financeiro",
};

export default function Home() {
  return (
    <Container title="Financeiro" className="grid md:grid-cols-2">
      <LinksPage
        href="/financeiro/demonstrativo-variacao-patrimonial"
        text="Demonstrativo variação Patrimonial"
      />
      <LinksPage
        href="/financeiro/comparativo-da-despesa"
        text="Comparativo de despesa"
      />
      <LinksPage
        href="/financeiro/dpir-demonstrativo-informacoes-prev-e-repasse"
        text="DIPR Demostrativo informações prev e repasse"
      />
      <LinksPage
        href="/financeiro/relatorio-mensal-carteira-financeira"
        text="Relatório mensal carteira financeira"
      />
      <LinksPage
        href="/financeiro/balanco-financeiro"
        text="Balanço financeiro"
      />
      <LinksPage
        href="/financeiro/balanco-orcamentario"
        text="Balanço orçamentário"
      />
      <LinksPage
        href="/financeiro/balanco-patrimonial"
        text="Balanço patrimonial"
      />
      <LinksPage
        href="/financeiro/comparativo-da-receita"
        text="Comparativo da receita"
      />
      <LinksPage
        href="/acesso-rapido/situacao-financeira-aparecida-prev"
        text="Situação financeira AparecidaPrev"
      />
      <LinksPage
        href="/financeiro/apr-autorizacao-de-aplicacao-e-resgate"
        text="APR - Autorização de aplicação e resgate"
      />
      <LinksPage href="/financeiro/calculo-atuarial" text="Cálculo atuarial" />
      <LinksPage
        href="/financeiro/dpin-politica-de-investimento-e-suas-revisoes"
        text="DPIN Politica de investimentos e suas revisões"
      />
      <LinksPage
        target="_blank"
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/BANNER-CALENDARIO-e1674654065560-820x430-1.jpg"
        text="Calendário pagamento da folha"
      />
      <LinksPage
        target="_blank"
        href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/PLANO-DE-TRABALHO-ATUARIAL-4.pdf"
        text="Plano de trabalho atuario"
      />
    </Container>
  );
}
