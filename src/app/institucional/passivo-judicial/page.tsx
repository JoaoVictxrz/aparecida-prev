import { Metadata } from "next";
import LinkAzul from "../components/links";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Passivo Judicial",
  };
}

export default function Home() {
  return (
    <article className="w-full flex justify-center bg-white dark:bg-zinc-900 dark:text-white pb-2">
      <section className="px-2 container">
        <h1 className="font-bold uppercase text-lg md:text-2xl my-8 border-b-[1px] dark:border-zinc-800 dark:text-zinc-100 pb-2 ">
          Passivo Judicial
        </h1>
        <div className="w-full container gap-5 pb-20 pl-5">
          <LinkAzul
            href="https://aparecidaprev.go.gov.br/wp-content/uploads/2023/05/RELATORIO-DE-PASSIVO-JUDICIAL-2022-E-2023.pdf"
            text="Relatório Passivo Judicial – 2022 E 2023"
          />
        </div>
      </section>
    </article>
  );
}
