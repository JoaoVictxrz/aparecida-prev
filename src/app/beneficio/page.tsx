import Container from "@/components/container";
import { LinksPage } from "@/components/links-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benefício",
};

export default function Home() {
  return (
    <Container title="Benefícios" className="grid md:grid-cols-2">
      <LinksPage
        href="/beneficio/aposentadoria-por-invalidez"
        text="Aposentadoria por invalidez"
      />
      <LinksPage
        href="/beneficio/aposentadoria-compulsoria"
        text="Aposentadoria Compulsória"
      />
      <LinksPage
        href="/beneficio/aposentadoria-por-idade"
        text="Aposentadoria por idade"
      />
      <LinksPage href="/beneficio/pensao-por-morte" text="Pensão por morte" />
      <LinksPage
        target="_blank"
        href="http://gestaopublica.previdencia.aparecida.bsit-br.com.br/portal/employee-transparency.jsf"
        text="Folha de pagamento"
      />
    </Container>
  );
}
