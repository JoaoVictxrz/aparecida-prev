import { LinksPage } from "@/components/links-page";
import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
};

export default function Sobre() {
  return (
    <Container title="Sobre" className="grid md:grid-cols-2">
      <LinksPage href="/sobre/organograma" text="Organograma" />
      <LinksPage href="/sobre/valores" text="Valores" />
      <LinksPage href="/sobre/visao" text="Visão" />
      <LinksPage href="/sobre/historico" text="Histórico" />
      <LinksPage
        href="/sobre/presidencia-e-diretoria"
        text="Presidência e diretoria"
      />
    </Container>
  );
}
