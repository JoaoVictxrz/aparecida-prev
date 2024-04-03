import { LinksPage } from "@/components/Links";
import Title from "@/components/title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concursos",
};

export default function Concursos() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2">
      <section className="px-2 container">
        <Title title="Concurso Público" />
        <div className="w-full grid lg:grid-cols-2 items-center container gap-5">
          <p>
            Nesta página é possível acompanhar os assuntos em relação à
            realização de concursos públicos promovidos pelo Instituto de
            Previdência de Aparecida de Goiânia.
          </p>{" "}
          <br />
          <li>CONCURSO APARECIDAPREV N° 001/2017</li>
        </div>
      </section>
    </article>
  );
}
