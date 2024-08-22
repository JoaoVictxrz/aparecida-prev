import { LinksPage } from "@/components/links-page";
import Container from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legislação",
};

export default function Legislação() {
  return (
    <Container title="Legislação" className="grid md:grid-cols-2">
      <LinksPage href="/legislacao/leis-municipais" text="Leis municipais" />
      <LinksPage href="/legislacao/portaria-mps" text="Partaria mps" />
      <LinksPage
        href="/legislacao/lei-organica-do-municipio"
        text="Lei organica do município"
      />
    </Container>
  );
}
