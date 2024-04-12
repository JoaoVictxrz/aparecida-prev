import LinkAzul from "@/app/institucional/components/links";
import Container from "@/components/container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Leis municipais",
  };
}

const leisMunicipais = [
  {
    numero: "Lei Municipal N° 1.246/93",
    descriçao: "Revogada pela Lei Complementar n° 001/01",
    revogada: true,
  },
  {
    numero: "Lei Municipal N° 2221/01",
    descriçao:
      "Dispõe sobre o Plano de Carreira e Vencimentos do Grupo Ocupacional Magistério da Prefeitura",
    revogada: false,
  },
  {
    numero: "Lei Municipal N° 2229/01",
    descriçao:
      "Dispõe sobre o Plano de Carreira e Vencimentos dos Servidores da Prefeitura",
    revogada: false,
  },
  {
    numero: "Lei Municipal N° 2430/04",
    descriçao:
      "Altera o Anexo IV (Tabela de Vencimentos), da Lei Municipal n.º 2.229, de 18 de dezembro de 2001",
    revogada: false,
  },
  {
    numero: "Lei Municipal N° 2555/05",
    descriçao:
      "Dispõe sobre a Estrutura Organizacional da Prefeitura Aparecida de Goiânia/GO",
    revogada: false,
  },
  {
    numero: "Lei Municipal N° 2606/06",
    descriçao:
      "Dispõe sobre o plano de cargos e salários dos servidores da Secretaria de Educação da Prefeitura",
    revogada: false,
  },
  {
    numero: "Lei Municipal N° 2926/10",
    descriçao:
      "Desafeta do uso comum do povo, muda destinação e autoriza alienação do imóvel público para o AparecidaPrev",
    revogada: false,
  },
  {
    numero: "Lei Municipal N° 3699/23",
    descriçao:
      "Dispõe sobre homenagem e dá nome a sede do edifício do AparecidaPrev, em nome Sebastião Ramoncito Nunes",
    revogada: false,
  },
  {
    numero: "Lei Municipal N° 3730/23",
    descriçao:
      "Dispõe sobre a criação do Fundo Municipal Imobiliário do AparecidaPrev (FMIAP)",
    revogada: false,
  },
];

const leisComplementares = [
  {
    numero: "Lei Complementar n° 001/01",
    descriçao: "Revogada pela Lei Complementar n° 007/02",
    revogada: true,
  },
  {
    numero: "Lei Complementar n° 002/01",
    descriçao:
      "Dispõe sobre o Estatuto dos Servidores do Magistério Público do Município",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 003/01",
    descriçao:
      "Dispõe sobre o Estatuto dos Servidores da Prefeitura e Câmara Municipal de Aparecida de Goiânia",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 007/02",
    descriçao: "Revogada pela Lei Complementar n° 010/05",
    revogada: true,
  },
  {
    numero: "Lei Complementar n° 010/05",
    descriçao:
      "Dispõe sobre a adequação do RPPS de Aparecida de Goiânia à EC n° 41/03",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 011/05",
    descriçao:
      "Dispõe sobre a adequação do Regime Próprio de Previdência Social do município",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 013/06",
    descriçao:
      "Dispõe sobre o estatuto dos Servidores do Magistério da Prefeitura",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 014/06",
    descriçao:
      "Altera a Lei Complementar n° 010/05, que dispõe sobre o Plano de Custeio do RPPS",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 019/09",
    descriçao: "Altera o § 1° do artigo 71 da Lei Complementar n° 010/05",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 022/09",
    descriçao:
      "Dispõe sobre Plano de Custeio do RPPS de Aparecida de Goiânia (AparecidaPrev)",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 042/11",
    descriçao: "Institui regime especial de trabalho da Guarda Municipal",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 092/14",
    descriçao:
      "Altera e acrescenta parágrafos ao art. 80, da Lei Complementar n° 010/05",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 112/15",
    descriçao: "Revogada pela Lei Complementar n° 127/17",
    revogada: true,
  },
  {
    numero: "Lei Complementar n° 123/16",
    descriçao: "Altera o artigo 79, da Lei Complementar n° 010/05",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 127/17",
    descriçao:
      "Institui a estrutura administrativa do AparecidaPrev (Alterada pela LC nº 145/2018 e LC nº 172/2020)",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 132/17",
    descriçao:
      "Altera a Lei Complementar nº 127/2017, que trata da Estrutura Administrativa do AparecidaPrev",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 141/18",
    descriçao:
      "Altera a descrição do cargo de motorista constante no anexo III da Lei Complementar n° 127/17",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 145/18",
    descriçao:
      "Altera os requisitos de provimento do cargo efetivo de Assessor Jurídico, constante do Anexo III da Lei Complementar 127/17",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 172/20",
    descriçao:
      "Dispõe sobre a alteração do § 1° do artigo 2° da Lei Complementar n° 127/17, alterada pela Lei Complementar n° 145/18, assim como seu anexo II",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 180/20",
    descriçao: "Altera o artigo 80 da Lei Complementar n° 010/2005",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 181/20",
    descriçao: "Suspensão de benefícios transitórios",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 191/21",
    descriçao: "Institui Regime de Previdência Complementar",
    revogada: false,
  },
  {
    numero: "Lei Complementar n° 219/23",
    descriçao:
      "Dispõe sobre adequação do Regime Próprio de Previdência Social – Aparecida Prev, à Emenda Constitucional n° 103/2019, 113/2022 e 114/2022",
    revogada: false,
  },
];

export default function Home() {
  return (
    <Container title="Leis municipais">
      <div className="container w-full gap-5 pb-20">
        <div className="flex flex-col gap-2">
          <strong className="font-bold uppercase">LEIS MUNICIPAIS</strong>
          <div className="flex flex-col font-light">
            {leisMunicipais.map((lei, i) => (
              <p key={i} className={lei.revogada ? "text-red-500" : ""}>
                <LinkAzul
                  href=""
                  text={lei.numero + " - "}
                  className={lei.revogada ? "line-through" : ""}
                />
                {lei.descriçao}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="container w-full gap-5 pb-20">
        <div className="flex flex-col gap-2">
          <strong className="font-bold uppercase">LEIS COMPLEMENTARES</strong>
          <div className="flex flex-col pl-5 font-light">
            {leisComplementares.map((lei, i) => (
              <p key={i} className={lei.revogada ? "text-red-500" : ""}>
                <LinkAzul
                  href=""
                  text={lei.numero + " - "}
                  className={lei.revogada ? "line-through" : ""}
                />
                {lei.descriçao}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
