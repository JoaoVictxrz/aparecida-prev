import { Metadata } from "next";
import LinkAzul from "../components/links";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Prova anual de vida",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] dark:border-zinc-800 dark:text-zinc-100 pb-2 ">
          Prova anual de vida
        </h1>
        <div className="w-full container gap-5 pb-20">
          <div className="flex flex-col pl-5">
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/07/DECRETO-N-620-DE-22-DE-AGOSTO-2022.pdf"
              text="Decreto “N” N° 620 de 22 de agosto de 2022"
            />
            <LinkAzul
              href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/08/Portaria-N%C2%B0-275-de-29-de-julho-de-2022.pdf"
              text="Portaria N° 275, de 29 de julho de 2022"
            />
          </div>
        </div>
      </section>
    </article>
  );
}
