import LinkAzul from "@/app/institucional/components/links";
import Container from "@/components/container";
import { Metadata } from "next";
import { LinkConcurso } from "../page";

export const metadata: Metadata = {
  title: "CONCURSO PÚBLICO APARECIDAPREV N°001/2017",
};

export default function Home() {
  return (
    <Container
      title="CONCURSO PÚBLICO APARECIDAPREV N°001/2017"
      className="font-light"
    >
      <p>
        O Presidente do Fundo de Previdência dos Servidores do Município de
        Aparecida de Goiânia – APARECIDAPREV –, no uso das atribuições que lhe
        são conferidas pela legislação vigente e, em especial, o disposto da Lei
        Orgânica do Município de Aparecida de Goiânia de 2008 e alterações
        posteriores, na Lei Complementar Municipal N°127 de 24 de fevereiro de
        2017 e alterações posteriores, e demais dispositivos legais aplicáveis à
        espécie, torna pública a realização de Concurso Público para o
        provimento de vagas do quadro permanente do Instituto de Previdência de
        Aparecida de Goiânia, para o preenchimento de vagas, distribuídas
        conforme consta do Anexo II deste Edital e a formação de Cadastro de
        Reserva, para aproveitamento à medida que forem surgindo novas vagas, no
        limite do prazo de validade deste certame, de acordo com a legislação
        vigente e em conformidade com as normas estabelecidas no Edital
        N°001/2017.
      </p>
      <br />
      <section className="flex flex-col pl-5 font-semibold">
        <LinkConcurso text="Anexos" href="/concurso/anexos" />
        <LinkConcurso text="Edital" href="/concurso/edital" />
        <LinkConcurso
          text="Editais de Convocação"
          href="/concurso/editais-de-convocacao"
        />
        <LinkConcurso text="Gabaritos" href="/concurso/gabaritos" />
        <LinkConcurso text="Resultado Final" href="/concurso/resultado-final" />
      </section>
      <br />
      <p>Documentos de acesso rápido:</p>
      <br />
      <section className="flex flex-col pl-5 font-semibold">
        <LinkAzul
          text="059 – 2021 – PRORROGAÇÃO DO CONCURSO"
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/059-2021-PRORROGACAO-DO-CONCURSO.pdf"
        />
        <LinkAzul
          text="057-2020-PORTARIA-SUSPENSAO-CONCURSO"
          href="https://aparecidaprev.go.gov.br/wp-content/uploads/2021/03/057-2020-PORTARIA-SUSPENSAO-CONCURSO.pdf"
        />
      </section>
    </Container>
  );
}
