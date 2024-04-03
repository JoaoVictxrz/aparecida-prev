import { LinksPage } from "@/components/Links";
import Noticias from "@/components/noticias";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benefício",
};

export default function Benefício() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] pb-2 ">
          Benefício
        </h1>
        <div className="w-full grid lg:grid-cols-2 items-center container gap-5 pb-20">
          <LinksPage
            href="/beneficio/aposentadoria-por-invalidez"
            text="Aposentadoria por invalidez"
          />
          <LinksPage
            href="/beneficio/aposentadoria-compulsoria"
            text="Aposentadoria Compulsória"
          />
          <LinksPage
            href="/beneficio/aposentadoria-por-idade"
            text="Aposentadoria por idade"
          />
          <LinksPage
            href="/beneficio/pensao-por-morte"
            text="Pensão por morte"
          />
          <LinksPage
            target="_blank"
            href="http://gestaopublica.previdencia.aparecida.bsit-br.com.br/portal/employee-transparency.jsf"
            text="Folha de pagamento"
          />
        </div>
      </section>
    </article>
  );
}
