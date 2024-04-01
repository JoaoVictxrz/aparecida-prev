import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Valores",
  };
}

export default function Valores() {
  return (
    <article className="w-full flex justify-center bg-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 ">
          Valores
        </h1>
        <div className="w-full flex flex-col container gap-5 pb-20">
          <p className="md:text-xl">
            <span className="font-bold">Respeito Pelo Indivíduo</span> –
            Respeitamos a dignidade de cada pessoa dentro e fora da organização.
          </p>
          <p className="md:text-xl">
            <span className="font-bold">Transparência</span> – Valorizamos a
            transparência na gestão administrativa e financeira do
            Aparecidaprev.
          </p>
          <p className="md:text-xl">
            <span className="font-bold">Criatividade</span> – Apoiamos a
            criatividade de nossa equipe na resolução de nossos principais
            desafios.
          </p>
          <p className="md:text-xl">
            <span className="font-bold">Solidariedade</span> – Valorizamos a
            relação solidária entre os integrantes da equipe.
          </p>
        </div>
      </section>
    </article>
  );
}
