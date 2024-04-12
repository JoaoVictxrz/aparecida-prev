import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = params.slug;
  return {
    title: title,
  };
}

export default function Page({ params }: Props) {
  return <GeneratePage params={params} />;
}

export const GeneratePage = ({ params }: Props) => {
  switch (params.slug) {
    case "banco-genail":
      return (
        <PaginaSlug nome="banco genail" postadoEm="19 de março de 2024">
          <Image
            src="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/03/download-300x147.png"
            alt=""
            width={300}
            height={147}
          />
        </PaginaSlug>
      );
    case "banco-master":
      return (
        <PaginaSlug nome="banco master" postadoEm="27 de fevereiro de 2024">
          <Image
            src="https://aparecidaprev.go.gov.br/wp-content/uploads/2024/02/Banco-Master-300x76.png"
            alt=""
            width={300}
            height={147}
          />
        </PaginaSlug>
      );
    case "btg-pactual":
      return (
        <PaginaSlug nome="banco pactual" postadoEm="2 de outubro de 2023">
          <Image
            src="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/banco-BTG.png"
            alt=""
            width={300}
            height={147}
          />
        </PaginaSlug>
      );
    case "planner":
      return (
        <PaginaSlug nome="planner" postadoEm="2 de outubro de 2023">
          <Image
            src="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/banco-planner.png"
            alt=""
            width={300}
            height={147}
          />
        </PaginaSlug>
      );
    case "banco-santander":
      return (
        <PaginaSlug nome="banco santander" postadoEm="2 de outubro de 2023">
          <Image
            src="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/banco-sANTANDER.png"
            alt=""
            width={300}
            height={147}
          />
        </PaginaSlug>
      );
    case "xp-investimentos":
      return (
        <PaginaSlug nome="xp investimentos" postadoEm="2 de outubro de 2023">
          <Image
            src="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/INVESTIMENTOS.jpg"
            alt=""
            width={300}
            height={147}
          />
        </PaginaSlug>
      );
    case "banco-bradesco":
      return (
        <PaginaSlug nome="banco bradesco" postadoEm="2 de outubro de 2023">
          <Image
            src="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/banco-BRADESCO.png"
            alt=""
            width={300}
            height={147}
          />
        </PaginaSlug>
      );
    case "banco-safra":
      return (
        <PaginaSlug nome="banco safra" postadoEm="2 de outubro de 2023">
          <Image
            src="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/10/banco-safra.png"
            alt=""
            width={300}
            height={147}
          />
        </PaginaSlug>
      );
    case "banco-itau":
      return (
        <PaginaSlug nome="banco itaú" postadoEm="27 de setembro de 2023">
          <Image
            src="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/09/Banco-Itau.png"
            alt=""
            width={200}
            height={147}
          />
        </PaginaSlug>
      );
    case "banco-do-brasil":
      return (
        <PaginaSlug nome="banco do brasil" postadoEm="17 de fevereiro de 2014">
          <Image
            src="https://aparecidaprev.go.gov.br/wp-content/uploads/2014/02/Banco-Brasil.png"
            alt=""
            width={200}
            height={147}
          />
        </PaginaSlug>
      );
    case "caixa-economica-federal":
      return (
        <PaginaSlug
          nome="caixa economica federal"
          postadoEm="2 de janeiro de 2014"
        >
          <Image
            src="https://aparecidaprev.go.gov.br/wp-content/uploads/2014/01/Caixa.png"
            alt=""
            width={200}
            height={147}
          />
        </PaginaSlug>
      );
    default:
      return (
        <PaginaSlug nome="Página não encontrada" postadoEm="N/A">
          <p>Desculpe, a página que você está procurando não foi encontrada.</p>
        </PaginaSlug>
      );
  }
};

interface props {
  nome: string;
  postadoEm: string;
  children?: React.ReactNode;
}

export const PaginaSlug = ({ nome, postadoEm, children }: props) => {
  return (
    <div className="flex w-full justify-center gap-5 bg-white pb-20 dark:bg-zinc-800 dark:text-zinc-100">
      <div className="container flex-col">
        <p className="pt-10 text-xl font-semibold uppercase md:text-2xl">
          {nome}
        </p>
        <p className="text-lg font-extralight md:text-base">
          Postado em: {postadoEm}
        </p>
        <div className="p-2 pt-4">{children}</div>
      </div>
    </div>
  );
};
