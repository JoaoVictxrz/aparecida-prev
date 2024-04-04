import Container from "@/components/container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Membros dos conselhos",
  };
}

export default function Home() {
  return (
    <Container title="Membros dos conselhos">
      <div className="flex flex-col gap-2">
        <strong className="font-bold underline uppercase">
          CONSELHO MUNICIPAL DE PREVIDÊNCIA
        </strong>
        <h2 className="font-bold dark:text-zinc-200">TITULARES</h2>
        <div className="flex flex-col">
          <p className="font-light">Delson Vieira dos Santos</p>
          <p className="font-light">Leandro Júnior Maurilio da Silva</p>
          <p className="font-light">Einstein Almeida Ferreira Paniago</p>
          <p className="font-light">Ereni de Araujo Almeida</p>
          <p className="font-light">Joaci Barbosa de Almeida</p>
          <p className="font-light">Julio Cesar Chagas Mendes</p>
          <p className="font-light">Hellen Cassia Macedo Silva</p>
          <p className="font-light">Maria Marta da Silva de Carvalho</p>
          <p className="font-light">Marise Ramos de Morais</p>
          <p className="font-light">Mauro Cesar Reges da Silva</p>
          <p className="font-light">Renato Marcos da Silva</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-4">
        <strong className="font-bold underline uppercase">
          CONSELHO FISCAL
        </strong>
        <h2 className="font-bold dark:text-zinc-200">TITULARES</h2>
        <div className="flex flex-col">
          <p className="font-light">Alzeni Cardoso Cirqueira</p>
          <p className="font-light">Jean Jacques Martins Bastos</p>
          <p className="font-light">Kamila Ferreira Carcute</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-4">
        <strong className="font-bold underline uppercase">
          COMITÊ DE INVESTIMENTOS
        </strong>
        <div className="flex flex-col">
          <p className="font-light">Cristiano Curado Abrantes Caetano</p>
          <p className="font-light">Einstein Almeida Ferreira Paniago</p>
          <p className="font-light">Julio Cesar Chagas Mendes</p>
          <p className="font-light">Khayo Eduardo Pires de Oliveira</p>
          <p className="font-light">Márcio Gomes Costa</p>
        </div>
      </div>
    </Container>
  );
}
