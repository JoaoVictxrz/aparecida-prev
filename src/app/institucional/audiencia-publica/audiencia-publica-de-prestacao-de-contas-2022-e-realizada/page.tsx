import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Audiência Pública de Prestação de Contas 2022 é realizada",
  };
}

export default function Home() {
  return (
    <article className="flex w-full justify-center bg-white pb-2 text-white dark:bg-zinc-900">
      <section className="container flex flex-col items-center px-2 pb-20 pt-10">
        <Image
          src="/audiencia-publica/images.png"
          alt="Imagem"
          width={274}
          height={184}
        />
        <div className="lg:h-[800px lg:w-[800px]">
          <h1 className="pt-4 text-xl font-bold">
            Audiência Pública de Prestação de Contas 2022 é realizada
          </h1>
          <h2 className="pb-2 text-sm font-light">
            Postado em: 25 de julho de 20233
          </h2>
          <p className="py-2">
            No último dia 24/7/2023, no auditório do AparecidaPrev, foi
            realizada a audiência pública conduzida pelo diretor financeiro,
            Khayo Eduardo, Alcir Antônio de Azevedo, atuário (Atuar
            Consultoria), Reiter Ferreira Peixoto (Sete Capital Assessoria) e o
            presidente do AparecidaPrev, Robes Venancio e Silva, no qual teve
            como pauta o Relatório de Governança Corporativa, os resultados da
            Avaliação Atuarial e acompanhamento da Política de Investimento do
            Fundo Previdenciário do AparecidaPrev exercício 2022.
          </p>
          <p className="py-2">
            Essa ação converge com as ações da administração direta, que tem o
            apoio do prefeito Vilmar Mariano, vem em medida para trazer mais
            transparência aos servidores ativos e inativos sobre o que está
            sendo desempenhado no Instituto, além de “oxigenar” novas ideias
            para melhorar os serviços entregues aos nossos beneficiários.
          </p>
          <p className="py-2">
            O papel social do AparecidaPrev é conceder e gerir os benefícios
            previdenciários com qualidade, respeito e responsabilidade, fornecer
            informações e soluções adequadas, bem como atuar na promoção da
            melhoria da qualidade de vida dos beneficiários e servidores.
          </p>
          <p className="py-2">
            O Presidente do AparecidaPrev destacou dois pontos importantes:
          </p>
          <p className="py-2">
            “… essa a prestação de contas é um passo importante dentro da
            gestão, reforçando a conduta da Instituição que tem vistas no
            desenvolvimento da cultura de compliance, de modo que os
            interessados possam acompanhar de forma mais clara as informações
            ...”
          </p>
          <p className="py-2">
            “… é o AparecidaPrev cumprindo seu compromisso público junto aos
            servidores ativos, aposentados, pensionistas e de modo geral com
            toda sociedade.”
          </p>
          <p className="py-2">
            Durante a audiência foram apresentadas as ações desenvolvidas no
            decorrer do ano de 2022 para os beneficiários do AparecidaPrev e
            também dados referentes: Gestão Previdenciária, Avaliação Atuarial
            2022, Gestão Financeira e Orçamentária.
          </p>
          <p className="py-2">
            Participaram também da Audiência Pública as diretoras
            administrativa, jurídica e interina de benefícios, Hellen Cássia,
            Keila Miriam Martins, Juliana Mendanha, respectivamente e os
            servidores do instituto.
          </p>
          <div className="grid place-items-center gap-2 md:grid-cols-2">
            <Image
              src="/audiencia-publica/imagem-1.jpeg"
              alt=""
              width={300}
              height={225}
            />
            <Image
              src="/audiencia-publica/imagem-2.jpeg"
              alt=""
              width={300}
              height={225}
            />
            <Image
              src="/audiencia-publica/imagem-3.jpeg"
              alt=""
              width={300}
              height={225}
            />
            <Image
              src="/audiencia-publica/imagem-4.jpeg"
              alt=""
              width={300}
              height={200}
            />
          </div>
        </div>
      </section>
    </article>
  );
}
