import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Membros dos conselhos",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] dark:border-zinc-800 dark:text-zinc-100 pb-2 ">
          Membros dos conselhos
        </h1>
        <div className="w-full container gap-5 pb-20">
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
        </div>
      </section>
    </article>
  );
}
