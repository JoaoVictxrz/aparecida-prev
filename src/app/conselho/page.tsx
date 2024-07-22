import { LinksPage } from "@/components/links";
import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conselho",
};

export default function Conselho() {
  return (
    <Container title="Conselho" className="grid md:grid-cols-2">
      <LinksPage href="/conselho/atas-comite" text="Atas comitê" />
      <LinksPage href="/conselho/atas-do-conselho" text="Atas do conselho" />
      <LinksPage
        href="/conselho/atas-conselho-fiscal"
        text="Atas conselho fiscal"
      />
      <LinksPage href="/conselho/regimento-interno" text="Regimento interno" />
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
    </Container>
  );
}
