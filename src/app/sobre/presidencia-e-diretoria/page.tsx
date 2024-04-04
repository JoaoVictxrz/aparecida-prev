import Container from "@/components/container";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Presidência e diretoria executivas",
  };
}

export default function Equipe() {
  return (
    <Container
      title="Presidência e diretoria executivas"
      className="flex items-center justify-center flex-col"
    >
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
    </Container>
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
