import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Presidência e diretoria executivas",
  };
}

export default function Equipe() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 dark:text-zinc-100 dark:border-zinc-700">
          Presidência e diretoria
        </h1>
        <div className="w-full flex flex-col items-center justify-center container gap-5 pb-20 dark:text-white">
          <h1 className="font-bold text-xl">Gestão 2021 - 2024</h1>
          <Image
            src="/sobre/FOTO-SECRETARIO-APARECIDAPREV-FOTOS-MICHEL-ABDALLAH.jpg"
            alt="Gestão 2021 - 2024"
            width={188}
            height={250}
          />
          <TextEquipe nome="Robes Venancio e Silva" cargo="Presidente" />
          <TextEquipe
            nome="Hellen Cássia Macêdo Silva"
            cargo="Diretora Administrativa"
          />
          <TextEquipe
            nome="Jorge Luiz Marreiros Saldanha"
            cargo="Diretor de Benefícios"
          />
          <TextEquipe
            nome="Khayo Eduardo Pires de Oliveira"
            cargo="Diretor Financeiro"
          />
          <TextEquipe
            nome="Keila Mirian Afonso Martins Pereira"
            cargo="Diretora Jurídica"
          />
        </div>
      </section>
    </article>
  );
}

export const TextEquipe = ({ nome, cargo }: any) => {
  return (
    <div className="flex flex-col text-center">
      <h2 className="text-xl font-semibold">{nome}</h2>
      <p className="text-lg font-light">{cargo}</p>
    </div>
  );
};
