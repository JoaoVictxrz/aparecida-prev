import Container from "@/components/container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Aposentadoria compulsória",
  };
}

export default function Home() {
  return (
    <Container title="Aposentadoria Compulsoria" className="space-y-4">
      <p>
        <span className="font-bold">Art. 16 – </span>O Segurado Ativo será
        automaticamente aposentado ao completar setenta anos de idade, com
        proventos proporcionais ao tempo de contribuição calculados segundo o
        disposto no art. 25 desta Lei.
      </p>
      <p>
        <span className="font-bold">§1º – </span>A aposentadoria será declarada
        por ato do Prefeito Municipal, com vigência a partir do dia imediato
        àquele em que o servidor atingir a idade limite de permanência no
        serviço.
      </p>
      <p>
        <span className="font-bold">§2º – </span>A aposentadoria compulsória
        independe de requerimento, devendo ser declarada ex-ofício pelo Prefeito
        Municipal.
      </p>
      <p>
        <span className="font-bold">§3º – </span>A contagem do tempo de
        contribuição do servidor para cálculo dos proventos somente se dará até
        a data em que completar 70 (setenta) anos de idade.
      </p>
      <p>
        <span className="font-bold">§4º – </span>As vantagens pecuniárias
        somente serão computadas para efeito de cálculo dos proventos se
        adquiridas antes da data em que completar 70 (setenta) anos de idade.
      </p>
      <p>
        <span className="font-bold">Art. 17 – </span>Aos servidores que, após o
        implemento da idade limite para permanência no serviço público, tenham
        sido mantidos em exercício de cargo de provimento efetivo, deverá ser
        concedida a aposentadoria imediatamente.
      </p>
    </Container>
  );
}
