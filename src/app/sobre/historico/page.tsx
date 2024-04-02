import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Histórico",
  };
}

export default function Historico() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 dark:text-zinc-100 dark:border-zinc-700">
          Histórico
        </h1>
        <div className="w-full flex flex-col container gap-5 pb-20 dark:text-white">
          <span className="font-semibold text-xl uppercase">APRESENTAÇÃO</span>
          <p>
            O Fundo de Previdência dos Servidores do Município de Aparecida de
            Goiânia - APARECIDAPREV, autarquia municipal, com personalidade
            jurídica de direito público interno, criada em 20 de junho de 2005,
            pela Lei Complementar nº 010, tem como função à gestão
            administrativa, jurídica e financeira do Regime Próprio de
            Previdência Social de Aparecida de Goiânia, cujo objetivo é
            assegurar aos servidores titulares de cargos efetivos, meios de
            subsistência nos eventos de invalidez, doença, acidente em serviço,
            idade avançada, reclusão e morte; e proteção à maternidade e à
            família. Por decisão política e principalmente ante a exigência da
            Lei, o Fundo de Previdência dos Servidores do Município de Aparecida
            de Goiânia, criado pela Lei Municipal nº 1.246/93 e atualizado o seu
            teor legal pelas Leis Complementar 001/01, 007/02, 009/04, 010/05,
            011/05, 014/06, 019/09 e 022/09 torna-se realidade ao montar uma
            sede administrativa, com toda a infra-estrutura necessária ao
            desempenho de sua missão institucional, ancorada no art. 2º, incisos
            I e II, do diploma legal. Montada a estrutura administrativa,
            inicia-se, a partir de fevereiro de 2005, o pagamento dos benefícios
            previstos na Lei Complementar 007/02, quais sejam: aposentadoria e
            pensão por morte. A partir de junho, com a publicação da Lei
            Complementar nº 010, de 20 de junho de 2005, que fez adequação da
            Lei Municipal as regras da EC/41, fez-se inclusão de novos
            benefícios previdenciários, ao prever as seguintes prestações:
            salário-família, auxílio-doença, salário-maternidade e
            auxílio-reclusão. Assegurando, aos servidores titulares de cargos
            efetivos e a seus dependentes, na forma da lei, os seus direitos,
            com a publicação da Lei 011/05 adequando a Emenda Constitucional
            nº47/05, em seguida com a Lei 014/06 que altera o Plano de Custeio
            do Fundo de Previdência, e a Lei 019/09 que altera o § 1º, do Art.
            71, da Lei Complementar nº010/05, e por último a Lei 022/09 que
            altera o plano de Custeio do Fundo de Previdência, onde esta
            cumprindo a sua missão institucional, apresentando os números,
            gráficos e dados estatísticos, da Diretoria Financeira e Diretoria
            de Benefícios, expostos a seguir, que comprovam a eficácia na
            prestação do serviço ancorado na Lei.
          </p>
          <span className="font-semibold text-xl uppercase">
            DOS PRINCÍPIOS
          </span>
          <p>
            Os princípios e objetivos que nortearão o sistema de previdência
            são: - Cobertura exclusiva de servidores titulares de cargos
            efetivos; - Caráter contributivo e solidário; - Observância de
            critérios que preservem o equilíbrio financeiro e atuarial; -
            Unicidade de regime e de unidade gestora no âmbito do Município de
            Aparecida de Goiânia; e Administração democrática e descentralizada.
          </p>
          <span className="font-semibold text-xl">O Futuro </span>
          <p>
            Para nosso futuro, pretendemos nos tornar um Instituto de
            Previdência referencia no País pela qualidade dos serviços que
            prestamos, realizando sempre um trabalho de maneira eficiente e
            eficaz; seguro e responsável; respeitando nossos segurados, a nossa
            equipe e o interesse público.
          </p>
        </div>
      </section>
    </article>
  );
}
