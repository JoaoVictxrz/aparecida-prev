import { LinksPage } from "@/components/Links";
import Title from "@/components/title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ouvidoria",
};

export default function Ouvidoria() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2 dark:text-white">
      <section className="px-2 container">
        <Title title="Ouvidoria" />
        <div className="w-full grid lg:grid-cols-2 items-center container gap-5">
          {/* Formulário */}
          <div>
            <h2>Formulário</h2>
          </div>
          <div>
            <p className="text-sm md:text-xl font-bold">Telefone Geral:</p>{" "}
            <br />
            <p className="text-sm">(62)3545-5934 </p> <br />
            <p className="text-sm md:text-xl font-bold">
              Celular ouvidoria:
            </p>{" "}
            <br />
            <p className="text-sm">(62) 99629-2211 (WhatsApp)</p> <br />
            <p className="text-sm md:text-xl font-bold">
              Telefone Fixo Ouvidoria::
            </p>{" "}
            <br />
            <p className="text-sm">(62) 3983-7080</p> <br />
            <p className="text-sm md:text-xl font-bold">
              Email Ouvidoria:
            </p>{" "}
            <br />
            <p className="text-sm">ouvidoria@aparecidaprev.go.gov.br</p> <br />
          </div>
        </div>
      </section>
    </article>
  );
}
