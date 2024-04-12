import LinkAzul from "@/app/institucional/components/links";
import Container from "@/components/container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Concurso",
  };
}

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
    case "anexos":
      return (
        <Container title="Anexos" className="flex flex-col">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/ANEXO_I_CRONOGRAMA_APARECIDAPREV_2017_RETIFICADO_ATUALIZADO_02_07_18.pdf"
            text="ANEXO_I_CRONOGRAMA_APARECIDAPREV_2017_RETIFICADO_ATUALIZADO_02_07_18"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/ANEXO_II_CARGOS_VAGAS_REQUISITOS_CH_APARECIDAPREV_2017_retificado_n4.pdf"
            text="ANEXO_II_CARGOS_VAGAS_REQUISITOS_CH_APARECIDAPREV_2017_retificado_n4"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/ANEXO_III_LAUDO_MEDICO_APARECIDAPREV_2017.pdf"
            text="ANEXO_III_LAUDO_MEDICO_APARECIDAPREV_2017"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/ANEXO_IV_PROGRAMA_DAS_PROVAS_APARECIDAPREV_2017_retificado_N2.pdf"
            text="ANEXO_IV_PROGRAMA_DAS_PROVAS_APARECIDAPREV_2017_retificado_N2"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/ANEXO_V_DOCUMENTOS_NOMEACAO.pdf"
            text="ANEXO_V_DOCUMENTOS_NOMEACAO"
          />
        </Container>
      );
    case "edital":
      return (
        <Container title="Edital" className="flex flex-col">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/EDITAL_APARECIDAPREV_2017_COMPLEMENTAR_N1.pdf"
            text="EDITAL_APARECIDAPREV_2017_COMPLEMENTAR_N1"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/EDITAL_APARECIDAPREV_2017_COMPLEMENTAR_N2.pdf"
            text="EDITAL_APARECIDAPREV_2017_COMPLEMENTAR_N2"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/EDITAL_APARECIDAPREV_2017_COMPLEMENTAR_N3.pdf"
            text="EDITAL_APARECIDAPREV_2017_COMPLEMENTAR_N3"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/EDITAL_APARECIDAPREV_2017_COMPLEMENTAR_N4.pdf"
            text="EDITAL_APARECIDAPREV_2017_COMPLEMENTAR_N4"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/EDITAL_APARECIDAPREV_2017_Retificado_n5.pdf"
            text="EDITAL_APARECIDAPREV_2017_RETIFICADO_N5"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/EDITAL_APARECIDAPREV_2017_COMPLEMENTAR_N6.pdf"
            text="EDITAL_APARECIDAPREV_2017_COMPLEMENTAR_N6"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/EDITAL_COMPLEMENTAR_N71.pdf"
            text="EDITAL_COMPLEMENTAR_N7(1)"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/EDITAL_APARECIDAPREV_2017_Retificado_n1.pdf"
            text="EDITAL_APARECIDAPREV_2017_Retificado_n1"
          />
        </Container>
      );
    case "editais-de-convocacao":
      const editais = [
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/EDITAL-DE-CONVOCACAO-No-004-2023.pdf",
          posicao: "38°",
          ano: 2023,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/EDITAL-DE-CONVOCACAO-No-003-2023.pdf",
          posicao: "37°",
          ano: 2023,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/EDITAL-DE-CONVOCACAO-No-002-2023.pdf",
          posicao: "36°",
          ano: 2023,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/EDITAL-DE-CONVOCACAO-No-001-2023.pdf",
          posicao: "35°",
          ano: 2023,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-012-2022.pdf",
          posicao: "34°",
          ano: 2022,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-011-2022.pdf",
          posicao: "33°",
          ano: 2022,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-010-2022.pdf",
          posicao: "32°",
          ano: 2022,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-009-2022.pdf",
          posicao: "31°",
          ano: 2022,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-008-2022.pdf",
          posicao: "30°",
          ano: 2022,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-007-2022.pdf",
          posicao: "29°",
          ano: 2022,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-006-2022.pdf",
          posicao: "28°",
          ano: 2022,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-005-2022.pdf",
          posicao: "27°",
          ano: 2022,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-004-2022.pdf",
          posicao: "26°",
          ano: 2022,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-003-2022.pdf",
          posicao: "25°",
          ano: 2022,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-002-2022.pdf",
          posicao: "24°",
          ano: 2022,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-001-2022.pdf",
          posicao: "23°",
          ano: 2022,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-009-2021.pdf",
          posicao: "22°",
          ano: 2021,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-008-2021.pdf",
          posicao: "21°",
          ano: 2021,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-007-2021.pdf",
          posicao: "20°",
          ano: 2021,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-006-2021.pdf",
          posicao: "19°",
          ano: 2021,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-005-2021.pdf",
          posicao: "18°",
          ano: 2021,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-004-2021.pdf",
          posicao: "17°",
          ano: 2021,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-003-2021.pdf",
          posicao: "16°",
          ano: 2021,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-002-2021.pdf",
          posicao: "15°",
          ano: 2021,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-001-2021.pdf",
          posicao: "14°",
          ano: 2021,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-003-2020.pdf",
          posicao: "13°",
          ano: 2020,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-002-2020.pdf",
          posicao: "12°",
          ano: 2020,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-001-2020.pdf",
          posicao: "11°",
          ano: 2020,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-008-2019.pdf",
          posicao: "10°",
          ano: 2019,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-007-2019.pdf",
          posicao: "9°",
          ano: 2019,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-006-2019.pdf",
          posicao: "8°",
          ano: 2019,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-005-2019.pdf",
          posicao: "7°",
          ano: 2019,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-004-2019.pdf",
          posicao: "6°",
          ano: 2019,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-003-2019.pdf",
          posicao: "5°",
          ano: 2019,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-002-2019.pdf",
          posicao: "4°",
          ano: 2019,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-001-2019.pdf",
          posicao: "3°",
          ano: 2019,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-002-2018.pdf",
          posicao: "2°",
          ano: 2018,
        },
        {
          href: "https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/EDITAL-DE-CONVOCACAO-No-001-2018.pdf",
          posicao: "1°",
          ano: 2018,
        },
      ];
      return (
        <Container title="Editais de convocação" className="flex flex-col">
          {editais.map((edital) => (
            <div
              key={edital.posicao}
              className="space-y-2 border-b-[1px] pb-4 dark:border-zinc-800"
            >
              <p>
                {edital.posicao} EDITAL DE CONVOCAÇÃO – {edital.ano}
              </p>
              <div
                className="flex gap-1
              "
              >
                <LinkAzul
                  href={edital.href}
                  text="Clique aqui"
                  className="font-semibold"
                />
                para visualizar o {edital.posicao} Edital de Convocação de
                candidatos aprovados no Concurso Público.
              </div>
            </div>
          ))}
        </Container>
      );
    case "gabaritos":
      return (
        <Container title="Gabaritos" className="flex flex-col">
          <p>
            Nesta página é possível consultar o gabarito referente a prova para
            cada cargo.
          </p>
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/ANALISTA_DE_TECNOLOGIA_DA_INFORMACAO.pdf"
            text="ANALISTA_DE_TECNOLOGIA_DA_INFORMACAO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/ANALISTA_FINANCEIRO.pdf"
            text="ANALISTA_FINANCEIRO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/ANALISTA_PREVIDENCIARIO.pdf"
            text="ANALISTA_PREVIDENCIARIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/ASSISTENTE_ADMINISTRATIVO.pdf"
            text="ASSISTENTE_ADMINISTRATIVO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/AUXILIAR_ADMINISTRATIVO.pdf"
            text="AUXILIAR_ADMINISTRATIVO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/AUXILIAR_DE_SERVICOS_GERAIS.pdf"
            text="AUXILIAR_DE_SERVICOS_GERAIS"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/CONTADOR.pdf"
            text="CONTADOR"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/MEDICO_PERITO_PREVIDENCIARIO.pdf"
            text="MEDICO_PERITO_PREVIDENCIARIO"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/MOTORISTA.pdf"
            text="MOTORISTA"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/TECNICO_PREVIDENCIARIO.pdf"
            text="TECNICO_PREVIDENCIARIO"
          />
        </Container>
      );
    case "resultado-final":
      return (
        <Container title="Resultado final" className="flex flex-col">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/20180815_APPREV2018_Resultado_Final_do_Concurso.pdf"
            text="20180815_APPREV2018_Resultado_Final_do_Concurso"
          />
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/20180815_APPREV2018_Resultado_Final_do_Concurso_PcD.pdf"
            text="20180815_APPREV2018_Resultado_Final_do_Concurso_PcD"
          />
        </Container>
      );
    default:
      return <Container title="404"> Página não encontrada</Container>;
  }
};
