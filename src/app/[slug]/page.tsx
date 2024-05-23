import LinkAzul from "@/app/institucional/components/links";
import Container from "@/components/container";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

export default function Page({ params }: Props) {
  return <GeneratePage params={params} />;
}

const GeneratePage = ({ params }: Props) => {
  switch (params.slug) {
    case "editais":
      return (
        <Container title="Editais">
          <p className="font-bold">2023</p>
          <div className="flex flex-col pl-5">
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/04/Edital-de-Convocacao-e-Publicacao.pdf"
              text="Edital de Convocação para Eleição de Conselheiro N°001/2023"
            />
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/Edital-de-Convocacao-de-Audiencia-Publica.pdf"
              text="Edital de Convocação de Audiência Pública N°002/2023"
            />
          </div>
        </Container>
      );
    case "missao":
      return (
        <Container title="Missão">
          <p>
            Nossa missão é fornecer serviços previdenciários da mais alta
            qualidade, excedendo as expectativas de nossos segurados,
            assegurando aos nossos beneficiários as melhores condições
            socioeconômicas no presente e no futuro.
          </p>
        </Container>
      );

    case "politica-de-valorizacao-dos-servidores":
      return (
        <Container
          title="POLÍTICA DE VALORIZAÇÃO DOS SERVIDORES"
          className="space-y-4 font-light"
        >
          <p className="font-bold">Benefícios concedidos aos servidores:</p>
          <p className="font-bold">No âmbito da Previdência:</p>
          <p>
            1 – Transformação do Aparecidaprev em autarquia, dando agilidade,
            transparência e independência aos processos e decisões
            previdenciárias.
          </p>
          <p>
            2 – Criação do Conselho Municipal de Precidência, democratizando a
            participação dos servidores no processo de gestão da previdência,
            com os representantes escolhidos através de seus sindicatos Sintego
            e Sindspag.
          </p>
          <p>
            3 – Repasses patronais, dos servidores e parcelamentos rigorosamente
            em dia.
          </p>
          <p>
            4 – Capitalização do fundo de Previdência, hoje com mais
            R$12.000.000,00 (Doze milhões) garantindo assim o cumprimento de
            todas as responsabilidades previdenciárias.
          </p>
          <p className="font-bold">No âmbito administrativo:</p>
          <p>1 – Vale Transporte de R$79,20 para mais de 3.000 servidores</p>
          <p>
            2 – Vale Refeição de R$40,00 para aproximadamente 3.000 servidores
          </p>
          <p>
            3 – Reajuste salarial para os professores de 10% em 2005 e 20% em
            2006, totalizando 30% em menos de dois anos.
          </p>
          <p>
            4 – Criação da Coordenadoria de Segurança do Trabalho melhorando as
            condições do ambiente de trabalho dos servidores e ao mesmo tempo
            adequando a execução das atividades laborais na forma da legislação
            vigente.
          </p>
          <p>
            5 – Mais de 2.000 servidores qualificados na mais diversas áreas,
            tais como: Eletricistas, motoristas, Guardas Municípais, Agente de
            Transito, Professores, Profissionais da Saúde, Atendimento ao
            Público, Informática e outros.
          </p>
          <p>
            6 – Convocação de 1.485 servidores, aprovados em concurso, sendo:
            637 Professores – 450 Trabalhadores Urbanos – 350 Guardas Municipais
            – 17 Analistas de Sistemas – 1 Engenheiro do Trabalho – 30 Agentes
            de Trânsito.
          </p>
          <p>
            7 – Conclusão das obras e implantação da Escola do Servidor, Centro
            Tecnológico e Departamento de Recursos Humanos.
          </p>
          <p>
            8 – Implantação do novo Plano de Carreira dos Profissionais da
            Educação, aumentando os benefícios aos professores, como: Difícil
            Acesso, Adicional de Regência para todas as séries.
          </p>
        </Container>
      );
    default:
      return (
        <Container title="Ops!">
          <h2>Pagina não encontrada</h2>
          <Link href={"/"} className="text-blue-500">
            Voltar a pagina inicial
          </Link>
        </Container>
      );
  }
};
